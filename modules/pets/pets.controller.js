const petsService = require("./pets.service");

class PetsController {
  async findMany(req, res, next) {
    try {
      const fullRequest = petsService.getRequestOptions(req.query);

      const data = {
        total: await petsService.getAmount(fullRequest),
        pets: await petsService.findMany(fullRequest)
      };

      res.json(data);
    } catch (e) {
      next(e);
    }
  }

  async findById(req, res, next) {
    try {
      const pet = await petsService.findOneById(req.params.id);
      res.json(pet);
    } catch (e) {
      next(e);
    }
  }

  async removeOne(req, res, next) {
    try {
      const result = await usersService.removeOne(req.params.id);
      res.json(result);
    } catch (e) {
      next(e);
    }
  }
}

const petsController = new PetsController();
module.exports = petsController;
