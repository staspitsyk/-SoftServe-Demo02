export class ViewAnimals {
  constructor() {
      this.animalsContainer = document.querySelector('.row');
  }

  getSingleAnimal(animal) {
    console.log(animal);

    return ` 
        <div class="col-lg-4 col-md-12 mb-4">
            <div class="card">
              <div class="view view-cascade overlay">
                <img src="data:image/jpg;base64,${animal.image}" class="card-img-top"
                  alt="sample photo">
                <a>
                  <div class="mask rgba-white-slight"></div>
                </a>
              </div>

              <div class="card-body">
                <h4 class="card-title indigo-text text-capitalize">
                  ${animal.breed}
                  <p class="mb-1 grey-text"><small>${animal.gender} ${animal.species}</small></p>
                </h4>
                <p class="card-text">
                  ${animal.birth_date}
                </p>
                

                <p class="mb-1"><strong>$${animal.price}</strong></p>

                <button type="button" class="btn btn-indigo btn-rounded btn-sm px-3">Add to cart</button>
                <button type="button" class="btn btn-outline-indigo btn-rounded btn-sm px-3 waves-effect">Details</button>
              </div>
            </div>
          </div>
        `;
  }

  getAnimals(animals) {
    return animals.map(animal => this.getSingleAnimal(animal)).join('')
  }

  renderAnimals(animals) {
    this.animalsContainer.innerHTML = this.getAnimals(animals);
  }
}
