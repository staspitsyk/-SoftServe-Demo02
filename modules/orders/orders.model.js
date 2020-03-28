const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../db');
const OrderItemModel = require('./order-item.model')

class Orders extends Model {}

const OrdersModel = Orders.init({
  id: { primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER },
  postedDate: { allowNull: false, type: DataTypes.DATE }
}, { sequelize });

// OrdersModel.items = OrdersModel.hasMany(OrderItemModel);
