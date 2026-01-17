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
AI **không biết hệ thống của bạn**. Phải nói rõ: đang làm gì, cho ai, trong hoàn cảnh nào.

*   **1. Ví dụ Đời thường (Analogy)**:
    *   ⚠️ **Weak**: "Lên kế hoạch đi Đà Lạt." (Thiếu ngân sách, sở thích).
    *   ✅ **Strong**: "Lên lịch trình **Đà Lạt 3 ngày 2 đêm** cho **4 người**, ngân sách **tiết kiệm**, thích **săn mây**."
*   **2. Ví dụ Tester (Manual + Auto)**:
    *   ⚠️ **Weak**: "Viết kịch bản test Login."
    *   ✅ **Strong**: "Viết Test Case cho **form Login** (gồm: User, Pass, Nút Login), cover cả **Validation, SQL Injection**. Sau đó, viết **Selenium Script** (Java) để tự động chạy các case này."
*   **3. Ví dụ Sinh viên (Code Logic)**:
    *   ⚠️ **Weak**: "Giải thích thuật toán Bubble Sort."
    *   ✅ **Strong**: "Giải thích Bubble Sort bằng **Java**, dùng ví dụ dãy số `[5, 1, 4, 2]` để minh họa từng bước tráo đổi."

### 2️⃣ Constraints (Luật Ràng buộc)
Không nói ràng buộc → AI tự chọn theo ý nó (Randomness). Luôn nói rõ: **không dùng gì, phải theo chuẩn gì**.

*   **1. Ví dụ Đời thường (Analogy)**:
    *   ⚠️ **Weak**: "Nấu món gì ngon ngon từ trứng đi."
    *   ✅ **Strong**: "Nấu món từ trứng, nhưng **không dùng dầu mỡ** (đang giảm cân), chế biến **nhanh dưới 15 phút**."
*   **2. Ví dụ Tester (Manual + Auto)**:
    *   ⚠️ **Weak**: "Viết bug report lỗi này."
    *   ✅ **Strong**: "Viết Bug Report lỗi Login, format chuẩn **Jira** (Summary, Steps, Actual, Expected), Priority **Critical**, viết bằng **Tiếng Anh**."
*   **3. Ví dụ Sinh viên (Code Logic)**:
    *   ⚠️ **Weak**: "Viết hàm tính giai thừa."
    *   ✅ **Strong**: "Viết hàm tính giai thừa bằng **C++**, dùng **Đệ quy (Recursion)**, KHÔNG dùng vòng lặp `for/while`."

### 3️⃣ Verification (Luật Kiểm tra)
AI **không chạy code thay bạn**. Bạn phải chạy trên **Local Environment**. Nguyên tắc: **Trust but Verify**.

*   **1. Ví dụ Đời thường (Analogy)**:
    *   AI gợi ý: "Quán phở A ngon lắm, mở xuyên đêm."
    *   **Verify**: Lên Google Maps/Facebook check lại xem giờ mở cửa thực tế, đừng đi luôn kẻo quán đóng cửa.
*   **2. Ví dụ Tester (Manual + Auto)**:
    *   AI gợi ý: "Dùng `Thread.sleep(5000)` để đợi loading."
    *   **Verify**: Check lại kiến thức → Đây là *bad practice* (đợi cứng làm chậm tool). Phải đổi sang dùng `WebDriverWait` (đợi mềm) mới chuẩn.
*   **3. Ví dụ Sinh viên (Code Logic)**:
    *   AI giải bài toán: "Xác suất là 1.5."
    *   **Verify**: Xác suất luôn <= 1. AI đang tính sai, hãy tính tay lại công thức.

### 4️⃣ Data (Luật Dữ liệu)
Khi có lỗi (**Bug/Error**), **đưa dữ liệu thật**:

*   **1. Ví dụ Đời thường (Analogy)**:
    *   ⚠️ **Weak**: "Xe máy của anh bị hỏng."
    *   ✅ **Strong**: "Xe không đề được, có tiếng kêu 'xẹt xẹt' ở dưới gầm, đèn xe vẫn sáng." (Mô tả triệu chứng cụ thể).
*   **2. Ví dụ Tester (Manual + Auto)**:
    *   ⚠️ **Weak**: "Nút Submit không bấm được."
    *   ✅ **Strong**: "Nút Submit bị xám (disable). Inspect HTML thấy thuộc tính `disabled="true"`. Đã check field bắt buộc điền đủ."
*   **3. Ví dụ Sinh viên (Code Logic)**:
    *   ⚠️ **Weak**: "Code chạy sai rồi."
    *   ✅ **Strong**: "Input nhập `n = 5` thì đúng, nhưng `n = 20` thì ra số âm. Nghi ngờ tràn số kiểu `int`."

### 5️⃣ Short Loop (Luật Vòng lặp ngắn)
Không nói chuyện dài dòng. **Ask → Run → Fix → Ask again**.

*   **1. Ví dụ Đời thường (Analogy)**:
    *   ⚠️ **Weak**: "Lập kế hoạch xây nhà trọn gói từ móng đến nóc kèm nội thất chi tiết."
    *   ✅ **Strong**: "Lên ý tưởng **bố trí phòng khách** trước." (Chốt xong Khách mới qua Bếp, Ngủ).
*   **2. Ví dụ Tester (Manual + Auto)**:
    *   ⚠️ **Weak**: "Viết automation test cho cả trang web Ecommerce."
    *   ✅ **Strong**: "Viết script login thành công trước." (Chạy ổn định rồi mới viết tiếp case login sai, rồi mới qua trang Search).
*   **3. Ví dụ Sinh viên (Code Logic)**:
    *   ⚠️ **Weak**: "Code game Rắn săn mồi hoàn chỉnh."
    *   ✅ **Strong**: "Code chức năng **vẽ con rắn** (hình vuông) lên màn hình đen trước." (Chưa cần di chuyển, chưa cần ăn mồi).

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

**1. Ví dụ Đời thường (Analogy - Đi chợ):**
> **Context**: Đang đi siêu thị mua đồ cho tiệc nướng BBQ cuối tuần.
> **Goal**: Lên danh sách mua đồ cho 6 người ăn.
> **Constraints**: Ngân sách 1 triệu, có 2 người ăn chay, không mua thịt bò.
> **Info**: Đã có sẵn bếp nướng và than.

**2. Ví dụ Tester (Manual - Viết Email):**
> **Context**: Là Manual Tester, cần gửi email cho Dev Team.
> **Goal**: Báo cáo bug Critical ở Production đã được fix xong.
> **Constraints**: Giọng văn chuyên nghiệp, ngắn gọn, CC cho Project Manager.
> **Info**: Bug ID là #JIRA-123.

**3. Ví dụ Sinh viên (Học Code):**
> **Context**: Đang học cấu trúc dữ liệu Stack/Queue.
> **Goal**: Hiểu sự khác nhau giữa Stack và Queue.
> **Constraints**: Giải thích bằng hình ảnh tượng hình (ví dụ đời sống: xếp chồng sách vs xếp hàng), không dùng code phức tạp.

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
    *   *Analogy*: "Mua quà hộ tớ." → *Fix*: "Mua quà sinh nhật cho bạn gái, thích mỹ phẩm, dưới 500k."
    *   *Tester*: "Test trang này đi." → *Fix*: "Test **Giao diện (UI)** trang Home trên **Mobile**."
    *   *Student*: "Giảng bài Pointer." → *Fix*: "Giải thích khái niệm **Pointer trong C** qua ví dụ swap biến."
* ❌ **Blind Trust (Tin kết quả AI mà không kiểm tra)**
    *   *Analogy*: AI bảo "Đi đường này nhanh nhất" (vào ngõ cụt). → *Fix*: Nhìn biển báo thực tế trên đường.
    *   *Tester*: AI bảo "Câu SQL này đúng rồi". → *Fix*: Chạy thử trong Database xem có lỗi cú pháp không.
    *   *Student*: AI viết code dùng thư viện lạ. → *Fix*: Kiểm tra xem trường có cho dùng thư viện đó không.
* ❌ **No Logs (Giấu dữ liệu lỗi)**
    *   *Analogy*: "Bác sĩ ơi tôi đau bụng." → *Fix*: "Đau râm ran vùng rốn từ tối qua, sau khi ăn hải sản."
    *   *Tester*: "Login không được." → *Fix*: "Bấm Login thì loading mãi, F12 thấy lỗi 504 Gateway Time-out."
    *   *Student*: "Bài không chạy." → *Fix*: "Console báo lỗi dòng 10: `IndexOutOfBounds`."
* ❌ **Overloaded (Nhồi nhét quá nhiều việc)**
    *   *Analogy*: "Dọn sạch cả cái nhà 5 tầng trong 1 tiếng." → *Fix*: "Dọn phòng khách tầng 1 trước."
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
