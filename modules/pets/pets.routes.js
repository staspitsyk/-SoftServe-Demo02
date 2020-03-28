const PetsController = require('./pets.controller');
const { Router } = require('express');

const router = new Router();

router.get('/', PetsController.findMany);

module.exports = router;

