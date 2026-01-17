# PHẦN 5 – AUTOMATION: Chuyển Manual thành Code Selenium (POM) (30’)

> **Tư duy cốt lõi**:
> *   Automation chỉ là cách dạy máy tính làm lại những gì bạn đã làm bằng tay (Manual).
> *   Dùng **POM (Page Object Model)** để code gọn gàng, dễ sửa.
> *   Nguyên tắc vàng: **Không dùng `Thread.sleep`**. Hãy dùng `Wait`.

---

## 1. Page Object Model (POM) là gì?

Tưởng tượng Code Test của bạn như một ngôi nhà:
*   **Page Class (Kho đồ)**: Nơi chứa định nghĩa các phần tử (Button, Input...) và hành động (Click, Type...).
    *   *Ví dụ*: `LoginPage.java` chứa `txtUsername`, `btnLogin`, hàm `enterUsername()`.
*   **Test Class (Kịch bản)**: Nơi chứa kịch bản test, chỉ gọi hành động, không quan tâm locators.
    *   *Ví dụ*: `LoginTest.java` gọi `loginPage.enterUsername("admin")`.

**Tại sao cần POM?**
Nếu nút Login đổi ID, bạn chỉ cần sửa 1 dòng trong `LoginPage.java`, thay vì sửa 100 file test script.

---

## 2. Quy trình "Vibe Auto" (AI-Assisted)

### Bước 1: Prompt sinh Page Class
Đưa HTML của trang web cho AI -> Yêu cầu sinh file Java Page Class.

### Bước 2: Prompt sinh Test Class
Đưa Page Class + Bảng Test Case (bài trước) cho AI -> Yêu cầu sinh file Java Test Class.

### Bước 3: Review & Run fit
Chỉnh sửa locator nếu sai, chạy thử và debug.

---

## 3. Thực hành Demo (Automate chức năng "Thêm Sản Phẩm")

**Context**: Bạn đã có HTML của trang `index.html` (từ bài Node.js demo) và bảng Test Case. Giờ ta viết code Selenium Java.

### Prompt 1: Tạo Page Class (ProductPage.java)

```markdown
# Context
Tôi muốn viết Automation Test bằng Selenium Java + TestNG theo mô hình POM.
Dưới đây là HTML của form Thêm Sản phẩm:
(Dán code HTML thực tế vào đây)

# Goal
Tạo file `ProductPage.java`.

# Constraints
1.  Dùng `WebDriver` và `By` locator.
2.  Viết các hành động: `enterName()`, `enterPrice()`, `clickAdd()`, `getSuccessMessage()`, `getErrorMessage()`.
3.  **QUAN TRỌNG**: Sử dụng `WebDriverWait` và `ExpectedConditions` để đợi element xuất hiện trước khi tương tác (Không dùng Thread.sleep).

# Format
Code Java đầy đủ.
```

### Prompt 2: Tạo Test Class (CreateProductTest.java)

```markdown
# Context
Tôi đã có `ProductPage.java` (như trên).
Tôi có Test Case sau cần automate:
1. TC01: Thêm thành công (Name="Ao Thun", Price=50000) -> Expect: msg-success hiện "Success".
2. TC03: Thêm thất bại do giá âm (Name="Ao Thun", Price=-50000) -> Expect: msg-error hiện "Giá phải > 0".

# Goal
Tạo file `CreateProductTest.java` dùng TestNG.

# Constraints
1.  Setup `WebDriver` trong `@BeforeMethod` (Chrome).
2.  TearDown `driver.quit()` trong `@AfterMethod`.
3.  Dùng `Assert` của TestNG để kiểm tra kết quả expected vs actual.

# Format
Code Java đầy đủ.
```

---

## 4. Những lỗi "chết người" khi làm Automation

### 1. Dùng `Thread.sleep(5000)`
*   **Vấn đề**: Code chờ cứng 5s, dù mạng nhanh hay chậm -> Test chạy cực lâu và thiếu ổn định (Flaky).
*   **Giải pháp AI**: Luôn nhắc prompt *"Use Explicit Wait, no Thread.sleep"*.

### 2. Locator dễ đổi (`xpath = /div[1]/div[3]/span`)
*   **Vấn đề**: Dev sửa UI một chút là test fail.
*   **Giải pháp**: Ưu tiên ID, Name, hoặc CSS Class độc nhất. Nhờ AI: *"Suggest robust locators (ID preferred)"*.

### 3. Test phụ thuộc nhau
*   **Vấn đề**: TC02 phụ thuộc kết quả TC01. Nếu TC01 fail, TC02 fail theo.
*   **Giải pháp**: Mỗi test case phải độc lập (Setup/Teardown sạch sẽ data).

---
**Next Step**: Nếu chạy test mà bị fail đỏ lòm? Đừng lo, bài sau (`06-debug-with-ai.md`) sẽ chỉ cách dùng AI sửa lỗi trong 1 nốt nhạc.
