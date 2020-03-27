const data = require('../data/data')

const db_data = data.map(pet => {
  return {
    species: pet.species,
    price: pet.price,
    gender: pet.gender,
    weight: pet.weight,
    color: pet.color,
    breed: pet.breed,
    image: `./public/img/image_${pet.id}.jpg`,
    birth_date: pet.birth_date,
    description: pet.description,
  }
});

module.exports = db_data;
