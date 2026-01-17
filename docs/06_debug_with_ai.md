# PHẦN 6 – DEBUG & EXPLAIN: Sửa lỗi "thần tốc" với AI (30’)

> **Tư duy cốt lõi**:
> *   AI là "Bác sĩ", bạn là "Bệnh nhân". Bệnh nhân khai báo càng rõ, bác sĩ chữa càng nhanh.
> *   Đừng chỉ paste mỗi dòng lỗi. Hãy paste cả **ngữ cảnh** (Code + Log).
> *   Lỗi (Bug) không đáng sợ. Lỗi là cơ hội để học sâu hơn... nếu biết cách hỏi.

---

## 1. Công thức Debug chuẩn (P.A.R.I)

Khi gặp lỗi đỏ lòm, đừng hoảng. Hãy dùng khung **P.A.R.I**:

*   **P - Problem**: Code đang bị lỗi gì? (Copy nguyên Stacktrace).
*   **A - Action**: Bạn muốn AI làm gì? (Giải thích, Sửa code, hay Gợi ý hướng đi?).
*   **R - Result**: Kết quả mong muốn (Code chạy được, Test pass).
*   **I - Information**: File code liên quan, phiên bản (Java mấy, Selenium mấy).

---

## 2. Các tình huống Debug thường gặp

### Tình huống 1: Lỗi biên dịch / Syntax (Compile Error)
Code đỏ lòm trong IDE, không chạy được.
*   **Prompt**: *"Giải thích lỗi này và sửa giúp tôi đoạn code Java dưới đây."* + [Paste Code] + [Paste Error].

### Tình huống 2: Lỗi chạy / Runtime (Exception)
Chạy lên mới chết (VD: `NullPointerException`, `NoSuchElementException`).
*   **Prompt**: *"Tôi bị lỗi `NoSuchElementException` khi chạy Selenium. Có vẻ locator sai hoặc chưa wait. Hãy check giúp tôi file `ProductPage.java` và log lỗi bên dưới."*

### Tình huống 3: Test "Lúc pass lúc fail" (Flaky Test)
Đây là ác mộng của Automation Tester.
*   **Nguyên nhân**: Thường do mạng chậm, element chưa load kịp (Timing issue).
*   **Prompt**: *"Test này thỉnh thoảng fail ở dòng 50. Tôi nghi do Waits. Hãy review code và chuyển tất cả `Thread.sleep` hoặc `ImplicitWait` sang `ExplicitWait` giúp tôi."*

---

## 3. Thực hành Demo (Sửa Bug trong bài Node.js CRUD)

**Tình huống**: Ở bài `03-node-demo.md`, ta đã cố tình nhập giá âm (`-50000`) và hệ thống vẫn lưu. Giờ hãy Fix nó.

**Hành động**:
1.  Copy đoạn code xử lý API POST trong `product.controller.js`.
2.  Viết prompt (P.A.R.I) cho AI.

### Prompt Debug mẫu:

```markdown
# Problem
Người dùng hiện tại có thể nhập giá sản phẩm là số âm (VD: -50000), điều này sai nghiệp vụ.

# Action
Hãy sửa hàm `createProduct` trong đoạn code dưới đây để validate dữ liệu đầu vào.

# Result
Nếu `price` < 0 hoặc `name` rỗng -> Trả về lỗi 400 Bad Request với message "Invalid Data".

# Information
Code hiện tại:
[PASTE CODE JS CỦA TỪNG CONTROLLER VÀO ĐÂY]
```

-> **AI Output**: Sẽ thêm đoạn `if (price < 0) return res.status(400)...` vào đầu hàm.

---

## 4. Checklist vàng khi Debug

1.  **Đọc dòng đầu tiên của Stacktrace**: Nó thường nói thẳng lỗi là gì (VD: `ElementClickInterceptedException` -> Bị che bởi popup khác).
2.  **Đưa đủ Context**: Đừng đưa mỗi thông báo lỗi. Đưa cả đoạn code gây lỗi.
3.  **Hỏi "Tại sao?"**: Sau khi AI đưa code sửa, hãy hỏi *"Tại sao lại sửa như thế?"* để học thêm kiến thức.

---
**Tổng kết Workshop**:
Chúc mừng bạn! Bạn đã đi qua hành trình từ:
1.  Hiểu AI Agent.
2.  Biết viết Prompt xịn (CGCF).
3.  Tự code App Fullstack (Vibe Coding).
4.  Tự viết Test & Automation.
5.  Tự sửa lỗi.

Hãy dùng file `99-cheatsheet-prompts.md` làm hành trang đi làm/đi học mỗi ngày nhé!
