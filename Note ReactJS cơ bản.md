--> Lesson 1: Setup dự án React

- Cách để tạo dự án ReactJS sử dụng Terminal gõ 3 câu lệnh là: `npx create-react-app my-app`, `cd my-app`, `npm start`, sau đó chạy đường dẫn local `http://localhost:3000`
- CRA là viết tắt của create-react-app, khi tạo file sẽ có folder public, trong public sẽ chứa các asset như image, favicon, text, html,..., còn trong src sẽ chứa source code, trong này có cả App.js đây là component đầu tiên khi tạo dự án CRA
- `package.json` đc sử dụng để quản lý các phụ thuộc đã đc downloads về, trong này sẽ chứa tất cả các công cụ để build project
- `node_modules` là nơi tất cả các phụ thuộc đc cài đặt

--> Lesson 2 + 3: Component, Props, State

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
- Để sử dụng đc useState trước hết phải import thư viện cho nó ms active đc `import { useState } from "react";`
- `const [count, setCount] = useState(0);` đây là cách khai báo 1 hàm useState, hàm count đc khởi tạo giá trị bắt đầu từ 0, hàm setCount để cập nhật hàm đó sau khi thay đổi
- Như đã nói ở trên thì hàm setCount để cập nhật lại giá trị của hàm count khởi tạo từ đầu start từ 0, trong đoạn này:
  `const hamTang = () => {
    setCount(count + 1);
};`
  thì hàm setCount đc set bên trong là count tăng thêm 1, ở dưới thì:
  `return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={hamTang}>Click tăng</button>
    </div>
  );`
  return button Click tăng start từ 0 mỗi lần click sẽ tăng lên 1, có nghĩa là hàm setCount đang thực hiện task update lại cái value của count luôn
- Trong này `const [count, setCount] = useState(0);` biến count chính là biến lưu trữ giá trị hiện tại là bao nhiêu phụ thuộc vào useState đang set biến khởi tạo bắt đầu chạy từ 0 thì count sẽ memorize lại, nma sẽ có 1 điều là biến count sẽ change value khi mà biến setCount bắt đầu run, giá sử `setCount(count + 1);` hoặc `setCount(count - 1);` hàm onClick sẽ thực hiện việc cursor của user và biến giá trị value lưu trữ của count lúc đầu sẽ biến mất

--> Học CSS Bootstrap trong ReactJS

- Muốn CSS Bootstrap trong ReactJS cần phải cài thư viện bằng cách mở terminal xong gõ lệnh `npm install react-bootstrap bootstrap`, sau đó import thư viện bootstrap vào file index.js dòng `import "bootstrap/dist/css/bootstrap.min.css";`, sau đó thêm link bootstrap ở file index.html `<link
  rel="stylesheet"
  href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
/>`
- Khác biệt so với việc sử dụng bootstrap ở html là code bằng thẻ class, nhưng ở trong react thì sẽ theo syntax là `className="attribute"`, viết class sẽ bị sai syntax của jsx k receive attribute css của boostrap, syntax sẽ là className + thuộc tính
- Thuộc tính `btn btn-...` giả sử `btn btn-success` để chỉnh màu button màu xanh lá cây, xong `btn-...` giả sử `btn-sm` để chỉnh kích cữ của button là small
- Đây là các thuộc tính chỉnh màu của button:
  `<button type="button" class="btn">Basic</button> Button basic
<button type="button" class="btn btn-primary">Primary</button> Button primary màu xanh dương đậm
<button type="button" class="btn btn-secondary">Secondary</button> Button secondary màu xanh lá cây
<button type="button" class="btn btn-success">Success</button> Button info màu xanh dương nhạt
<button type="button" class="btn btn-info">Info</button> Button info màu xanh dương nhạt
<button type="button" class="btn btn-warning">Warning</button> Button warning màu vàng
<button type="button" class="btn btn-danger">Danger</button> Button danger màu đỏ
<button type="button" class="btn btn-dark">Dark</button> Button dark màu đen
<button type="button" class="btn btn-light">Light</button> Button light màu xám
<button type="button" class="btn btn-link">Link</button>` Button link màu xám nhưng mà sẽ gạch chân bên dưới vì là link
- Đây là các attribute chỉnh kích cỡ button:
  `btn-lg`: là viết tắt của button-large (kích cỡ button to nhất)
  `btn btn-primary`: thuộc tính default button k cần viết gì (kích thước default)
  `btn-sm`: là viết tắt của button-small (kích cỡ button nhỏ nhất)
- Giả sử muốn viết 1 cái button màu đỏ kích cỡ small chẳng hạn thì sẽ viết là `<button type="button" class="btn btn-danger btn-sm">Btn đỏ kích cỡ small</button>`

--> Lesson 4: useEffect

- useEffect sẽ đc sử dụng sau khi quá trình render của component xong, đc gọi ra và thực hiện nhiệm vụ
- Hàm useEffect đc sử dụng để gọi data về để show ra, khi user chạy page thì sẽ auto update lại UI, giả sử như hàm setTimeout có tác dụng để thực thi 1 hàm thực thi bao nhiêu mili giây kể từ khi gọi nó ra setTimeout(), ví dụ như hàm này `useEffect(() => {
setTimeout(() => {
  setCount((count) => count - 1);
}, 1000);`
  ở đây setTimeout mỗi 1000 mili giây bằng 1s, time sẽ đếm ngược từ 0 trở xuống mỗi lần 1 giây, còn nếu là count + 1 thì time sẽ cộng lên mỗi lần 1 giây
- `setTimeout(function () {
  console.log("Timeout");
  }, 1000);

setInterval(function () {
console.log("Interval");
}, 1000);`
ở trong ví dụ này thì setTimeout sẽ thực thi mã sau độ trễ là 1 giây, còn ở setInterval thì sẽ lặp lại sau mỗi 1 giây

- Khi muốn dừng hàm setInterval thì sẽ sử dụng hàm clearInterval, trước hết phải gán setInterval cho 1 biến mới, giả sử `const timer = setInterval(() => {})` sau đó dùng mới sử dụng đc hàm `clearInterval(timer);` gọi timer ra
- Trong 1 function component thì allow sử dụng useEffect để consolo.log() ra component có show đc hay k
- fetch() để gọi api viết được trong useEffect, syntax là:
  `useEffect(() => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    // .then((products) => setProduct(products));
    .then((data) => {
      console.log("Data api: ", data);
      setProducts(data);
    });
}, []);`
  trong đó cần lưu ý, dòng cuối cùng `}, []);` cần thêm [] có nghĩa là 1 mảng rỗng để tránh trường hợp api sẽ call liên tục k pause, mảng rỗng có ý nghĩa là sẽ chỉ call 1 lần xong sẽ k call nữa, `https://fakestoreapi.com/products` là link api fake, sau `fetch("")` trong ngoặc sẽ truyền link api
- Compare [] rỗng vs [] truyền state đấy là khi truyền 1 [] rỗng vào, sau đó log ra chưa có truyền data gì cả, nên giả sử log là `console.log("[] rỗng chỉ chạy 1 lần");` thì system chỉ chạy duy nhất 1 lần và sẽ pause
- Còn vs [] truyền state vào trong đó kiểu là `[name]` thì khi render 1 đoạn html input gì đó request user nhập name vào, thì mỗi khi nhập tên mới, đặt `console.log("Name mới: ", name);` thử thì show ra liên tục k phải 1 lần duy nhất mà là rất nhiều lần

--> Lesson 5: Event & Form Handling

- Trong đoạn này có 1 event là
  `return (
    <div>
      <input
        type="text"
        placeholder="Nhập tên"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      {/* <button className="btn btn-success">Submit</button> */}
    </div>
);`
  `event.target.value` ở đây event là sự kiện đang diễn ra ở onChange xảy ra ở case input user sẽ nhập vào, còn `target.value` là thuộc tính giữ value hiện tại của user khi nhập vào, sau đấy thì `onChange` sẽ xử lí thằng `event`
- `onClick` là trình handle event đc active khi user thực hiện action nhấp vào 1 phần tử nào đó giả sử là 1 `button`, `onClick` trong react khá giống vs trong html có trình handle event nma đc viết là `onclick`, nma trong react thì viết theo kiểu syntax camelCase có nghĩa là kiểu lạc đà, nên sẽ đc viết là `onClick`, khi nhấp vào 1 phần tử thì hàm sẽ bắt đầu đc thực hiện
- `onSubmit` là trình handle event đc sử dụng trong việc gửi form, có thể sử dụng `useState` để lưu giữ các value, ngoài ra có thể use thêm `event.target` để access vào các phần tử của form khi form đc submit
- Thẻ return 1 thẻ `a` mà trong biến handleClickLink
  `const handleClickLink = (event) => {
    event.preventDefault();
    console.log("Link đúng");
};`
  thấy là thẻ a sử dụng để thêm link, nếu giả sử k thêm `event.preventDefault();` thì khi bấm vào phần đc gán link sẽ nhảy ra 1 page mới, nma khi thêm `event.preventDefault();` vào thì browser sẽ tự động chặn k cho nhảy link mới
  <input type="text" defaultValue={inputValue} onChange={handleChange} />
- Validate form sẽ sử dụng required trong thẻ input sẽ có syntax như sau giả sử:
  `<input
  type="email"
  className="form-control"
  id="InputEmail1"
  placeholder="Vui lòng nhập vào email của bạn..."
  required
/>`

  `required` sẽ validate khi ấn submit form sẽ yêu cầu user bắt buộc phải nhập vào k thì validate sẽ báo nhập thiếu trường

- Giống ở bên JS thì `trim();` là 1 method đc use để xoá khoảng trắng đầu cuối của form input, khi handle input đầu vào, thường sẽ phải delete khoảng trắng đầu cuối để xử lí data, phần này thì thằng `onChange` sẽ handle event input thông qua `trim();`, sẽ có syntax là
  `const handleInputChange = (event) => {
  setInputValue(event.target.value.trim());
};`
  ở đây thì vẫn khai báo event onChange như bình thường, vẫn sẽ `event.target.value` để lưu giữ biến input truyền vào để cho onChange sẽ handle event, sau đấy thì truyền method trim() vào `setInputValue(event.target.value.trim());`, return bên browser sẽ trả về thanh input
  `<input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="form-control"
        id="exampleInputPassword1"
      ></input>`
  return onChange truyền vào biến handleInputChange, trên browser khi user nhập data, sẽ k thể sử dụng space để cách cả ở đầu và ở cuối
- Muốn clear value input khi submit thì sẽ gọi biến `setInputValue` đã khai báo từ đầu ra sau đó truyền string rỗng vào syntax là `setInputValue("");` sẽ đc sử dụng trong 1 hàm event arrow function

--> Extends React (Router)

- `useNavigate();` là 1 hook sử dụng để chuyển page khi đang ở trong 1 component
- `navigate("/about");` đc use để để page change sang page about, na ná với thẻ link bên html
- `Routes` và `Route` đc use để định nghĩa các page trong app react, trong đó `Routes` có trách nhiệm sẽ giúp làm khớp các URL đã identify, còn mỗi `Route` sẽ là 1 URL và 1 element riêng để show các thông tin của component đó
- `BrowserRouter` đc use để cho phép người dùng điều hướng giữa các tuyến đường khác nhau thông qua các liên kết và tương tác khác
