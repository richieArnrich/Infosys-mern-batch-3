const { bookCar } = require("../controllers/bookingController");

const express = require("express");
const router = express.Router();

router.post("/bookcar", bookCar);

module.exports = router;
