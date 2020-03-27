const petsModel = require('./pets.model');

class PetsService {
  async findMany() {
    return petsModel.findAll();
  }
}
