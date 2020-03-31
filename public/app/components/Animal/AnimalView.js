export class AnimalView {
  constructor(getCart, getDetails) {
    this.container = document.querySelector(".animals-container");
    this.getCart = getCart;
    this.getDetails = getDetails;
  }

  renderAnimals(animals) {
    if (!animals.length) {
      this.container.innerHTML = `
        <div class='container mb-3 font-weight-bold text-black'>
          Sorry, no matches found 
        </div>
      `;
      return;
    }
    const output = animals.map(animal => this.getSingleAnimal(animal)).join("");
    this.container.innerHTML = `
      <div class='row'>
        ${output}
      </div>
    `;
    this.addToCartListener();
    this.detailsListener();
  }

  addToCartListener() {
    const cartButtons = this.container.querySelectorAll(".add-to-cart");
    cartButtons.forEach(button =>
      button.addEventListener("click", this.getCart)
    );
  }

  detailsListener() {
    const detailsButton = this.container.querySelectorAll(".details");

    detailsButton.forEach(button => {
      button.addEventListener("click", this.getDetails);
    });
  }

  getSingleAnimal({ id, image, breed, species, gender, age, price }) {
    return ` 
      <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
        <div class="card">
          <div class="view view-cascade overlay">
            <img src="${image}" class="card-img-top animal__image"
              alt="A ${species}">
            <a>
              <div data-id=${id} data-toggle="modal" data-target="#details-modal" class="details mask rgba-white-slight"></div>
            </a>
          </div>

          <div class="card-body">
            <h5 class="card-title indigo-text text-capitalize">
              ${breed}
              <p class="mb-1 grey-text"><small>${gender} ${species}</small></p>
            </h5>
            <p class="card-text">
              ${age}
            </p>

            <p class="mb-1"><strong>$${price}</strong></p>

            <button type="button" data-id=${id} class="add-to-cart btn btn-indigo btn-rounded btn-sm px-3">Add to cart</button>
            <button type="button" data-id=${id} data-toggle="modal" data-target="#details-modal" class="details btn btn-outline-indigo btn-rounded btn-sm px-3 waves-effect">Details</button>
              
          </div>
        </div>
      </div>
    `;
  }

  getId(event) {
    return event.target.dataset.id;
  }
}
