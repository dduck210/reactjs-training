var name = "Dương";
var name = "Đức";
console.log(name);
// done var

let age = 21;
// let age = 20; k đc khai báo lại trong cùng 1 phạm vi
console.log(age);
// done let

const number = 25;
// const number = 20; k đc khai báo lại trong cùng 1 phạm vi
console.log(number);

const numbers = [1, 2, 3];
numbers.push(4); // đc phép đẩy thêm phần tử vào mảng
// numbers = [1, 2, 3, 4]; k đc phép gán lại mảng
console.log(numbers);

const person = { name: "Dương" };
person.name = "Anh";
console.log(person.name);
// k thể gán lại toàn bộ const, nhg vẫn sửa bên trong được nếu là mảng hoặc object
// done const

// kiểu dữ liệu number
let age1 = 25;
let price = 19.99;
console.log(age1);
console.log(price);

// kiểu dữ liệu string

let name1 = "Duc";
let greeting = "Hello!";
let template = `Chào bạn ${name1}`;
console.log(name1);
console.log(greeting);
console.log(template);

// kiểu dữ liệu boolean
let newStudent = true;
let newTeacher = false;
console.log(newStudent);
console.log(newTeacher);

// kiểu dữ liệu undefined
let nodata = "Đức"; // Khởi tạo biến nhưng chưa gán giá trị, nếu biến đã gán value thì sẽ là undefined
console.log(typeof nodata); // typeof trả về kiểu dữ liệu của biến

// kiểu dữ liệu null
let emptyValue = null;
console.log(123123123, typeof emptyValue);

// Kiểu dữ liệu object
let person1 = {
  name: "Đức",
  age: 21,
  isStudent: true,
};
console.log(person1);

// Kiểu dữ liệu array
let fruits = ["Táo", "Cam", "Chuối"];
console.log(fruits[2]); // In ra 1 phần tử trong mảng
console.log(fruits); // In ra toàn bộ mảng

// Thực hiện phép tính + - * / %
let a = 10;
let b = 5;
let phepCong = a + b; // Phép cộng
let phepTru = a - b; // Phép trừ
let phepNhan = a * b; // Phép nhân
let phepChia = a / b; // Phép chia
let phepChiaLayDu = a % b; // Phép chia lấy dư
console.log("Tổng:", phepCong);
console.log("Hiệu:", phepTru);
console.log("Tích:", phepNhan);
console.log("Thương:", phepChia);
console.log("Số dư:", phepChiaLayDu);

// Phân biệt alert, console.log
let name2 = "Đức";

// Hiển thị thông báo popup trên trình duyệt (người dùng sẽ thấy đc)
alert("Xin chào " + name2);

// Ghi thông tin vào bảng điều khiển (người dùng sẽ k thấy đc, chỉ dev mới có thể thấy)
console.log("Tên người dùng là:", name2);
