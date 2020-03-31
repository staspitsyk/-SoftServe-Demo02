import { SortView } from "./SortView.js";

export class SortController {
  constructor({ notify }) {
    this.view = new SortView(this.handleSort.bind(this));
    this.notify = notify;
  }

  handleSort(event) {
    const value = this.view.getSortValue(event);
    const newSortName = event.target.innerText;
    if (!value) {
      return;
    }
    this.view.reRenderSortName(newSortName);

    this.notify("sort", value);
  }
}
