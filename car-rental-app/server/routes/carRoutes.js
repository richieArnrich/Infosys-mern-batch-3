const { getAllCars } = require("../controllers/carControllers.js");
const express = require("express");

const router = express.Router();

//route to get all cars
router.get("/", getAllCars);

module.exports = router;
