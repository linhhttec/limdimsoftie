// GET /api/img/<key> — phục vụ ảnh shop tự upload (lưu trong Netlify Blobs)
import { imageStore } from "../lib/common.mjs";

export default async (req) => {
  const key = new URL(req.url).pathname.replace(/^\/api\/img\//, "");
  if (!/^[a-z0-9-]{6,80}\.(jpg|png|webp)$/.test(key)) return new Response("Not found", { status: 404 });
  try {
    const hit = await imageStore().getWithMetadata(key, { type: "arrayBuffer" });
    if (!hit) return new Response("Not found", { status: 404 });
    return new Response(hit.data, {
      headers: {
        "Content-Type": (hit.metadata && hit.metadata.contentType) || "image/jpeg",
        // tên file là duy nhất cho mỗi lần upload nên cache vĩnh viễn được
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (e) {
    console.error("img error", e);
    return new Response("Error", { status: 500 });
  }
};

export const config = { path: "/api/img/*" };
