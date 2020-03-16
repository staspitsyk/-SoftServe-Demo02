import { SearchFilterView } from './SearchFilterView.js';

export class SearchFilterController {
    constructor(handlS, handlF) {
        this.view = new SearchFilterView(this.handleSearch.bind(this), this.handleFilter.bind(this));
        this.handleSearchBreed = handlS;
        this.handleSearchSpecies = handlF;
    }

    handleSearch() {
        this.handleSearchBreed(this.view.getSearchValue());
    }

    handleFilter(event) {
        const value = event.target.textContent
        this.handleSearchSpecies(value);
    }
}