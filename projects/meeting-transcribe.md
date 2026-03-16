# Meeting Transcribe

project-01

![Giao diện dashboard automation](https://i.ibb.co/FkFV9wdD/HTML-Website.png?auto=format&fit=crop&w=1200&q=80)

Một bộ dashboard tự động hóa việc cập nhật dữ liệu Google Sheet và gửi báo cáo qua Gmail.

## Tóm tắt

Tôi dùng Google Apps Script để kết nối Google Sheets, Calendar và Gmail. Mỗi sáng hệ thống sẽ check trạng thái các bảng tính, lọc các task trì hoãn rồi gửi báo cáo về Slack.

## Quy trình

- Dùng Apps Script trigger chạy lúc 6h sáng mỗi ngày.
- Kết nối với API của Google Sheets, Calendar để lấy dữ liệu liên quan.
- Tạo Gmail template và gửi báo cáo kèm link file.

## Công nghệ

- Apps Script
- API
