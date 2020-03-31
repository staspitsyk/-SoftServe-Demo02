const ordersService = require('./orders.service');

class OrdersController {

    async createOne(req, res, next) {
        try {
            const order = await ordersService.createOne(req.body);
            res.json(order);
        } catch (e) {
            next(e);
        }
    }

    async findMany(req, res, next) {
        try {
            const order = await ordersService.findMany();
            res.json(order);
        } catch (e) {
            next(e);
        }
    }

}

module.exports = new OrdersController();