import { PaginationView } from './PaginationView.js';

export class PaginationController {
    constructor({ notify }) {
        this.view = new PaginationView(this.handlePagination.bind(this));
        this.notify = notify;
    }

    handlePagination(side) {
        this.notify('pagination', side);
    }
}