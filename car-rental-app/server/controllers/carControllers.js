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

//get single car
const getCar = async (req, res) => {
  try {
    const id = req.params.id;
    const car = await Car.find({ _id: id });
    console.log(car);
    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }
    res.status(200).json(...car); //using spread operator
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
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

module.exports = { getAllCars, addCar, getCar };
