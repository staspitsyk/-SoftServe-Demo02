const petsService = require("./pets.service");
const fs = require("fs");
const path = require("path");
const { Op } = require("sequelize");
// const data = require('../data/data.json');

class PetsController {
  async getPets(req, res, next) {
    try {
      const specificReq = req.query;

      const order = [];
      const where = {};

      const fullRequest = {
        limit: parseInt(specificReq.limit) || 9,
        offset: parseInt(specificReq.offset) || 0
      };

      // resolving query string for Sort
      if (specificReq.sortType) {
        switch (specificReq.sortType) {
          case "priceUp": {
            order.push(["price", "ASC"]);
            break;
          }
          case "priceDown": {
            order.push(["price", "DESC"]);
            break;
          }
          case "ageUp": {
            order.push(["birth_date", "ASC"]);
            break;
          }
          case "ageDown": {
            order.push(["birth_date", "DESC"]);
            break;
          }
        }
        fullRequest.order = order;
      }

      // resolving query string for Filter
      if (specificReq.filterType) {
        where.species = specificReq.filterType;
        fullRequest.where = where;
      }

      // resolving query string for Search
      if (specificReq.searchString) {
        where.breed = {
          [Op.like]: `%${specificReq.searchString}%`
        };
        fullRequest.where = where;
      }

      const pets = await petsService.findMany(fullRequest);
      res.json(pets);
    } catch (e) {
      next(e);
    }
  }

  async findPetById(req, res, next) {
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
