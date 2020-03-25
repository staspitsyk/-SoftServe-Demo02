export class OrderFormView {
  constructor(handleName, handlePhone, handleEmail) {
    this.form = document.forms["order-form"];
    this.name = this.form["user-name"];
    this.phone = this.form["user-phone"];
    this.email = this.form["user-email"];

    this.errorMsgs = document.querySelector(".error-messages");
    this.purchaseBtn = document.querySelector(".purchase-btn");

    this.name.addEventListener("input", handleName);
    this.phone.addEventListener("input", handlePhone);
    this.email.addEventListener("input", handleEmail);
    this.purchaseBtn.addEventListener("click", handleEmail);
  }

  disableButton(isDisabled) {
    this.purchaseBtn.disabled = isDisabled;
  }

  renderError(msg, className) {
    document.querySelector(className).innerText = msg;
  }

  getName() {
    return this.name.value;
  }

  getPhone() {
    return this.phone.value;
  }

  getEmail() {
    return this.email.value;
  }
}
