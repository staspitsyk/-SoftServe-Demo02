import { CartView } from "./CartView.js";
import { CartModel } from "./CartModel.js";

export class CartController {
  constructor({ subscribe, notify }) {
    this.model = new CartModel();
    this.view = new CartView(
      this.cartRemove.bind(this),
      this.handleOrder.bind(this)
    );
    this.cartShow();

    this.notify = notify;
    this.subscribe = subscribe;
    this.subscribe("get-cart", this.cartAdd.bind(this));
    this.subscribe("clear-cart", this.clearCart.bind(this));
  }

  cartShow() {
    const cart = this.model.animals;
    const totalPrice = this.model.calcSum();
    this.view.renderAnimals(cart, totalPrice);
  }

  cartAdd(animal) {
    const cart = this.model.addToCart(animal);
    const notUnique = cart[1];

    if (notUnique) {
      this.view.notUniqueNotification(notUnique);
    }

    const totalPrice = this.model.calcSum();
    this.view.renderAnimals(cart[0], totalPrice);
  }

  cartRemove(event) {
    const id = this.view.getId(event);
    const cart = this.model.removeFromCart(id);
    const totalPrice = this.model.calcSum();
    this.view.renderAnimals(cart, totalPrice);
  }

  clearCart() {
    this.model.clearCart();
    this.view.renderAnimals();
  }

  handleOrder() {
    const cart = this.model.animals;
    const totalPrice = this.model.calcSum();
    this.notify("get-order", { amountOfProducts: cart.length, totalPrice });
  }
}