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
- - Trong file UserList sau khi gọi fetch sẽ nhận đc 1 res, thì cái thằng res.ok là 1 attribute boolean của res obj giả sử `res.ok === true` có nghĩa là đã call api thành công, còn `res.ok === false` có nghĩa là call api lỗi
- Còn `throw new Error("Lỗi khi gọi API!");` ở đây `throw` là ném ra error, `new Error("")` ở đây là đang tạo ra 1 đối tượng lỗi gọi là Error obj chứa 1 nội dung nào đó giả sử là lỗi khi call api, thì chương trình sẽ nhảy xuống ngay catch, nó sẽ k chạy các dòng bên dưới trong try nữa
- Nếu feedback của server k oke có nghĩa là error thì sẽ tạo error và chuyển sang catch để handle error đó, res.ok để check res thành công hay lỗi, throw là ném lỗi chuyển ngay sang catch, `if (!res.ok) throw new Error` bắt lỗi từ fetch khi server trả về error
- finally đc use khi lệnh luôn luôn chạy kể cả là try thành công hay catch có lỗi, dùng để dọn dẹp, reset status giả sử dùng finally để gọi api setLoading(false) sau khi xong thì sẽ mở kết nối
- Biến `setError("")` truyền string rỗng để clear lỗi cũ nếu có
- `setTimeout(() => {
          setUsers(data);
          setLoading(false);
        }, 1500);`
  Trong đoạn này sử dụng setTimeout() để delay hiển thị data, thằng `setUsers(data)`; đc use để lưu data, còn thằng `setLoading(false)` đc use để disable status loading ngược lại nếu true thì sẽ enable status của loading
- Còn đoạn `if (loading) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center text-blue-700 text-lg font-medium">
        Đang tải dữ liệu... <GradientCircularProgress />
      </div>
    );
  }`
  Khi loading === true thì sẽ chỉ show cái loading, còn ngược nếu === false thì sẽ show toàn bộ nội dung
- Lí do cần phải return sớm để ẩn show toàn bộ giao diện khác đi và như đoạn setTimeout ở trên sẽ hiển thị loading trong vòng 1,5s sau đó mới render UI ra screen, khi tách return sớm sẽ handle đc việc chỉ hiển thị loading để ẩn hết giao diện đi sau 1,5s mới render ra
