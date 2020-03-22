export class CartModel {
  constructor() {
    this.animals = JSON.parse(localStorage.getItem("cart")) || [];
  }

  addToCart(animal) {
    this.animals.push(animal);
    localStorage.setItem("cart", JSON.stringify(this.animals));

    return this.animals;
  }

  removeFromCart(id) {
    this.animals = this.animals.filter(animal => {
      return animal.id !== parseInt(id);
    });
    localStorage.setItem("cart", JSON.stringify(this.animals));

    return this.animals;
  }

  calcSum() {
    return this.animals.reduce((acc, curAnimal) => acc + curAnimal.price, 0);
  }
}
