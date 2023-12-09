// main.js
// Import kelas dari modul 
import { Product } from './product.js';
import { Category } from './category.js';
import { Cart } from './cart.js';
import { Order } from './order.js';

// Membuat objek dengan menggunakan kelas Product
const digitalCamera = new Product(1, 'Digital Camera', 700, 'Professional-grade digital camera for stunning photography');
const gamingConsole = new Product(2, 'Gaming Console', 400, 'High-performance gaming console for console gaming enthusiasts');
const smartwatch = new Product(3, 'Smartwatch', 200, 'Feature-packed smartwatch for health and fitness tracking');
const headphones = new Product(4, 'Headphones', 150, 'Premium noise-canceling headphones for immersive audio experience');
const tablet = new Product(5, 'Tablet', 800, 'Versatile tablet for entertainment and productivity');
const laptop = new Product(6, 'Laptop', 1000, 'Powerful laptop for work and gaming');
const smartphone = new Product(7, 'Smartphone', 500, 'High-quality smartphone with advanced features');

// Membuat objek Category dengan menggunakan kelas Category
const electronicsCategory = new Category(1, 'Electronics')
const gadgetsCategory = new Category(2, 'Gadgets')
const desktopCategory = new Category(3, 'desktop')

// Menambahkan kategori Category ke dalam kategori produk
digitalCamera.categories.push(electronicsCategory.categoryName, desktopCategory.categoryName)
gamingConsole.categories.push(electronicsCategory.categoryName, desktopCategory.categoryName)
smartwatch.categories.push(electronicsCategory.categoryName, desktopCategory.categoryName)
headphones.categories.push(electronicsCategory.categoryName, desktopCategory.categoryName)
tablet.categories.push(electronicsCategory.categoryName, gadgetsCategory.categoryName)
laptop.categories.push(electronicsCategory.categoryName, gadgetsCategory.categoryName)
smartphone.categories.push(electronicsCategory.categoryName, gadgetsCategory.categoryName)

// Membuat objek cart dengan menggunakan kelas Cart
const cart = new Cart(1);

// Menambahkan produk dan dan jumlah unit ke dalam keranjang
cart.addItem(digitalCamera, 1)
cart.addItem(gamingConsole, 4)
cart.addItem(smartwatch, 5)
cart.addItem(headphones, 6)
cart.addItem(tablet, 1)
cart.addItem(laptop, 2)
cart.addItem(smartphone, 3)

// Menghapus produk dari keranjang
cart.removeItem(laptop);

// Membuat objek order dengan menggunakan kelas Order
const order = new Order(1)

// Membuat pesanan dari isi keranjang
order.createOrder(cart)

// Menampilkan informasi produk
digitalCamera.displayInfo()
console.log('\n')
gamingConsole.displayInfo()
console.log('\n')
smartwatch.displayInfo()
console.log('\n')
headphones.displayInfo()
console.log('\n')
tablet.displayInfo()
console.log('\n')
laptop.displayInfo()
console.log('\n')
smartphone.displayInfo()
console.log('\n')

// Menampilkan isi keranjang beserta total
cart.viewCart();
console.log('\n');

// Menampilkan detail pesanan, termasuk produk dan jumlah total
order.displayOrderDetails();