// import { DetailsModel } from "./DetailsModel.js";
import { DetailstView } from "./DetailsView.js";

export class DetailsController {
  constructor({ subscribe }) {
    // this.model = new DetailsModel();
    this.view = new DetailstView();
    this.subscribe = subscribe;
    this.subscribe("get-details", this.showDetails.bind(this));
  }

  showDetails(animal) {
    console.log(animal);
    this.view.renderAnimal(animal);
  }
}
