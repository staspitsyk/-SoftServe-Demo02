export class SortView {
  constructor(cbSort) {
    this.sortName = document.querySelector(".sort-name");
    this.sortItems = document.querySelector(".sort-items");
    this.sortItems.addEventListener("click", event => {
      const value = this.getSortValue(event);
      const newSortName = event.target.innerText;
      if (!value) {
        return;
      }
      this.reRenderSortName(newSortName);
      cbSort(value);
    });
  }

  getSortValue(event) {
    return event.target.dataset.id;
  }

  reRenderSortName(text) {
    this.sortName.innerText = text;
  }
}
