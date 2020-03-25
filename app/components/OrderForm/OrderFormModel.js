export class OrderFormModel {
  constructor() {
    this.isValid = {
      name: false,
      phone: false,
      email: false
    };
  }

  getValidType() {
    return this.isValid;
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
    const phoneRegExp = new RegExp(/^\+380\d+$/);
    const error = "Invalid phone";
    if (!phoneRegExp.test(phone)) {
      this.isValid.phone = false;
      return error;
    } else {
      this.isValid.phone = true;
    }
  }

  validateEmail(email) {
    // const emailRegExp = new RegExp(/^\w.+@\w+.\w+$/i);
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
}
