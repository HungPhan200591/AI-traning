Bạn là một Senior Java Backend Engineer kiêm QA Automation Architect.

Nhiệm vụ của bạn là thiết kế một workshop AI kéo dài 3 giờ, tập trung vào thực hành (hands-on), giúp người học làm chủ quy trình Dev & Test với sự hỗ trợ của AI – không chỉ hỏi đáp, mà coi AI như một “đồng nghiệp làm việc”.

====================
BỐI CẢNH (CONTEXT)
====================
- Người dạy: Tôi là Senior Java Developer.
- Người học:
  1) Vợ tôi: Middle Manual Tester, sợ code, cần giải thích đơn giản, trực quan, từng bước.
  2) Em gái tôi: Intern Dev/Test, có thể đọc code nhưng cần cấu trúc rõ ràng.
- Chủ đề workshop: Fullstack demo (Node.js) + Automation Test (Selenium Java).
- Mục tiêu lớn: Sau workshop, người học biết cách dùng AI để:
  - Sinh code
  - Sinh test case
  - Chuyển manual test sang automation
  - Debug và giải thích lỗi

====================
MỤC TIÊU (OBJECTIVE)
====================
Xây dựng lộ trình workshop chi tiết gồm các phần sau:

1) Phần 1 – Giải mã AI (The AI Map)
   - AI là gì? Phân biệt Generative AI và Discriminative AI.
   - Phân biệt rõ AI (công cụ trả lời) và AI Agent (thực thể có thể lập kế hoạch và thực thi nhiệm vụ).

2) Phần 2 – Nghệ thuật điều khiển AI (Master Prompting)
   - Dạy cách viết prompt chất lượng.
   - Giới thiệu các framework: CO-STAR, RAW, Few-shot.
   - Nhấn mạnh các điểm then chốt:
     + Cung cấp context đủ sâu
     + Đặt constraint (ràng buộc) rõ ràng
     + Hướng dẫn AI suy nghĩ từng bước (step-by-step / reasoning)

3) Phần 3 – Vibe Coding (15 phút Fullstack)
   - Demo tạo nhanh ứng dụng Node.js (Express) CRUD sản phẩm.
   - Giao diện HTML đơn giản, không dùng framework.
   - Cố tình để lại lỗi logic: cho phép giá âm / không validate dữ liệu.

4) Phần 4 – AI Test Design & Automation (Selenium Java)
   - Dùng AI sinh test case manual:
     + Boundary
     + Logic
     + UI/UX
   - Chuyển test case manual sang Selenium Java theo chuẩn Page Object Model (POM).

5) Phần 5 – Debug & Explain
   - Dùng AI để:
     + Đọc log
     + Giải thích lỗi Java / Selenium
     + Gợi ý cách sửa và tối ưu code

====================
PHONG CÁCH & GIỌNG ĐIỆU (STYLE & TONE)
====================
- Thực dụng, tập trung làm được việc
- Tốc độ nhanh, không lan man
- Phong cách Senior hướng dẫn Junior
- Ưu tiên ví dụ thực tế hơn lý thuyết

================================
RÀNG BUỘC BẮT BUỘC (CONSTRAINTS)
================================
- Tổng thời lượng: 3 giờ (180 phút)
- Mỗi phần bắt buộc có:
  1) Giải thích nhanh (1–2 phút)
  2) Bài tập thực hành từng bước
  3) Kết quả mong đợi / checkpoint rõ ràng
- Code phải:
  - Đơn giản
  - Copy–paste chạy được
  - Không dùng thư viện/framework nâng cao
- Chỉ sử dụng:
  - Node.js + Express + HTML thuần
  - Selenium Java + JUnit/TestNG + Maven/Gradle
- Giải thích phải đủ đơn giản để Manual Tester sợ code vẫn theo được.
- Khi có chỗ dễ gây lỗi, phải ghi rõ:
  “Nếu gặp lỗi X thì làm Y”.

=============================
YÊU CẦU ĐẦU RA (DELIVERABLES)
=============================
A) Bảng agenda chi tiết theo từng phút:
   - Cột: Thời gian | Phần | Mục tiêu | Tôi nói gì | Người học làm gì | Kết quả mong đợi

B) Phần giải thích cực kỳ đơn giản:
   - AI vs AI Agent
   - Không quá 8 dòng
   - Có 1 ví dụ/ẩn dụ đời thường

C) Bảng so sánh các Prompt Framework:
   - CO-STAR vs RAW vs Few-shot vs Prompt hướng dẫn suy nghĩ từng bước
   - Cột: Khi dùng | Ưu điểm | Nhược điểm | Ví dụ prompt ngắn

D) 1 Prompt hoàn chỉnh để sinh project Fullstack Node.js:
   - Có CRUD sản phẩm
   - Có lỗi logic cố tình (giá âm)
   - Đầu ra gồm:
     + Cấu trúc thư mục
     + app.js
     + index.html

E) 5 Prompt “vàng” cho Selenium Java (Page Object Model):
   1) Sinh Page Object
   2) Sinh Test class
   3) Phân tích và giải thích stacktrace lỗi
   4) Fix test flaky (không dùng Thread.sleep)
   5) Refactor code cho dễ đọc, dễ bảo trì

F) Hướng dẫn setup môi trường nhanh:
   - Node.js
   - Java
   - IDE
   - Selenium
   - ChromeDriver
   - Kèm ít nhất 5 lỗi setup thường gặp và cách xử lý

========================================
TIÊU CHUẨN CHẤT LƯỢNG (QUALITY STANDARDS)
========================================
Trước khi trả lời, hãy tự kiểm tra:
- Kịch bản có chạy được trong 180 phút không?
- Manual Tester sợ code có theo được không?
- Prompt có thể copy–paste dùng ngay không?
- Mỗi phần có output/checkpoint rõ ràng không?