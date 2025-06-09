// vòng lặp for
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i];
}
console.log(text);

for (let i = 0; i < 10; i++) {}
// let i = 0: khởi tạo biến cho vòng lặp
// i < 10: điều kiện để vòng lặp thực hiện i < 10
// i++: tăng giá trị lên 1 đơn vị mỗi khi bắt đầu chạy vòng for
var i = 2;
for (; i < 10; i++) {
  console.log(i);
}
// cx có thể bỏ trống value thứ 2, nếu value thứ 2 trả
for (let i = 2; ; i++) {
  console.log(i);
  if (i === 5) break;
}

var students = [
  {
    name: "Đức",
    age: 14,
  },
  {
    name: "Dương",
    age: 22,
  },
  {
    name: "Anh",
    age: 43,
  },
  {
    name: "Lâm",
    age: 18,
  },
];
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name + students[i].age);
  console.log(students[i].age);
}

// foreach duyệt mảng
const fruits = ["apple", "orange", "cherry"];
// fruits.forEach(MyFunction);
console.log(fruits);
// Chỉ lấy ra mỗi quả táo
// function myFunction(item) {
//   if (item === "apple") {
//     console.log("Táo: " + item);
//   }
// }
// console.log(fruits[0]);
// console.log(fruits[1]);

fruits.forEach(myFunction);

fruits.forEach(function (item) {
  // console.log(item, index, arr);
  if (item === "apple") {
    console.log(item);
  }
});

// let sum = 0;
const numbers = [6, 44, 12, 9999];
numbers.forEach(myFunction);

function myFunction(item) {
  // sum += item;
}
// console.log("Kết quả: " + sum);

function myFunction1(item, index, arr) {
  arr[index] = item * 3;
}
numbers.forEach(myFunction1);
console.log(numbers);

// console.log(arr);

// done tính tổng qua mảng forEach

// let arr = [
//   { name: "Geeks", roll: 1 },
//   { name: "For", roll: 2 },
//   { name: "Geeks", roll: 3 },
// ];

// arr.forEach((element, index) => {
//   arr[index] = { name: "GFG", age: 4 };
// });

// console.log(arr);
