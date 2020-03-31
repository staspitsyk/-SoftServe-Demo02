const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../db');

class OrderItems extends Model {}

const OrderItemModel = OrderItems.init({
    orderId: { type: DataTypes.INTEGER },
}, { sequelize });

module.exports = OrderItemModel;