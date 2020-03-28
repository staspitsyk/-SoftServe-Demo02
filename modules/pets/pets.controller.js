const PetsService = require('./pets.service');

class PetsController {
  async findMany(req, res, next) {
    try {
      const pets = await PetsService.findMany();
      res.json(pets);
    } catch (error) {
      next(error);
    }
  }
}

const petsController = new PetsController();
module.exports = petsController;
