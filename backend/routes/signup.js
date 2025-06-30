const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const User = require("../models/userModel");

router.post("/signup", async (req, res) => {
  console.log("Received request for POST method");
  console.log("Request Body:", req.body);
  try {
    console.log("Signup request received:", req.body);

    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists with this email",
      });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, email, password: hashedPassword });
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
