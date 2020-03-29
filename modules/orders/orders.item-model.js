const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../db');

class OrderItems extends Model {}

const OrderItemModel = OrderItems.init({

}, { sequelize });

module.exports = OrderItemModel;