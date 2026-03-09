# trungducngtd.github.io
/ (root)
│
├── _data/
│   └── projects.json               ← Danh sách tất cả project (dùng để render card và trang chi tiết)
│
├── projects/
│   ├── project-1.md                ← Nội dung chi tiết project (Markdown)
│   ├── project-2.md
│   └── ...
│
├── assets/
│   ├── images/                     ← Ảnh cover project, hero, v.v.
│   ├── css/
│   │   └── styles.css              ← CSS chính (Montserrat, spacing, layout,...)
│   └── js/
│       └── site.js                 ← JS cho header sticky, animation, render card từ JSON
│
├── index.html                      ← Trang chủ (dùng JS load sections)
├── projects.html                   ← Trang danh sách project (grid, gọi dữ liệu từ _data/projects.json)
├── something.html                 ← Trang “Linh tinh” (hiển thị “Chưa có đâu”)
├── about.html                     ← Trang “Về tôi”
└── 404.html
