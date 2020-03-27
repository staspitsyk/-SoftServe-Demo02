const { DataTypes, Model } = require('sequelize');
const sequelize = require('.../db');
const PetsModel = require('../pets/pets.model');

class Orders extends Model {}

const OrdersModel = Orders.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    number: { type: DataTypes.DECIMAL, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
}, { sequelize });

OrdersModel.Pet  = OrdersModel.belongsTo(PetsModel, { foregnKeyConstraint: true, foreignKey: 'petId', targetKey: 'id' });

module.exports = OrdersModel;