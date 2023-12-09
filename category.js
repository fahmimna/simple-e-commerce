// category.js
class Category {
      // Konstruktor untuk inisialisasi properti kategori
    constructor(categoryId, categoryName) {
      this.categoryId = categoryId;
      this.categoryName = categoryName;
    }
  
      // Metode untuk menampilkan informasi kategori ke konsol
    displayInfo() {
      console.log(`Category ID: ${this.categoryId}`);
      console.log(`Name: ${this.categoryName}`);
    }
  
    // Metode to create, update, delete, and showing products in category
    createCategory() {
      // Logic to create a new category
    }
  
    updateCategory() {
      // Logic to update category details
    }
  
    deleteCategory() {
      // Logic to delete a category
    }
  
    products() {
      // Logic to display products in this category
    }
  }
  
  export { Category };