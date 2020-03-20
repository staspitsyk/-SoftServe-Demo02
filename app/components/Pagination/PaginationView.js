export class PaginationView {
  constructor(changePage) {
    this.btns = document.querySelector(".pag-btns");
    this.btns.addEventListener("click", event => {
      changePage(event);
    });
  }

  getButton(event) {
    return event.target.dataset.id;
  }
}
