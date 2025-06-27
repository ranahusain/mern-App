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
  try {
    const { name, email } = req.body;
    const newUser = new User({ name, email });
    await newUser.save();
    res.status(200).json({
      success: true,
      user: newUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;
