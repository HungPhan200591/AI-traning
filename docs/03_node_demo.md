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

### Bước 2: Lên kế hoạch (Planning - QUAN TRỌNG)
*Mục tiêu: Ép AI tuân thủ cấu trúc chuẩn (Layered Architecture) trước khi viết code.*

**Hành động**: Nhập tiếp prompt (Copy nguyên văn):

```text
OK, chốt phương án đó.
1. Hãy đưa ra **Cấu trúc thư mục dự án chuẩn** theo mô hình Layered Architecture (Controller, Service, Route, Model) để dễ mở rộng, KHÔNG viết tất cả vào 1 file `server.js`.
2. Cần có folder `config` cho DB, `middleware` để xử lý lỗi tập trung.
3. Tạo file `docker-compose.yml` cho Postgres.
**Constraint**: CHƯA viết code vội. Cần file tree trước.
```

-> **Expected**: AI đưa ra cây thư mục chuẩn (`src/controllers`, `src/models`...). Nếu AI code luôn -> Bấm Stop và mắng nó: *"Tôi bảo chưa code cơ mà!"*.

### Bước 3: Code Backend (Execution - CGCF)
*Mục tiêu: Dùng Meta-Prompt hoặc Prompt chuẩn để sinh code.*

**Hành động**: Nhập prompt lệnh:

```text
# Context
Tôi đang xây dựng Backend cho App Product CRUD bằng Node.js + Express theo cấu trúc Layered Architecture đã chốt ở trên.

# Goal
Viết code **FULL** cho toàn bộ các file trong thư mục `src/` và `server.js`, `docker-compose.yml`.

# Constraints
1.  **Architecture**: Phải tách code rõ ràng: Route -> Controller -> Service -> Model.
2.  **Database**: Kết nối PostgreSQL qua Docker. Dùng `Sequelize` làm ORM.
3.  **Error Handling**: Phải có middleware xử lý lỗi tập trung.
4.  **API**: Đủ 4 món CRUD chuẩn RESTful.
5.  **CORS**: Cấu hình mở CORS cho Frontend.

# Format
Bạn hãy tự động tạo folder `src` và các sub-folder, sau đó tự tạo và lưu nội dung vào từng file tương ứng trong dự án.
```

-> **Expected**: Agent sẽ tự chạy lệnh `mkdir`, `touch`, và `write` file.
-> **Check**: Nhìn cây thư mục bên trái xem file đã hiện ra chưa.

### Bước 4: Chạy Backend
**Hành động**:
1.  Mở Terminal (Ctrl + `).
2.  Chạy lệnh cài thư viện:
    ```bash
    npm init -y
    npm install express sequelize pg pg-hstore cors dotenv
    ```
3.  Bật Docker DB:
    ```bash
    docker-compose up -d
    ```
4.  Chạy Server:
    ```bash
    node server.js
    ```
-> **Thành công**: Thấy dòng thông báo `Server is running on port 3000` và `Database connected`.

### Bước 5: Code Frontend (Execution - CGCF)
*Mục tiêu: Làm giao diện quản lý đơn giản.*

**Hành động**: Nhập prompt tiếp:

```text
# Context
Backend đã chạy ở port 3000. Giờ tôi cần giao diện cho file `public/index.html`.

# Goal
Viết code HTML + JS + Bootstrap để gọi các API trên.

# Constraints
1.  Giao diện gồm: Bảng danh sách sản phẩm và Form thêm mới/Sửa ở bên cạnh (2 cột).
2.  Dùng `fetch` API của Javascript để gọi Backend.
3.  Khi thêm/xóa thành công thì phải hiện Alert thông báo và load lại bảng.
4.  Thiết kế màu xanh dương chủ đạo.

# Format
Bạn hãy tự tạo file `public/index.html` và lưu code vào đó.
```

### Bước 6: Chạy thử & "Cấy" Bug
**Hành động**:
1.  Mở file `public/index.html` bằng trình duyệt (hoặc dùng Extension "Live Server").
2.  Thử thêm 1 sản phẩm:
    *   Name: `Áo Thun`
    *   Price: `-50000` (Nhập số âm).
3.  -> **Bug**: Hệ thống vẫn cho lưu giá âm! (Đây là "mồi" cho phần Test Design sau này).

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
