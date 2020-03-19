export class AnimalModel {
  constructor() {
    this.link = "data/data.json";
    this.data = [];
    this.paginationCount = 9;
    this.paginationPage = 1;
    // this.filteredData = JSON.parse(JSON.stringify(this.data)) ;
  }

  calculateAge(date) {
    const birthDate = new Date(date).toISOString();

    const mdate = birthDate.toString();
    const yearThen = parseInt(mdate.substring(0, 4), 10);
    const monthThen = parseInt(mdate.substring(5, 7), 10);
    const dayThen = parseInt(mdate.substring(8, 10), 10);

    const today = new Date();
    const birthday = new Date(yearThen, monthThen - 1, dayThen);

    const differenceInMilisecond = today.valueOf() - birthday.valueOf();

    const yearAge = Math.floor(differenceInMilisecond / 31536000000);
    let dayAge = Math.floor((differenceInMilisecond % 31536000000) / 86400000);

    const monthAge = Math.floor(dayAge / 30);

    dayAge = dayAge % 30;

    return `${yearAge} years ${monthAge} months ${dayAge} days`;
  }

  async getArrOfAnimals() {
    try {
      const response = await fetch(this.link);

      this.data = await response.json();

      this.data.forEach(
        animals => (animals.age = this.calculateAge(animals.birth_date))
      );

      this.filteredData = this.data.slice();

      const filter = sessionStorage.getItem("filter");

      if (filter) {
        const filteredAnimals = this.filter(filter, this.data);

        return filteredAnimals;
      } else {
        return this.getPaginationData();
      }
    } catch (err) {
      console.log(err);
    }
  }

  globalFilter() {
    const filter = sessionStorage.getItem("filter");
    const search = sessionStorage.getItem("search");
    const sort = sessionStorage.getItem("sort");

    if (filter) this.filteredData = this.filter(filter, this.data);
    if (search) this.filteredData = this.search(search, this.filteredData);
    if (sort) this.filteredData = this.sort(sort, this.filteredData);

    return this.getPaginationData(this.filteredData);
  }

  filter(str, data) {
    const regSearch = new RegExp(str, "i");

    if (str === "all") {
      return data;
    }

    if (str === "other") {
      data = data.filter(
        ({ species }) =>
          species !== "dog" &&
          species !== "cat" &&
          species !== "fish" &&
          species !== "bird"
      );
      return data;
    }

    data = data.filter(({ species }) => regSearch.test(species));

    return data;
  }

  search(str, data) {
    const regSearch = new RegExp(str, "i");

    data = data.filter(({ breed }) => regSearch.test(breed));

    return data;
  }

  sort(condition, data) {
    switch (condition) {
      case "Price (high)":
        return data.sort((a, b) => b.price - a.price);
      case "Price (low)":
        return data.sort((a, b) => a.price - b.price);
      case "Age (high)":
        return data.sort((a, b) => a.birth_date - b.birth_date);
      case "Age (low)":
        return data.sort((a, b) => b.birth_date - a.birth_date);
    }
  }

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
}
