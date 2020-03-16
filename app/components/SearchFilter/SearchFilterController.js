import { SearchFilterView } from "./SearchFilterView.js";

export class SearchFilterController {
    constructor(handleSearch, handleFilter) {
        this.view = new SearchFilterView(this.handleSearch, this.handleClick);
        this.handleSearchMessage = handleSearch;
        this.handleFilterAnimals = handleFilter;
    }

    handleClick = (event) => {
        event.preventDefault();
        const filterValue = this.view.getFilterValue(event);
        this.handleFilterAnimals(filterValue)
    }

    handleSearch = () => {
        this.handleSearchMessage(this.view.getSearchValue);
    }
}