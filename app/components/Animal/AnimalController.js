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
    this.subscribe("pagination", this.handlePagination.bind(this));
  }

  handleLoadAnimals() {
    this.model
      .getArrOfAnimals()
      .then(animals => this.view.renderAnimals(animals));
  }

  handleSearch(str) {
    const animals = this.model.globalFilter({search: str});
    this.view.renderAnimals(animals);
  }

  handleFilter(str) {
    const animals = this.model.globalFilter({filter: str});
    this.view.renderAnimals(animals);
  }

  handleSort(condition) {
    const animals = this.model.globalFilter({sort: condition});
    this.view.renderAnimals(animals);
  }

  handlePagination(whereTo = "next") {
    const animals = this.model.getPaginationData(whereTo);
    this.view.renderAnimals(animals);
  }
}
