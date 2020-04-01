import { SearchFilterView } from "./SearchFilterView.js";

export class SearchFilterController {
  constructor({ notify }, builder) {
    this.view = new SearchFilterView(
      this.handleSearch.bind(this),
      this.handleFilter.bind(this)
    );

    this.builder = builder;
    this.notify = notify;
  }

  handleSearch() {
    const value = this.view.getSearchValue();
    this.notify("search", value);
  }

  handleFilter(event) {
    const value = this.view.getFilterValue(event);
    if (!value) {
      return;
    }
    this.view.reRenderFilterName(value);
    this.notify("filter", value);
  }
}
