//simple express server

// import statements start
const express = require("express");
//import mongoose
const mongoose = require("mongoose");
//import customer schema
const customerSchema = require("./models/customerSchema.js");
// import path
const path = require("path");

// import statements end

const app = express();

//connect to database
const MONGODB_URI = "mongodb://localhost:27017/infosys-mern-b3";
const connection = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to Mongodb successfully");
  } catch (err) {
    console.log("error in connection");
    console.log(err);
  }
};

//connect to db end

//configure ejs
app.set("view engine", "ejs");
//configure path for ejs
app.set("views", path.join(__dirname, "/views"));

//routes
app.get("/", (req, res) => {
  res.send("Hello World! API working");
});

//route to render ejs file
app.get("/view", (req, res) => {
  res.render("index", {
    title: "Customer Details",
    message: "Welcome Admin",
  });
});

//write a route to get all customers
app.get("/customers", async (req, res) => {
  //find all customers from database
  try {
    const customerData = await customerSchema.find();
    res.json(customerData);
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
});

//routes end

app.listen(4000, () => {
  console.log("Server is running on port 4000");
  connection();
});

//template engine
