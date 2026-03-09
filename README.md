# Trung Duc Nguyen – Blog tĩnh (CMS nhỏ)

> Blog tĩnh được host trên GitHub Pages. Mục tiêu: giữ layout cố định, chỉ cần thêm file nội dung (Markdown/Front matter) là có ngay bài mới. Thiết kế tối giản, font Montserrat, header sticky, nhiều khoảng trắng, palette tối giản.

---

## 1. Cấu trúc thư mục chính
/
├── _config.yml              → Cấu hình Jekyll: title, collections (project), permalink.
├── _layouts/
│   ├── default.html         → Layout mặc định cho các trang (header, footer, font, script).
│   └── project.html         → Layout chi tiết mỗi project, dùng cho các file Markdown trong _projects.
├── _projects/               → Folder chứa Markdown chi tiết từng project.
│   └── project-id.md        → Một project = một file Markdown với front matter (id, title, tags, image...).
├── index.html               → Trang chủ (hero, about, featured, contact) – dùng site.projects.
├── projects.html            → Trang danh sách dự án, hiển thị toàn bộ project từ collection.
├── about.html               → Trang “Về tôi”.
├── something.html           → Trang “Linh tinh” (hiện “Chưa có đâu”).
├── 404.html                → Trang lỗi.
├── assets/
│   ├── css/
│   │   └── styles.css       → CSS toàn site (spacing, typography, palette, responsive, card style).
│   └── js/
│       └── site.js          → JS nhỏ để chạy animation “fade-in”.
└── README.md                → (File bạn đang đọc) mô tả repo và cách thêm nội dung.


---

## 2. Hướng dẫn thêm project mới

1. **Tạo ảnh (không bắt buộc upload)**  
   - Có thể dùng ảnh từ Unsplash/Cloudinary (URL) hoặc tải lên `assets/images/`.
2. **Tạo file Markdown mới trong `_projects/`**  
   Ví dụ: `_projects/my-automation.md`
   ```markdown
   ---
   title: Tên dự án
   project_id: project-04
   description: Mô tả ngắn (dùng hiển thị card)
   image: https://link-ảnh-hoặc-assets/images/my-project.jpg
   image_alt: Mô tả ngắn cho ảnh
   tags:
     - Apps Script
     - API
   ---
   
   ## Tóm tắt
   Viết nội dung chi tiết ở đây. Markdown được hỗ trợ (heading, list, link,…).
