// GET /api/catalog — danh mục sản phẩm + trạng thái còn hàng/hết hàng (public)
import { loadCatalog, json } from "../lib/common.mjs";

export default async (req) => {
  if (req.method !== "GET") return json({ error: "Method not allowed" }, 405);
  try {
    const cat = await loadCatalog(req);
    return json(
      { updatedAt: cat.updatedAt, products: cat.products },
      200,
      { "Cache-Control": "public, max-age=10" }
    );
  } catch (e) {
    console.error("catalog error", e);
    return json({ error: "catalog_unavailable" }, 503);
  }
};

export const config = { path: "/api/catalog" };
