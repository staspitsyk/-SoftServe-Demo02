const ProductsModel = require('./products.model');

class ProductsService {

    async findMany() {
        return ProductsModel.findAll();
    }

    async createOne(animalData) {
        const existingAnimal = await ProductsModel.findOne({
            where: { id: animalData.id }
        });

        if (existingAnimal) {
            console.log('already exist');
            return;
        }

        const productModel = new ProductsModel(animalData);
        const savedProduct = await productModel.save();
        return savedProduct;
    }

}

module.exports = new ProductsService();