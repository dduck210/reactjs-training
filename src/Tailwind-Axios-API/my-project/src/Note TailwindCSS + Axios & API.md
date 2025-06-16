--> Lesson 1: TailwindCSS Setup

- Cách để setup tailwindcss:

* Tạo dự án bằng câu lệnh sau
  `npx create-react-app my-project
cd my-project`

- Sau đó là cài tailwindcss bằng câu lệnh sẽ create ra file `tailwind.config.js`:
  `npm install -D tailwindcss@3
npx tailwindcss init`
- Sửa file `tailwind.config.js` thành như này:
  `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`
- Vào đường dẫn file `./src/index.css` sau đó thêm 3 dòng này vào:

* `@tailwind base;
@tailwind components;
@tailwind utilities;`

- Sau đó thì khởi chạy dự án bằng câu lệnh là `npm run start`
- Kiểm tra xem project đã receive tailwindcss chưa bằng cách test đơn giản là, sử dụng các thuộc tính css của tailwind ví dụ `<h1 className="text-3xl font-bold underline">Hello world!</h1>`
