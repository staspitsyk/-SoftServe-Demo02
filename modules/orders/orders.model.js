const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../db');
const PetModel = require('../pets/pets.model');

class Orders extends Model {}

const OrdersModel = Orders.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.DECIMAL, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    products: { type: DataTypes.DECIMAL, allowNull: false },
    totalPrice: { type: DataTypes.DECIMAL, allowNull: false },
    // date: { type: DataTypes.DATE, allowNull: false },
}, { sequelize });

class OrderItems extends Model {}

const OrderItemModel = OrderItems.init({

}, { sequelize });

OrderItemModel.order = OrderItemModel.belongsTo(OrdersModel, { foreignKeyConstraint: true, foreignKey: 'orderId', targetKey: 'id' });
OrderItemModel.pet = OrderItemModel.belongsTo(PetModel, { foreignKeyConstraint: true, foreignKey: 'petId', targetKey: 'id' });

OrdersModel.items = OrdersModel.hasMany(OrderItemModel);

module.exports = {
    OrdersModel,
    OrderItemModel,
};