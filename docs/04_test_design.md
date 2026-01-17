# PHẦN 4 – TEST DESIGN: Sinh Test Case bằng AI (30’)

> **Tư duy cốt lõi**:
> *   AI không thể *nghĩ* thay bạn hết các trường hợp, nhưng nó *gợi ý* cực nhanh các trường hợp biên (Edge Cases) mà bạn hay quên.
> *   Test Case tốt = **Scenario** (Làm gì) + **Data** (Nhập cái gì) + **Expected** (Mong đợi gì).
> *   Đừng tin AI 100%. Hãy dùng kinh nghiệm Tester để *Review* và *Lọc* lại.

---

## 1. Phân loại Test Case (Mindset)

Khi test một tính năng (VD: Thêm sản phẩm), hãy nhớ **3 nhóm test** này để yêu cầu AI sinh cho đủ:

### 1️⃣ Boundary (Giá trị biên)
Là nơi lỗi hay xảy ra nhất. AI rất giỏi sinh các case này.
*   Ví dụ:
    *   Giá = 0 (Biên dưới).
    *   Giá = 999,999,999 (Biên trên, tràn số).
    *   Giá = Số âm (Nên chặn).
    *   Tên = Rỗng.
    *   Tên = 255 ký tự (Max length).

### 2️⃣ Logic (Nghiệp vụ)
Các quy tắc kinh doanh của dự án.
*   Ví dụ:
    *   Sản phẩm "Đã ngưng bán" thì không được sửa giá.
    *   Tên sản phẩm không được trùng nhau.

### 3️⃣ UI/UX (Giao diện & Trải nghiệm)
Những thứ mắt thường nhìn thấy.
*   Ví dụ:
    *   Nhập sai -> Phải hiện dòng text báo lỗi màu đỏ.
    *   Nút "Lưu" phải bị disable khi đang loading.

---

## 2. Quy trình "Vibe Testing" (AI-Assisted)

Thay vì ngồi gõ Excel từng dòng, hãy làm theo quy trình:

### Bước 1: Context & Requirement
Cung cấp cho AI biết bạn đang test cái gì. (Copy từ tài liệu specs, hoặc mô tả vắn tắt).

### Bước 2: Prompt sinh Test Case (CGCF)
Dùng Prompt chuẩn để AI sinh bảng Test Case.

### Bước 3: Review & Refine
Đọc lướt, xóa các case vô lý, giữ lại case hay. Bổ sung Expected Result nếu AI viết chung chung.

---

## 3. Thực hành Demo (Test tính năng "Thêm Sản Phẩm")

**Mục tiêu**: Viết bộ Test Case cho form "Add Product" vừa làm ở bài trước.

### Prompt mẫu (Copy vào AI):

```markdown
# Context
Tôi là Tester đang kiểm thử chức năng "Thêm mới Sản phẩm" (Create Product) của web Admin.
- Các trường: Name (Text), Price (Number).
- Tech stack: Node.js Backend, HTML Frontend.

# Goal
Tạo danh sách Test Case đầy đủ cho form này.

# Info (Constraints)
1.  **Phủ đủ 3 loại test**:
    - Boundary: test giá trị rỗng, giá trị tối đa, số âm, số 0.
    - Logic/Validation: test nhập chữ vào ô giá, tên trùng lặp.
    - UI: test thông báo lỗi hiển thị đúng màu đỏ.
2.  **Format**: Trả về dạng Bảng (Markdown Table) gồm các cột:
    - ID (TC01, TC02...)
    - Test Summary (Mô tả ngắn)
    - Test Data (Dữ liệu nhập vào: Name=?, Price=?)
    - Expected Result (Kết quả mong đợi: Hiển thị lỗi gì? Hay lưu thành công?)
    - Type (Positive/Negative)

3.  Lưu ý: Nghiệp vụ yêu cầu "Giá phải > 0" và "Tên không được để trống".
```

### Kết quả mong đợi (AI Output):

| ID | Test Summary | Test Data | Expected Result | Type |
| :--- | :--- | :--- | :--- | :--- |
| TC01 | Thêm thành công data hợp lệ | Name="A", Price=100 | Thông báo "Success", nạp lại bảng | Positive |
| TC02 | Bỏ trống Tên | Name="", Price=100 | Báo lỗi "Tên không được để trống" | Negative |
| TC03 | Nhập Giá số âm | Name="A", Price=-5 | **Báo lỗi "Giá phải lớn hơn 0"** | Negative |
| TC04 | Nhập Giá bằng 0 | Name="A", Price=0 | Báo lỗi "Giá phải lớn hơn 0" | Negative |
| TC05 | Nhập Giá là chữ | Name="A", Price="abc" | Input không cho nhập hoặc báo lỗi | Negative |

---

**Next Step**: Sau khi có bảng Test Case này, ta sẽ dùng AI để chuyển nó thành Code Automation (Selenium) ở bài sau (`05-selenium-pom.md`).
