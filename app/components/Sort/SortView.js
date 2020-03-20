export class SortView {
  constructor(cbSort) {
    this.sortName = document.querySelector(".sort-name");
    this.sortItems = document.querySelector(".sort-items");
    this.sortItems.addEventListener("click", event => {
      cbSort(event);
    });
  }

  getSortValue(event) {
    return event.target.dataset.id;
  }

  reRenderSortName(text) {
    this.sortName.innerText = text;
  }
}
