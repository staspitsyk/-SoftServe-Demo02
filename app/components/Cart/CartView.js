export class CartView {
  constructor(removeFromCart) {
    this.cart = document.querySelector(".animals-in-cart");
    this.badge = document.querySelector(".badge");
    this.totalPrice = document.querySelector(".price");
    this.removeFromCart = removeFromCart;
  }

  renderAnimals(animals, totalPrice) {
    this.renderBadge(animals.length);
    const output = animals
      .map(animal => this.renderSingleAnimal(animal))
      .join("");
    this.cart.innerHTML = output;

    const removeButtons = this.cart.querySelectorAll(".remove-from-cart");
    removeButtons.forEach(button =>
      button.addEventListener("click", this.removeFromCart)
    );

    this.renderTotalPrice(totalPrice);
  }

  renderTotalPrice(price) {
    this.totalPrice.innerText = `${price}$`;
  }

  renderBadge(amountOfProducts) {
    this.badge.innerText = amountOfProducts;
  }

  renderSingleAnimal({ id, image, breed, species, age, price }) {
    return `
      <tr  class='text-capitalize'>
        <td class="w-25">
            <img src="${image}" class="img-fluid rounded" alt="Sheep">
        </td>
        <td>${species}</td>
        <td>${breed}</td>
        <td>${age}</td>
        <td>$${price}</td>
        <td>
            <a data-id=${id} href="#" class="remove-from-cart btn btn-danger btn-sm">
            <i class="fa fa-times"></i>
            </a>
        </td>
      </tr>
    `;
  }

  getId(event) {
    const id = event.target.dataset.id;
    return id ? id : event.target.closest(".remove-from-cart").dataset.id;
  }
}
