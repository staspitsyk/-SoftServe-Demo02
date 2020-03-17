export class SortView {
  constructor(cbSort) {

    this.sortItems = document.querySelector(".sort-items");
    this.sortItems.addEventListener("click", event => {
      const value = event.target.attributes["data-id"].value;
      cbSort(value);
    });
  }
}

