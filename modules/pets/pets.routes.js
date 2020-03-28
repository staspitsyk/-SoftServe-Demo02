// const petsController = require('./pets.controller.js');
const { Router } = require('express');

const router = new Router();

router.get('/', //petsController.findMany
  (req, res, next) => {
  res.send("PETS HERE");
}
);

module.exports = router;
