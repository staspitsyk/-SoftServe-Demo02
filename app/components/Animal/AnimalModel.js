export class AnimalModel {
  constructor() {
    this.link = "data/data.json";
    this.data = [];
    this.filteredData = this.data;
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
        const filteredAnimals = this.filter(filter, "filter");

        return filteredAnimals;
      } else {
        return this.data;
      }
    } catch (err) {
      console.log(err);
    }
  }

  filter(str, type) {
    const filter = sessionStorage.getItem("filter");

    const regSearch = new RegExp(str, "i");

    if (filter && type === "search") {
      if (filter === "all") {
        this.filteredData = this.data.filter(({ breed }) =>
          regSearch.test(breed)
        );

        return this.filteredData;
      } else if (filter === "other") {
        this.filteredData = this.data.filter(
          ({ species, breed }) =>
            species !== "dog" &&
            species !== "cat" &&
            species !== "fish" &&
            species !== "bird" &&
            regSearch.test(breed)
        );

        return this.filteredData;
      } else {
        this.filteredData = this.data.filter(
          ({ breed, species }) => regSearch.test(breed) && filter === species
        );

        return this.filteredData;
      }
    }

    if (str === "other" && type === "filter") {
      this.filteredData = this.data.filter(
        ({ species }) =>
          species !== "dog" &&
          species !== "cat" &&
          species !== "fish" &&
          species !== "bird"
      );

      return this.filteredData;
    }

    if (str === "all" && type === "filter") {
      this.filteredData = this.data;

      return this.filteredData;
    }

    this.filteredData = this.data.filter(({ breed, species }) =>
      regSearch.test(type === "search" ? breed : species)
    );

    return this.filteredData;
  }

  sort(condition) {
    switch (condition) {
      case "Price (high)":
        return this.filteredData.sort((a, b) => b.price - a.price);
      case "Price (low)":
        return this.filteredData.sort((a, b) => a.price - b.price);
      case "Age (high)":
        return this.filteredData.sort((a, b) => a.birth_date - b.birth_date);
      case "Age (low)":
        return this.filteredData.sort((a, b) => b.birth_date - a.birth_date);
    }
  }
}
