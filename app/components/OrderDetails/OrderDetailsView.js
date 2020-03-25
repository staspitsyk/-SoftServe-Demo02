export class OrderDetailsView {
  constructor(orderDetailsHandler) {
    this.orderBtn = document.querySelector(".orders");
    this.orderBtn.addEventListener("click", orderDetailsHandler);
  }
}
