export class SearchFilterView {
  constructor(cbSearch, cbFilter) {
    this.input = document.querySelector(".form-control");
    this.input.addEventListener("input", cbSearch);
    this.filterItems = document.querySelector(".filter-items");
    this.filterItems.addEventListener("click", event => {
      const value = this.getFilterValue(event);
      cbFilter(value);
    });
  }

  getFilterValue(event) {
    return event.target.dataset.id;
  }

  getSearchValue() {
    return this.input.value;
  }
}
