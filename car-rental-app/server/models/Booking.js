const mongoose = require("mongoose");
const Car = require("./Car");
const { Schema } = mongoose;

const bookingSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  car: {
    type: Schema.Types.ObjectId,
    ref: "Cars",
  },
  start_date: {
    type: String,
    required: true,
  },
  Days: {
    type: String,
  },
  totalPrice: {
    type: Number,
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
