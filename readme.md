# Simple CLI E-Commerce
Welcome! Sistem e-commerce sederhana dengan prinsip Pemrograman Berorientasi Objek OOP dalam JavaScript, dengan memanfaatkan modul Node.js untuk organisasi kode yang lebih baik. Sistem ini akan mencakup kelas untuk produk, kategori, keranjang belanja, dan pesanan.



## Import
```
import { Product } from "./product.js";
import { Category } from "./category.js";
import { Cart } from "./cart.js";
import { Order } from "./order.js";
```
Pastikan file paket terletak dalam satu folder yang sama sehingga proses `import` dapat dijalankan.
## Contoh Implementasi
```
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
```

Untuk menambahkan barang ke dalam produk gunakan  
```const product = new Product(productID, 'productName', price, 'Description');```

Tambah kategori barang
```const category = new Category(categoryId, 'categoryName');```


Memasukkan barang ke dalam suatu kategori atau barang yang termasuk lebih dari satu kategori 
```product.categories.push(category1.categoryName, category2.categoryName);```

Memasukkan barang ke dalam Cart 
```
const cart = new Cart(cartId);
cart.addItem(product1, qty);
cart.addItem(product2, qty);
```

ganti `qty` dengan jumlah barang yang diinginkan 


untuk memproses order barang yang masuk dalam cart 
```
const order = new Order(orderId);
order.createOrder(cart);
```


Menampilkan barang yang sudah di order 
`order.displayOrderDetails();`