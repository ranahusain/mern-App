const express = require("express");
const router = express.Router();

const User = require("../models/userModel");

//read all user
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

//create user
router.post("/users", async (req, res) => {
  console.log("Received request for POST method");
  console.log("Request Body:", req.body);
  try {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(200).json({
      success: true,
      user: newUser,
    });
  } catch (err) {
    console.error("Error while saving user:", err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;
