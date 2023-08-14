# Rails tutorial - Sample App

# 1. Phiên bản cài đặt để chạy được dự án:
- Ruby: 3.0.0
- Rails: 7.0.5
- MySQL

# 2. Hướng dẫn cài dự án:
## 2.1 Cài đặt config(chỉ chạy lần đầu)
- Tạo config database cho dự án: cp config/database.yml.example config/database.yml
- Chạy lệnh để tạo database: rails db:create
- Bật server: rails s
Truy cập đường dẫn http://localhost:3000/ hiển thị Rails là thành công

## 2.2 Thao tác để làm tiếp các chapter:
- Tạo branch mới và checkout sang branch mới: git checkout -b chapter_3_4_5
Sau đó code chapter, code xong thì chạy dòng lệnh sau để kiểm tra convention code (Đọc thêm về Rubocop: https://viblo.asia/p/su-dung-gem-rubocop-trong-rails-4P856NxA5Y3)

```
bundle exec rubocop
```

- Fix các lỗi rubocop để đảm bảo không còn lỗi convention, sau đó đẩy code lên git để review code

```
git add .
git commit -m "Chapter 3,4,5"
git add .
git push origin chapter_3_4_5
```

tương tự như các chapter tiếp theo
