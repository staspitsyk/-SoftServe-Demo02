const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../db');
const PetsModel = require('../pets/pets.model.js');
const OrdersModel = require('../orders/orders.model.js');

class OrderItem extends Model {}

const OrderItemModel = OrderItem.init();

OrderItemModel.pets = OrderItemModel.belongsTo(PetsModel, {
  foreignKeyConstraint: true,
  foreignKey: 'petId',
  targetKey: 'id',
});

OrderItemModel.order = OrderItemModel.belongsTo(OrdersModel, {
  foreignKeyConstraint: true,
  foreignKey: 'orderId',
  targetKey: 'id',
});
