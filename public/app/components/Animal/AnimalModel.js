export class AnimalModel {
  constructor() {
    this.link = `http://127.0.0.1:3000/pets`;
    this.data = [];
    // this.paginationCount = 9;
    // this.paginationPage = 1;
    this.pageOffset = 0;
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

  // paginatePage(whereTo) {
  //   const limit = 9;
  //   console.log("MAX:", this.data.total);
  //   switch (whereTo) {
  //     case "next": {
  //       this.pageOffset += limit;
  //       if (this.pageOffset < this.data.total) {
  //         return this.pageOffset;
  //       } else {
  //         this.pageOffset = 0;
  //       }
  //       break;
  //     }
  //     case "previous": {
  //       this.pageOffset -= limit;
  //       if (this.pageOffset < 0) {
  //         this.pageOffset = this.data.total - limit;
  //       } else {
  //         return this.pageOffset;
  //       }

  //       break;
  //     }
  //   }
  //   return this.pageOffset;
  // }

  getPaginationData(whereTo) {
    switch (whereTo) {
      case "next": {
        if (
          this.filteredData.length / this.paginationCount >
          this.paginationPage
        ) {
          this.paginationPage++;
        } else {
          this.paginationPage = 1;
        }
        break;
      }
      case "previous": {
        if (this.paginationPage === 1) {
          this.paginationPage = Math.ceil(
            this.filteredData.length / this.paginationCount
          );
        } else {
          this.paginationPage = this.paginationPage - 1;
        }
        break;
      }
      default: {
        this.paginationPage = 1;
      }
    }
    const from = (this.paginationPage - 1) * this.paginationCount;
    const to = this.paginationPage * this.paginationCount;
    return this.filteredData.slice(from, to);
  }

  getSingleAnimalData(id) {
    return this.data.pets.find(animal => animal.id === parseInt(id));
  }
}
