export class AnimalModel {
  constructor() {
    this.link = 'data/data.json';
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

      this.parsedData = await response.json();

      this.parsedData.forEach(
        animals => (animals.age = this.calculateAge(animals.birth_date))
      );
      return this.parsedData;
    } catch (err) {
      console.log(err);
    }
  }

  searchName(str) {
    const regSearch = new RegExp(str, 'i');
    return this.parsedData.filter(({breed}) => regSearch.test(breed));
  }

  filterSpecies(str) {
    return this.parsedData.filter(({species}) => {
      if (str === 'all') { // ???
        return true;
      }
      if (str === 'other') {
        return species !== 'cat' && species !== 'dog' && species !== 'fish' && species !== 'bird' //???
      }
      return str === species
    })
  }
}
