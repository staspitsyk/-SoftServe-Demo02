const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../db');

class Customers extends Model{}

const CustomersModel = Customers.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.DECIMAL, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
}, { sequelize });

module.exports = CustomersModel;