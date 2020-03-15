import { ViewAnimals} from "./ViewAnimals.js";
import { ModelAnimals} from "./ModelAnimals.js";

export class ControllerAnimals{
    constructor() {
        this.view = new ViewAnimals();
        this.model = new ModelAnimals(this.handleLoadAnimals.bind(this));

        this.model.getAnimals();
    }

    handleLoadAnimals(arr) {
        this.view.renderAnimals(arr)
    }
}