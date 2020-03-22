export class CartModel {
  constructor() {
    this.animals = [];
  }

  addToCart(animal) {
    this.animals.push(animal);
    // console.log(this.animals);
    return this.animals;
  }

  removeFromCart(id) {
    this.animals = this.animals.filter(animal => {
      return animal.id !== parseInt(id);
    });
    return this.animals;
  }

  calcSum() {
    return this.animals.reduce((acc, curAnimal) => acc + curAnimal.price, 0);
  }
}
