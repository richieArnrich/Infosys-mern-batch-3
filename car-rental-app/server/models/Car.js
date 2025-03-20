const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    enum: ["Sedan", "SUV", "MUV", "Hatchback"],
  },
  fuelTpe: {
    type: String,
    enum: ["Petrol", "Diesel", "Electric"],
  },
  rentPerDay: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
    default: "true",
  },
});

module.exports = mongoose.model("Cars", carSchema);
