const { Router } = require("express");
const petsController = require("./pets.controller");

const router = new Router();

router.get("/", petsController.getPets);

router.get("/:id", petsController.findPetById);

router.delete("/:id", petsController.removeOne);

module.exports = router;
