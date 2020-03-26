const productsService = require('./products.service');
const fs = require('fs');
const path = require('path');
// const data = require('../data/data.json');

class ProductsController {

    async findMany(req, res, next) {
        try {
            const products = await productsService.findMany();
            res.json(products);
        } catch (e) {
            next(e);
        }
    }

    async createMany(req, res, next) {
        try {
            fs.readFile(path.join(__dirname, '../..', 'data/data.json'), 'utf8', (err, content) => {
                if (err) {
                    throw err;
                }
                content = JSON.parse(content);
                content.forEach(async animal => {
                    animal.image = `public/img/image_${animal.id}.jpg`;
                    const oneAnimal = await productsService.createOne(animal);
                });
            });
        } catch (e) {
            next(e);
        }
    }

}

const productsController = new ProductsController();
module.exports = productsController;