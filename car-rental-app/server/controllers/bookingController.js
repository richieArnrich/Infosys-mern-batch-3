const Booking = require("../models/Booking");

//create a new booking
const addBooking = async (req, res) => {
  try {
    const { userId, carId, start_date, days, totalPrice } = req.body;
    const booking = new Booking({
      user: userId,
      car: carId,
      start_date,
      Days: days,
      totalPrice,
    });
    await booking.save();
    res.status(201).json({ message: "Booking created successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error creating booking" });
  }
};

//get all bookings
const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("user").populate("car");
    console.log(bookings);
    res.status(200).json(bookings);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error retrieving bookings", data: err });
  }
};

module.exports = {
  addBooking,
  getAllBookings,
};

// userName: user.name,
// contact: user.phone,
// email: user.email,
// address: user.address,
// carId: id,
// Days: daysReqd,
// totalPrice: bookPrice,
