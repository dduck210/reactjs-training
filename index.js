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
    name: "Dương Đức Anh",
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
const nguoiLonTuoi = users.filter((user) => user.age >= 22);
console.log("Mấy người đó là: ", nguoiLonTuoi);

// Tìm ra những người có tên là Đức
const nguoiTenDuc = users.filter((user) => user.name.includes("Đức")); // includes() dùng để kiểm tra xem một chuỗi (string) hoặc mảng (array) có chứa một phần tử nào đó hay k
console.log("Những người có tên là Đức là: ", nguoiTenDuc);

// Tăng tuổi của tất cả thêm 2
const tuoiTangLen2 = users.map((user) => {
  return {};
});

// in ra thông tin tuổi và cả tên của mọi người sau khi tăng tuổi

// const person = {
//   name: "Nguyễn Văn A",
//   age: 22,
//   description: "Sinh viên ngành CNTT",
// };
// console.log(`${person.name} ${person.age + 2}`);

users.map((getFull) => {
  console.log(
    `Tên: ${getFull.name}, Tuổi: ${getFull.age + 2}, Mô tả: ${
      getFull.description
    }`
  );
});
// // sử dụng filter để in ra toàn bộ thông tin của người dùng sau khi tăng tuổi
const allThongTinUsers = users.filter((user) => {
  return {
    id: user.id,
    name: user.name,
    age: user.age + 2,
    description: user.description,
  };
});
console.log("Thông tin all là: ", allThongTinUsers);

const tenTuoiAllUsers = users.map((user) => {
  return `${user.id} ${user.name} ${user.age + 2} ${user.description}`; // return trả về tên và tuổi của mọi người sau khi tăng tuổi
});
console.log("Tuổi là", tuoiTangLen2, tenTuoiAllUsers);

const tuoiAllUsers1 = users.maps((user) => {
  return {
    id: user.id,
    name: user.name,
    age: user.age,
    description: user.description,
  };
});
console.log("Tuổi", tuoiAllUsers1);

// ${user.name} - ${user.age

const tuoiAllUser = users.maps((users) => {
  return {
    name: users.name,
    age: users.age + 2,
  };
});
console.log("Tuổi của all users sau khi tăng", tuoiAllUser);

const tuoiAllUsers2 = users.maps((user) => {
  return user.age + 2;
});
console.log("Tuổi của all users sau khi tăng", tuoiAllUsers2);
