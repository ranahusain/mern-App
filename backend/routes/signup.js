const express = require("express");
const router = express.Router();

const User = require("../models/userModel");

router.post("/signup", async (req, res) => {
  console.log("Received request for POST method");
  console.log("Request Body:", req.body);
  try {
    console.log("Signup request received:", req.body);

    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });
    await newUser.save();

    console.log("User saved:", newUser);
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
