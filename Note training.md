--> Lesson 1: HTML - Thẻ cơ bản: so sánh, phân biệt, cách dùng

- Phân tử block của thẻ p và div em thấy sẽ chiếm toàn bộ chiều rộng của screen
- Phân tử inline của thẻ span và a em thấy sẽ chỉ chiếm chiều rộng của nội dung bên trong
- Phân biệt thẻ tự đóng và thẻ có thẻ đóng: Thẻ tự đóng là thẻ br và hr, ví dụ sẽ được viết là <br> hoặc br khác so với các thẻ có thẻ đóng như p sẽ
- Các thẻ từ h1 đến h6 sẽ in đậm chữ, kích cỡ sẽ giảm dần từ h1 -> h6
- Thẻ p được dùng để viết đoạn văn bản
- Thẻ a thì được dùng để gán link đường dẫn

--> Lesson 2: form input, input, textarea, select, button

- type="text" mục đích sử dụng là nhập văn bản ngắn
- type="password" mục đích sử dụng là để nhập mật khẩu
- type="checkbox" mục đích sử dụng để cho user lựa chọn 1 hoặc nhiều options với mỗi input, và sau khi đã chọn xong options, submit cái thì server sẽ nhận cái value mà user đã lựa chọn submit từ nãy
- type="radio" mục đích sử dụng của nó là chỉ allow user lựa chọn 1 options duy nhất
- thẻ select mục đích sử dụng allow user lựa chọn các value có sẵn theo list thả xuống
- thẻ textarea khá giống với thẻ p nhưng như thẻ p thì là hiển thị luôn đoạn text còn như thẻ textarea thì allow user tự nhập đoạn text vào và có thể chỉnh sửa độ cols và độ rows của đoạn text
- thẻ button là một nút bấm với type="button", không thể sử dụng input type button> vì thẻ input không cho phép nhập nội dung text bên trong
- cách đặt thẻ label đúng là khi thuộc tính for của label và thuộc tính id trùng nhau khi chạy chương trình thì ấn chữ hoặc ấn ô tròn thì nó cũng đều focus vào cái phần text mong muốn, giả sử trường hợp này, khi nhấn chữ HTML hay nhấn vào ô tròn của chữ HTML thì đều là focus vào nội dung text HTML
- validate basic HTML sử dụng thuộc tính placeholder + required (placeholder sử dụng để gợi ý text mà user cần phải nhập vào), khi viết nếu như không bọc trong thẻ form thì sẽ không thể validate được khi không nhập gì, bọc thêm thẻ form thì khi không điền gì vào ô input sẽ báo validate bắt buộc user phải nhập vào thì mới allow submit

--> Lesson 3: Table, các thẻ con

- thẻ table được sử dụng để tạo khung bảng
- thẻ tr (table row) là dòng, mỗi 1 thẻ tr đóng mở sẽ tạo ra 1 dòng của bảng
- thẻ th (table header) là 1 ô tiêu đề của bảng được in đậm lên
- thẻ thead (table head) được sử dụng để nhóm các thẻ tiêu đề sẽ bọc thẻ tr trong tr có cả thẻ th, và cũng có tác dụng tách riêng phần đầu của bảng và phần thân của bảng là thẻ tbody
- thẻ td (table data) để hiển thị nội dung của bảng, mỗi 1 thẻ td đóng mở sẽ hiển thị được 1 ô data
- thẻ tbody (table body) là phần thân của bảng, được sử dụng để bọc các thẻ tr và td là ô data nội dung của bảng
- colspan được sử dụng để gộp nhiều ô ngang thành một ô theo hàng ngang được viết theo kiểu colspan="số ô muốn gộp"
- rowspan được sử dụng để gộp nhiều ô dọc thành một ô theo hàng dọc rowspan="số ô muốn gộp"
- ngoài ra tìm hiểu thêm được thuộc tính border để bo viền table
- trong css thuộc tính border-collapse được sử dụng để gộp ô trong bảng, khi không dùng thuộc tính border-collapse thì các ô sẽ bị viền đúp và dày nhìn không đẹp
- thuộc tính width: 60%; để điều chỉnh độ rộng của bảng table
- thuộc tính margin: auto; để căn giữa bảng theo chiều ngang
- border: 1px solid black; để chỉnh kích thước viền của ô là 1 pixel màu đen, solid là nét liền
- thuộc tính text-align: center; được sử dụng để căn giữa nội dung trong bảng ra giữa, padding: 8px; sử dụng để tạo khoảng lề từ viền cho đến nội dung cách nhau 8px bảng nhìn đẹp hơn tí

--> Lesson 4: (header, footer, section, nav)

- Các thành phần semantics trong html là thẻ header, nav, section, article, aside, footer
- Thẻ header là phần đầu trang của website, thường chứa logo, menu
- Thẻ nav được sử dụng để viết menu điều hướng
- Thẻ section được sử dụng để chia độc lập nội dung 1 cách rõ ràng hơn, và thường sẽ đi kèm với tiêu đề
- Thẻ footer là phần chân trang thường chứa các thông tin như thông tin liên hệ, số điện thoại, địa chỉ của cơ quan công ty, nhà hàng,...
- Sử dụng thẻ div khi phân chia bố cục layout khi cần đúng ngữ nghĩa, chỉ only yêu cầu đúng kĩ thuật là được
- Còn sử dụng thẻ section khi mỗi section sẽ có nội dung riêng biệt và có tiêu đề
- Thuộc tính display: flex; được sử dụng để tạo layout dàn ngang ra, còn display: flex + flex-direction: column-reverse; hoặc flex-direction: column; để tạo layout nằm dọc

--> Lesson 5: CSS: color, font-family, text-align, margin, padding

- Phần GG Fonts bắt buộc phải gán link trên thẻ head thì mới có thể sử dụng tên font chữ trong css
- Thuộc tính background-color được sử dụng để nổi màu nền
- Thuộc tính color được sử dụng để đổi màu chữ
- Thuộc tính padding là khoảng cách từ nội dung tới viền
- Thuộc tính margin là khoảng cách bên ngoài nội dung
- Thuộc tính text-align để điều chỉnh chữ sang các hướng như trái phải hoặc ở giữa,...

--> Lesson 6: Border, position, các thuộc tính center

- Thuộc tính border và border-radius: giúp cho khung trở nên đẹp hơn có thể chỉnh độ dày màu sắc và độ bo góc của viền theo kích thước
- position: relative là phần cha bọc absolute, absolute cũng sẽ không thay đổi vị trí của nó khi relative không di chuyển, khi relative di chuyển thì absulute cũng di chuyển theo theo nhưng không fix cứng theo scroll màn hình
- position: fixed sẽ fix cứng theo scroll màn hình
- Thuộc tính display: flex; để dàn trang, kết hợp với thuộc tính flex-direction: row là ngang column là dọc
- display: flex + align-items: center không thể căn ngang được vì 2 thuộc tính này sử dụng cho căn dọc items
- Thuộc tính position + transform được sử dụng để căn ngang item
- position: absolute; đưa ra khỏi vùng đó và có thể chỉnh sửa vị trí bằng thuộc tính top, left, right, bottom
- Thuộc tính left đặt là 50% đặt ở bên trái của class box
- Thuộc tính transform: translateX(-50%); đẩy phần tử ngược lại 50% chiều rộng của màn hình được tính theo tỉ lệ 100%, nếu là chiều dọc thì sẽ là translateY(-50%)
- Với position thì nếu là ngang thì sẽ sử dụng right hoặc left để chỉnh sao cho nó vào giữa kết hợp với transformX, còn dọc thì sẽ sử dụng top hoặc bottom kết hợp với transformY
