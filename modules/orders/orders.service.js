const { OrdersModel, OrderItemModel } = require('./orders.model');
const sequelize = require('../../db');

class OrdersService {

        async createOne(orderData) {
        const ordersModel = new OrdersModel(orderData);
        const order = await ordersModel.save();

        orderData.aniamlIds.forEach(async id => {
            const obj = {
                petId: id,
                orderId: order.id,
            };
            const ordersItemModel = new OrderItemModel(obj);
            await ordersItemModel.save();
        });
        return order;
    }

    // async createOne(orderData) {

    //     const result = await sequelize.transaction(async (transaction) => {
    //     const ordersModel = new OrdersModel(orderData);
    //     const order = await ordersModel.save({ transaction });

    //     // const arr =  orderData.aniamlIds.map(async id => {

    //     //     const promise = new Promise((resolve, reject) => {
    //     //         const obj = {
    //     //             petId: id,
    //     //             orderId: order.id,
    //     //         };
    //     //         const ordersItemModel = new OrderItemModel(obj);
    //     //         resolve(ordersItemModel.save({ transaction }));
    //     //         reject('hi');
    //     //     });


    //     //     return promise;
    //     // });

    //     // console.log(arr);

    //     // Promise.all(arr);

    //     Promise.all(
    //         orderData.aniamlIds.map(async id => {
    //             const obj = {
    //                 petId: id,
    //                 orderId: order.id,
    //             };
    //             const ordersItemModel = new OrderItemModel(obj);
    //             return await ordersItemModel.save({ transaction });
    //         })
    //     );

    //     return order;

    //     });

    //     return result;
    // }


}

module.exports = new OrdersService();