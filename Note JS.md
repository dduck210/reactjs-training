--> Lesson 1: Biến, Kiểu Dữ Liệu, Toán Tử

- var có phạm vi theo hàm, và có thể bị đẩy lên đầu hàm
- var là kiểu khai báo function scope, allow khai báo lại
- let có phạm vi theo block {}, sử dụng nhiều trong việc viết vòng lặp,...
- let là kiểu khai báo block scope, decline
- let sẽ k đc khai báo lại khi ở trong cùng 1 phạm vi
- const dùng để khai báo biến hằng viết tắt là constant variable là biến có giá trị k thể thay đổi được sau khi đã gán lần đầu khá giống vs let
- khai báo bằng const, phải gán giá trị ngay lúc khai báo và sau đó k thể gán lại giá trị khác cho biến đó
- const allow đẩy thêm phần tử vào mảng, nma vs đk là k đc allow gán lại mảng, tuy k thể gán lại toàn bộ const, nma vẫn sửa bên trong được nếu là mảng hoặc là 1 obj
- kiểu dữ liệu number (số) được sử dụng để viết các giá trị là số, bao gồm cả số nguyên và số thập phân, ví dụ let `age = 25; let price = 19.99;`
- kiểu dữ liệu string (chuỗi) được sử dụng để viết chữ, văn bản, hoặc ký tự, kiểu viết sẽ là '...', nháy kép "..." hoặc dấu `...`
- kiểu dữ liệu boolean (đúng hoặc sai) chỉ có 2 giá trị là true đúng hoặc là false sai, sử dụng để kiểm tra điều kiện đúng / sai
- kiểu dữ liệu undefined (chưa xác định) là khai báo nhg k gán dữ liệu vào cho nó thì khi chạy sẽ báo undefined
- kiểu dữ liệu null (k có giá trị), ... khi gán giá trị là null thì khi chạy chương trình sẽ là null
- kiểu dữ liệu object (đối tượng) là kiểu dữ liệu dùng để viết dữ liệu bao gồm key (name, age, isStudent) và value ("Đức", 21, true)
- type of (check kiểu dữ liệu) giả sử gán giá trị là 25 thì type sẽ là number, gán value là "Đức" thì sẽ là type string
- kiểu dữ liệu array (mảng) là kiểu dữ liệu được sử dụng để viết nhiều giá trị theo thứ tự, dùng dấu [], chứa các phần tử phân cách bằng dấu phẩy
- Cách phân biệt alert, console.log giả sử `alert("Xin chào " + name2);` sẽ hiển thị thông báo popup trên trình duyệt (người dùng sẽ thấy đc). Còn `console.log("Tên người dùng là:", name2);` thì thường đc dev sử dụng vào việc debug, ng dùng sẽ k thể thấy đc, chỉ có dev mới nhìn thấy
- toán tử so sánh == được sử dụng khi so sánh bằng, so sánh value, thì sẽ trả về true
- toán tử so sánh === được sử dụng khi so sánh chính xác tuyệt đối cả value cả type, tất cả sẽ trả về false nếu như so sánh sai kiểu type và value, chỉ trả về true đúng đúng kiểu type và value

--> Lesson 2: Function, Callback, Arrow Function

// Note Function

- hàm k thể tự run đc mà bắt buộc phải gọi nó ra bằng console.log();
- nếu như muốn lấy giá trị thì phải return
- nếu như truyền thiếu tham số thì hàm sẽ trả về undefined

// Note Arrow Function

- Arrow function có cú pháp const tenHam = (a, b) => {} tenHam(1, 2) khác biệt so với function truyền thống là k có `=> {}`, đây là cú pháp
  function tenHam(thamSo1, thamSo2, thamSo3) {
  return giaTriTraVe;
  }
  console.log(tenHam(1, 2, 3));
- Hàm k có tham số trả về có cú pháp là:
  const tenHam = (k truyen tham so) => {
  console.log("");
  };
  tenHam();
- Hàm có tham số trả về có cú pháp là:
  const tenHam = (truyen vao tham so) => {
  return tham so;
  };
  console.log(tenHam(thamso));
- `const person2 = {
name: "Duong",
sayHi: function () {
console.log("Hi, I'm " + this.name);
},
};
person2.sayHi();`
  Ở trong ví dụ trên thì this sẽ trỏ về đối tượng gọi nó là person2
- Trong hàm function truyền thống thì sẽ sử dụng dụng this để gọi ra tên biến, còn trong hàm arrow function thì không thể sử dụng this để gọi tên hàm được mà sẽ sử dụng dấu arrow function là `= () {}` rồi sau đó sẽ log ra + tên biến, cuối cùng thì gọi tenHam(); ra
- Hàm callback là 1 hàm có thể run sau khi 1 hàm khác đã hoàn thành
- sau khi khai báo biến có thể callback gọi cái tổng ra để tính toán và setTimeout cho nó thời gian sau đó tạo hàm in ra kết quả ví dụ `tinhTong(10, 20, inKetQua)`, như ví dụ thì kết quả sẽ in ra tổng = 15
- Ngoài ra cũng có thể sử dụng arrow function để làm callback ví dụ
  `tinhTong(7, 3, (kq) => {
  console.log("Kết quả là:", kq);
});`
  kết quả sẽ in ra là 7 + 3 = 10, callback(10) chính là gọi (kq), hàm callback chính là đoạn `(kq) => { }`

--> Lesson 3 - Array Method (map, filter)

- .map() là một hàm dùng để duyệt qua từng phần tử của mảng
- Nó tạo ra một mảng mới từ kết quả của mỗi lần duyệt
- K làm thay đổi mảng ban đầu
- Cấu trúc cơ bản:
  `array.map(function(phầnTử, chỉSố, mảngGốc) { ... })`
- Dùng khi muốn thay đổi từng phần tử trong mảng thành một value mới
- Dùng return để trả về giá trị mới cho từng phần tử
- `map();` có thể dùng arrow function, duyệt đc mảng object, nhân đôi mảng mỗi phần tử
- filter() sử dụng để duyệt qua mảng và giữ lại các phần tử đúng điều kiện
- number % 2 === 0 Kiểm tra số đó có chia hết cho 2 thì sẽ là số chẵn
- => Cách viết hàm ngắn gọn (arrow function)
  ví dụ `const soLe = nhieuSo1.filter((so1) => so1 % 2 !== 0);`
- includes() dùng để kiểm tra xem một chuỗi (string) hoặc mảng (array) có chứa một phần tử nào đó hay k

--> Lesson 4 - Câu điều kiện (If / Else, Switch)

- if (câu điều kiện đơn) sẽ kiểm tra điều kiện cụ thể thì `if (tuoi < 18)` thì có nghĩa là nếu như tuổi nhỏ hơn 18, nếu như đúng (true) thì sẽ chạy đến {}, nếu như khai báo biến không trong phạm vi của điều kiện thì sẽ không `console.log();` được
- if-else (câu điều kiện 2 nhánh) có nghĩa là nếu như câu điều kiện if mà sai (false) thì sẽ chạy đến else giả sử
  `let time = 9;
if (time > 8) {
  console.log("Bạn đã check-in muộn rồi");
} else {
  console.log("Bạn đã check-in đúng giờ");
}`
  => khai báo biến time = 9, câu if đầu tiên là set time > 8, mà 9 thì hiển nhiên lớn hơn 8 nên câu điều kiện sẽ chạy đến hết câu if là xong, nghĩa là check-in muộn, còn ngược lại giả sử set time = 7, câu if đầu tiên set time > 8, thì 7 chắc chắn sẽ nhỏ hơn 8 nên khi chạy hết câu điều kiện if đầu tiên báo sai (false) thì chương trình sẽ chạy xuống else (ở đây else k có condition gì có nghĩa là tất cả các trường hợp còn lại miễn là > 8 thì sẽ là check-in đúng giờ)
- if-else if-else (câu điều kiện đa nhánh) kiểm tra được nhiều condition, chương trình sẽ dừng tại nhánh đúng đầu tiên, các nhánh sau sẽ bị bỏ qua
  => - if là câu điều kiện đơn, - if-else là câu điều kiện 2 nhánh, if-else if-else là câu điều kiện đa nhánh
- switch case sẽ chạy từ case đầu tiên đến case cuối cùng, mỗi case sẽ có 1 `break` và cứ chạy đến khi nào giả sử không có case nào đúng phù hợp thì sẽ chạy đến `default:`

--> Lesson 5 - Vòng lặp

- += là gán cộng
