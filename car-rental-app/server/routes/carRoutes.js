const {
  getAllCars,
  addCar,
  getCar,
} = require("../controllers/carControllers.js");
const express = require("express");
const { adminAuth } = require("../middlewares/authMiddleware.js");
//import upload
const upload = require("../middlewares/uploadMiddleware.js");

const router = express.Router();

//route to get all cars
router.get("/", getAllCars);

//route to get single car
router.get("/:id", getCar);

router.post("/addCar", adminAuth, upload.single("image"), addCar);
module.exports = router;
