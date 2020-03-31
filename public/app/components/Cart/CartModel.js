export class CartModel {
  constructor() {
    this.animals = JSON.parse(localStorage.getItem("cart")) || [];
  }

  addToCart(animal) {
    const isNotUnique = this.checkIfUnique(animal);
    if (isNotUnique) {
      return {
        animals: this.animals,
        isNotUnique: true
      };
    }

    this.animals.push(animal);
    localStorage.setItem("cart", JSON.stringify(this.animals));

    return {
      animals: this.animals,
      isNotUnique: false
    };
  }

  removeFromCart(id) {
    this.animals = this.animals.filter(animal => {
      return animal.id !== parseInt(id);
    });
    localStorage.setItem("cart", JSON.stringify(this.animals));

    return this.animals;
  }

  checkIfUnique(animal) {
    return this.animals.some(item => animal.id === item.id);
  }

  clearCart() {
    this.animals.length = 0;
    localStorage.setItem("cart", JSON.stringify(this.animals));
  }

  calcSum() {
    return this.animals.reduce((acc, curAnimal) => acc + curAnimal.price, 0);
  }
}
