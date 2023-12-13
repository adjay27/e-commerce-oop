export class Category {
  categories = [];

  constructor(categoryId, categoryName) {
    this.categoryId = categoryId;
    this.categoryName = categoryName;
  }

  displayInfo() {
    console.log(
      `Category ID: ${this.categoryId}, Category Name: ${this.categoryName}`
    );
  }

  updateCategory(newCategoryName) {
    this.categoryName = newCategoryName;
  }
  products() {
      return store.filter(product => product.categories.includes(this.categoryName));
    }
}
