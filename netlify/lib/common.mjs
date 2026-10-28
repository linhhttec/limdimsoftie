// Dùng chung cho các Netlify Functions của limdim.softie
import { getStore } from "@netlify/blobs";
import { createHmac, timingSafeEqual, createHash, randomBytes } from "node:crypto";

export const CATALOG_KEY = "current";
export const CATS = ["C", "T", "B", "S"];

export const catalogStore = () => getStore({ name: "catalog", consistency: "strong" });
export const imageStore = () => getStore({ name: "product-images", consistency: "strong" });

export const json = (data, status = 200, headers = {}) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store", ...headers },
  });

/* ---------------- Catalog storage ---------------- */

/** Đọc danh mục. Chưa lưu lần nào -> lấy bản gốc /catalog-seed.json trên chính site. */
export async function loadCatalog(req) {
  const stored = await catalogStore().get(CATALOG_KEY, { type: "json" });
  if (stored && Array.isArray(stored.products)) return { ...stored, seeded: false };
  const r = await fetch(new URL("/catalog-seed.json", req.url));
  if (!r.ok) throw new Error("Không đọc được catalog-seed.json (" + r.status + ")");
  const seed = await r.json();
  return { version: 1, updatedAt: null, products: seed.products, seeded: true };
}

export async function saveCatalog(cat) {
  const data = { version: 1, updatedAt: new Date().toISOString(), products: cat.products };
  await catalogStore().setJSON(CATALOG_KEY, data);
  return data;
}

/* ---------------- Auth (mật khẩu admin + token ký HMAC) ---------------- */

const secret = () => process.env.ADMIN_SECRET || ("ld::" + (process.env.ADMIN_PASSWORD || ""));
const sha = (s) => createHash("sha256").update(String(s)).digest();
const b64u = (buf) => Buffer.from(buf).toString("base64url");

export function checkPassword(pw) {
  const real = process.env.ADMIN_PASSWORD;
  if (!real || typeof pw !== "string") return false;
  return timingSafeEqual(sha(pw), sha(real));
}

export function signToken(days = 14) {
  const payload = b64u(JSON.stringify({ exp: Date.now() + days * 864e5, n: randomBytes(6).toString("hex") }));
  const sig = b64u(createHmac("sha256", secret()).update(payload).digest());
  return payload + "." + sig;
}

export function verifyToken(token) {
  try {
    if (!process.env.ADMIN_PASSWORD || !token) return false;
    const [payload, sig] = String(token).split(".");
    if (!payload || !sig) return false;
    const good = b64u(createHmac("sha256", secret()).update(payload).digest());
    const a = Buffer.from(sig), b = Buffer.from(good);
    if (a.length !== b.length || !timingSafeEqual(a, b)) return false;
    return JSON.parse(Buffer.from(payload, "base64url").toString()).exp > Date.now();
  } catch {
    return false;
  }
}

export function isAuthed(req) {
  const h = req.headers.get("authorization") || "";
  return verifyToken(h.replace(/^Bearer\s+/i, ""));
}

/* ---------------- Validate / làm sạch dữ liệu sản phẩm ---------------- */

export const slug = (s) =>
  String(s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);

const str = (v, max) => String(v == null ? "" : v).trim().slice(0, max);
const bool = (v) => v === true || v === "true" || v === 1;
const imgUrl = (v) => {
  const s = str(v, 400);
  if (!s) return "";
  if (/^(https:\/\/|\/api\/img\/|\/?images\/)/.test(s)) return s;
  return "";
};
const money = (v) => {
  if (v === null || v === undefined || v === "") return null;
  const n = Number(v);
  return Number.isFinite(n) && n >= 0 && n <= 100000 ? Math.round(n * 100) / 100 : null;
};

export function sanitizeProduct(input, existingIds = []) {
  const name = str(input.name, 80);
  if (!name) throw new Error("Thiếu tên sản phẩm");
  const cat = CATS.includes(input.cat) ? input.cat : null;
  if (!cat) throw new Error("Nhóm sản phẩm không hợp lệ");

  let id = slug(input.id) || slug(name) || "sp";
  if (!input.id) {
    let n = 2, base = id;
    while (existingIds.includes(id)) id = base + "-" + n++;
  }

  const prices = Array.isArray(input.prices) && input.prices.length === 2 ? input.prices.map(money) : null;
  const hasPrices = prices && prices.every((x) => x !== null);
  const usedKeys = new Set();
  const colors = (Array.isArray(input.colors) ? input.colors : []).slice(0, 12).flatMap((c) => {
    const vi = str(c && c.vi, 30);
    if (!vi) return [];
    let key = slug(c.key) || slug(vi) || "mau";
    let base = key, n = 2;
    while (usedKeys.has(key)) key = base + "-" + n++;
    usedKeys.add(key);
    return [{
      key, vi, en: str(c.en, 30) || vi,
      hex: /^#[0-9a-fA-F]{6}$/.test(c.hex || "") ? c.hex : "#dddddd",
      image: imgUrl(c.image), soldOut: bool(c.soldOut),
    }];
  });

  return {
    id,
    name,
    cat,
    image: imgUrl(input.image),
    images: (Array.isArray(input.images) ? input.images : []).slice(0, 8).map(imgUrl).filter(Boolean),
    price: hasPrices ? null : money(input.price),
    prices: hasPrices ? prices : null,
    descVi: str(input.descVi, 300),
    descEn: str(input.descEn, 300),
    specVi: str(input.specVi, 300),
    specEn: str(input.specEn, 300),
    soldOut: bool(input.soldOut),
    soldOutSizes: (Array.isArray(input.soldOutSizes) ? input.soldOutSizes : []).filter((s) => s === "M" || s === "L"),
    colors,
    hidden: bool(input.hidden),
  };
}

/* ---------------- Ảnh ---------------- */

export function sniffImage(buf) {
  const u = new Uint8Array(buf.slice(0, 12));
  if (u[0] === 0xff && u[1] === 0xd8 && u[2] === 0xff) return { ext: "jpg", type: "image/jpeg" };
  if (u[0] === 0x89 && u[1] === 0x50 && u[2] === 0x4e && u[3] === 0x47) return { ext: "png", type: "image/png" };
  if (u[0] === 0x52 && u[1] === 0x49 && u[2] === 0x46 && u[3] === 0x46 && u[8] === 0x57 && u[9] === 0x45) return { ext: "webp", type: "image/webp" };
  return null;
}
