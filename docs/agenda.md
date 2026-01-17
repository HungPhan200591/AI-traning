Dưới đây là **kịch bản workshop 3 giờ (180 phút)** đúng kiểu “AI là đồng nghiệp”, **hands-on**, chạy được, và đủ đơn giản để Manual Tester sợ code vẫn theo kịp.

---

## A) Agenda chi tiết theo từng phút (180’)

> Gợi ý setup trước giờ học (không tính vào 180’): cài Node/Java/IDE/Chrome/ChromeDriver sẵn. Nếu chưa kịp thì dùng phần F để xử lý nhanh trong buổi.

| Thời gian | Phần                  | Mục tiêu                                      | Tôi nói gì (1–2’)                                                | Người học làm gì (hands-on)                                                            | Kết quả mong đợi / Checkpoint                                 |
| --------- | --------------------- | --------------------------------------------- | ---------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 00–05     | Kickoff               | Chốt mục tiêu + “AI là đồng nghiệp”           | “Hôm nay dùng AI để làm việc thật: sinh code, sinh test, debug.” | Mở ChatGPT/AI tool + tạo 1 tab ghi chú                                                 | Ai cũng sẵn sàng: có tool + nơi copy prompt                   |
| 05–20     | (1) The AI Map        | AI vs AI Agent; Gen vs Discriminative         | Giải thích cực ngắn (xem mục B)                                  | Bài tập: copy prompt “AI Map” để AI tự tóm tắt lại theo ngôn ngữ dễ hiểu               | Người học nói lại được: AI ≠ Agent; Gen ≠ Discriminative      |
| 20–35     | (2) Master Prompting  | Biết viết prompt có Context/Constraint/Output | “Prompt tốt = bối cảnh + ràng buộc + đầu ra + ví dụ”             | Bài tập: dùng 1 đề “tạo form nhập giá sản phẩm” và viết 2 phiên bản prompt: kém vs tốt | AI trả ra kết quả khác rõ rệt (so sánh)                       |
| 35–50     | (2) Prompt Frameworks | CO-STAR/RAW/Few-shot/Step-by-step             | “Framework = khung để khỏi quên ý”                               | Bài tập: dùng bảng C, chọn 1 framework áp vào prompt tạo CRUD                          | Prompt có cấu trúc, không lan man                             |
| 50–65     | (3) Vibe Coding       | Sinh project Node CRUD + UI HTML              | “Chúng ta build cực nhanh, để AI làm phần nặng.”                 | Paste prompt D để AI sinh folder + code                                                | Có thư mục + app.js + index.html                              |
| 65–80     | (3) Run & Smoke test  | Chạy app, confirm CRUD chạy                   | “Chạy được trước, đẹp tính sau.”                                 | `npm init -y`, `npm i express`, `node app.js`, mở browser                              | Mở được UI, thêm/sửa/xóa được sản phẩm                        |
| 80–90     | (3) Cố tình bug logic | Nhìn thấy bug “giá âm” tồn tại                | “Bug này để phục vụ test.”                                       | Nhập giá âm và thấy hệ thống vẫn nhận                                                  | Checkpoint: bug reproduce thành công                          |
| 90–105    | (4) AI Test Design    | Sinh test case manual chuẩn                   | “Test tốt: boundary + logic + UI/UX.”                            | Dùng AI sinh test case manual (boundary/logic/ui)                                      | Có danh sách test case rõ ràng, có expected result            |
| 105–125   | (4) Automation setup  | Khởi tạo Maven + Selenium + JUnit/TestNG      | “Automation = project setup + run 1 test.”                       | Tạo project Maven, thêm dependencies, chạy test mở trang                               | Chạy được 1 test mở trang và đóng trình duyệt                 |
| 125–150   | (4) POM Conversion    | Chuyển manual → POM + test class              | “POM: page làm việc với UI; test gọi page.”                      | Dùng 2 prompt vàng: sinh Page Object + sinh Test class                                 | Có `ProductPage` + `ProductTests` chạy pass (trừ case giá âm) |
| 150–165   | (5) Debug & Explain   | AI đọc stacktrace/log, chỉ điểm lỗi           | “Đừng hoảng: đưa log + bối cảnh cho AI.”                         | Cố tình làm hỏng locator, chạy test lấy stacktrace → đưa AI phân tích                  | AI chỉ đúng nguyên nhân + gợi ý fix                           |
| 165–175   | (5) Fix Flaky         | Ổn định test không dùng sleep                 | “Flaky thường do timing.”                                        | Dùng prompt vàng “Fix flaky no Thread.sleep”                                           | Test ổn định hơn: dùng WebDriverWait                          |
| 175–180   | Wrap-up               | Tổng kết + “template prompt” mang về          | “Từ nay: AI = pair QA/Dev.”                                      | Lưu 5 prompt vàng + prompt D                                                           | Người học có bộ prompt dùng lại ngay                          |

---

## B) Giải thích cực kỳ đơn giản: AI vs AI Agent (≤ 8 dòng + ẩn dụ)

* **AI (tool)** giống như **bạn hỏi – nó trả lời**: bạn cần gì thì gõ, nó đưa gợi ý/nội dung.
* **AI Agent** giống như **một trợ lý có thể tự làm việc theo mục tiêu**: biết chia nhỏ việc, làm từng bước, tự kiểm tra rồi báo kết quả.
* Ví dụ đời thường:

  * AI = bạn hỏi “nấu phở sao?” → nó đưa công thức.
  * AI Agent = bạn nói “hãy chuẩn bị bữa phở cho 4 người” → nó lập danh sách nguyên liệu, kế hoạch nấu, nhắc mua đồ, kiểm tra thiếu gì.

---

## C) Bảng so sánh Prompt Framework (CO-STAR vs RAW vs Few-shot vs Step-by-step)

| Framework                                                    | Khi dùng                                                               | Ưu điểm                                  | Nhược điểm                            | Ví dụ prompt ngắn (copy được)                                                                                 |
| ------------------------------------------------------------ | ---------------------------------------------------------------------- | ---------------------------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| **CO-STAR** (Context–Objective–Style–Tone–Audience–Response) | Khi cần AI trả lời “đúng kiểu”, đúng đối tượng (manual tester, intern) | Rất rõ ràng, kiểm soát giọng điệu/đầu ra | Dài hơn                               | “Context: tôi dạy workshop QA… Objective: tạo test case… Audience: manual sợ code… Response: bảng test case…” |
| **RAW** (Role–Action–Workflow)                               | Khi muốn AI hành động như đồng nghiệp, có quy trình                    | Ra checklist/step rõ, dễ hands-on        | Nếu thiếu dữ liệu, AI sẽ đoán         | “Role: QA Architect. Action: design test. Workflow: 1) liệt kê scenario 2) boundary 3) expected…”             |
| **Few-shot**                                                 | Khi bạn có 1–2 ví dụ chuẩn và muốn AI bắt chước                        | Output rất “đúng form”                   | Tốn chỗ vì phải đưa ví dụ             | “Dưới đây là 1 test case mẫu… Hãy tạo thêm 10 test case cùng format…”                                         |
| **Step-by-step / Reasoning-guided**                          | Khi bài toán dễ sai (debug, thiết kế POM, flaky)                       | Giảm lỗi, có lập luận                    | Có thể dài; đôi khi lộ “quá chi tiết” | “Hãy phân tích theo bước: 1) xác định nguyên nhân 2) kiểm tra giả thuyết 3) đề xuất fix…”                     |

> Tip nhanh: **CO-STAR để “đúng kiểu”**, **RAW để “đúng việc”**, **Few-shot để “đúng format”**, **Step-by-step để “đúng logic”**.

---

## D) 1 Prompt hoàn chỉnh sinh project Fullstack Node.js (Express + HTML thuần) + bug giá âm

> Copy–paste nguyên khối dưới đây vào AI:

```text
Bạn là Senior Fullstack Engineer. Hãy sinh một project Node.js + Express + HTML thuần (không framework UI).
Mục tiêu: demo CRUD sản phẩm để dùng cho workshop test & automation.

CONSTRAINTS
- Chỉ dùng Express (không DB). Lưu dữ liệu trong memory (mảng).
- UI: 1 file index.html dùng fetch gọi API.
- API trả JSON, chạy được ngay sau khi npm i express.
- CỐ TÌNH để BUG logic: cho phép tạo/cập nhật sản phẩm với price âm (không validate).
- Nhưng vẫn validate các lỗi đơn giản khác: name rỗng thì báo lỗi 400.

FEATURES
- Product: { id, name, price }
- API:
  - GET /api/products
  - POST /api/products   (nhận {name, price})
  - PUT /api/products/:id
  - DELETE /api/products/:id
- Static:
  - GET / => serve index.html
- UI có:
  - Form: name, price, nút Add
  - Bảng list sản phẩm
  - Nút Delete từng dòng
  - Edit inline đơn giản (hoặc prompt người dùng nhập lại và gọi PUT)

OUTPUT FORMAT (BẮT BUỘC)
1) Cấu trúc thư mục
2) Nội dung đầy đủ file app.js (copy-paste chạy được)
3) Nội dung đầy đủ file public/index.html (copy-paste chạy được)
4) Hướng dẫn chạy ngắn gọn: lệnh npm + url
5) Nêu rõ vị trí BUG (giá âm) nằm ở đâu và vì sao nó lọt qua
```

---

## E) 5 Prompt “vàng” cho Selenium Java (Page Object Model)

### 1) Sinh Page Object

```text
Bạn là QA Automation Architect (Selenium Java). Hãy tạo Page Object Model cho trang CRUD sản phẩm.
Bối cảnh:
- Trang chạy tại http://localhost:3000
- UI có input name (id="name"), input price (id="price"), nút Add (id="addBtn")
- Bảng list có mỗi dòng: name, price, nút Delete (data-id="{id}"), nút Edit (data-id="{id}")
Yêu cầu:
- Dùng Selenium Java
- Page Object: ProductPage
- Có method: open(), addProduct(name, price), deleteById(id), editById(id, newName, newPrice), getAllRowsText()
- Có WebDriverWait, không Thread.sleep
Đầu ra: code class hoàn chỉnh + giải thích ngắn cách dùng.
```

### 2) Sinh Test class

```text
Bạn là Senior SDET. Hãy tạo test class JUnit 5 cho ProductPage theo POM.
Test cases:
1) Add product hợp lệ: name="A", price=10 -> thấy trong list
2) Add product name rỗng -> hiển thị error (hoặc API 400) và UI không thêm dòng
3) BUG case: price = -5 -> hệ thống vẫn cho thêm (expected hiện tại: vẫn thêm) để chứng minh bug
Ràng buộc:
- Setup/teardown rõ ràng
- Dùng WebDriverWait
- Không dùng Thread.sleep
Đầu ra: code ProductTests.java hoàn chỉnh.
```

### 3) Phân tích & giải thích stacktrace lỗi

```text
Bạn là chuyên gia debug Selenium/Java. Đây là stacktrace + mô tả bối cảnh.
Hãy trả lời theo format:
1) Tóm tắt lỗi (1 câu)
2) Nguyên nhân gốc có thể nhất (Top 3)
3) Cách xác minh từng nguyên nhân (step-by-step)
4) Cách fix đề xuất (kèm snippet nếu cần)
5) Cách phòng tránh tái diễn

STACKTRACE:
<<< dán stacktrace ở đây >>>

BỐI CẢNH:
- OS, Chrome version, ChromeDriver version
- Đoạn code test liên quan
- Element locator đang dùng
```

### 4) Fix test flaky (không Thread.sleep)

```text
Bạn là QA Automation Architect. Test Selenium của tôi bị flaky (lúc pass lúc fail).
Ràng buộc: KHÔNG dùng Thread.sleep.
Hãy:
1) Chỉ ra các nguyên nhân flaky thường gặp với web CRUD đơn giản
2) Đề xuất chiến lược wait đúng (ExpectedConditions nào)
3) Refactor đoạn code dưới đây để ổn định hơn (dùng WebDriverWait)
CODE:
<<< dán đoạn code flaky ở đây >>>
```

### 5) Refactor code dễ đọc, dễ bảo trì

```text
Bạn là Senior Java Engineer. Hãy refactor code Selenium Java theo tiêu chí:
- Clean code, method ngắn
- Tên hàm rõ nghĩa
- Tách locator, tách wait helper
- POM chuẩn, test chỉ gọi hành vi, không đụng locator
Đầu ra:
1) Danh sách vấn đề hiện tại (bullet)
2) Code đã refactor (các class cần thiết)
3) Giải thích trade-off ngắn
CODE HIỆN TẠI:
<<< dán code ở đây >>>
```

---

## F) Hướng dẫn setup môi trường nhanh + 5 lỗi thường gặp

### Setup nhanh (đủ để chạy workshop)

**1) Node.js**

* Cài Node.js LTS
* Kiểm tra:

  * `node -v`
  * `npm -v`

**2) Java**

* Cài JDK 17 (hoặc 11)
* Kiểm tra: `java -version`

**3) IDE**

* IntelliJ IDEA Community (Java)
* VS Code (Node) (tuỳ)

**4) Selenium Java + Maven**

* Tạo Maven project
* Thêm dependencies (gợi ý tối giản):

  * selenium-java
  * junit-jupiter
* Có plugin surefire để chạy test

**5) ChromeDriver**

* Cài Chrome
* Dùng ChromeDriver đúng version Chrome (hoặc dùng Selenium Manager nếu bạn dùng Selenium 4.6+)

---

### 5 lỗi setup thường gặp và cách xử lý

1. **`node: command not found`**

* Nguyên nhân: chưa cài Node hoặc PATH chưa có
* Cách làm: cài Node LTS, mở terminal mới, chạy lại `node -v`

2. **`Error: Cannot find module 'express'`**

* Nguyên nhân: chưa cài express
* Cách làm:

  * Trong thư mục project: `npm init -y`
  * `npm i express`

3. **Port bị chiếm: `EADDRINUSE: address already in use 3000`**

* Nguyên nhân: port 3000 đang chạy app khác
* Cách làm:

  * Đổi port trong app.js (vd 3001) hoặc tắt process đang dùng port

4. **Selenium: `SessionNotCreatedException` / mismatch ChromeDriver**

* Nguyên nhân: ChromeDriver không khớp version Chrome
* Cách làm:

  * Update ChromeDriver đúng version Chrome
  * Hoặc dùng Selenium Manager (Selenium mới) để tự resolve driver

5. **`java.lang.IllegalStateException: The path to the driver executable...`**

* Nguyên nhân: chỉ định driver sai/thiếu
* Cách làm:

  * Nếu dùng Selenium Manager: bỏ `System.setProperty("webdriver.chrome.driver", ...)`
  * Nếu tự chỉ định: set đúng path và đảm bảo file tồn tại

> Bonus lỗi hay gặp: **ElementNotInteractable / NoSuchElement**

* Cách làm nhanh: thêm WebDriverWait + chờ element visible/clickable, kiểm tra locator đúng chưa.

---

### Tự check chất lượng (đúng yêu cầu bạn đưa)

* 180 phút: có agenda theo phút + checkpoint từng đoạn ✅
* Manual tester sợ code: mỗi phần có “nói nhanh” + bài tập từng bước, ưu tiên copy–paste ✅
* Prompt copy–paste dùng ngay: mục D + E ✅
* Output rõ: project chạy + reproduce bug + test case + POM + debug ✅

Nếu bạn muốn, mình có thể **đính kèm luôn template code Maven (pom.xml) + skeleton ProductPage/ProductTests tối giản** để bạn copy vào buổi học (để khỏi mất thời gian gõ).
