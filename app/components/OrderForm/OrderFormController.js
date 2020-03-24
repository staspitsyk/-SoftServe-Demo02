import { OrderFormView } from "./OrderFormView.js";
import { OrderFormModel } from "./OrderFormModel.js";

export class OrderFormController {
  constructor({ subscribe }) {
    this.view = new OrderFormView();
    this.model = new OrderFormModel();

    this.subscribe = subscribe;
    this.subscribe("get-order", this.handleOrder.bind(this));
  }

  handleOrder({ cart, totalPrice }) {}
}
