---
title: Chrome Extensions - Trích xuất dữ liệu từ trang web bất kỳ
project_id: Extract data from website
description: Cổng quản lý API giúp mình dùng lại các endpoint, ghi log và phân phối dữ liệu tự động.
image: https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80
image_alt: extract-data-from-Website
tags:
  - Chrome Extension
  - Google Apps Script
---

## Tóm tắt
Tôi tổ chức một hub nhỏ giúp gọi API, lưu lại kết quả, chuyển tiếp payload đến Chrome Extension. Tất cả được xây bằng script JavaScript, không cần backend riêng.

## Chi tiết
1. Dùng Google Apps Script làm trung gian (Web Apps) để nhận yêu cầu từ Chrome Extension.
2. Gọi API thứ ba, xử lý dữ liệu (lọc theo điều kiện), rồi lưu vào Firebase Firestore.
3. Trả về kết quả và báo cáo lỗi qua Gmail nếu có.
