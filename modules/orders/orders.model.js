const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../db');
const OrderItemModel = require('./order-item.model');

class Orders extends Model {}

const OrdersModel = Orders.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.DECIMAL, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    products: { type: DataTypes.DECIMAL, allowNull: false },
    totalPrice: { type: DataTypes.DECIMAL, allowNull: false },
}, { sequelize });

// OrdersModel.items = OrdersModel.hasMany(OrderItemModel);

module.exports = OrdersModel;