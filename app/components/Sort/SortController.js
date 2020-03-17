import { SortView } from "./SortView.js";

export class SortController {
  constructor({ notify }) {
    this.view = new SortView(this.handleSort.bind(this));
    this.notify = notify;
  }

  handleSort(value) {

    this.notify("sort", value);
  }
}

