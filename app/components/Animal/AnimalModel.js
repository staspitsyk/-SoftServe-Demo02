export class AnimalModel {
  constructor() {
    this.link = "data/data.json";
    this.data = [];
    this.typeFilter = "all";
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
    if (type === "filter") {
      this.typeFilter = str;
    }

    if (type === "filter" && str === "other") {
      return this.data.filter(
        ({ species }) =>
          species !== "dog" &&
          species !== "cat" &&
          species !== "fish" &&
          species !== "bird"
      );
    }

    if (type === "filter" && str === "all") {
      return this.data;
    }

    const regSearch = new RegExp(str, "i");

    return this.data.filter(({ breed, species }) => {
      if (this.typeFilter === "all") {
        return regSearch.test(type === "search" ? breed : species);
      } else {
        return (
          regSearch.test(type === "search" ? breed : species) &&
          species === this.typeFilter
        );
      }
      // ??? OTHER ???
    });
  }

  sort(condition) {
    console.log(condition);
    switch (condition) {
      case "Price (high)":
        return this.data.sort((a, b) => b.price - a.price);
      case "Price (low)":
        return this.data.sort((a, b) => a.price - b.price);
      case "Age (high)":
        return this.data.sort((a, b) => a.birth_date - b.birth_date);
      case "Age (low)":
        return this.data.sort((a, b) => b.birth_date - a.birth_date);
    }
  }
}
