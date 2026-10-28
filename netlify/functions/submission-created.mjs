// Tự chạy mỗi khi có đơn mới gửi qua form "don-hang" (Netlify Forms -> submission-created).
// Gửi email xác nhận đơn hàng tới khách (ô Email) và bản sao cho shop (SHOP_EMAIL).
//
// Biến môi trường (Netlify > Site configuration > Environment variables):
//   BREVO_API_KEY  (khuyên dùng, miễn phí 300 mail/ngày, không cần tên miền riêng)  hoặc  RESEND_API_KEY
//   MAIL_FROM      email người gửi đã xác minh (vd: limdim.softie@gmail.com)
//   MAIL_FROM_NAME (tuỳ chọn) mặc định "Limdim Softie"
//   SHOP_EMAIL     (tuỳ chọn) email nhận bản sao đơn mới; mặc định = MAIL_FROM
//   BANK_INFO      (tuỳ chọn) thông tin chuyển khoản in trong email, vd "Vietcombank · 0123456789 · NGUYEN THI A"
//   IG_HANDLE      (tuỳ chọn) mặc định "limdim.softie"
import { connectLambda, getStore } from "@netlify/blobs";
import { createHash } from "node:crypto";

const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const nl2br = (s) => esc(s).replace(/\n/g, "<br>");
const MAX_PER_DAY = 5;

export const handler = async (event) => {
  try {
    const { payload } = JSON.parse(event.body || "{}");
    if (!payload || payload.form_name !== "don-hang") return { statusCode: 200, body: "skip" };
    const d = payload.data || {};
    const email = String(d.email || "").trim();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      console.warn("Đơn không có email hợp lệ:", d.order_code);
      return { statusCode: 200, body: "no-email" };
    }

    const cfg = {
      brevo: process.env.BREVO_API_KEY,
      resend: process.env.RESEND_API_KEY,
      from: process.env.MAIL_FROM,
      fromName: process.env.MAIL_FROM_NAME || "Limdim Softie",
      shop: process.env.SHOP_EMAIL || process.env.MAIL_FROM,
      bank: process.env.BANK_INFO || "",
      ig: process.env.IG_HANDLE || "limdim.softie",
    };
    if (!(cfg.brevo || cfg.resend) || !cfg.from) {
      console.warn("Chưa cấu hình gửi mail (BREVO_API_KEY / RESEND_API_KEY và MAIL_FROM).");
      return { statusCode: 200, body: "mail-not-configured" };
    }

    // Chống lạm dụng: mỗi email nhận tối đa MAX_PER_DAY thư xác nhận / ngày
    let allowed = true;
    try {
      connectLambda(event);
      const store = getStore({ name: "mail-limits", consistency: "strong" });
      const day = new Date().toISOString().slice(0, 10);
      const key = createHash("sha1").update(email.toLowerCase()).digest("hex") + "-" + day;
      const n = Number(await store.get(key)) || 0;
      if (n >= MAX_PER_DAY) allowed = false;
      else await store.set(key, String(n + 1));
    } catch (e) {
      console.warn("rate-limit store lỗi, bỏ qua:", e && e.message);
    }

    const order = parseOrder(d);
    const jobs = [];
    if (allowed) {
      jobs.push(sendMail(cfg, {
        to: email, toName: order.name,
        subject: `Limdim xác nhận đơn hàng ${order.code} ♡`,
        html: customerHtml(order, cfg), text: customerText(order, cfg),
        replyTo: cfg.shop,
      }));
    }
    if (cfg.shop) {
      jobs.push(sendMail(cfg, {
        to: cfg.shop, toName: "Limdim",
        subject: `[Đơn mới] ${order.code} · ${order.name} · ${order.total}`,
        html: shopHtml(order), text: shopText(order),
        replyTo: email,
      }));
    }
    const res = await Promise.allSettled(jobs);
    res.forEach((r) => r.status === "rejected" && console.error("Gửi mail lỗi:", r.reason && r.reason.message));
    return { statusCode: 200, body: "done" };
  } catch (e) {
    console.error("submission-created lỗi:", e);
    return { statusCode: 200, body: "error" }; // không để Netlify báo lỗi form
  }
};

/* ---------------- parse dữ liệu đơn ---------------- */
function parseOrder(d) {
  const items = String(d.products || "").split("\n").map((l) => l.trim()).filter(Boolean).map((l) => {
    const m = l.match(/^(.*) x(\d+) = (.+)$/);
    return m ? { name: m[1], qty: m[2], total: m[3] } : { name: l, qty: "", total: "" };
  });
  return {
    code: d.order_code || "", name: d.name || "bạn", phone: d.phone || "", email: d.email || "",
    address: d.address || "", note: d.note || "", payment: d.payment || "",
    subtotal: d.subtotal || "", shipping: d.shipping || "", total: d.total || "", payNow: d.pay_now || "",
    items,
  };
}

/* ---------------- nội dung email ---------------- */
function customerHtml(o, cfg) {
  const rows = o.items.map((i) => `
    <tr><td style="padding:10px 0;border-bottom:1px dashed #cdb9bd;color:#4a2c33">${esc(i.name)}${i.qty ? ` <span style="color:#8c6c72">× ${esc(i.qty)}</span>` : ""}</td>
    <td style="padding:10px 0;border-bottom:1px dashed #cdb9bd;text-align:right;color:#4a2c33;white-space:nowrap">${esc(i.total)}</td></tr>`).join("");
  const bank = cfg.bank
    ? `<p style="margin:0 0 6px"><b>Thông tin chuyển khoản:</b><br>${nl2br(cfg.bank)}<br>Nội dung CK: <b>${esc(o.code)}</b></p>`
    : `<p style="margin:0 0 6px">Shop sẽ nhắn thông tin chuyển khoản khi xác nhận đơn với nàng nha.</p>`;
  return `<!doctype html><html lang="vi"><body style="margin:0;background:#f4f2e6;padding:24px 12px;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#6b4a50;line-height:1.6">
<div style="max-width:560px;margin:0 auto;background:#fffdfa;border-radius:24px;overflow:hidden;border:1px solid #efe3dc">
  <div style="background:#e8a3b1;padding:26px 28px;text-align:center">
    <div style="font-family:Georgia,'Times New Roman',serif;font-size:30px;color:#4a2c33;letter-spacing:-.01em">limdim.softie</div>
    <div style="font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:#4a2c33;opacity:.8;margin-top:2px">handmade · vải hoa · cói</div>
  </div>
  <div style="padding:28px">
    <h1 style="margin:0 0 8px;font-family:Georgia,'Times New Roman',serif;font-weight:400;font-size:28px;color:#4a2c33">Đặt hàng thành công!</h1>
    <p style="margin:0 0 18px">Chào <b>${esc(o.name)}</b>, Limdim đã nhận được đơn của nàng rồi nè ♡ Shop sẽ nhắn lại để chốt đơn trong vòng 48h nha.</p>
    <div style="background:#f9f1ee;border-radius:16px;padding:14px 18px;margin-bottom:18px">
      <div style="font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#8c6c72">Mã đơn hàng</div>
      <div style="font-size:22px;font-weight:600;color:#4a2c33;letter-spacing:.04em">${esc(o.code)}</div>
    </div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="font-size:15px">${rows}
      <tr><td style="padding:8px 0;color:#8c6c72">Tạm tính</td><td style="padding:8px 0;text-align:right">${esc(o.subtotal)}</td></tr>
      <tr><td style="padding:0 0 8px;color:#8c6c72">Phí ship</td><td style="padding:0 0 8px;text-align:right">${esc(o.shipping)}</td></tr>
      <tr><td style="padding:10px 0;border-top:2px solid #4a2c33;font-weight:600;color:#4a2c33">Tổng cộng</td><td style="padding:10px 0;border-top:2px solid #4a2c33;text-align:right;font-weight:600;color:#4a2c33">${esc(o.total)}</td></tr>
    </table>
    <div style="margin-top:18px;font-size:14.5px">
      <p style="margin:0 0 6px"><b>Thanh toán:</b> ${esc(o.payment)}${o.payNow ? `<br><span style="color:#8c6c72">${esc(o.payNow)}</span>` : ""}</p>
      ${bank}
      <p style="margin:12px 0 6px"><b>Người nhận:</b> ${esc(o.name)} · ${esc(o.phone)}<br><b>Địa chỉ:</b> ${nl2br(o.address)}</p>
      ${o.note ? `<p style="margin:0 0 6px"><b>Ghi chú:</b> ${nl2br(o.note)}</p>` : ""}
    </div>
    <p style="margin:22px 0 0;font-size:14px">Cần chỉnh sửa đơn? Nhắn Limdim trên Instagram
      <a href="https://www.instagram.com/${esc(cfg.ig)}" style="color:#4a2c33;font-weight:600">@${esc(cfg.ig)}</a> hoặc trả lời thẳng email này nhé.</p>
  </div>
  <div style="padding:16px 28px 24px;text-align:center;font-size:12px;color:#8c6c72">Cảm ơn nàng đã chọn túi nhà Limdim ♡</div>
</div></body></html>`;
}

function customerText(o, cfg) {
  return [
    `Đặt hàng thành công! Mã đơn: ${o.code}`,
    `Chào ${o.name}, Limdim đã nhận được đơn của nàng. Shop sẽ nhắn lại để chốt đơn trong 48h nha.`,
    "", ...o.items.map((i) => `- ${i.name}${i.qty ? " x" + i.qty : ""} ${i.total}`),
    `Tạm tính: ${o.subtotal}`, `Phí ship: ${o.shipping}`, `Tổng cộng: ${o.total}`,
    `Thanh toán: ${o.payment}${o.payNow ? " (" + o.payNow + ")" : ""}`,
    cfg.bank ? `Chuyển khoản: ${cfg.bank} · Nội dung: ${o.code}` : "Shop sẽ gửi thông tin chuyển khoản khi xác nhận.",
    `Giao tới: ${o.name} · ${o.phone} · ${o.address}`,
    o.note ? `Ghi chú: ${o.note}` : "",
    `Instagram: https://www.instagram.com/${cfg.ig}`,
  ].filter((x) => x !== "").join("\n");
}

function shopHtml(o) {
  const li = o.items.map((i) => `<li>${esc(i.name)} ${i.qty ? "× " + esc(i.qty) : ""} — ${esc(i.total)}</li>`).join("");
  return `<div style="font-family:Segoe UI,Arial,sans-serif;font-size:15px;color:#333">
<h2 style="margin:0 0 8px">Đơn mới ${esc(o.code)}</h2>
<p><b>${esc(o.name)}</b> · ${esc(o.phone)} · <a href="mailto:${esc(o.email)}">${esc(o.email)}</a><br>${nl2br(o.address)}</p>
<ul>${li}</ul>
<p>Tạm tính ${esc(o.subtotal)} · Ship ${esc(o.shipping)} · <b>Tổng ${esc(o.total)}</b><br>Thanh toán: ${esc(o.payment)} (${esc(o.payNow)})</p>
${o.note ? `<p>Ghi chú: ${nl2br(o.note)}</p>` : ""}
<p style="color:#888;font-size:12px">Bấm "Trả lời" để nhắn thẳng cho khách.</p></div>`;
}
function shopText(o) {
  return [`Đơn mới ${o.code}`, `${o.name} · ${o.phone} · ${o.email}`, o.address, "",
    ...o.items.map((i) => `- ${i.name} ${i.qty ? "x" + i.qty : ""} ${i.total}`),
    `Tổng ${o.total} (${o.payment}; ${o.payNow})`, o.note ? "Ghi chú: " + o.note : ""].join("\n");
}

/* ---------------- gửi mail qua Brevo / Resend ---------------- */
async function sendMail(cfg, m) {
  if (cfg.brevo) {
    const r = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: { "api-key": cfg.brevo, "content-type": "application/json", accept: "application/json" },
      body: JSON.stringify({
        sender: { name: cfg.fromName, email: cfg.from },
        to: [{ email: m.to, name: m.toName || undefined }],
        replyTo: m.replyTo ? { email: m.replyTo } : undefined,
        subject: m.subject, htmlContent: m.html, textContent: m.text,
      }),
    });
    if (!r.ok) throw new Error("Brevo " + r.status + " " + (await r.text()).slice(0, 300));
    return;
  }
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: "Bearer " + cfg.resend, "content-type": "application/json" },
    body: JSON.stringify({
      from: `${cfg.fromName} <${cfg.from}>`, to: [m.to], reply_to: m.replyTo || undefined,
      subject: m.subject, html: m.html, text: m.text,
    }),
  });
  if (!r.ok) throw new Error("Resend " + r.status + " " + (await r.text()).slice(0, 300));
}
