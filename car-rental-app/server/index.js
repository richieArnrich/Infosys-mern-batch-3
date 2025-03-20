// npm i cors express nodemon mongoose 
const express = require("express");
const mongoose = require("mongoose");
const app = express();

//db connection
const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/carRentalApp");
    console.log("mongodb connected");
  } catch (err) {
    console.log("error in connection");
    console.log(err);
  }
};

app.get("/api", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.listen(4000, () => {
  connect();
  console.log("server running on port 4000");
});
