# PHẦN 2 – MASTER PROMPTING

## (NGHỆ THUẬT GIAO VIỆC CHO AI) – 30’

---

## 1. Goals (Mục tiêu)

Sau phần này, bạn cần đạt 3 điều:

*   Hiểu **các Framework Prompt** phổ biến để khỏi vò đầu bứt tai nghĩ cách viết.
*   Biết **quy trình biến "ý tưởng mơ hồ" thành "Prompt chuẩn"** (Refining Process).
*   Thực hành viết 1 prompt hoàn chỉnh để tạo App Fullstack CRUD.

---

## 2. Common Prompt Frameworks (Công thức viết Prompt)

Đừng viết prompt như văn xuôi. Hãy dùng công thức để AI dễ hiểu.

### 🟢 1. C.R.E.O (Cơ bản - Dễ nhớ nhất)
*   **C - Context (Bối cảnh)**: Bạn là ai? Đang gặp chuyện gì? Tại sao cần làm việc này?
*   **R - Request (Yêu cầu)**: Bạn muốn AI làm chính xác hành động gì? (Viết, List, Tóm tắt...).
*   **E - Explanation (Giải thích)**: Làm rõ ý muốn bằng ví dụ minh họa hoặc giải thích thêm để AI không hiểu nhầm.
*   **O - Output (Đầu ra)**: Bạn muốn kết quả định dạng thế nào? (Bảng, Text, List, Code...).

| Đặc điểm | Chi tiết |
| :--- | :--- |
| **Điểm mạnh** | Ngắn gọn, dễ nhớ, tự nhiên. |
| **Điểm yếu** | Thiếu ràng buộc chặt chẽ (Constraints), AI dễ "sáng tạo" lung tung. |
| **Nên dùng** | Giao tiếp nhanh, viết mail, hỏi kiến thức, tạo data mẫu. |
| **Không nên** | Viết code phức tạp, xử lý lỗi (Debug), phân tích logic sâu. |

**Ví dụ Áp dụng:**

*   **Đời thường (Mua quà)**
    ```text
    Context: Tôi muốn tặng quà sinh nhật mẹ.
    Request: Giới thiệu 3 món quà sức khỏe.
    Explanation: Mẹ tôi hay đau lưng, thích đồ thảo dược.
    Output: Trả về tên món + giá tiền + nơi mua.
    ```

*   **Tester (Viết Test Case)**
    ```text
    Context: Chị đang test màn hình Đăng ký.
    Request: Viết giúp chị 5 test case email không hợp lệ.
    Explanation: Ví dụ: email thiếu @, email có dấu cách...
    Output: Trả về bảng Excel cột Input, Expected.
    ```

*   **Student (Giải thích Code)**
    ```text
    Context: Em đang học Java.
    Request: Giải thích từ khóa `static`.
    Explanation: Lấy ví dụ về biến đếm số lượng sinh viên trong lớp.
    Output: Giải thích ngắn gọn + code mẫu.
    ```

### 🟡 2. P.A.R.I (Trung bình - Cho xử lý sự cố)
*   **P - Problem (Vấn đề)**: Mô tả lỗi/tình huống đang gặp phải (Lỗi gì? Xảy ra khi nào?).
*   **A - Action (Hành động)**: Muốn AI làm gì để xử lý vấn đề đó? (Tìm nguyên nhân, Sửa code, Viết lại...).
*   **R - Result (Kết quả)**: Mục đích cuối cùng đạt được là gì? (Code chạy được, Sếp hiểu, Khách hàng vui...).
*   **I - Information (Dữ liệu)**: Cung cấp bằng chứng (Log lỗi, Đoạn code, Email gốc...).

| Đặc điểm | Chi tiết |
| :--- | :--- |
| **Điểm mạnh** | Tập trung thẳng vào vấn đề và cách giải quyết (Action-oriented). |
| **Điểm yếu** | Hơi khô khan, thiếu ngữ cảnh (Context) nếu vấn đề phức tạp. |
| **Nên dùng** | **Debug lỗi code**, phân tích log server, sửa văn bản bị sai. |
| **Không nên** | Sáng tạo nội dung mới (viết blog, lên ý tưởng). |

**Ví dụ Áp dụng:**

*   **Đời thường (Sửa xe)**
    ```text
    Problem: Xe máy đề không nổ.
    Action: Chẩn đoán bệnh giúp.
    Result: Để biết có cần dắt ra tiệm không.
    Information: Xe để 2 tuần không đi, đèn vẫn sáng.
    ```

*   **Tester (Log Bug)**
    ```text
    Problem: Nút Payment không bấm được.
    Action: Phân tích nguyên nhân.
    Result: Để log bug cho Dev.
    Information: Log F12 báo lỗi 403 Forbidden.
    ```

*   **Student (Fix lỗi code)**
    ```text
    Problem: Code chạy vòng lặp vô hạn.
    Action: Tìm chỗ sai và sửa lại.
    Result: Để in ra số từ 1 đến 10 rồi dừng.
    Information: Đoạn code `while(true) { i++; }`
    ```

### 🔴 3. R.T.F (Nâng cao - Role, Task, Format)
*   **R - Role (Vai trò)**: Muốn AI đóng vai ai? (Chuyên gia, Người nổi tiếng, Khách hàng khó tính...).
*   **T - Task (Nhiệm vụ)**: Việc cụ thể cần làm là gì?
*   **F - Format (Định dạng)**: Kết quả trông như thế nào?

| Đặc điểm | Chi tiết |
| :--- | :--- |
| **Điểm mạnh** | Ép AI đóng vai chuyên gia (Persona) để có tone giọng/kiến thức sâu. <br> *Tại sao?*: Vì AI được huấn luyện trên dữ liệu khổng lồ. Khi gán Role, bạn giúp AI **"thu hẹp phạm vi tìm kiếm"** (Context Window) vào đúng vùng kiến thức chuyên môn đó (VD: Role Bác sĩ sẽ kích hoạt từ vựng y khoa, Role Marketing sẽ kích hoạt ngôn ngữ chốt sale), thay vì trả lời chung chung. |
| **Điểm yếu** | Thiếu bối cảnh và ràng buộc chi tiết. |
| **Nên dùng** | Khi cần tư vấn chuyên môn sâu (Đóng vai Bác sĩ, Luật sư, Senior Dev). |
| **Không nên** | Task cần độ chính xác kỹ thuật cao mà không cần "diễn". |

**Ví dụ Áp dụng:**

*   **Đời thường (Tư vấn luật)**
    ```text
    Role: Bạn là Luật sư có 10 năm kinh nghiệm về Hôn nhân gia đình.
    Task: Tư vấn thủ tục đăng ký kết hôn với người nước ngoài.
    Format: Danh sách hồ sơ cần chuẩn bị (Checklist).
    ```

*   **Tester (Phân tích nghiệp vụ)**
    ```text
    Role: Bạn là Senior Business Analyst (BA) trong mảng Fintech.
    Task: Phân tích các rủi ro bảo mật cho tính năng Chuyển tiền quốc tế.
    Format: Báo cáo ngắn gọn (Executive Summary).
    ```

*   **Student (Review Code)**
    ```text
    Role: Bạn là Staff Engineer tại Google (Rất khắt khe về Code Quality).
    Task: Review đoạn code này và chỉ ra các điểm "Code thối" (Code smells).
    Format: Danh sách bullet points + Gợi ý sửa.
    ```

### 🔴 4. C.O.S.T.A.R (Siêu chi tiết - Context, Objective, Style, Tone, Audience, Response)
*   **C - Context (Bối cảnh)**: Tình huống hiện tại.
*   **O - Objective (Mục tiêu)**: Việc cần đạt được.
*   **S - Style (Phong cách)**: Viết theo trường phái nào? (Hài hước, Hàn lâm, Thơ ca, Marketing...).
*   **T - Tone (Giọng điệu)**: Cảm xúc truyền tải (Nghiêm túc, Tức giận, Thân thiện, Khẩn thiết...).
*   **A - Audience (Người đọc)**: Ai sẽ đọc kết quả này? (Trẻ em, Chuyên gia, Sếp già, Khách hàng...).
*   **R - Response (Định dạng)**: Cấu trúc câu trả lời mong muốn.

| Đặc điểm | Chi tiết |
| :--- | :--- |
| **Điểm mạnh** | Kiểm soát hoàn toàn phong cách và đối tượng đọc. |
| **Điểm yếu** | Quá dài. **Thiếu mục Constraints (Ràng buộc)** riêng biệt (thường phải viết gộp vào Objective). |
| **Nên dùng** | Viết Content Marketing, Email trang trọng gửi Sếp, viết Docs dự án. |
| **Không nên** | Chat nhanh, hỏi code ngắn, làm việc cần độ chính xác kỹ thuật cao. |

**Ví dụ Áp dụng:**

*   **Đời thường (Viết thiệp)**
    ```text
    Context: Sắp đến 8/3.
    Objective: Viết lời chúc cho mẹ vợ.
    Style: Thơ lục bát.
    Tone: Hài hước, vui vẻ nhưng vẫn kính trọng.
    Audience: Mẹ vợ (60 tuổi, tính thanh niên).
    Response: 4 câu thơ.
    ```

*   **Tester (Viết Email xin OT)**
    ```text
    Context: Dự án đang gấp, team test trễ tiến độ.
    Objective: Xin sếp duyệt budget OT (làm thêm giờ) cuối tuần này.
    Style: Chuyên nghiệp, thuyết phục (Persuasive).
    Tone: Khẩn cấp nhưng lịch sự.
    Audience: Project Manager (khó tính).
    Response: Email ngắn gọn.
    ```

*   **Student (Viết bài luận)**
    ```text
    Context: Bài tập môn Đạo đức nghề nghiệp IT.
    Objective: Bàn luận về "AI có thay thế Lập trình viên không?".
    Style: Tranh biện (Argumentative).
    Tone: Khách quan, học thuật.
    Audience: Giảng viên đại học.
    Response: Dàn ý chi tiết (Outline) 3 luận điểm chính.
    ```

---

### 🌟 CHỐT LẠI: Công thức C.G.C.F (Context - Goal - Constraints - Format)
Để không rối, Workshop này thống nhất dùng công thức **C.G.C.F** (là bản rút gọn, tinh hoa nhất).

*   **C - Context**: Bối cảnh (Tôi là ai, đang làm gì).
*   **G - Goal**: Mục tiêu (Muốn đạt được gì).
*   **C - Constraints**: Ràng buộc (Luật lệ phải tuân thủ, cái gì KHÔNG được làm).
*   **F - Format**: Định dạng đầu ra.

| Đặc điểm | Chi tiết |
| :--- | :--- |
| **Điểm mạnh** | **An toàn & Chính xác cao**. Nhờ có Constraints (Ràng buộc), nó chặn đứng các khả năng AI làm sai hoặc sáng tạo quá đà. Cấu trúc cân bằng giữa Bối cảnh và Logic. |
| **Điểm yếu** | Hơi khô khan nếu dùng cho việc sáng tạo văn học (vì tính logic cao). |
| **Nên dùng** | **Các tác vụ Kỹ thuật & Logic**: Coding (CRUD app), Auto Test Script, Phân tích dữ liệu, Lập kế hoạch dự án. Bất cứ việc gì cần độ chính xác. |
| **Không nên** | Viết thơ, tán gẫu, sáng tạo nghệ thuật bay bổng (dùng C.R.E.O hoặc C.O.S.T.A.R hợp hơn). |

**Ví dụ Áp dụng:**

*   **Đời thường (Lên thực đơn)**
    ```text
    Context: Nhà tối nay có khách, ngân sách 500k.
    Goal: Lên thực đơn 4 món ăn.
    Constraints: Khách bị dị ứng hải sản, không ăn cay.
    Format: Danh sách món + Công thức sơ lược.
    ```

*   **Tester (Tạo Test Data)**
    ```text
    Context: Tôi cần test form nhập số điện thoại.
    Goal: Tạo 10 số điện thoại ảo của nhà mạng Viettel.
    Constraints: Phải bắt đầu bằng 09, 03... và đủ 10 số. Không trùng nhau.
    Format: List CSV.
    ```

*   **Student (Làm App CRUD)**
    ```text
    Context: Tôi là người mới học Web (HTML/JS).
    Goal: Viết code cho trang Quản lý Sinh viên.
    Constraints: Không dùng Database, lưu vào LocalStorage. Giao diện đơn giản.
    Format: 1 file index.html duy nhất.
    ```

---

## 3. Summary: Cốt lõi (Khi quên công thức)

Nếu thấy các công thức trên (C.R.E.O, C.G.C.F...) khó nhớ, bạn chỉ cần nắm chắc **3 Yếu tố Vàng** này (Dù viết kiểu gì cũng PHẢI có):

### 1️⃣ Context (Bối cảnh - AI "mù" nếu thiếu cái này)
AI không biết bạn là ai, đang làm dự án gì. Hãy cung cấp bối cảnh trước.
*   *Thiếu*: "Viết code login đi." -> AI viết code lung tung (React? Java? PHP?).
*   *Đủ*: "Tôi đang làm web **HTML thuần**, không dùng Framework." -> AI viết đúng HTML/JS.

### 2️⃣ Goal (Mục tiêu - Muốn gì nói thẳng)
Đừng nói vòng vo. Dùng động từ mạnh: *Tạo, Viết, Sửa, Tóm tắt, Liệt kê*.

### 3️⃣ Constraints (Ràng buộc - "Vòng kim cô") - QUAN TRỌNG NHẤT
Đây là yếu tố phân biệt Pro và Newbie. Hãy cho AI biết **những gì KHÔNG được làm**.
*   "Không dùng thư viện ngoài."
*   "Không giải thích dài dòng, chỉ đưa code."
*   "Phải có comments tiếng Việt."

> **Mẹo nhỏ**: Trước khi bấm Enter, hãy tự hỏi: *"Nếu mình là người lạ, đọc câu này có hiểu lầm không?"*. Nếu có, hãy thêm Constraints.

---

## 4. Chiến lược "Xây Prompt từ ý tưởng mơ hồ" (Prompt Refining Strategy)

Thực tế: Bạn thường **không biết mình muốn gì** ngay từ đầu.
Ví dụ: *"Muốn làm app CRUD Product"* -> Nhưng chưa biết Product có trường gì, dùng công nghệ nào.

**Quy trình 3 bước để "vẽ" ra Prompt chuẩn:**

### Bước 1: Brainstorming (Hỏi ngược lại AI)
Đừng bắt AI làm ngay. Hãy bảo nó **đóng vai Consultant (Tư vấn viên)** để khai thác thông tin từ bạn.

> *Prompt 1 (P1)*: "Tôi muốn làm một app quản lý Sản phẩm (CRUD) nhưng chưa rõ cần những trường thông tin gì và nên dùng công nghệ nào cho người mới. Hãy đóng vai Tech Lead, gợi ý cho tôi các trường Product cơ bản và Tech stack đơn giản nhất."

-> AI sẽ trả lời: Product (Name, Price, Category...), Stack (NodeJS + EJS cho dễ).

### Bước 2: Finalize Requirements (Chốt đơn)
Từ gợi ý của bước 1, bạn chọn ra những gì mình thích.

> *Prompt 2 (P2)*: "OK, chốt dùng NodeJS + Express + HTML đơn giản (không React). Product gồm: Id, Name, Price, Description, ImageURL. Lưu dữ liệu vào file JSON (không cần Database cho nhẹ)."

### Bước 3: Generate Execution Prompt (Ra lệnh thực thi)
Gộp thông tin bước 2 vào công thức **C.G.C.F** để AI gen code.

---

## 5. Step-by-Step Example (Tạo App CRUD Fullstack)

Dưới đây là ví dụ minh họa cách áp dụng chiến lược trên.

### Situation (Tình huống)
Vợ/Em gái muốn tạo 1 trang web quản lý Danh sách Khách hàng (CRUD), nhưng không rành công nghệ.

### Phase 1: Mơ hồ (Vague)
> **User**: "Làm cho cái web quản lý khách hàng đi."
> **AI (Sẽ làm bừa)**: Tự chọn React, MongoDB, Code phức tạp -> User không chạy được.

### Phase 2: Tư vấn (Consulting)
> **User**: "Tôi muốn làm web quản lý khách hàng cho người mới học. Hãy gợi ý xem khách hàng cần thông tin gì? Và nên code bằng ngôn ngữ gì dễ nhất (tôi biết chút HTML/JS)?"
> **AI**: "Nên dùng HTML + JS thuần + LocalStorage (lưu trình duyệt). Khách hàng cần: Tên, SĐT, Email."

### Phase 3: Chốt & Prompt Xịn (Final Prompt)

Đây là Prompt bạn sẽ **Copy & Paste** vào Cursor/Antigravity:

```markdown
# Context
Tôi là người mới học code. Tôi muốn tạo một ứng dụng web Quản lý Khách hàng (CRUD Customer) đơn giản nhất để chạy ngay trên trình duyệt máy tính.

# Goal
Tạo trọn bộ source code cho ứng dụng này.

# Info
- Đối tượng: Customer (Id, FullName, Email, Phone, Address).
- Tính năng: Xem danh sách, Thêm mới, Sửa, Xóa.

# Constraints (Quan trọng)
1.  **Tuyệt đối KHÔNG dùng Backend (Nodejs/Java)**. Hãy dùng **LocalStorage** của trình duyệt để lưu dữ liệu (để tôi chỉ cần mở file HTML là chạy).
2.  Giao diện: Dùng **Bootstrap 5** cho đẹp, thiết kế responsive.
3.  Cấu trúc: Viết tất cả trong 1 file `index.html` (gồm cả CSS và JS) cho dễ quản lý.
4.  Có comment giải thích code tiếng Việt.

# Format
Trả về full code của file `index.html`.
```

### Tại sao Prompt này xịn?
1.  **Context**: Tránh AI dùng React/Angular phức tạp.
2.  **Constraints**: "LocalStorage", "1 file index.html" -> Đảm bảo chạy được ngay (Vibe Coding) mà không cần cài đặt môi trường.
3.  **Format**: Full code -> Copy là chạy.

---

## 6. Mini Exercise (Thực hành - 10 phút)

**Đề bài**: Hãy viết 1 Prompt để AI tạo ra **"Chương trình tính tiền đi taxi"**.

**Yêu cầu**:
1.  Áp dụng công thức C.G.C.F.
2.  Đi qua bước "Tư vấn" trước nếu chưa biết giá cước taxi tính thế nào.
3.  Constraints: Viết bằng Java (cho Em gái) hoặc Python (cho Vợ), input nhập từ bàn phím.
