// const { OrdersModel, OrderItemModel } = require('./orders.model');
const  OrdersModel  = require('./orders.model');
const  OrderItemModel = require('./orders.item-model');
const customersService = require('../customers/customers.service');

const sequelize = require('../../db');

class OrdersService {

    async createOne(orderData) {

        const result = await sequelize.transaction(async transaction => {
            const customer = await customersService.createOne(orderData, transaction);
            orderData.customerId = customer.id;
            const ordersModel = new OrdersModel(orderData);
            const order = await ordersModel.save({ transaction });

            const arrOfPromises = orderData.orderAnimalsIds.map(async id => {
                const obj = {
                    petId: id,
                    orderId: order.id,
                };
                const ordersItemModel = new OrderItemModel(obj);
                return await ordersItemModel.save({ transaction });
            });

            await Promise.all(arrOfPromises);

            return order;

        });

        return result;
    }

}

module.exports = new OrdersService();