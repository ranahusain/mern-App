const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const User = require("../models/userModel");

router.post("/login", async (req, res) => {
  console.log("Received request for POST method");
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.json("user not found");
    }

    //check if the password matches
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      return res.json({ success: true, user });
    } else {
      return res.json({ success: false });
    }
  } catch (err) {
    console.error("Error while loggin in", err);
  }
});

module.exports = router;
