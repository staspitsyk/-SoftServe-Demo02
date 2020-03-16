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
    const data = this.model.searchName(str);
    this.view.renderAnimals(data)
  }
}
