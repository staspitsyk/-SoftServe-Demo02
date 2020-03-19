import { PaginationView } from "./PaginationView.js";

export class PaginationController {
  constructor() {
    this.view = new PaginationView(this.handleClick);
  }

  handleClick(value) {
    console.log(value);
  }
}
