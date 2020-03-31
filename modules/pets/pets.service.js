const PetsModel = require("./pets.model");

class PetsService {
  async findMany(findType) {
    return PetsModel.findAll(findType);
    // { where: { isSold: false } });
  }

  async findOneById(id, transaction) {
    const pet = await PetsModel.findOne({ where: { id }, transaction });

    if (!pet) {
      console.log("Pet not found");
    }

    return pet;
  }

  async getAmount(findType) {
    const amount = await PetsModel.count(findType);
    return amount;
  }

  async createOne(animalData) {
    const existingAnimal = await PetsModel.findOne({
      where: { id: animalData.id }
    });

    if (existingAnimal) {
      console.log("already exist");
      return;
    }

    const petsModel = new PetsModel(animalData);
    const savedProduct = await productModel.save();
    return savedProduct;
  }

  async removeOne(id) {
    const pet = await this.findOneById(id);
    pet.destroy();
    return { id: pet.id };
  }

  async updateOne(id, petData, transaction) {
    await this.findOneById(id, transaction);
    await PetsModel.update(petData, { where: { id }, transaction });
  }

  async updateSold(id, transaction) {
    PetsModel.update({ isSold: true }, { where: { id }, transaction });
  }
}

module.exports = new PetsService();
