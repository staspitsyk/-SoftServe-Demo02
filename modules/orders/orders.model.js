const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../db');
const PetsModel = require('../pets/pets.model');
const OrderItemModel = require('./orders.item-model');

class Orders extends Model {}

const OrdersModel = Orders.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.DECIMAL, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    products: { type: DataTypes.DECIMAL, allowNull: false },
    totalPrice: { type: DataTypes.DECIMAL, allowNull: false },
    date: { type: DataTypes.DATE, allowNull: false },
}, { sequelize });

OrderItemModel.order = OrderItemModel.belongsTo(OrdersModel, { foreignKeyConstraint: true, foreignKey: 'orderId', targetKey: 'id' });
OrderItemModel.pet = OrderItemModel.belongsTo(PetsModel, { foreignKeyConstraint: true, foreignKey: 'petId', targetKey: 'id' });

OrdersModel.items = OrdersModel.hasMany(OrderItemModel);
PetsModel.items = PetsModel.hasMany(OrderItemModel);

module.exports = OrdersModel;