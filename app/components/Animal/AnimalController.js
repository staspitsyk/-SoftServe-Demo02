import { AnimalModel } from './AnimalModel.js';
import { AnimalView } from './AnimalView.js';

export class AnimalController {
  constructor({subscribe}) {
    this.model = new AnimalModel();
    this.view = new AnimalView();
    this.handleLoadAnimals();

    this.subscribe = subscribe;
    this.subscribe('search', this.handleSearch.bind(this));
    this.subscribe('filter', this.handleFilter.bind(this));
  }

  handleLoadAnimals() {
    this.model
      .getArrOfAnimals()
      .then(animals => this.view.renderAnimals(animals));
  }

  handleSearch(str) {
    const animals = this.model.filter(str, 'search');
    this.view.renderAnimals(animals);
  }

  handleFilter(str) {
    const animals = this.model.filter(str, 'filter');
    this.view.renderAnimals(animals);
  }
}
