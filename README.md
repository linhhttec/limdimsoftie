# limdim.softie: shop + trang admin (Netlify Blobs)

Bản này gồm:

1. **Trang shop** (`public/index.html`): Bow Bag có 4 màu (Xanh / Nâu / Hồng đậm / Hồng nhạt), form đặt hàng có thêm ô **Email**, sản phẩm hiện nhãn **HẾT HÀNG** khi shop tắt trong admin.
2. **Trang admin** (`/admin`): bật/tắt HẾT HÀNG cho từng sản phẩm, từng size, từng màu; sửa sản phẩm; **upload ảnh**; **thêm / xoá / sắp xếp sản phẩm**. Tất cả lưu bằng **Netlify Blobs**, *không cần deploy lại web*.
3. **Email xác nhận tự động** gửi tới khách (ô Email) ngay khi đặt đơn, kèm bản sao cho shop.

## Cấu trúc thư mục

```
public/                  → toàn bộ web (Netlify publish thư mục này)
  index.html             → trang shop
  admin/index.html       → trang quản lý
  catalog-seed.json      → danh mục gốc (chỉ dùng cho lần đầu, trước khi shop lưu gì)
  images/                → ảnh sản phẩm gốc
netlify/functions/
  catalog.mjs            → GET /api/catalog (shop đọc danh mục + trạng thái hết hàng)
  img.mjs                → GET /api/img/… (phục vụ ảnh shop upload)
  admin.mjs              → /api/admin/… (đăng nhập, toggle, sửa, upload)
  submission-created.mjs → tự gửi email xác nhận khi có đơn mới
netlify/lib/common.mjs   → code dùng chung
netlify.toml · package.json
```

## Cách triển khai (làm 1 lần)

> Functions + Blobs cần Netlify build có cài thư viện (`npm install`), nên dùng **GitHub** hoặc **Netlify CLI**.
> Kéo-thả thư mục thủ công trên Netlify không chạy được phần này.

**Cách A: GitHub (khuyên dùng)**
1. Đưa nguyên thư mục này lên một repo GitHub.
2. Netlify → *Add new site → Import an existing project* → chọn repo. Netlify tự đọc `netlify.toml` (publish `public`, functions `netlify/functions`).
   Nếu site `limdimsoftie` đã có sẵn: *Site configuration → Build & deploy → Continuous deployment → Link repository*.

**Cách B: CLI**
```bash
npm install
npx netlify-cli login
npx netlify-cli link        # chọn site limdimsoftie
npx netlify-cli deploy --prod
```

### Biến môi trường (Netlify → Site configuration → Environment variables)

| Tên | Bắt buộc | Ý nghĩa |
|---|---|---|
| `ADMIN_PASSWORD` | ✅ | Mật khẩu vào `/admin`. Đặt dài, khó đoán. |
| `BREVO_API_KEY` | ✅ (hoặc `RESEND_API_KEY`) | Khoá gửi email. Brevo miễn phí 300 mail/ngày. |
| `MAIL_FROM` | ✅ | Email người gửi **đã xác minh** trong Brevo/Resend. |
| `SHOP_EMAIL` | nên có | Email shop nhận bản sao mỗi đơn mới (mặc định = `MAIL_FROM`). |
| `BANK_INFO` | nên có | In vào email, vd `Vietcombank · 0123456789 · NGUYEN THI A`. |
| `MAIL_FROM_NAME` | tuỳ chọn | Tên người gửi, mặc định `Limdim Softie`. |
| `IG_HANDLE` | tuỳ chọn | Mặc định `limdim.softie`. |
| `ADMIN_SECRET` | tuỳ chọn | Chuỗi bí mật ký phiên đăng nhập (nếu bỏ trống sẽ dùng mật khẩu admin). |

Sau khi thêm biến, bấm **Deploy → Trigger deploy** để áp dụng.

### Thiết lập Brevo (gửi email)
1. Tạo tài khoản tại brevo.com → *Senders, domains & dedicated IPs → Senders* → thêm và xác minh email gửi đi (`MAIL_FROM`).
2. *SMTP & API → API keys* → tạo khoá, dán vào `BREVO_API_KEY`.
3. Lưu ý: nếu `MAIL_FROM` là địa chỉ `@gmail.com`, thư có thể bị Gmail/Yahoo đưa vào **Spam** (hoặc bị đổi người gửi). Nếu có tên miền riêng, hãy xác minh *domain* trong Brevo/Resend và dùng email theo tên miền đó để thư vào hộp thư chính tốt hơn. Màn hình đặt hàng thành công đã nhắc khách kiểm tra mục Spam.

## Dùng trang admin

Vào `https://limdimsoftie.netlify.app/admin`, nhập `ADMIN_PASSWORD`.

* **Công tắc xanh/đỏ** ở mỗi sản phẩm: Còn hàng ⇄ Hết hàng (cả sản phẩm).
* **Chip Size M/L, chip màu** dưới tên sản phẩm: bấm để chỉ tắt riêng phân loại đó (ví dụ Bow Bag hết màu Nâu).
* Sản phẩm chỉ còn mỗi phân loại đã hết → tự hiện **Hết hàng** trên shop.
* **Sửa**: đổi tên, giá, mô tả, ảnh chính/ảnh phụ, danh sách màu (kèm ảnh riêng cho từng màu), ẩn khỏi shop, xoá.
* **+ Thêm sản phẩm**: chọn nhóm, nhập giá (đơn vị *nghìn đồng*: 280 = 280.000đ), tải ảnh (tự nén về ≤1600px trước khi upload).
* **↑ ↓**: đổi thứ tự trong nhóm. **Sao lưu**: tải file JSON toàn bộ danh mục.
* Khách thấy thay đổi sau khoảng 10–60 giây (hoặc khi tải lại trang). Trước khi gửi đơn, trang shop cũng tự kiểm tra lại tồn kho một lần nữa và chặn món vừa hết.

## Lưu ý kỹ thuật

* Lần đầu mở admin, dữ liệu lấy từ `catalog-seed.json`; mỗi thay đổi đầu tiên sẽ ghi toàn bộ danh mục vào Netlify Blobs (store `catalog`), ảnh upload lưu ở store `product-images`. Từ đó Blobs là nguồn dữ liệu chính; sửa `catalog-seed.json` về sau sẽ không còn tác dụng.
* Bow Bag hiện dùng chung 1 ảnh cho cả 4 màu. Muốn ảnh riêng từng màu: Admin → Sửa Bow Bag → bấm ô **Ảnh màu** ở từng dòng màu.
* Nếu API tạm lỗi, trang shop tự dùng bản danh mục đã lưu trong trình duyệt / bản gốc, nên khách vẫn xem và đặt hàng được.
* Mỗi email nhận tối đa 5 thư xác nhận/ngày (chống bị dùng để spam người khác).
* Chạy thử trên máy: `npx netlify-cli dev` (cần đã `link` site để dùng Blobs).
