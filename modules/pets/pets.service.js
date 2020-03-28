const PetsModel = require('./pets.model');
const NotFound = require('../../common/not-found');

class PetsService {

  async findMany() {
    return PetsModel.findAll();
  }

  async findPetById(id) {
    const pet = await PetsModel.findOne({ where: { id } });
    if (!pet) {
      throw new NotFound('Pet not found')
    }

    return pet;
  }
}

const petsService = new PetsService();
module.exports = petsService;
