export class Cart {
  constructor(cartId) {
    this.cartId = cartId;
    this.items = [];
  }
  addItem(product, quantity) {
    this.items.push({ product, quantity });
  }

  removeItem(product) {
    const index = this.items.findIndex((item) => item.product === product);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  viewCart() {
    console.log(`Cart ID: ${this.cartId}`);
    this.items.forEach((item) => {
      console.log(
        `Product: ${item.product.productName}, Quantity: ${item.quantity}`
      );
    });
    console.log("------------------------");
  }
}
