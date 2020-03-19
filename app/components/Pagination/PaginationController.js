import { PaginationView } from "./PaginationView.js";

export class PaginationController {
  constructor({ notify }) {
    this.view = new PaginationView(this.handleClick.bind(this));
    this.notify = notify;
  }

  handleClick(value) {
    this.notify("pagination", value);
  }
}
