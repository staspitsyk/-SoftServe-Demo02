export class CartView {
  constructor() {
    this.addToCartBtn = document.querySelector(".add-to-card");
    this.badge = document.querySelector(".badge");

    this.addToCartBtn.addEventListener("click", console.log("click"));
  }
}
