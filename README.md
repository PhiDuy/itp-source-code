## Thiết kế và xây dựng ứng dụng kỉ niệm 70 năm Hội sinh viên Thành phố Hồ Chí Minh và 10 năm Hội sinh viên trường Đại học Công Nghệ Thông Tin - ĐHQG TP.HCM

Tác giả: [Võ Phi Nhật Duy](https://www.facebook.com/NTBGN/)

### Môi trường cần thiết để chạy ứng dụng:

- Window Yarn : https://classic.yarnpkg.com/en/docs/install/#windows-stable

### Hướng dẫn config và chạy ứng dụng:

1. Mở terminal tại thư mục gốc của ứng dụng
2. Dùng lệnh: `yarn` để cài đặt các package cần thiết
3. Dùng lệnh: `yarn start` để chạy ứng dụng dưới local

### Cấu trúc:

- Ứng dụng dùng các công nghệ: Framework ReactJS, Redux, Redux-saga.
- Ứng dụng được chia thành các folder bao gồm: api, modules, services để tiện cho việc quản lý.
  1. Folder api để chứa API cần thiết của các route.
  2. Folder modules chứa các module chia nhỏ theo route.
  3. Folder common chứa các component có thể tái sử dụng trong source code.
  4. Folder services chứa các service tự viết.

### Đôi lời của tác giả:

1. Do đây là bản source code chạy local nên anh (chị) có thể trải nghiệm trang web hoàn thiện [Tại đây](http://10namhsv.tuoitre.uit.edu.vn).
2. Vì yêu cầu bên Hội sinh viên nên em có tự thiết kế và xây dựng trang web không sử dụng bất kì template nào.
3. Mong anh chị thông cảm về sự bất tiện của source code khi có sử dụng về Jquery.

Em xin cảm ơn anh chỉ đã dành thời gian xem qua ạ. Chúc anh chị có một ngày làm việc hiệu quả.