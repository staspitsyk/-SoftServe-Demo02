import { SearchFilterView } from "./SearchFilterView.js";

export class SearchFilterController {
  constructor({ notify }) {
    this.view = new SearchFilterView(
      this.handleSearch.bind(this),
      this.handleFilter.bind(this)
    );
    this.notify = notify;
  }

  handleSearch() {
    const value = this.view.getSearchValue();
    sessionStorage.setItem("search", value);
    this.notify("search", value);
  }

  handleFilter(value) {
    sessionStorage.setItem("filter", value);
    this.notify("filter", value);
  }
}
