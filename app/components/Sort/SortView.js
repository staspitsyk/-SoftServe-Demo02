export class SortView {
  constructor(cbSort) {
    this.sortName = document.querySelector(".sort-name");
    this.sortItems = document.querySelector(".sort-items");
    this.sortItems.addEventListener("click", event => {
      const value = this.getSortValue(event);
      this.reRenderSortName(value);
      cbSort(value);
    });
  }

  getSortValue(event) {
    return event.target.dataset.id;
  }

  reRenderSortName(text) {
    const capitilizedText = text.charAt(0).toUpperCase() + text.slice(1);
    this.sortName.innerText = capitilizedText;
  }
}
