# PHẦN 1 – AI MAP: AI LÀ GÌ & DÙNG KHI NÀO?

## (PHÂN LOẠI & ĐỊNH VỊ CÔNG CỤ) – 25’

---

## 1. Goals (Mục tiêu)

Sau phần này, bạn cần đạt 3 điều:

*   Hiểu rõ **5 nhóm công việc** mà AI làm tốt nhất.
*   Phân biệt được **AI Tool** (Công cụ hỏi-đáp) và **AI Agent** (Trợ lý tự hành).
*   Biết khi nào thì dùng Tool, khi nào thì cần Agent.

---

## 2. The 5 AI Use Cases (5 Nhóm việc AI làm tốt)

Khi gặp việc khó, hãy xem nó thuộc nhóm nào để giao việc chuẩn xác.

### 1️⃣ Generate (Sinh nội dung mới)
Tạo ra cái chưa có từ con số 0.

*   **Ví dụ Đời thường (Analogy)**:
    *   "Viết giúp anh cái thiệp chúc mừng sinh nhật vợ, tình cảm ướt át tí."
*   **Ví dụ Tester (Vợ - Nhóm A)**:
    *   "Sinh **Sample Data** (Excel) gồm 50 khách hàng, có đủ Tên, Email, SĐT, Địa chỉ để test tính năng Import."
*   **Ví dụ Sinh viên (Em gái - Nhóm B)**:
    *   "Sinh khung dự án (Boilerplate) **Spring Boot** kết nối MySQL, cấu trúc chuẩn Layer."

### 2️⃣ Design (Thiết kế / Lên kế hoạch)
Tạo khung sườn, checklist, chiến lược.

*   **Ví dụ Đời thường**:
    *   "Lên thực đơn tiệc nướng BBQ cho 10 người, có 2 người ăn chay."
*   **Ví dụ Tester**:
    *   "Lên **Checklist Test** cho màn hình Đổi Mật Khẩu (Positive, Negative, Security cases)."
*   **Ví dụ Sinh viên**:
    *   "Thiết kế **Database Schema** cho app Bán sách (gồm User, Book, Order, OrderDetail)."

### 3️⃣ Translate (Chuyển đổi ngôn ngữ/Định dạng)
Biến A thành B (giữ nguyên ý nghĩa).

*   **Ví dụ Đời thường**:
    *   "Dịch đoạn thư này sang tiếng Anh trang trọng để gửi sếp."
*   **Ví dụ Tester**:
    *   "Chuyển Test Case từ **file Word** (dạng văn xuôi) sang **Gherkin Syntax** (Given-When-Then) để chạy Cucumber."
*   **Ví dụ Sinh viên**:
    *   "Chuyển đoạn code này từ **Java** sang **Python**." hoặc "Chuyển câu SQL thường sang **Hibernate HQL**."

### 4️⃣ Diagnose (Chẩn đoán lỗi/Giải thích)
Tìm nguyên nhân tại sao sai.

*   **Ví dụ Đời thường**:
    *   "Sao cây lan này bị vàng lá vậy? (Kèm ảnh chụp)."
*   **Ví dụ Tester**:
    *   "Log báo lỗi 500 ntn, giải thích xem Server đang chết ở đâu? Có phải do dữ liệu đầu vào không?"
*   **Ví dụ Sinh viên**:
    *   "Giải thích tại sao đoạn code này bị `NullPointerException`? Sửa thế nào?"

### 5️⃣ Improve (Cải thiện/Tối ưu)
Làm cái đã có trở nên tốt hơn.

*   **Ví dụ Đời thường**:
    *   "Sửa lại email này cho lịch sự và chuyên nghiệp hơn."
*   **Ví dụ Tester**:
    *   "Viết lại mô tả Bug này cho ngắn gọn, dễ hiểu để Dev đọc là fix được ngay."
*   **Ví dụ Sinh viên**:
    *   "Refactor đoạn code này: Tách hàm, đặt tên biến chuẩn, tối ưu vòng lặp."

---

## 3. AI Tool vs. AI Agent (Khác nhau thế nào?)

### 🟢 AI Tool (Công cụ Hỏi - Đáp)
Giống như bạn hỏi Google, hỏi 1 câu -> trả lời 1 câu.
*   **Đặc điểm**: Thụ động, chỉ làm đúng việc được giao, xong là dừng.
*   **Dùng khi**: Cần giải đáp nhanh, việc nhỏ, cụ thể (5 nhóm ở trên).
*   **Ví dụ**: ChatGPT, Claude, Gemini (bản chat web).

### 🔴 AI Agent (Trợ lý Tự hành)
Giống như một **Nhân viên (Intern)** biết tự lập kế hoạch.
*   **Đặc điểm**: Nhận Goal lớn -> Tự chia nhỏ task -> Tự chạy -> Tự kiểm tra -> Báo cáo.
*   **Dùng khi**: Việc phức tạp nhiều bước, cần tương tác với file/môi trường (Terminal, IDE).
*   **Ví dụ**: Antigravity, Cursor, Windsurf.

---

## 4. Comparison Examples (So sánh Tool vs Agent)

### Tình huống 1: Làm Test Manual
*   **AI Tool**: Bạn hỏi "Gợi ý các case test cho màn hình Login". AI trả lời dạng text. Bạn phải tự copy từng dòng, chỉnh format rồi paste vào file Excel/Jira.
*   **AI Agent**: Bạn bảo "Tạo file Excel (.xlsx) chứa 20 test case Login, chia cột rõ ràng". Agent tự tạo file trên máy, điền dữ liệu vào đúng cột, format đẹp để bạn chỉ việc gửi.

### Tình huống 2: Viết Code (Coding)
*   **AI Tool**: Bạn bảo "Viết API Login bằng Java". AI trả về đoạn code mẫu trên khung chat. Bạn phải tự tạo file, copy code vào, tìm cách import thư viện.
*   **AI Agent**: Bạn bảo "Tạo tính năng Login full-stacks". Agent tự tạo các file `LoginController.java`, `UserService.java`, tự thêm dependency vào `pom.xml` và sắp xếp đúng thư mục dự án.

---

## 5. Mini Exercise (Bài tập phân loại - 5 phút)

Hãy xem các yêu cầu sau, cái nào dùng Tool (Chat), cái nào nên dùng Agent (IDE)?

| Tình huống | Dùng gì? | Tại sao? |
| :--- | :--- | :--- |
| 1. "Giải thích hàm `useEffect` trong React." | **Tool** | Hỏi đáp kiến thức nhanh, không cần sửa file. |
| 2. "Refactor toàn bộ dự án, đổi tên class User thành Customer." | **Agent** | Cần sửa nhiều file cùng lúc, dùng Tool copy/paste sẽ rất mệt. |
| 3. "Viết giúp tớ cái email xin nghỉ phép." | **Tool** | Tạo văn bản ngắn, copy là xong. |
| 4. "Tạo project mới, cài thư viện, setup database." | **Agent** | Cần chạy lệnh Terminal, tạo folder/file thực tế. |
| 5. "Dịch cái log lỗi này xem bị sao." | **Tool** | Paste log vào hỏi nhanh hơn chờ Agent chạy. |

> **Quy tắc nhớ**:
> *   Cần kiến thức / Text ngắn → **Tool**.
> *   Cần File / Terminal / Nhiều bước → **Agent**.
