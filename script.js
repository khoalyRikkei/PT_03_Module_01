// alert("Hello External");
var subject = "JavaScript";
number = 10;

console.log(number);
// Hiển thị ở info của console
console.log(subject);

// Hiển thị ở warning của console
console.warn("Cảnh báo nhé!!!");

// Hiển thị ở error của console
console.error("Lỗi rồi các bạn ơi");

// Khai báo
var age;

// gán
var age = 18;

console.log("I'm teacher", age);

// Kiểm tra kiểu dữ liệu

console.log("Kiểm tra kiểu dữ liệu", typeof age);

let city = "Danang";

{
  let city = 100;
  console.log(city);
  let age = 20;
  age = 30;
  let address = " 363 Nguyễn Hữu Thọ";

  console.log("Thành phố ", city);
  console.log("Kiểm tra age 2", age);
}
console.log("Kiểm tra thành phố 2", city);

// console.log("Kiểm tra địa chỉ", address);

console.log("check age", age);

// const -> constant
{
  const BIEN_SO_XE_DN = 43;
}

let name_class;

let bag = null;
console.log("check tên lớn", name_class);

console.log("CHeck bag", typeof bag);

// BIEN_SO_XE_DN = 50;

let isCheck = confirm("Bạn muốn kiểm tra nó không?");
// trả về kiểu boolean
console.log("Kết quả check", isCheck);

const r = prompt("Nhập vào bán kính đường tròn", 5);

console.log("Kiểm tra bán kính", r);
