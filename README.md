# Trung Duc Nguyen – Blog tĩnh (CMS nhỏ)

> Blog tĩnh host trên GitHub Pages với mục tiêu: layout cố định, chỉ cần thêm file nội dung là có ngay trang mới. Thiết kế tối giản, font Montserrat, header sticky, nhiều khoảng trắng, palette nhẹ nhàng.

---

## 1. Cấu trúc repo & chức năng các file chính
/
├── _config.yml              → Cấu hình Jekyll: title, collections (projects), permalink.
├── _layouts/
│   ├── default.html         → Layout chung: header sticky, footer, font, JS animation.
│   └── project.html         → Layout chi tiết từng project (dùng Markdown trong _projects/).
├── _projects/               → Folder chứa nội dung chi tiết từng project (Markdown + front matter).
├── index.html               → Trang chủ: Hero, About, Featured Projects (tự lấy 3 project), Contact.
├── projects.html            → Trang “Vài thứ linh tinh” dạng grid (dùng tất cả project trong _projects/).
├── about.html               → Trang “Về tôi” (nội dung & kỹ năng).
├── 404.html                 → Trang lỗi.
├── assets/
│   ├── css/
│   │   └── styles.css       → Toàn bộ style (spacing, typography, responsive, palette, card).
│   └── js/
│       └── site.js          → JS nhẹ xử lý animation fade-in (section xuất hiện).
└── README.md                → (File này) hướng dẫn cấu trúc & cách thêm nội dung.


---

## 2. Cách thêm project mới (không cần chạm HTML/CSS)

1. **Chuẩn bị ảnh** (tùy chọn):  
   - Upload vào `assets/images/` hoặc dùng URL ảnh (Unsplash, Cloudinary…).
2. **Tạo file Markdown mới trong `_projects/`** (ví dụ `_projects/project-04.md`):
   ```markdown
   ---
   title: Tên dự án
   project_id: project-04
   description: Mô tả ngắn (hiển thị trên card)
   image: https://link-ảnh-hoặc-assets/images/project-04.jpg
   image_alt: Mô tả ngắn cho ảnh
   tags:
     - Apps Script
     - API
   ---

   ## Tóm tắt
   Viết nội dung chi tiết ở đây. Markdown được hỗ trợ (heading, list, link,…).

   ## Quy trình
   - ...
Front matter đảm nhiệm:
project_id: hiển thị trên card.
title: tiêu đề chính.
description: mô tả ngắn (card & project list).
image + image_alt: ảnh hiển thị trên card và trang chi tiết.
tags: hiển thị dạng pill.
Đường dẫn tự động: file _projects/project-04.md sẽ có URL /projects/project-04/.
Không cần sửa HTML/CSS: layout & CSS đã thiết lập cho tất cả page.
## 3. Thay đổi nội dung ở file nào
Nội dung cần thay	File chỉnh sửa
Hero (tên, mô tả, nút)	index.html
About ngắn (trên hero)	index.html
Featured Projects (text, CTA)	index.html
Contact (Email, Facebook, GitHub)	index.html
Trang danh sách dự án	projects.html
Trang “About me” chi tiết, kỹ năng	about.html
Thông tin header/footer, font, layout chung	_layouts/default.html
Layout chi tiết từng project (image, tags, nội dung)	_layouts/project.html và _projects/*.md
CSS toàn site (spacing, palette, responsive, card)	assets/css/styles.css
Animation fade-in section	assets/js/site.js
Thêm project mới	_projects/<slug>.md
## 4. Chú ý khi mở rộng
Project card: toàn bộ thẻ <a> clickable, hover nâng nhẹ.
Responsive: grid 3 cột (desktop), 2 cột (tablet), 1 cột (mobile).
Font Montserrat: áp dụng toàn bộ site.
Palette minimal: background trắng, text đen, subtext #666, border #eeee, primary #2563eb.
Section spacing: padding 120px top/bottom (đã thiết lập sẵn).
Animation: JS giúp sections fade-in khi cuộn.
Sticky header: luôn nằm trên cùng khi scroll.
Project detail: Markdown hiển thị nội dung, show image, tags, nội dung bài viết (hỗ trợ Markdown).
URL GitHub Pages: https://trungducngtd.github.io/ (đảm bảo repo tên <username>.github.io).
## 5. Cần thêm gì khác?
Muốn bổ sung project, chỉ cần tạo file Markdown mới trong _projects/.
Thực hiện commit & push lên GitHub → GitHub Pages tự build & update.
Nếu cần template Markdown mẫu (đã viết sẵn trên repo), mình có thể tạo file helper.
Cần thêm nội dung tĩnh khác (section mới, landing) thì chỉnh index.html hoặc thêm file HTML mới theo layout chung.
