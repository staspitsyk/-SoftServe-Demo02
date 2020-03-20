export class SearchFilterView {
  constructor(cbSearch, cbFilter) {
    this.filterName = document.querySelector(".filter-name");
    this.input = document.querySelector(".form-control");
    this.input.addEventListener("input", cbSearch);
    this.filterItems = document.querySelector(".filter-items");
    this.filterItems.addEventListener("click", event => {
      cbFilter(event);
    });
  }

  getFilterValue(event) {
    return event.target.dataset.id;
  }

  getSearchValue() {
    return this.input.value;
  }

  reRenderFilterName(text) {
    const capitilizedText = text.charAt(0).toUpperCase() + text.slice(1);
    this.filterName.innerText = capitilizedText;
  }
}
