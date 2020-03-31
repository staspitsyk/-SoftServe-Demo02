export class AnimalModel {
  constructor() {
    this.link = `http://127.0.0.1:3000/pets`;
    this.data = [];
    this.pageOffset = 9;
  }

  getLink(queryString) {
    return `${this.link}${queryString}`;
  }

  calculateAge(date) {
    const diff = Date.now() - date;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const yearsAge = Math.floor(days / 365);
    const monthsAge = Math.floor((days % 365) / 30);
    const daysAge = Math.floor((days % 365) - monthsAge * 30);

    return `${yearsAge < 1 ? "" : yearsAge + " years "}
            ${monthsAge < 1 ? "" : monthsAge + " month "}
            ${daysAge < 1 ? "" : daysAge + " days"}`;
  }

  async getArrOfAnimals(link = this.link) {
    try {
      const response = await fetch(link);

      this.data = await response.json();

      this.data.pets.forEach(
        animals => (animals.age = this.calculateAge(animals.birth_date))
      );

      return this.data.pets;
    } catch (err) {
      console.log(err);
    }
  }

  paginate(whereTo, curOffset) {
    const nextOffset = curOffset + this.pageOffset;
    const prevOffset = curOffset - this.pageOffset;

    switch (whereTo) {
      case "next": {
        if (nextOffset >= this.data.total) {
          return curOffset;
        } else {
          return nextOffset;
        }
      }
      case "previous": {
        if (prevOffset < 0) {
          return curOffset;
        } else {
          return prevOffset;
        }
      }
    }
  }

  getSingleAnimalData(id) {
    return this.data.pets.find(animal => animal.id === parseInt(id));
  }
}
