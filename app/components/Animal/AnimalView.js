export class AnimalView {
  constructor(cb) {
      this.container = document.getElementById('myId');

      document.addEventListener("DOMContentLoaded", cb);
  }

  renderAnimals(arr) {
    console.log(arr);
      this.container.innerHTML = arr.map(animal => this.getSingleAnimal(animal)).join('');
  }

  getSingleAnimal({
      image,
      breed,
      species,
      gender,
      birth_date,
      price,
  }) {

      return `<article class="card product-item">
      <div class="card__image">
          <img src="data:image/jpg;base64,${image}" alt="A ${species}">
      </div>
      <header class="card__header">
        <h1 class="product__title">${breed}</h1>
    </header>
      <div class="card__content">
          <h2 class="product__price">${species} ${gender}</h2>
          <p class="product__description">Age: ${birth_date}</p>
          <p class="product__description">Price: $${price}</p>
      </div>
      <div class="card__actions">
          <button class="btn">Add to Cart</button>
      </div>
  </article>`;
  }
}