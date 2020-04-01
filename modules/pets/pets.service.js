const PetsModel = require("./pets.model");
const { Op } = require("sequelize");
const NotFound = require("../../common/errors/not-found");

class PetsService {
  async findMany(findType) {
    const pets = await PetsModel.findAll(findType);
    return pets;
  }

  async findOneById(id, transaction) {
    const pet = await PetsModel.findOne({ where: { id }, transaction });
    console.log(pet);

    if (!pet) {
      throw new NotFound("Pet not found");
    }

    return pet;
  }

  async getAmount(findType) {
    const amount = await PetsModel.count(findType);
    return amount;
  }

  async removeOne(id) {
    const pet = await this.findOneById(id);
    if (!pet) {
      throw new NotFound("Pet not found");
    }
    pet.destroy();
    return { id: pet.id };
  }

  async updateOne(id, petData, transaction) {
    await PetsModel.update(petData, { where: { id }, transaction });
  }

  async updateSold(id, transaction) {
    PetsModel.update({ isSold: true }, { where: { id }, transaction });
  }

  getRequestOptions(query) {
    const order = [];
    const searchAndFilter = {};

    const fullRequest = {
      limit: 9,
      offset: parseInt(query.offset) || 0,
      where: { isSold: false }
    };

    // resolving query string for Sort
    if (query.sortType) {
      switch (query.sortType) {
        case "priceLow": {
          order.push(["price", "ASC"]);
          break;
        }
        case "priceHigh": {
          order.push(["price", "DESC"]);
          break;
        }
        case "ageHigh": {
          order.push(["birth_date", "ASC"]);
          break;
        }
        case "ageLow": {
          order.push(["birth_date", "DESC"]);
          break;
        }
      }
      fullRequest.order = order;
    }

    // resolving query string for Filter
    if (query.filterType) {
      switch (query.filterType) {
        case "all": {
          break;
        }
        case "other": {
          searchAndFilter[Op.not] = [
            { species: ["cat", "dog", "bird", "fish"] }
          ];
          break;
        }
        default: {
          searchAndFilter.species = query.filterType;
        }
      }
      fullRequest.where = Object.assign(fullRequest.where, searchAndFilter);
    }

    // resolving query string for Search
    if (query.search) {
      searchAndFilter.breed = {
        [Op.like]: `%${query.search}%`
      };
      fullRequest.where = Object.assign(fullRequest.where, searchAndFilter);
    }

    return fullRequest;
  }
}

module.exports = new PetsService();
