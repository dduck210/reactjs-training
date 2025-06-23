--> Lesson 1: TailwindCSS Setup

- Đầu tiên cần phải create project bằng lệnh
  npx create-react-app my-project
  cd my-project
- Sau đó install tailwindcss bằng lệnh
  npm install -D tailwindcss@3
  npx tailwindcss init
- Sửa lại file `tailwind.config.js`
  /** @type {import('tailwindcss').Config} \*/
  module.exports = {
  content: [
  "./src/**/\*.{js,jsx,ts,tsx}",
  ],
  theme: {
  extend: {},
  },
  plugins: [],
  }
- Thêm đoạn này vào trong file index.css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
- Sau đó chạy project bằng câu lệnh
  npm run start

--> Lesson 2+3: Dựng UI bằng class, Responsive, Hover, State

- Các attribute style cơ bản trong tailwindcss:

* bg-blue-500: bg là background, chỉnh nền màu xanh dương
* hover:bg-blue-700: chỉnh hover vào button chuyển xanh dương
* text-white: chỉnh chữ màu trắng
* font-bold: chữ in đậm
* py-2: viết tắt của padding-top với padding-bottom khoảng trên khoảng dưới
* px-4: viết tắt của padding-left với padding-right khoảng trái khoảng phải
* rounded: viết tắt của border-radius bo viền
* gap: khoảng cách giữa các hàng và cột trong bố cục lưới và flexbox
* mb: margin-bottom
* p: khoảng padding
* border: chỉnh đồ dày mỏng của viền
* shadow: đổ bóng khung viền
* text-center: căn giữa chữ
* text-lg: cỡ chữ lớn (lg) là large

- Test tab console trên F12, thấy display trên điện thoại chữ nhỏ hơn, button màu xanh. Còn trên máy tính bảng kích thước >= 768px thì chữ to hơn, button màu xanh lá. Trên laptop kích thước >= 1024px thì chữ to hơn nữa, button màu đỏ. Trên màn hình lớn >=1280px thì chữ to nhất, nút màu tím
- class `md:` use khi screen >= 768px kích thước tablet
- class `lg:` use khi screen >= 1024px kích thước laptop
- class `xl:` use khi screen >= 1280px kích thước screen lớn
- class `2xl:` use khi screen >= 1536px kích thước screen siêu lớn
- `hover` có ý nghĩa là khi di chuột vào phần tử sẽ làm thay đổi màu sắc hoặc kích thước tuỳ theo css giả sử `hover:bg-blue-700` có nghĩa là button sẽ chuyển sang màu xanh dương khi di chuột vào
- `focus` đc use nhiều trong input button, kiểu khi elements đc focus vào thì con trỏ sẽ đứng im k nhấp nháy nữa
- `active` đc use khi nhấn giữ chuột vào phần tử thì sẽ thu nhỏ elements giả sử như này `active:scale-95` là giảm còn 95%

--> Lesson 4: TailwindCSS + Axios & API

- Promise là 1 object đại diện cho 1 tác vụ bất đồng bộ có thể hoàn thành trong tương lai. Là 1 lời hứa sẽ trả result khi task hoàn thành
- Phải dùng .then() vì thằng promise nó sẽ k return về value ngay lập tức, khi sử dụng fetch() truyền link api vào nó sẽ return về 1 promise, thì thằng .then() nó đc use để chờ data và handle sau khi thằng promise hoàn thành
- fetch là thằng k trả về data thật, thì khi log thằng res ra thấy return về 1 promise chứa response object nhưng mà sẽ chưa có data json nên nó chưa có data thật
- Trong useEffect() không thể use async trực tiếp bởi vì useEffect k receive hàm async
- Cách khai báo hàm async đúng cách là giả sử
  `const fetchData = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Lỗi fetch:", error);
    }
  };
  fetchData();`
  syntax sẽ là
  `const fetchData = async () => {};
fetchData();`
- `const res = await fetch("https://fakestoreapi.com/products");` trong dòng này await fetch sẽ đợi api trả về res obj, k phải data thật, giống như cách dùng với fetch thường thì log res ra trả về res obj chưa có data json nên nó k có data, giống như promise chứa res obj
- Nguyên nhân dẫn đến lỗi `product.map() is not a function` bởi vì products k phải là mảng, nên k thể gọi map đc, nên khi muốn data hiển thị ra phải viết là `setProducts(data.products);` nếu `setProducts(data);` thì sẽ bị báo not a function nên phải truyền mảng products vào cho nó
- Muốn log ra đc từng 1 id bất kì trong 1 mảng thì syntax sẽ là `console.log(data.products[0]);` products[0] có nghĩa là gọi ra id đứng đầu tiên trong 1 mảng tương tự lần lượt sẽ là 1,2,3 các id tiếp theo
