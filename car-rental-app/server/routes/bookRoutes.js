const {
  addBooking,
  getAllBookings,
} = require("../controllers/bookingController");

const express = require("express");
const router = express.Router();

router.post("/bookcar", addBooking);

//getallbookings
router.get("/getallbookings", getAllBookings);

module.exports = router;
