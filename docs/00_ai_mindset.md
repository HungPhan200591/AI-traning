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

*   **Ví dụ 1 (Tester/Đời thường):**
    *   ⚠️ **Weak**: "Lên kế hoạch đi Đà Lạt cho 4 người." 
    *   ✅ **Strong**: "Lên lịch trình đi **Đà Lạt 3 ngày 2 đêm**, cho **nhóm bạn 4 người**, ngân sách **tiết kiệm**, thích **săn mây và chụp ảnh**."
*   **Ví dụ 2 (Sinh viên/Code):**
    *   ⚠️ **Weak**: "Giải thích thuật toán Bubble Sort."
    *   ✅ **Strong**: "Giải thích thuật toán Bubble Sort bằng **Java**, dùng ví dụ **dãy số [5, 1, 4, 2]**, minh họa từng bước tráo đổi."

### 2️⃣ Constraints (Luật Ràng buộc)
Không nói ràng buộc → AI tự chọn theo ý nó (**Randomness**).
→ Luôn nói rõ: **không dùng gì, phải theo chuẩn gì (Coding Standards)**.

*   **Ví dụ 1 (Tester - Công việc):**
    *   ⚠️ **Weak**: "Viết bug report cho lỗi đăng nhập."
    *   ✅ **Strong**: "Viết Bug Report lỗi đăng nhập, format chuẩn **Jira** (Summary, Steps, Actual, Expected), dùng **tiếng Anh**, Severity **High**."
*   **Ví dụ 2 (Sinh viên - Bài tập):**
    *   ⚠️ **Weak**: "Viết hàm tính giai thừa."
    *   ✅ **Strong**: "Viết hàm tính giai thừa bằng **C++**, dùng **Đệ quy (Recursion)**, KHÔNG dùng vòng lặp `for/while`."

### 3️⃣ Verification (Luật Kiểm tra)
AI **không chạy code thay bạn**. Bạn phải chạy trên **Local Environment**.
→ Nguyên tắc: **Trust but Verify**.

*   **Ví dụ 1 (Tester):**
    *   AI gợi ý: "Dùng tool `Selenium IDE` record màn hình."
    *   Thực tế: Công ty cấm cài extension lạ -> **Verify**: Check policy công ty trước khi tin.
*   **Ví dụ 2 (Sinh viên):**
    *   AI giải bài toán xác suất thống kê ra kết quả `0.2`.
    *   **Verify**: Tính tay lại công thức xem logic đúng không, đừng chép ngay vào bài thi.

### 4️⃣ Data (Luật Dữ liệu)
Khi có lỗi (**Bug/Error**), **đưa dữ liệu thật**:

*   **Ví dụ 1 (Tester):**
    *   ⚠️ **Weak**: "Nút Submit không bấm được."
    *   ✅ **Strong**: "Nút Submit bị xám (disable). Inspect HTML thấy thuộc tính `disabled="true"`. Screenshot đính kèm..."
*   **Ví dụ 2 (Sinh viên):**
    *   ⚠️ **Weak**: "Bài code này chạy ra sai."
    *   ✅ **Strong**: "Input nhập `n = 5` thì đúng, nhưng `n = 20` thì ra số âm (sai). Nghi ngờ tràn số kiểu `int`."

### 5️⃣ Short Loop (Luật Vòng lặp ngắn)
Không nói chuyện dài dòng. **Ask → Run → Fix → Ask again**.

*   **Ví dụ 1 (Tester):**
    *   ⚠️ **Weak**: "Viết 100 test case cho cả website bán hàng." (AI sẽ viết sơ sài, lặp lại).
    *   ✅ **Strong**: "Viết test case cho **Màn hình Đăng nhập** trước. Xong màn này mới qua màn Giỏ hàng."
*   **Ví dụ 2 (Sinh viên):**
    *   ⚠️ **Weak**: "Code cả game Rắn săn mồi hoàn chỉnh."
    *   ✅ **Strong**: "Code chức năng **vẽ con rắn di chuyển** trên màn hình đen trước." (Chưa cần ăn mồi, chưa cần tính điểm).

---

## 5. Standard Workflow (Quy trình chuẩn)

```
1. Define Request (Nói rõ yêu cầu)
2. AI blocks Draft (AI tạo bản nháp)
3. User Verify (Bạn chạy thử/đọc kỹ)
4. Error? -> Feed Logs to AI (Có lỗi -> đưa lỗi cho AI)
5. AI Explain/Fix (AI giải thích / đề xuất sửa)
6. Peer Review & Retry (Bạn sửa và chạy lại)
```

### Example Scenario (Ví dụ: Testing):
*   **Bước 1**: "Viết Checklist test cho màn hình Đổi Mật Khẩu."
*   **Bước 2**: AI liệt kê 10 dòng (Pass/Fail).
*   **Bước 3 (Verify)**: Bạn đọc thấy thiếu trường hợp "Mật khẩu mới trùng mật khẩu cũ".
*   **Bước 4 (Feedback)**: "Bổ sung case: mật khẩu mới giống cũ thì phải chặn."
*   **Bước 5**: AI cập nhật checklist.
*   **Bước 6**: Bạn chốt checklist và bắt đầu test.

---

## 6. Prompting (Hỏi AI thế nào cho đúng?)

### ⚠️ Weak Prompt (Cách hỏi chưa nét)
> “Viết email xin nghỉ phép.”
→ *(Thiếu lý do, số ngày, gửi ai, thái độ nào)*

### ✅ Strong Prompt (Cách hỏi đầy đủ)

**Template:**
> **Context**: Tôi là [Vai trò], đang làm [Việc gì]...
> **Goal**: Mục tiêu là [Kết quả]...
> **Constraints**: Ràng buộc [Quy tắc/Format]...
> **Info/Error**: Dữ liệu đầu vào hoặc Lỗi...

**Ví dụ 1 (Dành cho Tester - Viết Email):**
> **Context**: Là Manual Tester, cần gửi email cho Dev Team.
> **Goal**: Báo cáo việc bug Critical ở Production đã được fix xong.
> **Constraints**: Giọng văn chuyên nghiệp, ngắn gọn, CC cho Project Manager.
> **Info**: Bug ID là #JIRA-123.

**Ví dụ 2 (Dành cho Sinh viên - Học code):**
> **Context**: Đang học cấu trúc dữ liệu Stack/Queue.
> **Goal**: Hiểu sự khác nhau giữa Stack và Queue.
> **Constraints**: Giải thích bằng hình ảnh tượng hình (ví dụ đời sống), không dùng code phức tạp.

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
    *   *Tester*: "Test trang này đi." → *Fix*: "Test **Giao diện (UI)** trang Home trên **Mobile**."
    *   *Student*: "Giảng bài Pointer." → *Fix*: "Giải thích khái niệm **Pointer trong C** qua ví dụ swap biến."
* ❌ **Blind Trust (Tin kết quả AI mà không kiểm tra)**
    *   *Tester*: AI bảo "Câu SQL này đúng rồi". → *Fix*: Chạy thử trong Database xem có ra kết quả thật không.
    *   *Student*: AI viết code dùng thư viện lạ. → *Fix*: Kiểm tra xem mình đã học/được dùng thư viện đó chưa.
* ❌ **No Logs (Giấu dữ liệu lỗi)**
    *   *Tester*: "Login không được." → *Fix*: "Bấm Login thì loading mãi, F12 thấy lỗi 504 Gateway Time-out."
    *   *Student*: "Bài không chạy." → *Fix*: "Console báo lỗi dòng 10: `IndexOutOfBounds`."
* ❌ **Overloaded (Nhồi nhét quá nhiều việc)**
    *   *Tester*: "Viết full kịch bản test cho cả dự án." → *Fix*: "Viết kịch bản test cho **luồng Quên mật khẩu**."
    *   *Student*: "Làm game cờ vua." → *Fix*: "Làm **bàn cờ và quân Tốt** di chuyển được trước."

→ **Chỉ cần sửa 4 lỗi này là dùng AI hiệu quả hơn 80%.**

---

## 9. Checklist (Tự kiểm tra)

Bạn đã sẵn sàng nếu:

* ⬜ Biết AI dùng để làm gì (**Purpose**)
* ⬜ Biết mình cần kiểm tra gì (**Verification criteria**)
* ⬜ Biết cách hỏi AI khi có lỗi (**Debugging flow**)
* ⬜ Không kỳ vọng AI “tự làm đúng hết” (**Manage Limitations**)
