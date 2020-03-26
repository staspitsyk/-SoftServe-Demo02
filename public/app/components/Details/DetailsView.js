export class DetailstView {
  constructor() {
    this.details = document.querySelector(".details-body");
  }

  renderAnimal({ image, breed, species, age, price, gender, description }) {
    const output = `
      <div class="view">
        <img class="card-img-top" src="${image}" alt="${breed}">
      </div>

      <!--Card content-->
      <div class="card-body">
        <!--Title-->
        <span>
          <h4 class="text-capitalize card-meta text-center font-weight-bold">${breed}</h4>
        </span>
        <p class="text-capitalize card-meta text-center">${species}</p>

        <span class="text-capitalize card-meta indigo-text"><span>${age}</span></span>
        <span class="text-capitalize card-meta float-right indigo-text">${gender}</span> 

        <p class="card-meta card-text mt-3 text-center">${description}</p>
      </div>
    `;

    this.details.innerHTML = output;
  }
}
