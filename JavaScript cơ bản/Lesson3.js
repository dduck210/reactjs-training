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
// Lọc sinh viên trên 22 tuổi
const nhieuSinhVien1 = [
  { ten: "Đức", tuoi: 4 },
  { ten: "Dương", tuoi: 5 },
  { ten: "Anh", tuoi: 23 },
  { ten: "Hà", tuoi: 24 },
  { ten: "Hùng", tuoi: 7 },
  { ten: "Hải", tuoi: 25 },
  { ten: "Hà", tuoi: 26 },
];
const sinhVienTren22Tuoi = nhieuSinhVien1.filter(
  (sinhVien) => sinhVien.tuoi > 22
);

const thongTinSinhVien = nhieuSinhVien1.map((nhieuSinhVien1) => {
  return {
    ten: nhieuSinhVien1.ten,
    tuoi: nhieuSinhVien1.tuoi + 2,
  };
});
console.log(sinhVienTren22Tuoi);
console.log(thongTinSinhVien);

// done lọc sinh viên trên 22 tuổi

// arrow function tính diện tích
const arrDienTich = arrBanKinh.map(() => {
  (banKinh) => Math.floor(Math.PI * banKinh * 2);
});
console.log(arrDienTich);
