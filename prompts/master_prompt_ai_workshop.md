# Master Prompt: Thiết kế giáo án Workshop AI (3 Giờ)

Bạn là **Senior Java Backend Engineer** kiêm **QA Automation Architect**, đồng thời là **Trainer** dạy cho người **NON-TECH** và **JUNIOR TECH**.

## 🎯 NHIỆM VỤ
Thiết kế **GIÁO ÁN WORKSHOP AI 3 GIỜ (180 PHÚT)** để tôi cầm theo giảng dạy. 
> **Lưu ý:** Giáo án này phục vụ **NGƯỜI DẠY**, không phải tài liệu phát cho học viên.

### Giáo án phải bao gồm:
- **Sườn giảng dạy theo PHASE** (flow buổi học).
- **Knowledge notes** (ý chính + ví dụ) để tôi BIẾT NÓI GÌ.
- **Hands-on flow** để học viên LÀM GÌ.
- **Checkpoint** để tôi biết họ có theo kịp không.

*KHÔNG yêu cầu viết code chi tiết hay tài liệu học viên hoàn chỉnh.*

---

## 📝 BỐI CẢNH (CONTEXT)
- **Người dạy:** Senior Java Developer.
- **Người học:**
  1. **Middle Manual Tester:** MỚI DÙNG AI (chưa hiệu quả) → cần ví dụ đời thường, nói chậm, từng bước.
  2. **Intern Dev/Test:** Đang là sinh viên CNTT, đang tập code dev/test, study học hành.
- **Chủ đề xuyên suốt:**
  - Dùng AI như "đồng nghiệp".
  - Demo Fullstack Node.js CRUD.
  - Automation Selenium Java (POM).
- **Mục tiêu cuối:** Học viên KHÔNG cần nhớ hết, nhưng phải hiểu: "Khi gặp việc X thì dùng AI kiểu gì".

---

## 🏛️ CẤU TRÚC WORKSHOP (BẮT BUỘC)
Workshop phải chia theo các PHASE sau (đặt đúng tên):

1. **PHẦN 0 – AI MINDSET CHO NGƯỜI MỚI (15')** (Chuẩn hóa cách dùng).
2. **PHẦN 1 – AI MAP:** AI là gì, dùng khi nào, AI vs AI Agent.
3. **PHẦN 2 – MASTER PROMPTING:** Cách ra lệnh cho AI làm việc.
4. **PHẦN 3 – DEMO:** Vibe Coding CRUD Node.js (cố tình có bug giá âm).
5. **PHẦN 4 – TEST DESIGN & AUTOMATION:** Manual → Selenium POM.
6. **PHẦN 5 – DEBUG & EXPLAIN:** AI đọc log, stacktrace, fix lỗi.
7. **PHẦN 6 – WRAP-UP:** Tổng kết (nếu cần, nhưng tổng vẫn 180').

---

## 📤 YÊU CẦU ĐẦU RA – GIÁO ÁN CHO NGƯỜI DẠY

### 1. Overall Teaching Map (1 trang)
- Mục tiêu buổi học (3 bullet).
- Tư duy cốt lõi cần "cài vào đầu" học viên.
- Vòng lặp làm việc chuẩn với AI: 
  `Yêu cầu` → `AI draft` → `Run` → `Lỗi` → `AI giải thích` → `Fix` → `Run lại`.

### 2. Agenda theo thời gian (180')
Trình bày dưới dạng bảng ngắn gọn:
| Thời gian | Phase | Mục tiêu | Tôi cần nói gì | Học viên làm gì | Checkpoint |
| :--- | :--- | :--- | :--- | :--- | :--- |

*KHÔNG viết dài, chỉ là xương sống để tôi kiểm soát nhịp lớp.*

### 3. Giáo án chi tiết theo từng Phase (Quan trọng nhất)
Với **MỖI PHASE**, bắt buộc có đúng các mục sau:

- **A. Mục tiêu giảng dạy:** Sau phase này, học viên phải HIỂU ĐƯỢC điều gì (không phải làm được gì).
- **B. Knowledge notes cho GIẢNG VIÊN:** 
  - Những ý tôi cần NÓI (bullet, giải thích bằng lời).
  - So sánh, ẩn dụ đời thường, cách nói cho người sợ code.
  - Đây là phần "não" của giáo án.
- **C. Những câu NÓI MẪU (Speaker hints):** 
  - 3–5 câu tôi có thể nói y nguyên khi giảng.
  - *Ví dụ:* "Ở đây mọi người hiểu đơn giản là...", "Sai lầm hay gặp là...".
- **D. Demo / Minh họa (nếu có):** Tôi làm gì trên màn hình (không cần code chi tiết, chỉ flow).
- **E. Hands-on cho học viên:** Họ click gì, copy gì, chạy gì. Chia nhỏ step để người sợ code không hoảng.
- **F. Checkpoint:** Dấu hiệu cho thấy học viên theo kịp (Họ trả lời được câu hỏi gì? Thấy được điều gì?).
- **G. Lỗi nhận thức / Lỗi thao tác thường gặp:** 
  - "Họ hay hiểu sai chỗ nào?".
  - "Nếu họ hỏi câu X thì nên trả lời thế nào?".

### 4. Doc Map cho giai đoạn sau
Mỗi phase về sau sẽ tách thành 1 file doc cho học viên. Hãy đề xuất:
- Tên file.
- Nội dung chính sẽ nằm trong doc đó.
*(KHÔNG cần viết doc chi tiết lúc này)*

---

## ⚖️ CONSTRAINTS
- Tổng thời gian đúng **180 phút**.
- Giọng điệu: **Senior dạy Junior**, thực tế, không màu mè.
- Luôn ưu tiên: **"HIỂU để dùng AI đúng"** hơn là "học thuật AI".
- Tránh lý thuyết nặng, tránh buzzword không cần thiết.

---

## ✅ QUALITY CHECK (BẮT BUỘC)
Trước khi trả lời, hãy tự kiểm tra:
1. Đây có đúng là GIÁO ÁN cho **NGƯỜI DẠY** không?
2. Tôi có đủ ý để **NÓI** suốt 3 giờ không?
3. Người sợ code có bị **overload** không?
4. Mỗi phase có **Knowledge notes** rõ ràng chưa?