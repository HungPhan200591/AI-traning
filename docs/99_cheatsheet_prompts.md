# 99 – CHEATSHEET: Bộ Prompt "Mì ăn liền" cho Dev & Tester

> **Cách dùng**: Copy đoạn trong khung -> Thay thế phần `[trong ngoặc]` bằng thông tin của bạn -> Paste cho AI.

---

## 1. Prompt Sinh Code (Coding) - Công thức C.G.C.F

Dùng khi muốn tạo tính năng mới, file mới.

```markdown
# Context
Tôi đang làm dự án [Tên dự án] bằng [Công nghệ: Nodejs/Java/React...].

# Goal
Viết code cho chức năng [Tên chức năng: VD Đăng nhập, API Get List...].

# Constraints
1.  Không dùng [Thư viện X].
2.  Xử lý lỗi [Try-catch/Middleware].
3.  Có comment giải thích code.
4.  Tuân thủ cấu trúc [MVC/Layered/POM].

# Format
Trả về full code file [Tên file: controller.js, index.html...].
```

---

## 2. Prompt Sinh Test Case (Manual Test)

Dùng khi bí ý tưởng test.

```markdown
# Context
Tôi là Tester đang kiểm thử chức năng [Tên chức năng].
- Input fields: [Liệt kê trường: Tên, Tuổi, Giá...].
- Logic: [Mô tả ngắn logic].

# Goal
Sinh bảng Test Case đầy đủ (Happy case & Edge case).

# Format
Bảng Markdown gồm: ID, Description, Test Data, Expected Result, Type (Positive/Negative).
**Chú ý**: Phải cover các case biên (Boundary), số âm, rỗng, special chars.
```

---

## 3. Prompt Sinh Automation Code (Selenium/POM)

Dùng khi chuyển manual test sang auto.

```markdown
# Context
Tôi đang viết Auto Test bằng [Selenium Java + TestNG].
Tôi có Page Class [Tên Page] với các element ID: [List ID].

# Goal
Viết Test Class để verify case [Mô tả case: Login sai pass].

# Constraints
1.  Dùng Explicit Wait (Không Thread.sleep).
2.  Assert đúng message lỗi mong đợi: "[Message lỗi]".
3.  Code ngắn gọn, tái sử dụng hàm từ Page Class.

# Format
Code Java class hoàn chỉnh.
```

---

## 4. Prompt Debug / Sửa Lỗi (P.A.R.I)

Dùng khi gặp lỗi đỏ lòm.

```markdown
# Problem
Code của tôi bị lỗi: [Paste tên lỗi: NullPointerException / 404 Not Found].
Stacktrace:
[Paste đoạn log lỗi dài dòng vào đây]

# Info
Đây là đoạn code bị nghi ngờ gây lỗi:
[Paste đoạn code liên quan]

# Action
1. Giải thích nguyên nhân gây lỗi (ngắn gọn).
2. Đưa ra code sửa lỗi (Fix).
3. Giải thích tại sao sửa như vậy lại hết lỗi.
```

---

## 5. Prompt Giải thích Code (Learning)

Dùng khi đọc code người khác (hoặc AI viết) mà không hiểu.

```markdown
Hãy đóng vai Senior Developer.
Giải thích đoạn code dưới đây cho tôi (người mới học) theo phong cách "ELI5" (Explain Like I'm 5 - Giải thích như cho đứa trẻ 5 tuổi).
Dùng ví dụ đời thường (Analogy) để minh họa.

[Paste Code]
```

---

## 6. Prompt Refactor (Tối ưu Code)

Dùng khi muốn code đẹp hơn, xịn hơn.

```markdown
# Context
Đoạn code này đã chạy được nhưng nhìn hơi rối (Spaghetti code).

# Goal
Refactor (tái cấu trúc) lại cho sạch đẹp, dễ đọc, tuân thủ Clean Code.

# Constraints
1.  Giữ nguyên logic nghiệp vụ (không được làm sai chức năng cũ).
2.  Tách hàm con nếu cần.
3.  Đặt lại tên biến cho có nghĩa tiếng Anh.
```

---
**Tip cuối**: Nếu AI trả lời sai hoặc chưa đúng ý? -> Hãy nói: *"Vẫn chưa đúng. Ý tôi là [Giải thích lại]. Hãy làm lại theo constraint mới này..."* (Đừng ngại chửi... à nhầm, góp ý cho AI).
