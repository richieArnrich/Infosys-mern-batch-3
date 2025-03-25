//authorisation to check if admin is logged in
const JWT_SECRET = "myscretkey@123";
const jwt = require("jsonwebtoken");
const User = require("../models/User.js");

const adminAuth = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).send("Access Denied");
  try {
    //decode the token
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log(decoded);
    // get user by email
    const user = await User.findOne({ email: decoded.email });
    if (user.role !== "admin") {
      res.status(400).json({ message: "Only admins can add" });
    } else {
      next();
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { adminAuth };
