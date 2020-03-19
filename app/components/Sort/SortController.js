import { SortView } from "./SortView.js";

export class SortController {
  constructor({ notify }) {
    this.view = new SortView(this.handleSort.bind(this));
    this.notify = notify;
  }

  handleSort(value) {
    sessionStorage.setItem("sort", value);
    this.notify("sort", value);
  }
}
