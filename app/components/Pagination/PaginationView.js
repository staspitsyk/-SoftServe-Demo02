export class PaginationView {
  constructor(changePage) {
    this.btns = document.querySelector(".pag-btns");
    this.btns.addEventListener("click", event => {
      const value = this.getButton(event);
      changePage(value);
    });
  }

  getButton(event) {
    return event.target.dataset.id;
  }
}
