const data = require("../../data/data");

const db_data = data.map(obj => {
  return {
    species: obj.species,
    price: obj.price,
    gender: obj.gender,
    weight: obj.weight,
    birth_date: obj.birth_date,
    color: obj.color,
    breed: obj.breed.toLowerCase(),
    image: `public/img/image_${obj.id}.jpg`,
    is_sterile: obj.is_sterile,
    hair: obj.hair,
    description: obj.description,
    isSold: false,
    createdAt: new Date(),
    updatedAt: new Date()
  };
});

module.exports = db_data;
