const User = require("../models/User.js");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "myscretkey@123";

//get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "error fetching users" });
  }
};

// register users
const registerUser = async (req, res) => {
  console.log(req.body);
  try {
    const { name, email, password, phone, address, role } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      //check for existing user
      res.status(400).json({ message: "User already present" });
      return;
    }
    const newUser = new User({ name, email, password, phone, address, role });
    await newUser.save(); //save into db
    res.status(200).json({ message: "User registered successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "error registering user" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
      res.status(400).json({ message: "User not registered" });
      return;
    }
    if (password === user.password) {
      //generate token
      const token = jwt.sign({ email }, JWT_SECRET, {
        expiresIn: "1d",
      });
      res.status(200).json({ message: "User logged in", userDoc: user, token });
    } else {
      res.status(400).json({ message: "incorrect password" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error logging in" });
  }
};

module.exports = { getAllUsers, registerUser, loginUser };
