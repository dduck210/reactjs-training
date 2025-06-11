// // tạo hàm function truyền thống
// // function tenHam(thamSo1, thamSo2, thamSo3) {
// //   return giaTriTraVe;
// // }
// // console.log(tenHam(1, 2, 3));

// // ví dụ về tạo hàm function truyền thống
// // đây cũng là hàm có tham số có trả về
// function tinhTong(a, b) {
//   return a + b;
// }

// let tong = tinhTong(6, 9);
// console.log("Tổng là:", tong);

// // hàm k có tham số truyền vào, không return giá trị
// function chaoBan() {
//   console.log("Xin chào bạn Đức");
// }
// chaoBan();

// // hàm có tham số truyền vào, không return giá trị
// function xinChaoTen(ten) {
//   console.log("Xin chào " + ten);
// }
// xinChaoTen("Đức");

// // arrow function có cú pháp như sau
// const tenHam1 = (thamSo1, thamSo2) => {
//   return giaTri;
// };

// // ví dụ về arrow function

// // hàm k có tham số có trả về
// const chaoBan1 = () => {
//   console.log("Heslo Đức");
// };
// chaoBan1();

// // hàm có tham số có trả về
// const tinhTong1 = (a, b) => {
//   return a + b;
// };
// console.log(tinhTong1(3, 4));

// const person2 = {
//   name: "Duong",
//   sayHi: () => {
//     const name = [1, 2, 4, "áddsdas"]; // Biến name trong phạm vi hàm sayHi
//     console.log("Hi, I'm " + name);
//   },
// };
// person2.sayHi();

// // this trong arrow function sẽ không trỏ đến đối tượng chứa nó, mà sẽ trỏ đến phạm vi bên ngoài của nó.
// const car = () => {
//   const name = "Merc";
//   console.log("This is a car " + name);
// };
// car();

// // this trong function truyền thống
// const person3 = {
//   name: "Duc",
//   sayHi: function () {
//     console.log("Hi, I'm " + this.name);
//   },
// };
// person3.sayHi();

// callback function là hàm được truyền vào như một tham số cho hàm khác và sẽ được gọi lại trong hàm đó.
// Hàm tính tổng và dùng callback để in ra kết quả
function tinhTong(a, b, callback) {
  const tong = a + b;
  callback(tong); // Gọi lại hàm callback với kết quả tính toán
}
// Hàm callback để in ra kết quả
function inKetQua(ketQua) {
  console.log("Tổng là:", ketQua);
}
// Gọi hàm tính tổng và truyền hàm in kết quả làm callback
tinhTong(5, 10, inKetQua);
// Hàm callback với arrow function
const inKetQua1 = (ketQua) => {
  console.log("Tổng là:", ketQua);
};

// Hàm tính tổng xử lý bất đồng bộ
function tinhTong(a, b, callback) {
  console.log("Đợi tôi tính xong đã");
  setTimeout(() => {
    const tong = a + b;
    callback(tong);
  }, 2000);
}

// Hàm callback để in ra kết quả
function inKetQua(ketQua) {
  console.log("Tổng là:", ketQua);
}

// Gọi hàm tính tổng và truyền callback
tinhTong(5, 10, inKetQua);

// Hoặc dùng arrow function làm callback
tinhTong(7, 3, (kq) => {
  console.log("Kết quả là:", kq);
});
