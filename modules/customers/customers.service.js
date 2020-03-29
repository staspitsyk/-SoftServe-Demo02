const CustomersModel = require('./customers.model');

class CustomersService {

    async findOneByEmail(email, transaction) {
        const customer = await CustomersModel.findOne({ where: { email }, transaction });

        return customer;
    }

    async createOne(orderData , transaction) {
        const existingCustomer = await this.findOneByEmail(orderData.email, transaction);

        if (!existingCustomer) {
            const customersModel = new CustomersModel(orderData);
            return await customersModel.save({ transaction });
        }

        return existingCustomer;
    }
}

module.exports = new CustomersService();