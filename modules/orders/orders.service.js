const { OrdersModel, OrderItemModel } = require('./orders.model');
const sequelize = require('../../db');

class OrdersService {

    async createOne(orderData) {

        const result = await sequelize.transaction(async transaction => {
            const ordersModel = new OrdersModel(orderData);
            const order = await ordersModel.save({ transaction });

            const arrOfPromises = orderData.aniamlIds.map(async id => {
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