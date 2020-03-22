export class CartView {
  constructor() {
    this.cart = document.querySelector(".animals-in-cart");
    this.badge = document.querySelector(".badge");
  }

  renderAnimals(animals) {
    this.renderBadge(animals.length);
    const output = animals
      .map(animal => this.renderSingleAnimal(animal))
      .join("");
    this.cart.innerHTML = output;
  }

  renderBadge(amountOfProducts) {
    this.badge.innerText = amountOfProducts;
  }

  renderSingleAnimal({ id, image, breed, species, age, price }) {
    return `
      <tr data-id=${id} class='text-capitalize'>
        <td class="w-25">
            <img src="${image}" class="img-fluid img-thumbnail" alt="Sheep">
        </td>
        <td>${species}</td>
        <td>${breed}</td>
        <td>${age}</td>
        <td>$${price}</td>
        <td>
            <a href="#" class="btn btn-danger btn-sm">
            <i class="fa fa-times"></i>
            </a>
        </td>
      </tr>
    `;
  }
}
