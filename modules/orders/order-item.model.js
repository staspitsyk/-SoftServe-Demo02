const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../db');
const PetModel = require('../pets/pets.model');
const OrdersModel = require('../orders/orders.model');

class OrderItem extends Model {}

// const OrderItemModel = OrderItem.init({}, { sequelize });

// OrderItemModel.pet = OrderItemModel.belongsTo(PetModel, { foreignKeyConstraint: true, foreignKey: 'petId', targetKey: 'id' });
// OrderItemModel.order = OrderItemModel.belongsTo(OrdersModel, { foreignKeyConstraint: true, foreignKey: 'orderId', targetKey: 'id' });