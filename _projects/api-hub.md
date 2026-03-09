---
title: API orchestration hub
project_id: project-02
description: Cổng quản lý API giúp mình dùng lại các endpoint, ghi log và phân phối dữ liệu tự động.
image: https://images.unsplash.com/photo-1486591978090-1a2f125c32cc?auto=format&fit=crop&w=1200&q=80
image_alt: Màn hình hiển thị giao diện API hub
tags:
  - API
  - Chrome Extension
---

## Tóm tắt
Tôi tổ chức một hub nhỏ giúp gọi API, lưu lại kết quả, chuyển tiếp payload đến Chrome Extension. Tất cả được xây bằng script JavaScript, không cần backend riêng.

## Chi tiết
1. Dùng Google Apps Script làm trung gian (Web Apps) để nhận yêu cầu từ Chrome Extension.
2. Gọi API thứ ba, xử lý dữ liệu (lọc theo điều kiện), rồi lưu vào Firebase Firestore.
3. Trả về kết quả và báo cáo lỗi qua Gmail nếu có.
