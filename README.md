# limdim.softie

Website bán túi vải hoa & túi cói handmade (song ngữ VI/EN), đặt hàng bằng **Netlify Forms**.

## Cấu trúc
- `index.html` – trang chính + form đặt hàng `don-hang`
- `style.css`, `script.js` – giao diện và logic
- `images/` – toàn bộ ảnh
- `netlify.toml` – cấu hình Netlify

## Deploy lên Netlify
1. Đưa toàn bộ thư mục này lên GitHub.
2. Netlify → Add new site → Import from Git → chọn repo (không cần build command, publish directory là `.`).
3. Sau lần deploy đầu, vào **Forms** sẽ thấy form `don-hang`. Mỗi đơn hàng gửi về đây.

## Nhận đơn qua email (hoangthuylinh2006123@gmail.com)
Email nhận đơn được cài trong dashboard, không nằm trong code:
Site configuration → Notifications → **Emails and webhooks** → Form submission notifications → Add notification → Email notification → Email to notify: `hoangthuylinh2006123@gmail.com` → Form: `don-hang` → Save.

## Thông tin chuyển khoản
Mở `script.js`, điền `BANK_INFO` (ví dụ `"Vietcombank · 0123456789 · NGUYEN THI A"`) để hiện trên màn hình sau khi đặt hàng.

Lưu ý: form chỉ gửi được khi chạy trên Netlify, mở file trực tiếp trên máy sẽ báo lỗi gửi.

## Nếu form báo "Chưa gửi được đơn"
1. Chỉ test trên link `*.netlify.app` (hoặc domain riêng) sau khi deploy. Mở file trực tiếp hoặc bản xem thử ngoài Netlify sẽ luôn báo lỗi; mã lỗi hiện trong ngoặc, ví dụ `(404)` hoặc `(Failed to fetch)`.
2. Netlify → site → **Forms** → nếu thấy nút **Enable form detection** thì bấm, rồi **Deploys → Trigger deploy → Deploy site**. Netlify chỉ nhận form khi đã bật tính năng này và deploy lại sau đó.
3. Chắc chắn repo đã push bản `index.html` mới có form `don-hang` (tìm `data-netlify="true"`), và site đang publish thư mục `.` (đã đặt trong `netlify.toml`).
4. Sau khi deploy, vào **Forms**: phải thấy form tên `don-hang`. Gửi thử một đơn rồi kiểm tra mục Submissions.
