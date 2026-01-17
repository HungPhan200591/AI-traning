# PHẦN 3 – DEMO: "Vibe Coding" Node.js CRUD App (35’)

> **Tư duy cốt lõi**:
> *   AI là "Dev chính", bạn là "Technical Lead" (Người ra lệnh & Review).
> *   Không gõ code thủ công. Chỉ copy-paste prompt và chạy lệnh.
> *   Mục tiêu: Chạy được app trước, đẹp tính sau.

---

## 1. Chuẩn bị (Prerequisites)

Đảm bảo máy bạn đã có:
1.  **Node.js**: Kiểm tra bằng `node -v` (version 18+).
2.  **Docker Desktop**: Đã bật và chạy (`docker info`).
3.  **Cursor/Antigravity**: Đã mở và sẵn sàng mode "Agent".

---

## 2. Kịch bản thực hành (Scenario)

**Bài toán**: Xây dựng ứng dụng **Quản lý Sản phẩm (Product Management)**.
*   **Chức năng**: Xem danh sách, Thêm, Sửa, Xóa sản phẩm.
*   **Công nghệ**:
    *   Backend: Node.js + Express (Layered Architecture).
    *   Database: PostgreSQL (chạy Docker).
    *   Frontend: HTML + JS thuần + Bootstrap (Gọi API).

---

## 3. Thực hiện (Step-by-Step)

### Bước 1: Khởi động (Brainstorming)
*Mục tiêu: Để AI tư vấn cấu trúc hợp lý, tránh code bừa.*

**Hành động**: Mở chat, nhập prompt sau:

```text
Tôi muốn làm một app quản lý Sản phẩm (CRUD) nhưng chưa rõ cần những trường thông tin gì và nên dùng công nghệ nào cho người mới. Hãy đóng vai Tech Lead, gợi ý cho tôi các trường Product cơ bản và Tech stack đơn giản nhất.
```

-> **Expected**: AI gợi ý Node.js + Express và các trường (Name, Price...).

### Bước 2: Lên kế hoạch (Planning)
*Mục tiêu: Định hình kiến trúc chuẩn chỉnh ngay từ đầu.*

**Hành động**: Nhập prompt sau:

```text
Tôi muốn xây dựng ứng dụng **Product Management** với các yêu cầu sau:
1.  **Backend**: Node.js + Express + PostgreSQL (Sequelize).
    *   Kiến trúc: Layered (Route -> Controller -> Service -> Model).
    *   Tính năng: CRUD sản phẩm, hỗ trợ **Upload ảnh** (dùng Multer).
2.  **Frontend**: HTML5 + Bootstrap 5 + JS thuần.
    *   Giao diện hiện đại, chuyên nghiệp.
    *   Tính năng: Xem danh sách (Grid/Table), Thêm/Sửa (Modal), Xem chi tiết (Offcanvas).
3.  **Infrastructure**: Docker Compose cho DB.

Hãy đóng vai Tech Lead, giúp tôi:
1.  Đưa ra cấu trúc thư mục dự án chuẩn.
2.  Liệt kê các trường dữ liệu cần thiết cho Product (bao gồm `image_url`).
```

### Bước 3: Code Backend (Full Features)
*Mục tiêu: Tạo Backend hoàn thiện một lần, hỗ trợ upload ảnh ngay lập tức.*

**Hành động**: Nhập prompt lệnh:

```text
# Context
Tôi đã chốt cấu trúc dự án. Bây giờ hãy bắt đầu code Backend.

# Goal
Viết code **FULL** cho toàn bộ Backend Node.js.

# Requirements
1.  **Architecture**: Tuân thủ nghiêm ngặt Layered Architecture.
2.  **Database**:
    *   Sử dụng Sequelize + PostgreSQL.
    *   Model `Product` gồm: `name`, `description`, `price`, `stock`, `category`, `imageUrl`, `isActive`.
    *   Tự động sync database khi chạy.
3.  **Upload File**:
    *   Cấu hình `multer` để upload ảnh vào thư mục `public/assets`.
    *   API Create/Update phải nhận `multipart/form-data`.
    *   Lưu đường dẫn ảnh tương đối vào DB (VD: `/assets/img1.jpg`).
4.  **Configuration**:
    *   Cấu hình `express.static` để serve ảnh từ thư mục `public`.
    *   Cấu hình CORS để Frontend gọi được API.

# Format
Bạn hãy tự động tạo folder `src`, `public/assets` và các file cần thiết (`server.js`, `docker-compose.yml`, ...).
```

### Bước 4: Code Frontend (Modern UI)
*Mục tiêu: Giao diện đẹp, UX tốt ngay từ phiên bản đầu tiên.*

**Hành động**: Nhập prompt tiếp:

```text
# Goal
Viết code Frontend cho ứng dụng (HTML/CSS/JS) trong thư mục `public/`.

# Requirements
1.  **Layout & UI**:
    *   Sử dụng **Bootstrap 5** mới nhất. Tông màu chủ đạo: Xanh dương (Modern Blue).
    *   Header đẹp, có thống kê nhanh (Tổng SP, Tổng tiền...).
    *   Danh sách sản phẩm: Hiển thị dạng Bảng (Table) với cột Ảnh thumbnail.
2.  **Chức năng Thêm/Sửa**:
    *   Sử dụng **Modal (Popup)** của Bootstrap.
    *   Form có tính năng **Upload ảnh** và **Preview ảnh** ngay khi chọn file.
    *   Xử lý gửi `FormData` lên API.
3.  **Chức năng Xem chi tiết**:
    *   Click vào tên sản phẩm -> Hiển thị **Offcanvas (Sidebar)** trượt từ phải ra.
    *   Trong Sidebar hiện ảnh lớn và thông tin chi tiết.
4.  **UX/Effect**:
    *   Có Loading Spinner khi chờ API.
    *   Thông báo **Toast/Alert** đẹp mắt góc màn hình khi thành công/thất bại.

# Format
Tạo các file: `public/index.html`, `public/css/style.css`, `public/js/app.js`.
```

### Bước 5: Chạy & Kiểm thử
**Hành động**:
1.  Cài đặt & Chạy Docker:
    ```bash
    npm install
    npm install multer
    docker-compose up -d
    node server.js
    ```
2.  Mở trình duyệt: `http://localhost:3000` (hoặc port bạn cấu hình).
3.  **Test Case**: Thử tạo sản phẩm có kèm ảnh -> Kiểm tra xem ảnh có hiển thị lại đúng không.
4.  **Bug "Mồi"**: Vẫn thử nhập giá âm (-50000) để phục vụ bài test sau này.

---

## 4. Troubleshooting (Cứu hộ)

### Lỗi 1: `EADDRINUSE: null port 3000`
*   **Nguyên nhân**: Port 3000 đang bị app khác chiếm.
*   **Cách sửa**: Đổi port trong `server.js` thành 3001, hoặc tắt process cũ.

### Lỗi 2: `SequelizeConnectionError`
*   **Nguyên nhân**: Docker chưa chạy hoặc Password sai.
*   **Cách sửa**:
    1.  Chạy `docker ps` xem container `postgres` có đang Up không.
    2.  Check file `docker-compose.yml` và `src/config/database.js` xem user/pass khớp chưa.

### Lỗi 3: Frontend không gọi được API (CORS Error)
*   **Nguyên nhân**: Backend chưa bật CORS.
*   **Cách sửa**: Vào `server.js` thêm `app.use(cors());`.

---
**Chúc mừng! Bạn đã hoàn thành App Fullstack đầu tiên bằng Vibe Coding!**
Move sang phần tiếp theo: **Test Design & Automation**.
