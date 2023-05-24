// Read

// INPUT: Dữ liệu cần render, xác định được nơi cần hiển thị

// B1: Xác định được data cần hiện thị

const listUser = [
  { name: "Sáng", id: 1 },
  { name: "Việt", id: 2 },
  { name: "Thái", id: 3 },
];

const listUser2 = [
  { name: "Phương", id: 4 },
  { name: "Trung", id: 5 },
  { name: "Tín", id: 6 },
];

const allUser = [
  { name: "Việt", id: 1 },
  { name: "Việt", id: 2 },
  { name: "Thái", id: 3 },
  { name: "Phương", id: 4 },
  { name: "Trung", id: 5 },
  { name: "Tín", id: 6 },
];

renderTable(allUser);
// chuyen doi team

// value là tham số -- biến cục bộ trong function

function handleTeam(value) {
  console.log(value);
  if (value === "team 1") {
    renderTable(listUser);
  } else {
    renderTable(listUser2);
  }
}

function handleOnInput(value) {
  // Value là kết quả mà input truyền khi gọi
  console.log(111, value);
  //   B2. Tìm user.name == value trong allUser

  //   B3. Tạo một mảng rỗng để chứa các phần tử thỏa điều kiện(được push vào khi thỏa)
  const resultFiler = [];

  //   B4. Chạy for để tìm phần tử thỏa đk và push() vào
  for (let index = 0; index < allUser.length; index++) {
    const user = allUser[index];

    // B5. dùng includes() để kí tự chứa trong user.name và dùng toUpperCase() để đồng bộ về kiểu in thường
    if (user.name.toUpperCase().includes(value.toUpperCase())) {
      // B5.1 push() user vào khi đk đúng
      resultFiler.push(user);
    }
  }

  const resultFiler2 = allUser.filter((user) => {
    if (user.name.toUpperCase().includes(value.toUpperCase())) {
      return true;
    }
  });

  //   Cách viết ngắn gọn của arrow function khi return về 1 kết quả mà không cần thực hiệ logic code
  //   const resultFiler3 = allUser.filter((user) => user.name.toUpperCase().includes(value.toUpperCase()));

  console.log(111, resultFiler2);

  //   B6. Gọi function để render dữ liệu mảng mới
  renderTable(resultFiler);
}

// Xử lý add dữ liêu

function handeAdd() {
  // Lấy chỉ số phần tử cuối cùng
  const indexUserLastest = allUser.length - 1;

  //   Lấy được phần tử cuối cùng
  const userLastest = allUser[indexUserLastest];

  //   Lấy được id phần tử cuối và tăng lên 1

  const id = userLastest.id + 1;
  const newUser = { id: id, name: "No name" };
  //   Thêm user vào allUser
  allUser.push(newUser);

  //   Render lại dữ liệu
  renderTable(allUser);
}

// function có tính chất hoisting --> khai báo lên trên đầu
function renderTable(data) {
  // B2. Xác định và lấy element cần thay đổi nội dung

  const tbodyElement = document.querySelector("tbody");

  // B3: Xây dựng nội dung bên trong element

  let contentTbody = "";

  data.forEach((item, index) => {
    contentTbody += `
    <tr>
        <td>${index + 1}</td>
        <td>${item.name}</td>
    <td><button >Edit</button><button>Delete</button></td>
  </tr>
    `;

    //     contentTbody +=
    //       "<tr><td>" +
    //       (index + 1) +
    //       "</td><td>" +
    //       item.name +
    //       "</td><td><button >Edit</button><button>Delete</button></td></tr>";
  });

  // B3. thay đổi nội dung trong element --> render

  tbodyElement.innerHTML = contentTbody;
}
