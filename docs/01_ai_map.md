# PHẦN 1 – AI MAP: AI LÀ GÌ & DÙNG KHI NÀO?

## (PHÂN LOẠI & ĐỊNH VỊ CÔNG CỤ) – 25’

---

## 1. Goals (Mục tiêu)

Sau phần này, bạn cần đạt 3 điều:

*   Hiểu rõ **5 nhóm công việc** mà AI làm tốt nhất.
*   Phân biệt được **AI Tool** (Công cụ hỏi-đáp) và **AI Agent** (Trợ lý tự hành).
*   Biết khi nào thì dùng Tool, khi nào thì cần Agent.

---

## 2. The 5 AI Use Cases (5 Nhóm việc AI làm tốt)

Khi gặp việc khó, hãy xem nó thuộc nhóm nào để giao việc chuẩn xác.

### 1️⃣ Generate (Sinh nội dung mới)
Tạo ra cái chưa có từ con số 0.

*   **Ví dụ Đời thường (Analogy)**:
    *   "Viết giúp anh cái thiệp chúc mừng sinh nhật vợ, tình cảm ướt át tí."
*   **Ví dụ Tester (Vợ - Nhóm A)**:
    *   "Sinh **Sample Data** (Excel) gồm 50 khách hàng, có đủ Tên, Email, SĐT, Địa chỉ để test tính năng Import."
*   **Ví dụ Sinh viên (Em gái - Nhóm B)**:
    *   "Sinh khung dự án (Boilerplate) **Spring Boot** kết nối MySQL, cấu trúc chuẩn Layer."

### 2️⃣ Design (Thiết kế / Lên kế hoạch)
Tạo khung sườn, checklist, chiến lược.

*   **Ví dụ Đời thường**:
    *   "Lên thực đơn tiệc nướng BBQ cho 10 người, có 2 người ăn chay."
*   **Ví dụ Tester**:
    *   "Lên **Checklist Test** cho màn hình Đổi Mật Khẩu (Positive, Negative, Security cases)."
*   **Ví dụ Sinh viên**:
    *   "Thiết kế **Database Schema** cho app Bán sách (gồm User, Book, Order, OrderDetail)."

### 3️⃣ Translate (Chuyển đổi ngôn ngữ/Định dạng)
Biến A thành B (giữ nguyên ý nghĩa).

*   **Ví dụ Đời thường**:
    *   "Dịch đoạn thư này sang tiếng Anh trang trọng để gửi sếp."
*   **Ví dụ Tester**:
    *   "Chuyển Test Case từ **file Word** (dạng văn xuôi) sang **Gherkin Syntax** (Given-When-Then) để chạy Cucumber."
*   **Ví dụ Sinh viên**:
    *   "Chuyển đoạn code này từ **Java** sang **Python**." hoặc "Chuyển câu SQL thường sang **Hibernate HQL**."

### 4️⃣ Diagnose (Chẩn đoán lỗi/Giải thích)
Tìm nguyên nhân tại sao sai.

*   **Ví dụ Đời thường**:
    *   "Sao cây lan này bị vàng lá vậy? (Kèm ảnh chụp)."
*   **Ví dụ Tester**:
    *   "Log báo lỗi 500 ntn, giải thích xem Server đang chết ở đâu? Có phải do dữ liệu đầu vào không?"
*   **Ví dụ Sinh viên**:
    *   "Giải thích tại sao đoạn code này bị `NullPointerException`? Sửa thế nào?"

### 5️⃣ Improve (Cải thiện/Tối ưu)
Làm cái đã có trở nên tốt hơn.

*   **Ví dụ Đời thường**:
    *   "Sửa lại email này cho lịch sự và chuyên nghiệp hơn."
*   **Ví dụ Tester**:
    *   "Viết lại mô tả Bug này cho ngắn gọn, dễ hiểu để Dev đọc là fix được ngay."
*   **Ví dụ Sinh viên**:
    *   "Refactor đoạn code này: Tách hàm, đặt tên biến chuẩn, tối ưu vòng lặp."

---

## 3. AI Tool vs. AI Agent (Khác nhau thế nào?)

### 🟢 AI Tool (Công cụ Hỏi - Đáp)
Giống như bạn hỏi Google, hỏi 1 câu -> trả lời 1 câu.
*   **Đặc điểm**: Thụ động, chỉ làm đúng việc được giao, xong là dừng.
*   **Dùng khi**: Cần giải đáp nhanh, việc nhỏ, cụ thể (5 nhóm ở trên).
*   **Ví dụ**: ChatGPT, Claude, Gemini (bản chat web).

### 🔴 AI Agent (Trợ lý Tự hành)
Giống như một **Nhân viên (Intern)** biết tự lập kế hoạch.
*   **Đặc điểm**: Nhận Goal lớn -> Tự chia nhỏ task -> Tự chạy -> Tự kiểm tra -> Báo cáo.
*   **Dùng khi**: Việc phức tạp nhiều bước, cần tương tác với file/môi trường (Terminal, IDE).
*   **Ví dụ**: Antigravity, Cursor, Windsurf.

---

## 4. Comparison Examples (So sánh Tool vs Agent)

### Tình huống 1: Làm Test Manual
*   **AI Tool**: Bạn hỏi "Gợi ý các case test cho màn hình Login". AI trả lời dạng text. Bạn phải tự copy từng dòng, chỉnh format rồi paste vào file Excel/Jira.
*   **AI Agent**: Bạn bảo "Tạo file Excel (.xlsx) chứa 20 test case Login, chia cột rõ ràng". Agent tự tạo file trên máy, điền dữ liệu vào đúng cột, format đẹp để bạn chỉ việc gửi.

### Tình huống 2: Viết Code (Coding)
*   **AI Tool**: Bạn bảo "Viết API Login bằng Java". AI trả về đoạn code mẫu trên khung chat. Bạn phải tự tạo file, copy code vào, tìm cách import thư viện.
*   **AI Agent**: Bạn bảo "Tạo tính năng Login full-stacks". Agent tự tạo các file `LoginController.java`, `UserService.java`, tự thêm dependency vào `pom.xml` và sắp xếp đúng thư mục dự án.

---

## 5. Popular AI Overview (Các công cụ AI phổ biến)

Dưới đây là "vũ khí" bạn nên biết để chọn đúng khi cần

### 🟢 Nhóm AI Tools (Tra cứu, Viết, Giải thích)

| Tên | Điểm mạnh (Pros) | Điểm yếu (Cons) | Khi nào dùng? |
| :--- | :--- | :--- | :--- |
| **ChatGPT (OpenAI, GPT‑5.x)** | Dùng họ GPT‑5/5.1/5.2 với reasoning tốt, context rất lớn, mạnh cả sáng tạo lẫn kỹ thuật; bản trả phí có Canvas, bộ công cụ file/code, Codex tích hợp, memory đa phiên. | GPT‑5 chỉ có ở gói trả phí; cutoff kiến thức quanh 2025 nên tin tức không realtime; đôi khi trả lời “tự tin quá mức” nếu không kiểm chứng nguồn. | Mặc định cho đa số task: viết mail, viết content, giải thích kiến thức, phân tích yêu cầu, hỗ trợ code từ mức trung bình đến khó; phù hợp làm “trợ lý chính”. |
| **Claude (Anthropic)** | Rất mạnh về viết tự nhiên, mạch lạc; nổi bật ở coding, phân tích kiến trúc, tóm tắt tài liệu dài, tuân thủ và bảo mật tốt cho môi trường enterprise. | Thận trọng, hay từ chối nếu prompt mơ hồ/nhạy cảm; hệ sinh thái plugin/tích hợp IDE ít hơn OpenAI/Google/Microsoft. | Viết content “sạch”, review kiến trúc, phân tích tài liệu dài, coding các bài toán logic/phức tạp, dùng trong môi trường cần compliance cao. |
| **Gemini (Google)** | Mạnh về đa phương tiện (ảnh, video, YouTube) và context cực lớn; tích hợp sâu Google Workspace (Docs, Sheets, Gmail, Drive); free tier khá hào phóng. | Chất lượng câu trả lời hơi dao động giữa các phiên bản; đôi khi “ảo giác” thông tin nếu không trích dẫn nguồn; hệ sinh thái dev chưa đồng đều giữa vùng. | Khi sống trong hệ sinh thái Google: soạn tài liệu, tóm tắt mail/Drive, phân tích video/YouTube, xử lý tài liệu cực dài. |
| **Grok (xAI)** | Tích hợp trực tiếp X (Twitter), đọc được timeline và trend realtime; phong cách hài hước, “mặn”, phù hợp giải trí và bắt trend. | Chưa nhiều tính năng chuyên sâu cho công việc/enterprise; hệ sinh thái plugin và tích hợp dev còn mỏng so với OpenAI/Google. | Giải trí, cập nhật tin nóng trên X, hỏi nhanh về trend/meme/news, thỉnh thoảng dùng brainstorming nhẹ nhàng. |
| **Perplexity** | “Answer engine” với search realtime và trích dẫn nguồn rõ ràng; rất mạnh cho research, fact‑check, tin tức; hỗ trợ nhiều model (GPT‑5.1, Claude Opus, Gemini, Grok…) trong một giao diện. | Không tối ưu cho viết content sáng tạo dài; giới hạn số truy vấn và model theo gói; output đôi khi hơi khô so với chatbot thuần sáng tạo. | Thay Google khi cần tra cứu nhanh, có nguồn rõ; dùng để research trước khi viết/ra quyết định, kiểm tra độ chính xác thông tin. |
| **NotebookLM (Google)** | Chuyên “ăn” tài liệu: upload PDF/notes, nó xây knowledge base, tóm tắt, tạo FAQ, script/podcast từ chính tài liệu đó; cực mạnh cho học tập và nghiên cứu. | Không phải chatbot đa năng; hiệu quả phụ thuộc tài liệu đưa vào; ít tích hợp ứng dụng bên ngoài. | Học bài, nghiên cứu tài liệu công ty/lớp học, tóm tắt sách/PDF, xây FAQ nội bộ từ các tài liệu dài. |

### 🔴 Nhóm AI Agents / Coding (Dev, tác vụ chuyên sâu)

| Tên | Điểm mạnh (Pros) | Điểm yếu (Cons) | Khi nào dùng? |
| :--- | :--- | :--- | :--- |
| **Cursor** | IDE (fork từ VS Code) tối ưu cho AI: hiểu toàn project, multi‑file edit/refactor, agent mode chạy test/command, benchmark coding tốt trong các so sánh 2025–2026. | Cần cài IDE mới; index repo lớn tốn tài nguyên; một số tính năng enterprise còn đang rollout. | Dev chính để code, refactor, đọc hiểu codebase lớn, pair‑programming với AI trong dự án thật (BE/FE/test/devops). |
| **Antigravity (Google DeepMind)** | Coding agent của Google với khả năng lập kế hoạch sâu, xử lý nhiệm vụ dài và refactor phức tạp; được benchmark như đối trọng với Claude Code/Cursor ở tác vụ khó. | Đang ở giai đoạn giới hạn/quản lý truy cập; phụ thuộc hạ tầng Google; tài liệu public và case study thực chiến chưa nhiều. | Bài toán code/hệ thống rất phức tạp, cần planning nhiều bước, multi‑tool orchestration, hoặc refactor diện rộng. |
| **GitHub Copilot** | Tích hợp chặt trong VS Code, JetBrains, Neovim; auto‑complete code/test rất nhanh, ít friction cho dev vì “gõ là có”; trở thành chuẩn de‑facto ở nhiều team enterprise. | Thiên về gợi ý khi gõ, ít khả năng tự orchestration nhiều file/command như Cursor hay Codex; phụ thuộc khá nhiều vào chất lượng code có sẵn. | Auto‑complete, viết nhanh hàm/boilerplate/test; phù hợp dev đã quen IDE truyền thống, muốn “có AI mà gần như không đổi workflow”. |
| **Codex (GPT‑5‑Codex / 5.2‑Codex)** | “Software engineer teammate” trong hệ OpenAI: dùng GPT‑5‑Codex / GPT‑5.2‑Codex để làm repo‑scale reasoning, viết feature, sửa bug, chạy test, đề xuất PR; có CLI, web và IDE extension, hỗ trợ session dài. | Chủ yếu cho user trả phí/pro/enterprise; trải nghiệm vẫn đang được tinh chỉnh, chưa liền mạch bằng IDE-first agents như Cursor với một số team; cần làm quen cách “giao task” thay vì chỉ prompt. | Khi muốn giao nguyên task (feature/bug/refactor/test) cho AI chạy bán tự động, đặc biệt nếu team đã dùng ChatGPT + Codex trong quy trình dev/CI. |
| **Claude CLI** | Cho phép chạy Claude ngay trong terminal, thao tác trực tiếp với file system, git, log, script; rất phù hợp power user, DevOps, data engineer, backend heavy. | Giao diện dòng lệnh khó tiếp cận với người mới; cần hiểu rõ cấu trúc project và cách viết prompt có tổ chức. | Khi đã quen command line và muốn AI can thiệp trực tiếp vào code, log, config, script trong môi trường shell. |

---

## 6. Personal Recommendation (Lời khuyên cho Nhà mình)

Dựa trên mục tiêu riêng của từng người, đây là bộ công cụ khuyên dùng:

### 👩‍💻 Cho Vợ (Role: Manual Tester → Automation)
*   **Viết Mail, Bug Report, Test Case (Manual)**: Dùng **ChatGPT** (bản Plus càng tốt) hoặc **Claude**.
    *   *Lý do*: Cần khả năng hiểu ngôn ngữ tự nhiên tốt, văn phong mượt, không cần cài đặt phức tạp.
    *   *Ví dụ*: `Paste mô tả lỗi tiếng Việt lủng củng vào và prompt: "Viết lại Bug Report này bằng tiếng Anh chuẩn, format Jira, giọng điệu chuyên nghiệp."`
*   **Đọc tài liệu Specs/Requirement dày cộp**: Dùng **NotebookLM**.
    *   *Lý do*: Upload file PDF/Docs specs vào, hỏi gì nó trả lời đó từ tài liệu (không bịa). Rất hợp để tra cứu nghiệp vụ.
    *   *Ví dụ*: `Upload file "Spec_Du_An_A.pdf", hỏi: "Liệt kê tất cả các điều kiện Validate (bắt lỗi) của trường Số điện thoại và Email được nhắc trong tài liệu."`
*   **Tập tành Automation (Code Selenium)**: Dùng **Antigravity** (ưu tiên vì rẻ) hoặc **Cursor**.
    *   *Lý do*: Vợ không thạo gõ code. Hãy dùng Agent (Antigravity/Cursor) để ra lệnh: "Em tạo file test login cho chị, dùng Selenium Java", nó sẽ tự tạo file và viết code thay vì ngồi gõ từng dòng.
    *   *Ví dụ*: `Mở Antigravity, gõ: "Tạo file LoginTest.java dùng Selenium, viết kịch bản đăng nhập thành công và đăng nhập sai pass. Tự import thư viện cần thiết."`

### 👩‍🎓 Cho Em gái (Role: Student Dev/Test)
*   **Hỏi bài, tìm hiểu khái niệm mới**: Dùng **Perplexity** hoặc **ChatGPT**.
    *   *Lý do*: Perplexity luôn trích dẫn nguồn (web/wiki), giúp em check lại xem kiến thức có đúng sách giáo khoa không.
    *   *Ví dụ*: `"Sự khác nhau giữa Abstract Class và Interface trong Java 17 là gì? Nêu ví dụ code minh họa."`
*   **Làm bài tập Code / Đồ án môn học**: Dùng **Antigravity** (hoặc **Cursor**) kết hợp **GitHub Copilot** (SV được Free).
    *   *Lý do*: **Antigravity/Cursor** giúp em generate code cả dự án, tự động sinh code, sửa lỗi (Debug) cả đống file cùng lúc khi code không chạy. **Copilot** giúp code nhanh hơn khi tự gõ (gợi ý dòng tiếp theo).
    *   *Ví dụ*:
        *   *Antigravity*: `"Refactor class OrderService này theo chuẩn SOLID, tách hàm tính toán thuế ra class riêng."`
        *   *Copilot*: `Gõ "public void sorting..." và để nó tự gợi ý code Bubble Sort.`
*   **Ôn thi lý thuyết**: Dùng **NotebookLM**.
    *   *Lý do*: Ném slide bài giảng của thầy cô vào, bảo nó "Tóm tắt các ý chính" hoặc "Đặt câu hỏi trắc nghiệm cho tao ôn bài".
    *   *Ví dụ*: `Upload slide "Chuong_3_CSDL.pptx", hỏi: "Tạo 10 câu hỏi trắc nghiệm khó về phần Normalization (Chuẩn hóa dữ liệu) để tôi tự test."`

---

## 7. Mini Exercise (Bài tập phân loại - 5 phút)
Hãy xem các yêu cầu sau, cái nào dùng Tool (Chat), cái nào nên dùng Agent (IDE)?

| Tình huống | Dùng gì? | Tại sao? |
| :--- | :--- | :--- |
| 1. "Giải thích hàm `useEffect` trong React." | **Tool** | Hỏi đáp kiến thức nhanh, không cần sửa file. |
| 2. "Refactor toàn bộ dự án, đổi tên class User thành Customer." | **Agent** | Cần sửa nhiều file cùng lúc, dùng Tool copy/paste sẽ rất mệt. |
| 3. "Viết giúp tớ cái email xin nghỉ phép." | **Tool** | Tạo văn bản ngắn, copy là xong. |
| 4. "Tạo project mới, cài thư viện, setup database." | **Agent** | Cần chạy lệnh Terminal, tạo folder/file thực tế. |
| 5. "Dịch cái log lỗi này xem bị sao." | **Tool** | Paste log vào hỏi nhanh hơn chờ Agent chạy. |

> **Quy tắc nhớ**:
> *   Cần kiến thức / Text ngắn → **Tool**.
> *   Cần File / Terminal / Nhiều bước → **Agent**.
