const  OrdersModel  = require('./orders.model');
const  OrderItemModel = require('./orders.item-model');
const CustomersModel = require('../customers/customers.model');
const PetsModel = require('../pets/pets.model');
const customersService = require('../customers/customers.service');
const petsService = require('../pets/pets.service');
const sendMail = require('../../common/mailer/mailer');

const sequelize = require('../../db');

class OrdersService {

    async createOne(orderData) {

        const result = await sequelize.transaction(async transaction => {
            const customer = await customersService.createOne(orderData, transaction);
            orderData.customerId = customer.id;
            const ordersModel = new OrdersModel(orderData);
            const order = await ordersModel.save({ transaction });

            const arrOfPromisesOrder = orderData.orderAnimalsIds.map(async id => {
                const orderData = {
                    petId: id,
                    orderId: order.id,
                };
                const ordersItemModel = new OrderItemModel(orderData);
                return await ordersItemModel.save({ transaction });
            });

            const arrOfPromisesPets = orderData.orderAnimalsIds.map(async id => {
                return await petsService.updateSold(id, transaction);
            });

            await Promise.all(arrOfPromisesOrder);
            await Promise.all(arrOfPromisesPets);

            await sendMail(order, customer);

            return order;

        });

        return result;
    }

    async findMany() {

        return OrdersModel.findAll({
            attributes:['id', 'products', 'totalPrice', "date", 'customerId'],
            include: [
                { model: OrderItemModel, attributes:['id', 'orderId', 'petId'], include: [{model: PetsModel, attributes:['id', 'species', 'isSold', "breed"]} ] },
                { model: CustomersModel, attributes:['id', 'name', 'phone', "email"] }
            ]
        });
    }
}

module.exports = new OrdersService();