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

### 2️⃣ Constraints (Luật Ràng buộc)

Không nói ràng buộc → AI tự chọn theo ý nó (**Randomness**).
→ Luôn nói rõ: **không dùng gì, phải theo chuẩn gì (Coding Standards)**.

### 3️⃣ Verification (Luật Kiểm tra)

AI **không chạy code thay bạn**.
→ Mọi thứ phải **chạy được trên máy bạn** (**Local Environment**).
→ Nguyên tắc: **Trust but Verify**.

### 4️⃣ Data (Luật Dữ liệu)

Khi có lỗi (**Bug/Error**), **đưa dữ liệu thật**:

* Logs
* Stacktrace
* Code snippet
* Screenshot

### 5️⃣ Short Loop (Luật Vòng lặp ngắn)

Không nói chuyện dài dòng với AI.
→ **Ask → Run → Fix → Ask again**.

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

> **Lỗi không phải thất bại – lỗi là Input information để sửa.**

---

## 6. Prompting (Hỏi AI thế nào cho đúng?)

### ❌ Bad Prompt (Cách hỏi kém hiệu quả)

> “Sao code này lỗi vậy?” (Lack of Context)

### ✅ Good Prompt (Cách hỏi chuẩn)

> **Context**: Tôi đang làm...
> **Goal**: Mục tiêu là...
> **Constraints**: Ràng buộc là...
> **Error**: Lỗi gặp phải (Logs/Image)...
> **Expectation**: Tôi mong AI giải thích + đề xuất cách sửa

> **Clear Input → Better Output.**

---

## 7. Common Mistakes (Những sai lầm phổ biến)

* ❌ Vague Prompt (Hỏi chung chung)
* ❌ Blind Trust (Tin kết quả AI mà không chạy thử)
* ❌ No Logs (Không đưa log khi debug)
* ❌ Overloaded Request (Hỏi nhiều việc trong 1 câu)

→ **Chỉ cần sửa 4 lỗi này là dùng AI hiệu quả hơn 80%.**

---

## 8. Checklist (Tự kiểm tra)

Bạn đã sẵn sàng nếu:

* ⬜ Biết AI dùng để làm gì (**Purpose**)
* ⬜ Biết mình cần kiểm tra gì (**Verification criteria**)
* ⬜ Biết cách hỏi AI khi có lỗi (**Debugging flow**)
* ⬜ Không kỳ vọng AI “tự làm đúng hết” (**Manage Limitations**)
