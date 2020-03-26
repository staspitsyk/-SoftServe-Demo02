const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../db');


class Products extends Model {}

const ProductsModel = Products.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    species: { type: DataTypes.STRING, allowNull: true },
    price: { type: DataTypes.FLOAT, allowNull: true },
    gender: { type: DataTypes.STRING, allowNull: true },
    weight: { type: DataTypes.FLOAT, allowNull: true },
    birth_date: { type: DataTypes.BIGINT, allowNull: true },
    color: { type: DataTypes.STRING, allowNull: true },
    breed: { type: DataTypes.STRING, allowNull: true },
    image: { type: DataTypes.STRING, allowNull: true },
    is_sterile: { type: DataTypes.BOOLEAN, allowNull: true },
    hair: { type: DataTypes.STRING, allowNull: true },
    description: { type: DataTypes.STRING(1000), allowNull: true }
}, { sequelize });

module.exports = ProductsModel;