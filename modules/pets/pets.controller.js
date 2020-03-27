const petsService = require('./pets.service');
const fs = require('fs');
const path = require('path');
// const data = require('../data/data.json');

class PetsController {

    async findMany(req, res, next) {
        try {
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

    async createMany(req, res, next) {
        try {
            fs.readFile(path.join(__dirname, '../..', 'data/data.json'), 'utf8', (err, content) => {
                if (err) {
                    throw err;
                }
                content = JSON.parse(content);
                content.forEach(async animal => {
                    animal.image = `public/img/image_${animal.id}.jpg`;
                    const oneAnimal = await petsService.createOne(animal);
                });
            });
        } catch (e) {
            next(e);
        }
    }

    async removeOne(req, res, next) {
        try {
            const result = await usersService.removeOne(req.params.id);
            res.json(result);
        }   catch (e) {
            next(e);
        }
    }

}

const petsController = new PetsController();
module.exports = petsController;