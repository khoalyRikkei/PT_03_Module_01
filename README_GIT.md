- Tạo tài khoản github qua email
- Tạo repositories

* Tạo 1 repo mới

1. Khởi tạo git: git init
2. Kiểm tra trạng thái git: git status
3. Thêm các file, thư mục vào track: git add .
4. Kiểm tra lại trạng thái: git status
5. Commit track: git commit -m "<nội dung commit> //Ex: git commit - m "update file"

<!-- Kết nối với repository -->

1. Thêm đường dẫn repo: git remote add origin <link repo> //Ex: git remote add origin https://github.com/khoalyRikkei/PT_03_Module_01.git

<!-- Nếu muốn xóa kết nối repo: git remote rm origin -->

2. Chuyển và tạo branch mới: git checkout -b <ten branch> //Ex: git checkout -b session_02
3. Đẩy data lên repo: git push --set-upstream origin <tên branch> //Ex: git push --set-upstream origin session_02

<!-- Sau khi đã cấu hình git , muốn đẩy data mới lên-->

1. git add .
2. git commit -m "<noi dung>
3. git push

<!-- Chuyển branch -->

git checkout <ten_branch>

<!--  Kiểm tra tất cả branch-->

git branch -a

<!-- Kiểm tra sự thay đổi của repo -->

git fetch --all
