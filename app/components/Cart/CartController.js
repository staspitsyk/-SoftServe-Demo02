import { CartView } from "./CartView.js";
import { CartModel } from "./CartModel.js";

export class CartController {
  constructor({ subscribe }) {
    this.model = new CartModel();
    this.view = new CartView();
    this.subscribe = subscribe;
    this.subscribe("get-single-animal", this.cartHandle.bind(this));
  }

  cartHandle(animal) {
    const cart = this.model.addToCart(animal);
    this.view.renderAnimals(cart);
  }
}
