import { OrderFormView } from "./OrderFormView.js";
import { OrderFormModel } from "./OrderFormModel.js";

export class OrderFormController {
  constructor({ subscribe }) {
    this.model = new OrderFormModel();
    this.view = new OrderFormView(this.handleOrder.bind(this));

    this.subscribe = subscribe;
    this.subscribe("get-order", this.getCartInfo.bind(this));
  }

  getCartInfo(cart) {
    this.cartInfo = cart;
  }

  handleOrder() {
    const inputValues = this.view.getInputValues();
    const errors = this.model.validateValues(inputValues);
    if (errors.length) {
      this.view.renderErrorMsgs(errors);
      console.log(errors);
    } else {
      console.log({
        name: inputValues.name,
        phone: inputValues.phone,
        email: inputValues.email,
        totalPrice: this.cartInfo.totalPrice,
        products: this.cartInfo.cart
      });
    }
  }
}
