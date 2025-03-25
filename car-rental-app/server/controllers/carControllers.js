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

const addCar = async (req, res) => {
  try {
    const { name, brand, year, category, fuelType, rentPerDay, available } =
      req.body;
    const image = `/uploads/${req.file.filename}`;
    console.log(image);

    const car = new Car({
      name,
      brand,
      year,
      category,
      fuelType,
      rentPerDay,
      image,
      available,
    });
    await car.save();
    res.status(201).json({ car, message: "car added successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error adding car" });
  }
};

module.exports = { getAllCars, addCar };
