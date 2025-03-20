const {
  getAllUsers,
  registerUser,
  loginUser,
} = require("../controllers/userControllers.js");
const express = require("express");
const router = express.Router();

router.get("/", getAllUsers);
router.post("/registeruser", registerUser);
router.post("/loginuser", loginUser);

module.exports = router;
