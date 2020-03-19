export class SortView {
  constructor(cbSort) {
    this.sortItems = document.querySelector(".sort-items");
    this.sortItems.addEventListener("click", event => {
      const value = this.getSortValue(event);
      cbSort(value);
    });
  }

  getSortValue(event) {
    return event.target.dataset.id;
  }
}
