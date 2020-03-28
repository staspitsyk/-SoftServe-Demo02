// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../../db');
// const PetModel = require('../pets/pets.model');
// const OrdersModel = require('./orders.model');

// class OrderItems extends Model {}

// const OrderItemModel = OrderItems.init({
//     id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
//     quantity: { type: DataTypes.DECIMAL, allowNull: false },
//     petId: { type: DataTypes.INTEGER },
//     orderId: { type: DataTypes.INTEGER },
// }, { sequelize });

// console.log(OrderItemModel);

// OrderItemModel.order = OrderItemModel.belongsTo(OrdersModel, { foreignKeyConstraint: true, foreignKey: 'orderId', targetKey: 'id' });
// OrderItemModel.pet = OrderItemModel.belongsTo(PetModel, { foreignKeyConstraint: true, foreignKey: 'petId', targetKey: 'id' });

// module.exports = OrderItemModel;