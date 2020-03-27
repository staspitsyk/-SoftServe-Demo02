const petsService = require('./pets.service');

class PetsController {
  async findMany(req, res, next) {
    try {
      const pets = await petsService.findMany();
      res.json(users);
    } catch (error) {
      next(error)
    }
  }
}

const petsController = new PetsController();
module.exports = petsController
