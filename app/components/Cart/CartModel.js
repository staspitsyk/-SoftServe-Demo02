export class CartModel {
  constructor() {
    this.hello = "hello";
    this.animals = [];
  }

  addToCart(animal) {
    this.animals.push(animal);
    return this.animals;
  }
}
