## 1️⃣ OVERALL TEACHING MAP (1 trang)

### Mục tiêu buổi học (3 bullet)

* Biết dùng AI như **đồng nghiệp** để: sinh code, sinh test case, chuyển manual→automation, debug.
* Biết **ra lệnh đúng** (prompt đúng) thay vì hỏi đáp lan man.
* Biết **verify**: chạy thử, đọc lỗi, đưa log cho AI, sửa và chạy lại.

### Tư duy cốt lõi cần “cài vào đầu”

* AI giống **intern siêu nhanh**: làm được nhiều nhưng hay bịa/sai → **bắt nó chứng minh bằng output chạy được**.
* “Prompt càng rõ → AI càng tốt”: thiếu context/constraint thì AI đoán.
* Làm việc với AI theo vòng lặp ngắn: **ra lệnh → chạy → sai → sửa** (không ngồi tranh luận).

### Vòng lặp làm việc chuẩn với AI

**Yêu cầu → AI draft → Run → Lỗi → AI giải thích → Fix → Run lại**
Quy tắc lớp học: *“Không hiểu thì đưa log / screenshot / snippet cho AI, đừng đoán.”*

---

## 2️⃣ AGENDA THEO THỜI GIAN (180’)

| Thời gian | Phase   | Mục tiêu                  | Tôi cần nói gì                         | Học viên làm gì                          | Checkpoint                  |
| --------- | ------- | ------------------------- | -------------------------------------- | ---------------------------------------- | --------------------------- |
| 00–05     | Kickoff | Chốt mục tiêu + luật chơi | “AI là đồng nghiệp, không phải thần”   | Mở AI tool + tạo note                    | Ai cũng sẵn tool + note     |
| 05–20     | PHẦN 0  | Chuẩn hóa Mindset         | “Hôm nay học ra lệnh”                  | Viết 1 việc họ hay làm                   | Nói lại “AI = intern”       |
| 20–45     | PHẦN 1  | AI map + AI vs Agent      | “Tool vs Agent khác gì?”               | Chọn 5 tình huống → tool/agent           | Phân loại đúng 4/5          |
| 45–75     | PHẦN 2  | Master prompting          | “Context/Constraint/Output”            | Viết prompt tệ→sửa prompt tốt            | Thấy output khác rõ         |
| 75–110    | PHẦN 3  | Demo CRUD Node            | “Vibe coding: đọc-chạy-sửa”            | Copy project → chạy app → thử giá âm     | App chạy + bug reproduce    |
| 110–140   | PHẦN 4  | Test design + POM         | “Manual test = scenario+data+expected” | AI sinh test case + chọn top 5 + map POM | Có list test + skeleton POM |
| 140–170   | PHẦN 5  | Debug & explain           | “Đưa stacktrace cho AI đúng format”    | Cố tình fail 1 test → paste log → fix    | Test ổn định hơn            |
| 170–180   | PHẦN 6  | Wrap-up                   | “Bộ prompt mang về + workflow”         | Lưu 5 prompt chuẩn                       | Ai có prompt set            |

---

## 3️⃣ GIÁO ÁN CHI TIẾT THEO TỪNG PHASE

# PHẦN 0 – AI MINDSET CHO NGƯỜI MỚI (CHUẨN HÓA CÁCH DÙNG) (15’)

### A. Mục tiêu giảng dạy

Học viên hiểu: **chuyển từ "hỏi chơi" sang "giao việc"**, biết **cách ra lệnh cho AI** và **cách kiểm tra kết quả**.

### B. Knowledge notes cho GIẢNG VIÊN

* Sai lầm thường gặp của người mới:
  * Tin tưởng tuyệt đối (AI nói gì cũng tin).
  * Hỏi chung chung như Google ("Làm sao test cái này?").
  * Dùng sai tool (lấy AI tạo ảnh đi hỏi code).
* Định vị AI: **intern** (làm nhanh, cần review).
  Review ở đây = chạy thử + check output.
* Quy ước: “Không đánh nhau với AI bằng cảm xúc” → **đưa dữ liệu** (log, file, yêu cầu cụ thể).

### C. Những câu NÓI MẪU

* “Mọi người cứ coi AI như một bạn intern: làm nhanh nhưng hay bịa, mình là người duyệt.”
* “Hôm nay mục tiêu là *biết ra lệnh* và *biết kiểm tra*, không phải học lý thuyết.”
* “Không hiểu thì copy lỗi đưa AI, đừng đoán.”

### D. Demo / Minh họa

* Cho 1 ví dụ prompt tệ: “Tạo app CRUD giúp tôi” → AI trả chung chung.
* Sửa prompt tốt: thêm context + output format → AI trả ra folder + file + run commands.

### E. Hands-on cho học viên

1. Mỗi người viết 1 câu: “Tôi muốn AI giúp tôi ____ (việc cụ thể).”
2. Bạn cho template prompt 6 dòng (ngắn) để họ fill.
3. Dán vào AI và đọc kết quả: “Nó trả đúng cái mình muốn chưa?”

### F. Checkpoint

* Họ nói được 2 điều:

  1. “AI làm nhanh nhưng phải kiểm tra”
  2. “Muốn AI làm đúng phải nói rõ output mình muốn”

### G. Lỗi nhận thức / thao tác thường gặp

* **Họ nghĩ AI luôn đúng** → bạn chốt: “AI không chạy code trên máy bạn, nó chỉ dự đoán.”
* **Họ ngại paste lỗi vì sợ dài** → dạy: “Paste phần ERROR + 20 dòng quanh nó là đủ.”
* **Họ viết prompt kiểu kể chuyện** → nhắc: “Viết như giao ticket: mục tiêu + ràng buộc + output.”

---

# PHẦN 1 – AI MAP: AI là gì, dùng khi nào, AI vs AI Agent (25’)

### A. Mục tiêu giảng dạy

Học viên hiểu: **khi gặp việc X thì dùng AI kiểu Y**, và phân biệt **AI tool** vs **AI agent**.

### B. Knowledge notes cho GIẢNG VIÊN

* AI thường dùng trong Dev/Test (5 nhóm):

  1. Generate (sinh code/boilerplate)
  2. Design (sinh test case, checklist)
  3. Translate (manual → automation)
  4. Diagnose (đọc log/stacktrace)
  5. Improve (refactor/readability)
* **AI tool**: phản hồi theo câu hỏi đơn lẻ.
* **AI agent**: nhận mục tiêu, tự chia nhỏ bước, tự check tiến độ.
* Gen vs Discriminative:

  * Gen: tạo mới (code/test/text)
  * Discriminative: phân loại/đánh giá (pass/fail, spam/not spam)
    Trong workshop: dùng Gen là chính, “discriminative mindset” để verify.

### C. Những câu NÓI MẪU

* “Tool giống Google trả lời; Agent giống trợ lý biết tự làm theo kế hoạch.”
* “AI mạnh nhất ở: sinh nhanh + giải thích nhanh, nhưng yếu ở: đoán bừa khi thiếu dữ liệu.”
* “AI không thay mình test, nó giúp mình test nhanh hơn.”

### D. Demo / Minh họa

* Cho AI 1 goal kiểu agent: “Lập kế hoạch làm CRUD + test + debug trong 6 bước, mỗi bước 1 dòng.”

### E. Hands-on cho học viên

1. Bạn đưa 5 tình huống (viết sẵn):

   * “Sinh project CRUD”
   * “Sinh test case boundary”
   * “Giải thích stacktrace”
   * “Refactor POM”
   * “Lập kế hoạch workshop 30 phút”
2. Họ chọn tool/agent + nói 1 câu lý do.
3. Dán 1 prompt agent-plan vào AI.

### F. Checkpoint

* Họ phân loại đúng ít nhất 4/5 tình huống.
* Họ nói được: “Agent cần goal + constraint + output”.

### G. Lỗi nhận thức / thao tác thường gặp

* **Nhầm agent = tool** (chỉ hỏi 1 câu) → dạy: agent phải có “plan + deliverables”.
* **Plan quá dài** → giới hạn: “tối đa 6 bước, mỗi bước 1 dòng”.
* **Họ hỏi lan man** → chốt: “1 lần 1 việc, vòng lặp ngắn”.

---

# PHẦN 2 – MASTER PROMPTING (30’)

### A. Mục tiêu giảng dạy

Học viên hiểu và dùng được 1 **prompt template chuẩn** để: sinh code, sinh test, debug.

### B. Knowledge notes cho GIẢNG VIÊN

* Prompt tốt = **ticket** chứ không phải “tâm sự”.
* 4 thành phần tối quan trọng:

  1. Context (hệ thống gì, ai dùng)
  2. Constraints (không dùng gì, phải theo chuẩn gì)
  3. Output format (muốn AI trả theo cấu trúc nào)
  4. Examples (nếu cần format cố định)
* Quy tắc “anti-hallucination”:

  * “Nếu thiếu thông tin, hãy hỏi lại 3 câu” (dùng cho intern)
  * Hoặc “nếu thiếu, giả định X và ghi rõ giả định” (dùng cho flow nhanh)

### C. Những câu NÓI MẪU

* “Prompt càng giống ticket Jira thì AI càng giống dev thật.”
* “Muốn copy–paste chạy được: bắt AI in folder + file + run commands.”
* “Nếu AI trả lan man: lỗi của prompt, không phải lỗi của AI.”

### D. Demo / Minh họa

* Bạn live sửa 1 prompt tệ → prompt tốt (thêm output format).
* Bạn cho AI trả kết quả theo “BEGIN/END” để dễ copy.

### E. Hands-on cho học viên

1. Mỗi người viết prompt “Sinh CRUD Node”.
2. Thêm constraint: “HTML thuần, Express, không DB, data in-memory”.
3. Thêm output format: “folder structure + full code + run”.
4. Chạy thử prompt.

### F. Checkpoint

* AI trả ra output có cấu trúc, có lệnh chạy.
* Học viên biết “thiếu gì thì bổ sung vào constraint”.

### G. Lỗi nhận thức / thao tác thường gặp

* **Prompt thiếu output format** → AI trả kiểu blog → fix: thêm format bắt buộc.
* **Prompt yêu cầu mâu thuẫn** (vừa “không framework” vừa “React”) → nhắc: constraint phải nhất quán.
* **Họ quên mục tiêu** → bắt viết 1 câu “Definition of Done”.

---

# PHẦN 3 – DEMO: Vibe Coding CRUD Node.js (35’)

### A. Mục tiêu giảng dạy

Học viên hiểu: AI giúp **khởi tạo nhanh**, mình tập trung **chạy được + tạo bug có chủ đích** để test.

### B. Knowledge notes cho GIẢNG VIÊN

* “Vibe coding” = không gõ nhiều, ưu tiên tốc độ, miễn chạy được.
* Bug giá âm là “mồi” để:

  * manual test bắt được
  * automation test chứng minh
* Dạy mindset: “Đầu tiên chạy được, rồi mới đẹp.”

### C. Những câu NÓI MẪU

* “Bây giờ AI là dev, mình là reviewer.”
* “Bug không xấu: bug là nguyên liệu để QA làm nghề.”
* “Chạy được trên máy mọi người là checkpoint số 1.”

### D. Demo / Minh họa

* Bạn paste prompt sinh project.
* Bạn chạy `npm i`, `node app.js`, mở browser.
* Bạn nhập price = -5 để thấy bug.

### E. Hands-on cho học viên

1. Copy folder + app.js + index.html từ AI output.
2. Chạy lệnh npm.
3. Mở browser test CRUD.
4. Thử case giá âm (bug).

### F. Checkpoint

* App chạy, thêm/xóa/sửa được.
* Bug giá âm reproduce được.

### G. Lỗi nhận thức / thao tác thường gặp

* `Cannot find module 'express'` → `npm i express`
* `EADDRINUSE 3000` → đổi port hoặc tắt app khác
* Mở sai URL → nhắc “[http://localhost:PORT”](http://localhost:PORT”)

---

# PHẦN 4 – TEST DESIGN & AUTOMATION (30’)

### A. Mục tiêu giảng dạy

Học viên hiểu: **manual test case** là input-output rõ ràng, và automation chỉ là “đi lại các bước đó bằng code”.

### B. Knowledge notes cho GIẢNG VIÊN

* Test case tối thiểu phải có: scenario + test data + expected.
* 3 nhóm test chính:

  * Boundary: rỗng, min/max, âm, cực lớn
  * Logic: rule nghiệp vụ (giá không âm)
  * UI/UX: lỗi hiển thị, thông báo, disable button
* POM: tách “cách thao tác UI” khỏi “kịch bản test”.

### C. Những câu NÓI MẪU

* “Test case không phải văn hay chữ tốt. Nó là kịch bản kiểm chứng.”
* “POM giúp test readable: test gọi hành vi, không đụng locator.”
* “Automation chạy lại manual, không phải phát minh mới.”

### D. Demo / Minh họa

* Cho AI sinh list test case.
* Chọn top 5 để automation.
* Cho AI sinh skeleton POM + test class (chưa cần full chạy).

### E. Hands-on cho học viên

1. Dán prompt: “Sinh test case boundary/logic/ui cho CRUD”.
2. Pick 5 case.
3. Dán prompt: “Sinh Page Object + Test class theo POM”.

### F. Checkpoint

* Có list test case rõ expected.
* Có file/class skeleton POM + test.

### G. Lỗi nhận thức / thao tác thường gặp

* Test case mơ hồ (“kiểm tra hoạt động đúng”) → ép expected cụ thể (“hiện error message X”)
* Automation dính locator trong test → nhắc “locator ở Page class”
* Quên negative tests → nhắc “boundary luôn có âm/0/rỗng”

---

# PHẦN 5 – DEBUG & EXPLAIN (30’)

### A. Mục tiêu giảng dạy

Học viên biết: đưa log/stacktrace cho AI đúng cách để **chẩn đoán nhanh + gợi ý fix + giảm flaky**.

### B. Knowledge notes cho GIẢNG VIÊN

* Debug pattern:

  1. đọc lỗi
  2. xác định “đang fail ở đâu”
  3. giả thuyết nguyên nhân
  4. verify
  5. fix
* Selenium hay fail vì:

  * timing (element chưa render)
  * locator yếu
  * test phụ thuộc data state
* “Không Thread.sleep”: dùng WebDriverWait + ExpectedConditions.

### C. Những câu NÓI MẪU

* “Đưa cho AI: stacktrace + đoạn code + bối cảnh. Không đủ thì nó đoán.”
* “Flaky đa phần là timing, không phải ‘máy hên xui’.”
* “Wait đúng chỗ thay vì sleep bừa.”

### D. Demo / Minh họa

* Bạn cố tình đổi id element để test fail.
* Copy stacktrace → dán vào prompt debug format.
* AI trả root cause + fix; bạn áp vào.

### E. Hands-on cho học viên

1. Cho test fail (bằng 1 lỗi dễ).
2. Dán stacktrace vào AI theo format.
3. Apply fix (đổi locator/wait).

### F. Checkpoint

* Họ đọc được: “NoSuchElement nghĩa là không tìm thấy”
* Fix xong test pass hoặc fail “đúng lý do”.

### G. Lỗi nhận thức / thao tác thường gặp

* Dán stacktrace thiếu phần đầu (Exception type) → nhắc dán từ dòng “Exception…”
* AI đề xuất Thread.sleep → nhắc constraint “no sleep”
* Fix 1 nơi nhưng fail nơi khác → nhắc chạy lại 2–3 lần để confirm ổn định

---

# PHẦN 6 – WRAP-UP (10’)

### A. Mục tiêu giảng dạy

Chốt workflow + bộ prompt mang về, học viên biết “mai đi làm áp dụng gì trước”.

### B. Knowledge notes cho GIẢNG VIÊN

* Học viên không cần nhớ hết, chỉ cần nhớ 2 thứ:

  1. workflow vòng lặp
  2. prompt template

### C. Những câu NÓI MẪU

* “Khi gặp việc X: generate / test / debug → có prompt tương ứng.”
* “Từ nay, AI là cặp đôi làm việc: bạn giao việc + bạn kiểm tra.”

### D. Demo / Minh họa

* Không cần.

### E. Hands-on cho học viên

* Lưu 5 prompt “chuẩn” vào note.

### F. Checkpoint

* Ai cũng có “prompt set” + biết lúc dùng.

### G. Lỗi nhận thức / thao tác thường gặp

* Họ muốn học thêm quá nhiều tool → nhắc: “giữ 1 workflow, 1 tool cũng đủ.”

---

## 4️⃣ DOC MAP CHO GIAI ĐOẠN SAU (tách file cho học viên)

> Đây là map “để sau bạn viết docs”, không viết chi tiết ngay.

1. `00-mindset.md`

* AI là đồng nghiệp, workflow, cách paste lỗi, template prompt 6 dòng

2. `01-ai-map.md`

* 5 nhóm use-cases, AI vs Agent, ví dụ tình huống, bài tập phân loại

3. `02-master-prompting.md`

* Prompt template chuẩn, ví dụ prompt tệ→tốt, checklist chống lan man

4. `03-node-demo.md`

* Steps copy-paste chạy CRUD, cách reproduce bug giá âm, lỗi thường gặp npm/port

5. `04-test-design.md`

* Bộ test case mẫu boundary/logic/ui, cách viết expected rõ ràng

6. `05-selenium-pom.md`

* POM concept, cấu trúc project, quy tắc locator/wait (không sleep)

7. `06-debug-with-ai.md`

* Format prompt debug stacktrace, checklist flaky, common Selenium exceptions

8. `99-cheatsheet-prompts.md`

* Bộ prompt “mang đi làm”: generate / test / pom / debug / flaky

---

Nếu bạn muốn mình “làm đúng kiểu giáo án cầm tay chỉ việc” hơn nữa, bước hợp lý tiếp theo là:
Bạn bảo **“Triển khai sâu PHẦN 0 thành teacher notes 2 trang + slide bullet”** (chỉ phần 0 thôi), mình sẽ viết dạng **script nói + ví dụ kể chuyện + câu hỏi gợi mở** để bạn đứng lớp nói trơn tru.
