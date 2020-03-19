import { AnimalModel } from "./AnimalModel.js";
import { AnimalView } from "./AnimalView.js";

export class AnimalController {
  constructor({ subscribe }) {
    this.model = new AnimalModel();
    this.view = new AnimalView();
    this.handleLoadAnimals();

    this.subscribe = subscribe;
    this.subscribe("search", this.handleSearch.bind(this));
    this.subscribe("filter", this.handleFilter.bind(this));
    this.subscribe("sort", this.handleSort.bind(this));
  }

  handleLoadAnimals() {
    this.model
      .getArrOfAnimals()
      .then(animals => this.view.renderAnimals(animals));
  }

  handleSearch(str) {

    const animals = this.model.globalFilter();
    this.view.renderAnimals(animals);
  }

  handleFilter(str) {

    const animals = this.model.globalFilter();
    this.view.renderAnimals(animals);
  }

  handleSort(condition) {

    const animals = this.model.globalFilter();
    this.view.renderAnimals(animals);
  }
}
