const express = require("express");
const router = express.Router();

const User = require("../models/userModel");

router.post("/login", async (req, res) => {
  console.log("Received request for POST method");
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.json("user not found");
    }

    if (user.password === password) {
      return res.json({ success: true, user });
    } else {
      return res.json({ success: false });
    }
  } catch (err) {
    console.error("Error while loggin in", err);
  }
});

module.exports = router;
