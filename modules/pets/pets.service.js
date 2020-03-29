const PetsModel = require("./pets.model");

class PetsService {
  async findMany(findType) {
    return PetsModel.findAll(findType);
  }

  async findOneById(id) {
    const pet = await PetsModel.findOne({ where: { id } });

    if (!pet) {
      console.log("Pet not found");
    }

    return pet;
  }

  async getAmount() {
    const amount = await PetsModel.count();
    return amount;
  }

  // async createOne(animalData) {
  //   const existingAnimal = await PetsModel.findOne({
  //     where: { id: animalData.id }
  //   });

  //   if (existingAnimal) {
  //     console.log("already exist");
  //     return;
  //   }

  //   const petsModel = new PetsModel(animalData);
  //   const savedProduct = await productModel.save();
  //   return savedProduct;
  // }

  // async removeOne(id) {
  //   const pet = await this.findOneById(id);
  //   pet.destroy();
  //   return { id: pet.id };
  // }
}

module.exports = new PetsService();
