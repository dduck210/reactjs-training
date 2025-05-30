--> Lesson 1: HTML - Thẻ cơ bản: so sánh, phân biệt, cách dùng

- Phân tử block của thẻ p và div em thấy sẽ chiếm toàn bộ chiều rộng của screen
- Phân tử inline của thẻ span và a em thấy sẽ chỉ chiếm chiều rộng của nội dung bên trong
- Phân biệt thẻ tự đóng và thẻ có thẻ đóng: Thẻ tự đóng là thẻ br và hr, ví dụ sẽ được viết là <br> hoặc <br /> khác so với các thẻ có thẻ đóng như p sẽ được viết là <p> </p>
- Các thẻ từ h1 đến h6 sẽ in đậm chữ, kích cỡ sẽ giảm dần từ h1 -> h6
- Thẻ p được dùng để viết đoạn văn bản
- Thẻ a thì được dùng để gán link đường dẫn

--> Lesson 2: form input, input, textarea, select, button

- type="text" mục đích sử dụng là nhập văn bản ngắn
- type="password" mục đích sử dụng là để nhập mật khẩu
- type="checkbox" mục đích sử dụng để cho user lựa chọn 1 hoặc nhiều options với mỗi input, và sau khi đã chọn xong options, submit cái thì server sẽ nhận cái value mà user đã lựa chọn submit từ nãy
- type="radio" mục đích sử dụng của nó là chỉ allow user lựa chọn 1 options duy nhất
- thẻ <select></select> mục đích sử dụng allow user lựa chọn các value có sẵn theo list thả xuống
- thẻ <textarea></textarea> khá giống với thẻ <p></p> nhưng như thẻ p thì là hiển thị luôn đoạn text còn như thẻ textarea thì allow user tự nhập đoạn text vào và có thể chỉnh sửa độ cols và độ rows của đoạn text
- thẻ <button></button> là một nút bấm với type="button", không thể sử dụng <input type="button"> vì thẻ input không cho phép nhập nội dung text bên trong, chỉ có thể viết được bằng cấu trúc giả sử là
  <button>
  <img src="./image/HTML5_logo_and_wordmark.svg.png"/>
  <strong>Submit</strong>
  </button>
- cách đặt thẻ <label></label> đúng là khi thuộc tính for của label và thuộc tính id trùng nhau khi chạy chương trình thì ấn chữ hoặc ấn ô tròn thì nó cũng đều focus vào cái phần text mong muốn, giả sử trường hợp này, khi nhấn chữ HTML hay nhấn vào ô tròn của chữ HTML thì đều là focus vào nội dung text HTML
  <input type="radio" id="html" name="language" value="HTML" />
  <label for="html">HTML</label><br />
- validate basic HTML sử dụng thuộc tính placeholder + required (placeholder sử dụng để gợi ý text mà user cần phải nhập vào), khi viết nếu như không bọc trong thẻ form thì sẽ không thể validate được khi không nhập gì, bọc thêm thẻ form thì khi không điền gì vào ô input sẽ báo validate bắt buộc user phải nhập vào thì mới allow submit

--> Lesson 3: Table, các thẻ con

- Đang tìm hiểu
