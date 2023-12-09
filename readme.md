# Simple E-commerce System
## Classes
**1. Product**

Properties:  
- productId
- productName
- price
- description
- categories (an array of category names)

Methods:
- displayInfo()
- createProduct()
- updateProduct()
- deleteProduct()

**2. Category**

Properties:
- categoryId
- categoryName

Methods:
- displayInfo()
- createCategory()
- updateCategory()
- deleteCategory()
- products()

**3. Cart**

Properties:
- cartId
items (an array to store products and their quantities)

Methods:
- addItem(product, quantity)
- removeItem(product)
- viewCart()

**4. Order**

Properties:
- orderId
- items (similar to cart items)
- totalAmount

Methods:
- createOrder(cart)
- displayOrderDetails()

## How to Use

1. Install Node.js on your machine.

2. Clone the repository:

   ```bash
   git clone https://github.com/fahmimna/simple-commerce.git

# SOAL

### Latihan OOP: Sistem E-commerce

* Buat sistem e-commerce sederhana dengan prinsip Pemrograman Berorientasi Objek OOP dalam JavaScript, dengan memanfaatkan modul Node.js untuk organisasi kode yang lebih baik. Sistem ini akan mencakup kelas untuk produk, kategori, keranjang belanja, dan pesanan. Pengumpulan tugas dilakukan dengan cara mengirimkan tautan repository GitHub. 

 Kelas:

- Kelas Produk Product):
Properti: productId, productName, price, description.
Metode: displayInfo() untuk menampilkan detail produk.
Metode: createProduct() untuk membuat produk baru.
Metode: updateProduct() untuk memperbarui detail produk.
Metode: deleteProduct() untuk menghapus produk.
- Kelas Kategori Category):
Properti: categoryId, categoryName.
Metode: displayInfo() untuk menampilkan detail kategori.
Metode: createCategory() untuk membuat kategori baru.
Metode: updateCategory() untuk memperbarui detail kategori.
Metode: deleteCategory() untuk menghapus kategori.
Metode: products() untuk menampilkan produk yang termasuk dalam kategori.
- Kelas Keranjang Cart):
Properti: cartId, items (sebuah array untuk menyimpan produk dan kuantitasnya).
Metode: addItem(product, quantity): Menambahkan produk dengan kuantitas tertentu ke dalam keranjang.
Metode: removeItem(product): Menghapus produk dari keranjang.
Metode: viewCart(): Menampilkan isi dari keranjang dan kalkulasi jumlah total.
Kelas Pesanan Order):
Properti: orderId, items (mirip dengan keranjang, menyimpan produk dan kuantitasnya), totalAmount.
Metode: createOrder(cart): Membuat pesanan baru dari item di dalam keranjang.
Metode: displayOrderDetails(): Menampilkan detail pesanan, termasuk produk dan jumlah total.
Pertimbangan Tambahan:

Sebuah produk dapat termasuk dalam beberapa kategori. Implementasikan mekanisme untuk mengaitkan produk dengan lebih dari 1 kategori.

### Tugas Latihan:

- Implementasi Kelas:
Implementasikan kelas Produk dan Kategori dengan properti dan metode yang sudah ditentukan.
Pastikan bahwa sebuah produk dapat termasuk dalam beberapa kategori, dan implementasikan mekanisme untuk mengelola asosiasi ini.
- Interaksi dengan Keranjang:
Implementasikan kelas Keranjang dengan metode untuk menambahkan, menghapus item, dan melihat isi keranjang.
- Pemrosesan Pesanan:
Implementasikan kelas Pesanan dengan metode untuk membuat pesanan baru dan menampilkan detail pesanan.
- Modul Node.js:
Organisasikan kelas-kelas Anda ke dalam modul Node.js terpisah untuk organisasi kode yang lebih baik.
Buat file utama untuk mengimpor dan menggunakan modul-modul ini untuk menunjukkan interaksinya (tidak perlu menggunakan interaksi readline).
- Dokumentasi:
Tambahkan komentar untuk menjelaskan kode Anda.
Buat panduan pengguna untuk menjelaskan cara menggunakan sistem ini dalam format markdown dan disimpan dalam file readme.md.