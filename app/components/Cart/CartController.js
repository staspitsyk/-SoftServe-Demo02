import { CartView } from "./CartView.js";
import { CartModel } from "./CartModel.js";

export class CartController {
  constructor({ subscribe }) {
    this.model = new CartModel();
    this.view = new CartView(this.cartRemove.bind(this));
    this.cartShow();

    this.subscribe = subscribe;
    this.subscribe("get-single-animal", this.cartAdd.bind(this));
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
}
