import { OrderFormView } from "./OrderFormView.js";
import { OrderFormModel } from "./OrderFormModel.js";

export class OrderFormController {
  constructor({ subscribe, notify }) {
    this.model = new OrderFormModel();
    this.view = new OrderFormView(
      this.handleName.bind(this),
      this.handlePhone.bind(this),
      this.handleEmail.bind(this),
      this.handleOrder.bind(this)
    );

    this.notify = notify;
    this.subscribe = subscribe;
    this.subscribe("get-order", this.getCartInfo.bind(this));

    // this.handlers = {
    //   handleName: this.handleName.bind(this),
    //   handlePhone: this.handlePhone.bind(this),
    //   handleEmail: this.handleEmail.bind(this),
    //   handleOrder: this.handleOrder.bind(this)
    // };
  }

  checkAllFields() {
    const values = this.model.getValidType();
    for (let key in values) {
      if (!values[key]) {
        this.view.disableButton(true);
        return;
      }
    }
    this.view.disableButton(false);
  }

  getCartInfo(cart) {
    this.cartInfo = cart;
  }

  handleName() {
    const name = this.view.getName();
    const error = this.model.validateName(name);
    if (error) {
      this.view.renderError(error, ".name-err");
    } else {
      this.view.renderError("", ".name-err");
    }
    this.checkAllFields();
  }

  handlePhone() {
    const phone = this.view.getPhone();
    const error = this.model.validatePhone(phone);
    if (error) {
      this.view.renderError(error, ".phone-err");
    } else {
      this.view.renderError("", ".phone-err");
    }
    this.checkAllFields();
  }

  handleEmail() {
    const email = this.view.getEmail();
    const error = this.model.validateEmail(email);
    if (error) {
      this.view.renderError(error, ".email-err");
    } else {
      this.view.renderError("", ".email-err");
    }
    this.checkAllFields();
  }

  handleOrder() {
    const order = {
      name: this.view.getName(),
      phone: this.view.getPhone(),
      email: this.view.getEmail(),
      products: this.cartInfo.amountOfProducts,
      totalPrice: this.cartInfo.totalPrice,
      date: new Date(),
      orderAnimalsIds: this.cartInfo.orderAnimalsIds,
    };
    this.model
    .postOrder(order)
    .then(json => this.notify("orderCompleted"));

    this.model.setToLocalStorage(order);
    this.notify("orders-history", this.model.ordersHistory);
  }
}
