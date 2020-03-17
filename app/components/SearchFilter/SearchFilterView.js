export class SearchFilterView {
  constructor(cbSearch, cbFilter) {
    this.input = document.querySelector(".form-control");
    this.input.addEventListener("input", cbSearch);
    this.filterItems = document.querySelector(".filter-items");
    this.filterItems.addEventListener("click", event => {
      const value = event.target.attributes["data-id"].value;
      cbFilter(value);
    });
  }

  getSearchValue() {
    return this.input.value;
  }
}
