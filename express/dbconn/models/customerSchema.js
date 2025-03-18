//create a customer schema reflecting the properties
// _id,firstname,lastname,age,country
const mongoose = require("mongoose");

//import schema function
const Schema = mongoose.Schema;

const customers = new Schema({
  _id: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

//compile schema into model
const Customer = mongoose.model("customers", customers);

//export the model
module.exports = Customer;
