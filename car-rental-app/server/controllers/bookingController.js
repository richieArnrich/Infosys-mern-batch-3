const booking = require("../models/Booking");

//create a new booking
const bookCar = async (req, res) => {
  try {
    const {
      userName,
      contact,
      email,
      address,
      carId,
      Days,
      totalPrice,
      bookingDate,
      car,
    } = req.body;
    const bookObj = {
      userName: userName,
      userContact: contact,
      userAddress: address,
      bookingStatus: true,
      userEmail: email,
      carId: carId,
      Days: Days,
      totalPrice: totalPrice,
      booking_date: bookingDate,
    };
    const BookDoc = await Booking.create(bookObj);
    res
      .status(201)
      .json({ message: "Booking created successfully", data: BookDoc });
  } catch (err) {
    res.status(500).json({ message: "Error creating booking", data: err });
  }
};

module.exports = {
  bookCar,
};

// userName: user.name,
// contact: user.phone,
// email: user.email,
// address: user.address,
// carId: id,
// Days: daysReqd,
// totalPrice: bookPrice,
