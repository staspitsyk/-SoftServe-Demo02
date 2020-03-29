const petsService = require("./pets.service");
const fs = require("fs");
const path = require("path");
const { Op } = require("sequelize");
// const data = require('../data/data.json');

class PetsController {
  // async getPets(req, res, next) {
  //     try {
  //         const
  //     } catch {

  //     }
  // }

  async findMany(req, res, next) {
    try {
      const specificReq = req.query;

      const order = [];
      const where = {};

      // resolving query string for Sort
      if (specificReq.sortType) {
        switch (specificReq.sortType) {
          case "priceUp": {
            order.push(["price", "ASC"]);
          }
          case "priceDown": {
            order.push(["price", "DESC"]);
          }
          case "ageUp": {
            order.push(["birth_date", "ASC"]);
          }
          case "ageDown": {
            order.push(["birth_date", "DESC"]);
          }
        }
      }

      // resolving query string for Filter
      if (specificReq.filter) {
        where.species = specificReq.filter;
      }

      // resolving query string for Search
      if (specificReq.search) {
        where.breed = {
          [Op.like]: `%${specificReq.search}%`
        };
      }

      // resolving query string for Pagination
      const pagination = {
        limit: parseInt(specificReq.limit) || 3,
        offset: parseInt(specificReq.offset) || 0
      };

      const pets = await petsService.findMany();
      res.json(pets);
    } catch (e) {
      next(e);
    }
  }

  async findOneById(req, res, next) {
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
