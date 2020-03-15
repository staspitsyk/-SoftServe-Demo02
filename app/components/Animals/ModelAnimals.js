export class ModelAnimals {
  link = '/data/data.json';
  constructor(cBack) {
    this.handleLoad = cBack;
  }

  getAnimals() {
    const ajax = new XMLHttpRequest();
    ajax.addEventListener('load', () => {
      this.animals = JSON.parse(ajax.responseText);
      this.handleLoad(this.animals);
    });
    ajax.open('GET', this.link);
    ajax.send();
  }
}
