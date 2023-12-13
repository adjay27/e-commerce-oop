export class Order {
  constructor(orderId) {
    this.orderId = orderId;
    this.items = [];
    this.totalAmount = 0;
  }
  createOrder(cart) {
    this.items = [cart.items];

    this.totalAmount = cart.items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }

  displayOrderDetails() {
    
    const rupiah = (number) => {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(number);
    };
    console.log(`Order ID: ${this.orderId}`);
    console.log(`Total amount: ${rupiah(this.totalAmount)}`);

    
  }
}
