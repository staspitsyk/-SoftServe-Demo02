const PetsModel = require('./pets.model');

class PetsService {
  async findMany() {
    return PetsModel.findAll();
  }
}

const petsService = new PetsService();
module.exports = petsService;
