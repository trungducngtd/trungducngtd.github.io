---
title: Chrome Extensions SendHTML
project_id: Extract data from website
description: Trích xuất dữ liệu từ trang web bất kỳ và ghi vào Google Sheet
image: https://i.ibb.co/FkFV9wdD/HTML-Website.png?auto=format&fit=crop&w=1200&q=80
image_alt: extract-data-from-Website
tags:
  - Chrome Extension
  - Google Apps Script
---

## Bối cảnh
Làm agency, khách yêu cầu report dữ liệu quảng cáo theo ngày và hàng ngày. Với Facebook/Google/TikTok có thể sử dụng Supermetric (hoặc API) để cập nhật dữ liệu hàng ngày. Tuy nhiên Zalo Ads và Admicro hiện tại chưa có API riêng nên mỗi sáng vào công ty phải mở tài khoản lên để nhập tay số vào google sheet. <br />
Nên bị lười.

## Tóm Tắt
Sử dụng chrome extensions để gửi dữ liệu trang web (html) về google apps script, sau đó trích xuất dữ liệu cần lấy và ghi vào google sheet.

## Chi tiết
1. Dùng Google Apps Script làm trung gian (Web Apps) để nhận yêu cầu từ Chrome Extension.
2. Gọi API thứ ba, xử lý dữ liệu (lọc theo điều kiện), rồi lưu vào Firebase Firestore.
3. Trả về kết quả và báo cáo lỗi qua Gmail nếu có.
