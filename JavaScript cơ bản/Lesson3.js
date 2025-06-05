// Array

// Cấu trúc cơ bản:
//     array.map(function(phần tử, mảng gốc,...) {})
// Dùng khi biến đổi từng những gì trong mảng thành một value mới

// Nhân đôi với hàm map
const nhieuSo = [1, 2, 3, 4, 5, 6];

const nhieuSoMoi = nhieuSo.map(function (so) {
  return so * 2; // nhân mỗi số trong mảng vs 2
});
console.log(nhieuSoMoi); // chạy log ra 2, 4, 6, 8, 10, 12

// Dùng arrow function
const nhieuSoMoi1 = [1, 2, 3];
const nhanDoiSo = nhieuSo.map((n) => n * 2);
console.log(nhanDoiSo);

// Duyệt mảng object
const nhieuSinhVien = [
  { ten: "Dương", tuoi: 21 },
  { ten: "Anh", tuoi: 22 },
  { ten: "Đức", tuoi: 23 },
];
const tenNhieuSinhVien = nhieuSinhVien.map((sinhVien) => sinhVien.ten);
console.log(tenNhieuSinhVien);

// filter()
// Cấu trúc cơ bản:
//     array.filter(function(phần tử, mảng gốc,...) {})
// Lọc số chẵn trong mảng
const nhieuSo1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const soChan = nhieuSo1.filter(function (so1) {
  return so1 % 2 === 0; // === là so sánh giá trị và kiểu dữ liệu
});
const soLe = nhieuSo1.filter((so1) => so1 % 2 !== 0);
console.log(soChan);
console.log(soLe);
// done lọc số chẵn và số lẻ
