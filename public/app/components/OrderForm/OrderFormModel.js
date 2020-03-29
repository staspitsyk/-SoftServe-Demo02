export class OrderFormModel {
  constructor() {
    this.isValid = {
      name: false,
      phone: false,
      email: false
    };
    this.ordersHistory = JSON.parse(localStorage.getItem("orders")) || [];
  }

  validateName(name) {
    const nameRegExp = new RegExp(/^[A-Z][a-z]+$/);
    const error = "Invalid name";
    if (!nameRegExp.test(name)) {
      this.isValid.name = false;
      return error;
    } else {
      this.isValid.name = true;
    }
  }

  validatePhone(phone) {
    const phoneRegExp = new RegExp(/^\+380\d{9}$/);
    const error = "Invalid phone";
    if (!phoneRegExp.test(phone)) {
      this.isValid.phone = false;
      return error;
    } else {
      this.isValid.phone = true;
    }
  }

  validateEmail(email) {
    const emailRegExp = new RegExp(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i
    );
    const error = "Invalid name";
    if (!emailRegExp.test(email)) {
      this.isValid.email = false;
      return error;
    } else {
      this.isValid.email = true;
    }
  }

  getValidType() {
    return this.isValid;
  }

  setToLocalStorage(order) {
    this.ordersHistory.push(order);
    localStorage.setItem("orders", JSON.stringify(this.ordersHistory));
  }

  async postOrder(order) {
    const url = 'http://127.0.0.1:3000/orders';
    const body = JSON.stringify(order);

    try {
      await fetch(url, {
        method: 'POST',
        body, 
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
}
