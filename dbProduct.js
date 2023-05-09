const productsDB = [
  { id: 1, name: "IP 11 pro max", price: 800, quantity: 1 },
  { id: 2, name: "IP 14 pro max", price: 1200, quantity: 1 },
];

const dbProducts = localStorage.getItem("products");

if (!dbProducts) {
  localStorage.setItem("products", JSON.stringify(productsDB));
}
