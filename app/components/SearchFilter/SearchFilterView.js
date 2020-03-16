export class SearchFilterView {
    constructor(cbSearch, cbFilter) {
        this.input = document.querySelector('.form-control');
        this.input.addEventListener('input', cbSearch);
        this.arrOfAnchors = document.querySelectorAll('.dropdown-item');
        this.callBackFilter = cbFilter;
        this.addFilterListeners();
    }

    getSearchValue() {
        return this.input.value;
    }

    addFilterListeners() {
        this.arrOfAnchors.forEach( anchor => anchor.addEventListener('click', this.callBackFilter));
    }
}