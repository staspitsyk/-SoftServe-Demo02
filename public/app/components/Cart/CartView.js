export class CartView {
  constructor(removeFromCart, handleOrder) {
    this.cart = document.querySelector(".animals-in-cart");
    this.badge = document.querySelector(".badge");
    this.totalPrice = document.querySelector(".price");
    this.makeOrderBtn = document.querySelector(".make-order");
    this.notUniqueModal = document.querySelector(".not-unique-modal");
    this.notUniqueAnimal = document.querySelector(".not-unique-animal");
    this.notUniqueButton = document.querySelector(".not-unique-modal-btn");
    this.notUniqueButton.addEventListener(
      "click",
      this.hideNotUniqueModal.bind(this)
    );
    this.removeFromCart = removeFromCart;
    this.handleOrder = handleOrder;
    this.makeOrderBtn.addEventListener("click", this.handleOrder);
  }

  renderAnimals(animals = [], totalPrice = 0) {
    this.disableButton(animals.length);
    this.renderBadge(animals.length);
    const output = animals
      .map((animal, index) => {
        return this.renderSingleAnimal(animal, index + 1);
      })
      .join("");

    this.cart.innerHTML = output;

    this.buttonListener();
    this.renderTotalPrice(totalPrice);
  }

  buttonListener() {
    const removeButtons = this.cart.querySelectorAll(".remove-from-cart");
    removeButtons.forEach(button =>
      button.addEventListener("click", this.removeFromCart)
    );
  }

  renderTotalPrice(price) {
    this.totalPrice.innerText = `${price}$`;
  }

  renderBadge(amountOfProducts) {
    this.badge.innerText = amountOfProducts;
  }

  renderSingleAnimal({ id, image, breed, species, age, price }, orderNumber) {
    return `
      <tr  class='text-capitalize'>
        <td class="w-25">
            <img src="${image}" class="img-fluid rounded" alt="Sheep">
        </td>
        <td>${orderNumber}</td> 
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

  notUniqueNotification(notUnique) {
    this.notUniqueModal.classList.add("show");
    this.notUniqueAnimal.innerHTML = notUnique.breed;
  }

  hideNotUniqueModal() {
    this.notUniqueModal.classList.remove("show");
  }

  disableButton(isNotEmpty) {
    if (isNotEmpty) {
      this.makeOrderBtn.disabled = false;
    } else {
      this.makeOrderBtn.disabled = true;
    }
  }

  getId(event) {
    const id = event.target.dataset.id;
    return id ? id : event.target.closest(".remove-from-cart").dataset.id;
  }
}
