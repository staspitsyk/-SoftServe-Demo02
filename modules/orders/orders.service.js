OrdersModel = require('./orders.model');

class OrdersService {

    async createOne(orderData) {
        const ordersModel = new OrdersModel(orderData);
        return ordersModel.save();
    }
}

module.exports = new OrdersService();