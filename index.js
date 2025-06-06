const users = [
  { id: 1, name: "Nguyễn Văn A", age: 22, description: "Sinh viên ngành CNTT" },
  {
    id: 2,
    name: "Trần Thị B",
    age: 19,
    description: "Yêu thích thiết kế đồ họa",
  },
  {
    id: 3,
    name: "Dương Anh Đức",
    age: 21,
    description: "Lập trình viên frontend",
  },
  { id: 4, name: "Phạm Thị D", age: 20, description: "Học ngành Marketing" },
  { id: 5, name: "Hoàng Văn E", age: 12, description: "Đã tốt nghiệp đại học" },
  { id: 6, name: "Đỗ Thị F", age: 18, description: "Sinh viên năm nhất" },
  { id: 7, name: "Vũ Văn G", age: 14, description: "Chuyên gia dữ liệu" },
  { id: 8, name: "Bùi Thị H", age: 21, description: "Đang học ngành du lịch" },
  { id: 9, name: "Ngô Văn I", age: 16, description: "Nhân viên kinh doanh" },
  {
    id: 10,
    name: "Lý Thị K",
    age: 24,
    description: "Thích công nghệ và startup",
  },
];

// Lọc ra những người từ 18 tuổi trở lên
const nguoiLonTuoi = users.filter((user) => user.age >= 18);
console.log("Những người từ 18 tuổi trở lên là: ", nguoiLonTuoi);

// Tìm ra những người có tên là Đức
const nguoiTenDuc = users.filter((user) => user.name.includes("Đức")); // includes() dùng để kiểm tra xem một chuỗi (string) hoặc mảng (array) có chứa một phần tử nào đó hay k
console.log("Những người có tên là Đức là: ", nguoiTenDuc);

// Tăng tuổi của tất cả thêm 2
const tuoiTangLen2 = users.map((user) => {
  return user.age + 2; // return trả về giá trị tuổi của mọi người bằng cách truy vấn vào user vào thuộc tính age xong +2 tuổi của mọi người
});
console.log("Tuổi của mọi người sau khi tăng thêm 2 là: ", tuoiTangLen2);
