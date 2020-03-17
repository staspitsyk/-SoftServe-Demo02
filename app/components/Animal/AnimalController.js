import { AnimalModel } from './AnimalModel.js';
import { AnimalView } from './AnimalView.js';

export class AnimalController {
  constructor() {
    this.model = new AnimalModel();
    this.view = new AnimalView();
    this.handleLoadAnimals();
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
