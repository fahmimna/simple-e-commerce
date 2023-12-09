// product.js
class Product {
      // Konstruktor untuk inisialisasi properti produk
    constructor(productId, productName, price, description) {
      this.productId = productId;
      this.productName = productName;
      this.price = price;
      this.description = description;
      this.categories = []; // Properti untuk menyimpan kategori produk
    }
  // Metode untuk menampilkan informasi produk ke konsol
    displayInfo() {
      console.log(`Product ID: ${this.productId}`);
      console.log(`Name: ${this.productName}`);
      console.log(`Price: ${this.price}`);
      console.log(`Description: ${this.description}`);
      console.log(`Categories: ${this.categories.join(', ')}`);
    }
  
    // Metode to create, update, and delete
    createProduct() {
      // Logic to create a new product
    }
  
    updateProduct() {
      // Logic to update product details
    }
  
    deleteProduct() {
      // Logic to delete a product
    }

      // Metode untuk menambahkan produk ke kategori
    addToCategory(category) {
        this.categories.push(category);
    }

    // Metode untuk menghapus produk dari kategori
    removeFromCategory(category) {
        const index = this.categories.indexOf(category);
        if (index !== -1) {
        this.categories.splice(index, 1);
        }
    }
}
// Ekspor kelas Product agar dapat diimpor oleh modul lain
  export { Product };
  