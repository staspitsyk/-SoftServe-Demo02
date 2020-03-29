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
  }

  cartShow() {
    const cart = this.model.animals;
    const totalPrice = this.model.calcSum();
    this.view.renderAnimals(cart, totalPrice);
  }

  cartAdd(animal) {
    const { animals, isNotUnique } = this.model.addToCart(animal);

    if (isNotUnique) {
      this.view.notUniqueNotification(animal);
    } else {
      const totalPrice = this.model.calcSum();
      this.view.renderAnimals(animals, totalPrice);
    }
  }

  cartRemove(event) {
    const id = this.view.getId(event);
    const cart = this.model.removeFromCart(id);
    const totalPrice = this.model.calcSum();
    this.view.renderAnimals(cart, totalPrice);
  }

  handleOrder() {
    const cart = this.model.animals;
    const orderAnimalsIds = cart.map(({ id }) => id);
    console.log(cart);
    const totalPrice = this.model.calcSum();
    this.notify("get-order", { amountOfProducts: cart.length, totalPrice, orderAnimalsIds });
  }
}
