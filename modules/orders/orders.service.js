const { Op } = require('sequelize');
const OrdersModel = require('./orders.model');
const sequelize = require('../../db');
const PetsModel = require('../pets/pets.model');

// const dto = {
//   customer: {
//
//   },
//   item: [
//     {petId: 25}
//   ]
// }

class OrderService {
  async createOne(orderData) {
    return sequelize.transaction(async transaction => {
      const { items } = orderData;
      const foundPetsCount = await PetsModel.findAll({
        where: { [Op.in]: items.map(i => i.petId) },
      });
      // Check existence of pet and enough pet quantity
      // Order
      // Order Items
      // Drop pet
      // return order
    });
  }
}
