'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    species: DataTypes.STRING,
    price: DataTypes.FLOAT,
    gender: DataTypes.STRING,
    weight: DataTypes.FLOAT,
    birth_date: DataTypes.BIGINT,
    color: DataTypes.STRING,
    breed: DataTypes.STRING,
    image: DataTypes.STRING,
    is_sterile: DataTypes.BOOLEAN,
    hair: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Products.associate = function(models) {
    // associations can be defined here
  };
  return Products;
};