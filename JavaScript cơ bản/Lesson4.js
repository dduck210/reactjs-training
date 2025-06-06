// let tuoi = 20;
// if (tuoi < 18) {
//   console.log("Bạn đã đủ tuổi đâu mà lái xe");
// }
// // done câu if điều kiện đơn

let time = 9;
if (time > 8) {
  console.log("Bạn đã check-in muộn rồi");
} else {
  console.log("Bạn đã check-in đúng giờ");
}

// done câu if-else điều kiện 2 nhánh
let diem = 10;
if (diem >= 9) {
  console.log("Giỏi");
} else if (diem >= 7) {
  console.log("Khá");
} else if (diem >= 5) {
  console.log("Trung bình");
} else if (diem >= 3) {
  console.log("Yếu");
} else {
  console.log("Kém");
}

// // let rank = "Đồng";
// // if (rank >= "Đại cao thủ") {
// //   console.log("Bạn đã đủ điều kiện tham gia giải đấu");
// // } else if (rank >= "Cao thủ") {
// //   console.log("Bạn cần nâng cao kỹ năng hơn nữa");
// // } else if (rank >= "Kim cương") {
// //   console.log("Bạn cần luyện tập chăm chỉ hơn");
// // } else if (rank >= "Lục bảo") {
// //   console.log("Bạn cần luyện tập nhiều hơn nữa");
// // } else if (rank >= "Bạch kim") {
// //   console.log("Bạn cần luyện tập rất nhiều");
// // } else if (rank >= "Vàng") {
// //   console.log("Bạn cần luyện tập thường xuyên hơn");
// // } else if (rank >= "Bạc") {
// //   console.log("Bạn cần luyện tập liên tục");
// // } else if (rank >= "Đồng") {
// //   console.log("Bạn cần luyện tập mỗi ngày");
// // } else {
// //   console.log("Bạn cần luyện tập liên tục và chăm chỉ hơn nữa");
// // }

// switch
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    day = "Không biết ngày nào cả";
    break;
}
console.log("Today is " + day);
console.log(new Date().getDay());

// done câu switch case

// exercise switch case
var x = 5;
if (x < 0) {
  console.log("x là số âm");
} else if (x === 0) {
  console.log("x là 0");
} else if (x > 0) {
  console.log("x là số nguyên");
} else {
  log("x là số thập phân");
}
