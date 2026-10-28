// /api/admin/* — API cho trang quản trị (cần đăng nhập)
//   POST   /api/admin/login      {password}                    -> {token}
//   GET    /api/admin/catalog                                  -> {products, seeded, updatedAt}
//   PUT    /api/admin/product    {...sản phẩm}                 -> thêm mới / cập nhật
//   DELETE /api/admin/product?id=...                           -> xoá
//   POST   /api/admin/toggle     {id, scope, key, soldOut}     -> bật/tắt HẾT HÀNG nhanh
//   POST   /api/admin/reorder    {ids:[...]}                   -> sắp xếp
//   POST   /api/admin/upload     (body = file ảnh)             -> {url}
import {
  json, isAuthed, checkPassword, signToken, loadCatalog, saveCatalog,
  sanitizeProduct, imageStore, sniffImage,
} from "../lib/common.mjs";
import { randomBytes } from "node:crypto";

const MAX_IMG = 4.5 * 1024 * 1024;
let fails = 0, failAt = 0; // chống dò mật khẩu (theo từng instance)

export default async (req) => {
  const url = new URL(req.url);
  const route = url.pathname.replace(/^\/api\/admin\/?/, "").replace(/\/$/, "");

  try {
    if (route === "login" && req.method === "POST") {
      if (!process.env.ADMIN_PASSWORD) return json({ error: "Chưa cài ADMIN_PASSWORD trên Netlify" }, 500);
      if (Date.now() - failAt > 10 * 60 * 1000) fails = 0;
      if (fails >= 8) return json({ error: "Nhập sai quá nhiều lần, thử lại sau 10 phút" }, 429);
      const body = await req.json().catch(() => ({}));
      if (!checkPassword(body.password)) {
        fails++; failAt = Date.now();
        await new Promise((r) => setTimeout(r, 700));
        return json({ error: "Sai mật khẩu" }, 401);
      }
      fails = 0;
      return json({ token: signToken(14) });
    }

    if (!isAuthed(req)) return json({ error: "unauthorized" }, 401);

    if (route === "catalog" && req.method === "GET") {
      const cat = await loadCatalog(req);
      return json({ products: cat.products, seeded: cat.seeded, updatedAt: cat.updatedAt });
    }

    if (route === "product" && req.method === "PUT") {
      const input = await req.json();
      const cat = await loadCatalog(req);
      const ids = cat.products.map((p) => p.id);
      const clean = sanitizeProduct(input, ids);
      const i = cat.products.findIndex((p) => p.id === clean.id);
      if (i >= 0) cat.products[i] = clean; else cat.products.push(clean);
      const saved = await saveCatalog(cat);
      return json({ ok: true, product: clean, updatedAt: saved.updatedAt });
    }

    if (route === "product" && req.method === "DELETE") {
      const id = url.searchParams.get("id");
      const cat = await loadCatalog(req);
      const n = cat.products.length;
      cat.products = cat.products.filter((p) => p.id !== id);
      if (cat.products.length === n) return json({ error: "Không tìm thấy sản phẩm" }, 404);
      const saved = await saveCatalog(cat);
      return json({ ok: true, updatedAt: saved.updatedAt });
    }

    if (route === "toggle" && req.method === "POST") {
      const { id, scope, key, soldOut } = await req.json();
      const cat = await loadCatalog(req);
      const p = cat.products.find((x) => x.id === id);
      if (!p) return json({ error: "Không tìm thấy sản phẩm" }, 404);
      const v = soldOut === true;
      if (scope === "product") p.soldOut = v;
      else if (scope === "size") {
        if (key !== "M" && key !== "L") return json({ error: "Size không hợp lệ" }, 400);
        const set = new Set(p.soldOutSizes || []);
        v ? set.add(key) : set.delete(key);
        p.soldOutSizes = [...set];
      } else if (scope === "color") {
        const c = (p.colors || []).find((x) => x.key === key);
        if (!c) return json({ error: "Không tìm thấy màu" }, 404);
        c.soldOut = v;
      } else return json({ error: "scope không hợp lệ" }, 400);
      const saved = await saveCatalog(cat);
      return json({ ok: true, product: p, updatedAt: saved.updatedAt });
    }

    if (route === "reorder" && req.method === "POST") {
      const { ids } = await req.json();
      if (!Array.isArray(ids)) return json({ error: "ids không hợp lệ" }, 400);
      const cat = await loadCatalog(req);
      const byId = new Map(cat.products.map((p) => [p.id, p]));
      const out = ids.filter((i) => byId.has(i)).map((i) => byId.get(i));
      for (const p of cat.products) if (!ids.includes(p.id)) out.push(p);
      cat.products = out;
      const saved = await saveCatalog(cat);
      return json({ ok: true, updatedAt: saved.updatedAt });
    }

    if (route === "upload" && req.method === "POST") {
      const buf = await req.arrayBuffer();
      if (!buf.byteLength) return json({ error: "File rỗng" }, 400);
      if (buf.byteLength > MAX_IMG) return json({ error: "Ảnh quá lớn (tối đa 4.5MB)" }, 413);
      const kind = sniffImage(buf);
      if (!kind) return json({ error: "Chỉ nhận ảnh JPG, PNG hoặc WebP" }, 415);
      const key = Date.now().toString(36) + "-" + randomBytes(5).toString("hex") + "." + kind.ext;
      await imageStore().set(key, buf, { metadata: { contentType: kind.type } });
      return json({ ok: true, url: "/api/img/" + key });
    }

    return json({ error: "not_found" }, 404);
  } catch (e) {
    console.error("admin error", route, e);
    return json({ error: e && e.message ? e.message : "Lỗi máy chủ" }, 400);
  }
};

export const config = { path: "/api/admin/*" };
