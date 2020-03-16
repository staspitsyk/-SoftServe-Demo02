export class SearchFilterView {
    constructor(handleSearch, handleClick) {
        this.input = document.querySelector('.inp-search');
        this.filterItems = document.querySelector('.filter-items')
        this.input.addEventListener('input', handleSearch);
        this.filterItems.addEventListener('click', event => {
            handleClick(event);
        });
    }

    getFilterValue(event) {
        return event.target.attributes['data-id'].value;
    }

    getSearchValue() {
        return this.input.value;
    }
}