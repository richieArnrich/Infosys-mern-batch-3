const { getAllCars, addCar } = require("../controllers/carControllers.js");
const express = require("express");
const { adminAuth } = require("../middlewares/authMiddleware.js");
//import upload
const upload = require("../middlewares/uploadMiddleware.js");

const router = express.Router();

//route to get all cars
router.get("/", getAllCars);

router.post("/addCar", adminAuth, upload.single("image"), addCar);
module.exports = router;
