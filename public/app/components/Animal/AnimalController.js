import { AnimalModel } from "./AnimalModel.js";
import { AnimalView } from "./AnimalView.js";

export class AnimalController {
  constructor({ subscribe, notify }, queryBuilder) {
    this.model = new AnimalModel();
    this.view = new AnimalView(
      this.handleCart.bind(this),
      this.handleDetails.bind(this)
    );
    this.handleLoadAnimals();

    this.queryBuilder = queryBuilder;

    this.notify = notify;
    this.subscribe = subscribe;
    this.subscribe("search", this.handleSearch.bind(this));
    this.subscribe("filter", this.handleFilter.bind(this));
    this.subscribe("sort", this.handleSort.bind(this));
    this.subscribe("pagination", this.handlePagination.bind(this));
    this.subscribe("orderCompleted", this.handleLoadAnimals.bind(this));
  }

  handleCart(event) {
    const id = this.view.getId(event);
    const animal = this.model.getSingleAnimalData(id);
    this.notify("get-cart", animal);
  }

  handleDetails(event) {
    const id = this.view.getId(event);
    const animal = this.model.getSingleAnimalData(id);
    this.notify("get-details", animal);
  }

  handleLoadAnimals() {
    this.model
      .getArrOfAnimals()
      .then(animals => this.view.renderAnimals(animals));
  }

  handleSearch(value) {
    this.queryBuilder.addParam("search", value);
    this.queryBuilder.addParam("offset", 0);
    this.makeGETRequest();
  }

  handleFilter(value) {
    this.queryBuilder.addParam("filterType", value);
    this.queryBuilder.addParam("offset", 0);
    this.makeGETRequest();
  }

  handleSort(value) {
    this.queryBuilder.addParam("sortType", value);
    this.queryBuilder.addParam("offset", 0);
    this.makeGETRequest();
  }

  handlePagination(whereTo = "next") {
    const currentOffset = this.queryBuilder.getOffset();
    const offset = this.model.paginate(whereTo, currentOffset);
    if (currentOffset === offset) {
      return;
    }

    this.queryBuilder.addParam("offset", offset);
    this.makeGETRequest();
  }

  makeGETRequest() {
    const queryString = this.queryBuilder.build();
    const link = this.model.getLink(queryString);
    console.log(link);
    this.model
      .getArrOfAnimals(link)
      .then(animals => this.view.renderAnimals(animals));
  }
}
