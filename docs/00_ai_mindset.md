# PHẦN 0 – AI MINDSET CHO NGƯỜI MỚI

## (CHUẨN HÓA CÁCH DÙNG AI) – 15’

---

## 1. Goals (Mục tiêu)

Sau phần này, bạn cần đạt 3 điều:

* Hiểu **AI dùng để làm việc (Work)**, không phải để hỏi chuyện linh tinh
* Biết **cách giao việc chuẩn (Standard Delegation)** cho AI
* Biết **cách kiểm soát kết quả (Control & Verify)** AI trả về

> Bạn **không cần nhớ hết**, chỉ cần nhớ **AI Mindset & Workflow**.

---

## 2. Positioning (Định vị đúng về AI)

### AI không phải là:

* ❌ God (Thần thánh)
* ❌ Người hiểu hết **Context** (bối cảnh) hệ thống của bạn
* ❌ Người chịu trách nhiệm (**Accountability**) thay bạn

### AI là:

* ✅ Một **Co-worker** (đồng nghiệp) làm nhanh
* ✅ Giỏi tạo **Draft** (bản nháp: code, test, explanation)
* ✅ Giỏi đọc và tóm tắt thông tin

> **AI làm nhanh – Bạn Verify (kiểm tra) – Bạn Quyết định.**

---

## 3. Your Role (Vai trò của bạn)

Khi dùng AI, bạn **luôn giữ vai trò “Controller” (người kiểm soát)**:

* **Trigger**: Xác định rõ mình muốn gì
* **Context Provider**: Đưa đủ bối cảnh
* **Verifier**: Chạy thử kết quả
* **Feedback Loop**: Phản hồi lại khi sai

> AI không biết “**Definition of Done**” (đủ hay chưa) nếu bạn không nói rõ.

---

## 4. The 5 Rules (5 Luật sử dụng AI)

### 1️⃣ Context (Luật Bối cảnh)
AI **không biết hệ thống của bạn**.
→ Phải nói rõ: đang làm gì, cho ai, trong hoàn cảnh nào (**Project & User Context**).
→ **Ví dụ:**
*   ⚠️ **Weak**: "Viết API lấy danh sách User." (AI sẽ hỏi: Ngôn ngữ gì? DB gì?)
*   ✅ **Standard**: "Viết API `GET /users` bằng **Java Spring Boot**, lấy dữ liệu từ **PostgreSQL**, trả về JSON."

### 2️⃣ Constraints (Luật Ràng buộc)
Không nói ràng buộc → AI tự chọn theo ý nó (**Randomness**).
→ Luôn nói rõ: **không dùng gì, phải theo chuẩn gì (Coding Standards)**.
→ **Ví dụ:**
*   ⚠️ **Weak**: "Viết test case cho chức năng Đăng ký." (AI viết văn xuôi hoặc bảng tuỳ ý)
*   ✅ **Standard**: "Viết Test Case chức năng Đăng ký, format **bảng Excel** (gồm cột: ID, Description, Steps, Expected), cover cả **trường hợp validation**."

### 3️⃣ Verification (Luật Kiểm tra)
AI **không chạy code thay bạn**.
→ Mọi thứ phải **chạy được trên máy bạn** (**Local Environment**).
→ Nguyên tắc: **Trust but Verify**.
→ **Ví dụ:**
*   AI gợi ý dùng `String.isBlank()`.
*   Project bạn chạy **Java 8** (chưa có hàm này) → Build lỗi ngay. Hãy kiểm tra version trước khi copy.

### 4️⃣ Data (Luật Dữ liệu)
Khi có lỗi (**Bug/Error**), **đưa dữ liệu thật**:
*   Logs
*   Stacktrace
*   Code snippet
*   Screenshot

→ **Ví dụ:**
*   ⚠️ **Weak**: "Code lỗi 500 rồi em ơi." (AI chịu, không đoán được)
*   ✅ **Standard**: "API trả về 500. Log server báo: `java.lang.NullPointerException at com.example.UserService.getUser(UserService.java:25)`..."

### 5️⃣ Short Loop (Luật Vòng lặp ngắn)
Không nói chuyện dài dòng với AI.
→ **Ask → Run → Fix → Ask again**.
→ **Ví dụ:**
*   ⚠️ **Weak**: "Viết full một trang dashboard quản lý có biểu đồ, bảng dữ liệu, filter, export excel." (Quá nhiều, code sẽ bị cắt giữa chừng).
*   ✅ **Standard**: "Viết Component **Bảng dữ liệu (Table)** hiển thị user trước." (Xong mới làm tiếp Filter, Chart).

---

## 5. Standard Workflow (Quy trình chuẩn)

```
1. Define Request (Nói rõ yêu cầu)
2. AI blocks Draft (AI tạo bản nháp)
3. User Verify (Bạn chạy thử)
4. Error? -> Feed Logs to AI (Có lỗi -> đưa lỗi cho AI)
5. AI Explain/Fix (AI giải thích / đề xuất sửa)
6. Peer Review & Retry (Bạn sửa và chạy lại)
```

### Example Scenario (Ví dụ: Viết Unit Test):
*   **Bước 1**: "Viết Unit Test (JUnit 5) cho hàm `calculateTotal(Order order)`."
*   **Bước 2**: AI trả về code test case cơ bản (Happy path).
*   **Bước 3**: Bạn chạy test -> Thấy lỗi đỏ (Red) ở case "Order null".
*   **Bước 4**: Copy lỗi JUnit: `java.lang.NullPointerException...` gửi AI.
*   **Bước 5**: AI sửa code: thêm check `if (order == null)` và throw Exception hợp lý.
*   **Bước 6**: Bạn chạy lại -> Test xanh (Green).

> **Lỗi không phải thất bại – lỗi là Input information để sửa.**

---

## 6. Prompting (Hỏi AI thế nào cho đúng?)

### ⚠️ Weak Prompt (Cách hỏi chưa nét)

> “Tạo giúp tôi class Entity cho bảng Product nhé.”
→ *(Thiếu field, thiếu công nghệ, AI sẽ tạo đại một class Java POJO thường hoặc code sai chuẩn)*

### ✅ Strong Prompt (Cách hỏi đầy đủ)

**Template:**
> **Context**: Tôi đang làm [Công việc]...
> **Goal**: Mục tiêu là [Kết quả]...
> **Constraints**: Ràng buộc [Công nghệ/Quy tắc]...
> **Error**: (Nếu có lỗi) Lỗi gặp phải [Logs/Image]...
> **Expectation**: (Tuỳ chọn) Format mong muốn

**Ví dụ:**
> **Context**: Project Spring Boot bán hàng.
> **Goal**: Tạo Entity mapping với bảng `products`.
> **Constraints**: Dùng **JPA (Hibernate)**, **Lombok (@Data)**. Field `price` dùng `BigDecimal`, bắt buộc `NOT NULL`.
> **Expectation**: Trả về code Java class hoàn chỉnh.

> **Clear Input → Better Output.**

---

## 7. Root Cause of Weak Prompts (Tại sao bạn Prompt yếu?)

Hầu hết prompt yếu đến từ **3 tư duy sai lầm** (Mindset Traps):

### 1️⃣ "AI tự hiểu ý tôi" (Assumed Context)
*   **Suy nghĩ cũ**: "Nó thông minh mà, nói sơ sơ là được."
*   **Thực tế**: AI không có context trong đầu bạn. Nó giống một nhân viên mới tinh ngày đầu đi làm.
*   **Fix Mindset**: Hãy coi AI là **Junior mới vào team**, bạn cần hướng dẫn chi tiết (Onboarding) thì nó mới làm đúng.

### 2️⃣ "Lười viết dài" (Lazy Prompting)
*   **Suy nghĩ cũ**: "Gõ dài mệt quá, hỏi ngắn cho nhanh."
*   **Thực tế**: Hỏi ngắn 5 giây → AI code sai → Sửa 30 phút.
*   **Fix Mindset**: **Slow down to Speed up**. Tốn 2 phút viết prompt chuẩn để tiết kiệm 30 phút debug.

### 3️⃣ "Sợ AI thấy mình dốt" (Fear of over-explaining)
*   **Suy nghĩ cũ**: "Nói kỹ quá có vẻ thừa thãi."
*   **Thực tế**: AI không biết đánh giá, nó chỉ cần thông tin.
*   **Fix Mindset**: **Over-communicate** (giao tiếp thừa) luôn tốt hơn thiếu. Thà dư thừa constraint còn hơn để AI "sáng tạo" lung tung.

---

## 8. Common Mistakes (Những sai lầm phổ biến)

* ❌ **Vague Prompt (Hỏi chung chung)**
    *   *Weak*: "Viết test login."
    *   *Fix*: "Viết 5 test cases cho Login: 1 đúng, 1 sai pass, 1 user không tồn tại, 1 để trống, 1 SQL Injection."
* ❌ **Blind Trust (Tin kết quả AI mà không chạy thử)**
    *   *Ví dụ*: AI import thư viện lạ (`import com.google.common...`) mà file `pom.xml` chưa khai báo dependency.
    *   *Fix*: Check import và file cấu hình dependencies.
* ❌ **No Logs (Không đưa log khi debug)**
    *   *Weak*: "Nó không chạy được."
    *   *Fix*: "Console báo lỗi dòng 15: `ArrayIndexOutOfBoundsException: Index 5 out of bounds`."
* ❌ **Overloaded Request (Hỏi nhiều việc trong 1 câu)**
    *   *Weak*: "Viết automation script login xong rồi tìm kiếm sản phẩm rồi thêm vào giỏ hàng."
    *   *Fix*: "Viết script **Login** chạy ổn đã." (Rồi mới làm tiếp script Tìm kiếm).

→ **Chỉ cần sửa 4 lỗi này là dùng AI hiệu quả hơn 80%.**

---

## 9. Checklist (Tự kiểm tra)

Bạn đã sẵn sàng nếu:

* ⬜ Biết AI dùng để làm gì (**Purpose**)
* ⬜ Biết mình cần kiểm tra gì (**Verification criteria**)
* ⬜ Biết cách hỏi AI khi có lỗi (**Debugging flow**)
* ⬜ Không kỳ vọng AI “tự làm đúng hết” (**Manage Limitations**)
