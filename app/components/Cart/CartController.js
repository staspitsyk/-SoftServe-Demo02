import { CartView } from "./CartView.js";
import { CartModel } from "./CartModel.js";

export class CartController {
  constructor({ subscribe }) {
    this.subscribe = subscribe;
    this.subscribe("get-single-animal", this.addToCart);
  }

  addToCart(animal) {
    console.log("Cart Controller", animal);
  }
}
