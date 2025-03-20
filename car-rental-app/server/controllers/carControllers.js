const Car = require("../models/Car.js");

//get all cars
const getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error fetching cars" });
  }
};

module.exports = { getAllCars };
