export class OrderFormModel {
  constructor() {}

  validateValues(inputValues) {
    const errors = [];
    const nameRegExp = new RegExp(/^[A-Z][a-z]+$/);
    const phoneRegExp = new RegExp(/^\+380\d+$/);
    const emailRegExp = new RegExp(/^\w.+@\w+.\w+$/i);

    if (!nameRegExp.test(inputValues.name)) {
      errors.push("Invalid Name");
    }
    if (!phoneRegExp.test(inputValues.phone)) {
      errors.push("Invalid Phone Number");
    }
    if (!emailRegExp.test(inputValues.email)) {
      errors.push("Invalid Email");
    }

    return errors;
  }
}
