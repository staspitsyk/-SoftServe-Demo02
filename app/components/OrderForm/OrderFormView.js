export class OrderFormView {
  constructor(handleOrder) {
    this.form = document.forms["order-form"];
    this.name = this.form["user-name"];
    this.phone = this.form["user-phone"];
    this.email = this.form["user-email"];
    this.errorMsgs = document.querySelector(".error-messages");

    this.handleOrder = handleOrder;
    this.purchaseBtn = document.querySelector(".purchase-btn");

    // this.name.addEventListener("input", this.handleOrder);
    this.purchaseBtn.addEventListener("click", this.handleOrder);
  }

  renderErrorMsgs(messages) {
    const output = messages.join("\n");
    this.errorMsgs.innerHTML = `<pre class='font-weight-bold red-text text-center'>${output}</pre>`;
  }

  getInputValues() {
    return {
      name: this.name.value,
      phone: this.phone.value,
      email: this.email.value
    };
  }
}
