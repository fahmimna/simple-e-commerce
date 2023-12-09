// order.js
class Order {
    constructor(orderId) {
      this.orderId = orderId;
      this.items = [];
      this.totalAmount = 0;
    }
  
    // Metode untuk membuat pesanan baru dari item di dalam keranjang
    createOrder(cart) {
      this.items = cart.items;
      this.totalAmount = cart.calculateTotal();
    }
  
    // Metode untuk menampilkan detail pesanan, termasuk produk dan jumlah total
    displayOrderDetails() {
      console.log('Order ID:', this.orderId);
      console.log('Items:');
      this.items.forEach(item => {
        console.log(`  ${item.product.productName} - Quantity: ${item.quantity}`);
      });
      console.log('Total Amount: $', this.totalAmount);
    }
  }
  
  export { Order };
  