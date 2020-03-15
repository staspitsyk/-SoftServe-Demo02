import { AnimalModel } from "./AnimalModel.js";
import { AnimalView } from "./AnimalView.js";

export class AnimalController {
    constructor() {
        this.model = new AnimalModel();

        this.view = new AnimalView(this.handleLoadAnimals.bind(this));
    }

    handleLoadAnimals() {
        console.log(2)
        this.model.getArrOfAnimals()
            .then(arr => this.view.renderAnimals(arr));
    }
}