export class SearchView {
    constructor(listener) {
        this.input = document.querySelector('.inp-search');
        this.input.addEventListener('input', listener);
    }

    get searchValue() {
        return this.input.value;
    }
}