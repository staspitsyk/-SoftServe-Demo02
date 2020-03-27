OrdersModel = require('./orders.model');

class OrdersService {

    async createOne(order, orderData) {
        const ordersModel = new OrdersModel(orderData);
        ordersModel.OrderId = order.id;
        return ordersModel.save();
    }
}

module.exports = new OrdersService();