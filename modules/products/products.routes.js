const { Router } = require('express');
const productsController = require('./products.controller');

const router = new Router();

router.get('/', productsController.findMany);

module.exports = router;