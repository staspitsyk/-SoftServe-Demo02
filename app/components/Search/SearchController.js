import { SearchView } from "./SearchView.js";

export class SearchController {
    constructor(handleSearch) {
        this.view = new SearchView(this.handleSearch);
        this.handleSearchMessage = handleSearch;
    }

    handleSearch = () => {
        this.handleSearchMessage(this.view.searchValue);
    }
}