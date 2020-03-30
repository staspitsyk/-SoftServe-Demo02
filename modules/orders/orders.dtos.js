const Joi = require('joi');

const CreateOrderDto = Joi.object().keys({
    name: Joi.string().min(1).required(),
    phone: Joi.number().integer().required(),
    email: Joi.string().email().required(),
    products: Joi.number().integer().min(1).required(),
    totalPrice: Joi.number().required(),
    date: Joi.date().required(),
    orderAnimalsIds: Joi.array().items(Joi.number()).required(),
});

module.exports = CreateOrderDto;