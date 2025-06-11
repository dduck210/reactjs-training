--> Lesson 1: Setup dự án React

- Cách để tạo dự án ReactJS sử dụng Terminal gõ 3 câu lệnh là: `npx create-react-app my-app`, `cd my-app`, `npm start`, sau đó chạy đường dẫn local `http://localhost:3000`
- CRA là viết tắt của create-react-app, khi tạo file sẽ có folder public, trong public sẽ chứa các asset như image, favicon, text, html,..., còn trong src sẽ chứa source code, trong này có cả App.js đây là component đầu tiên khi tạo dự án CRA
- `package.json` đc sử dụng để quản lý các phụ thuộc đã đc downloads về, trong này sẽ chứa tất cả các công cụ để build project
- `node_modules` là nơi tất cả các phụ thuộc đc cài đặt

--> Lesson 2: Component

- Function component dạng component đc viết dưới dạng function, có thể viết nhiều function trong 1 file .js hoặc viết riêng mỗi component 1 file .js cx đc, trong mỗi function component cần có return trả về html, sau đó gọi component trong App.js theo syntax là ví dụ `<Lesson2 />`, khi sử dụng component thì phải import, sử dụng Ctrl + Space để import component
- Class component yêu cầu thành phần phải bao gồm extends React.Component câu lệnh, câu đó tạo ra sự kế thừa cho React.Component và cấp quyền truy cập vào các hàm trong React.Component
- Sự khác biệt giữa Function Component vs Class Component là như Function thì sau khi viết hàm xong chỉ cần return để trả về HTML, nhưng mà Class Component thì cần phải extends React.Component để tạo kế thừa và quyền truy cập vào hàm React.Component, bên trong viết thêm hàm render() để xác định phần HTML cần phải show ra
- Trường hợp viết mỗi component 1 file .js riêng thì ở đều phải khai báo hàm ở đầu đầy đủ và ở cuối cùng dòng sẽ phải có `export default tên hàm`
- Trường hợp muốn hiển thị title dạng chuỗi hoặc số render ra web thì khi return thêm cú pháp {}
- Props sử dụng để truyền dữ liệu từ component cha xuống component con, và nó là 1 object k thể thay đổi đc trong component con
- Bên App.js là component cha, sẽ khởi tạo 1 product array ở dưới sẽ sử dụng ham map() để lặp qua từng sản phẩm ở trang product array đã khai báo
- Bên ProductCard.js sẽ nhận props từ component cha để hiển thị chi tiết từng cốc trà sữa đã khai báo trong mảng
- Truyền props là string, number và cả ảnh, map() để render list component trên browser
- Khi truyền props sử dụng dấu {} nếu k sẽ bị sai cú pháp, truyền chuỗi thì phải có dấu "" giả sử `<NameCard className="name-card" id="alice" />`, còn nếu là số thì sẽ sử dụng dấu `{}` giả sử `<Hello ten="Đức Dương" tuoi={22} />`
- Cách tốt nhất để sử dụng key value là sử dụng 1 chuỗi chính xác nhất giữa cái mối liên quan ví dụ thường sẽ là sử dụng id từ data để làm key ví dụ như là `key={product.id}`
- Dữ liệu tĩnh thì sẽ đc hiển thị như này function FunctionComponent() {
  return <h1>Test thử function component</h1>;
  }
  đoạn này sẽ đc fix cứng trong code, k nhận props từ đâu cả
- const NameCard = (props) => {
  return (
  <div className={props.className}>
  <div id={props.id}>Name: Alice</div>
  </div>
  );
  };
  đây là cách hiển thị dữ liệu qua props, sau khi viết xong sẽ gọi component NameCard ra kèm classname vs id
