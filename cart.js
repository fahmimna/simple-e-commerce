// cart.js
class Cart {
    constructor(cartId) {
      this.cartId = cartId;
      this.items = [];
    }
  
    // Metode untuk menambahkan produk ke dalam keranjang
    addItem(product, quantity) {
      this.items.push({ product, quantity });
    }
  
    // Metode untuk menghapus produk dari keranjang
    removeItem(product) {
      this.items = this.items.filter(item => item.product !== product);
    }
  
    // Metode untuk melihat isi keranjang dan kalkulasi jumlah total
    viewCart() {
      console.log('Cart ID:', this.cartId);
      console.log('Items:');
      this.items.forEach(item => {
        console.log(`  ${item.product.productName} - Quantity: ${item.quantity}`);
      });
      const total = this.calculateTotal();
      console.log('Total: $', total);
    }
  
    // Metode untuk kalkulasi jumlah total belanja
    calculateTotal() {
      return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }
  }
  
  export { Cart };  