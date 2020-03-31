const { Router } = require("express");
const petsController = require("./pets.controller");

const router = new Router();

router.get("/", petsController.findMany);

router.get("/:id", petsController.findById);

router.delete("/:id", petsController.removeOne);

module.exports = router;
