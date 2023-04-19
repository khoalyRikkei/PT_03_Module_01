// B1: Khai báo đối tượng Rectangle

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.getPerimeter = () => (this.width + this.height) * 2; //Cách viết 1: arrow function
  this.getArea = function () {
    //Cách viết function 2
    return this.width * this.height;
  };
  this.setWidth = (width) => (this.width = width); // Lấy biến width trong arrow function

  this.setHeight = (height) => (this.height = height);
  this.drawing = (element) => {
    element.style.width = this.width + "px";
    element.style.height = this.height + "px";
    element.style.background = "green";
  };
}

const rectangle1 = new Rectangle(300, 500);
const area = rectangle1.getArea();
console.log("Kiểm tra diện tích", area);

// Bước 2. Xử lý khi click vào drawing
function handleDrawing() {
  // B2.1 lấy value

  const widthValue = Number(document.querySelector("#width-box").value);
  const heightValue = Number(document.querySelector("#height-box").value);

  // B3.1 Lấy element muốn hiển thị kêt quả
  const infoBoxElement = document.querySelector(".info-box");
  const boxElement = document.querySelector(".box");

  // B3.2 Tạo hình chữ nhật với thông tin lấy từ web
  const rectangle = new Rectangle(widthValue, heightValue);

  const area = rectangle.getArea();
  const perimeter = rectangle.getPerimeter();

  // B3.3 Hiển thị kết quả

  infoBoxElement.innerHTML =
    "Diện tích hình chữ nhật là " +
    area +
    ", và chu vi hình chữ nhật là: " +
    perimeter;
  rectangle.drawing(boxElement);
}

// Tự tạo element mới và truyền vào html
