const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../db');
const PetsModel = require('../pets/pets.model');
const OrderItemModel = require('./orders.item-model');
const CustomersModel = require('../customers/customers.model');

class Orders extends Model {}

const OrdersModel = Orders.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
    products: { type: DataTypes.DECIMAL, allowNull: false },
    totalPrice: { type: DataTypes.DECIMAL, allowNull: false },
    date: { type: DataTypes.DATE, allowNull: false },
}, { sequelize });

OrdersModel.belongsTo(CustomersModel, { foreignKeyConstraint: true, foreignKey: 'customerId', targetKey: 'id' });

OrdersModel.hasMany(OrderItemModel, { foreignKeyConstraint: true, foreignKey: 'orderId', targetKey: 'id' });

OrderItemModel.belongsTo(PetsModel, { foreignKeyConstraint: true, foreignKey: 'petId', targetKey: 'id' });

module.exports = OrdersModel;