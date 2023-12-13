// import class
import { Product } from "./product.js";
import { Category } from "./category.js";
import { Cart } from "./cart.js";
import { Order } from "./order.js";

//input sample data
const product1 = new Product(1, 'Bricks', 800, 'lorem1Desc');
const product2 = new Product(2, 'Stone', 500, 'lorem2Desc');
const product3 = new Product(3, 'Rooftile', 100, 'lorem3Desc');

const category1 = new Category(13122023, 'Batu');
const category2 = new Category(23122023, 'Atap');

product1.categories.push(category1.categoryName, category2.categoryName);
product2.categories.push(category1.categoryName);
product3.categories.push(category2.categoryName);

//initialize new cart
const cart = new Cart(1);
cart.addItem(product1, 2);
cart.addItem(product2, 1);

//display cart
cart.viewCart();
console.log("___________");

//initialize new order
const order = new Order(1);
order.createOrder(cart);
order.displayOrderDetails();





