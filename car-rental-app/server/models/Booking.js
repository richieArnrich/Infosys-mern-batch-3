const mongoose = require("mongoose");
const Car = require("./Car");
const { Schema } = mongoose;

const bookingSchema = new Schema({
  user_id: {
    type: String,
  },
  booking_date: {
    type: String,
  },
  userName: {
    type: String,
  },
  userEmail: {
    type: String,
  },
  userContact: {
    type: String,
  },
  userAddress: {
    type: String,
  },
  bookingStatus: {
    type: boolean,
  },
  carId: {
    type: String,
  },
  Days: {
    type: String,
  },
  totalPrice: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
});
// userName: user.name,
// contact: user.phone,
// email: user.email,
// address: user.address,
// carId: id,
// Days: daysReqd,
// totalPrice: bookPrice,

module.exports = mongoose.model("Bookings", bookingSchema);
