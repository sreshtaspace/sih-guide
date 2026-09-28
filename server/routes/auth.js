const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
//const JWT_SECRET = "sih-guide-secret";
const JWT_SECRET = process.env.JWT_SECRET;

// REGISTER USER

router.post("/register", async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      role,
      college,
      bio,
      skills,
    } = req.body;

    // Check if email already exists

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "Email already registered",
      });
    }

    // Create new user

    const user = new User({
      name,
      email,
      password : await bcrypt.hash(password, 10),
      role: role || "Student",
      college: college || "",
      bio: bio || "",
      skills: skills || [],
    });

    const savedUser = await user.save();

    res.status(201).json({
      message: "Registration successful",
      user: {
        id: savedUser._id,
        name: savedUser.name,
        email: savedUser.email,
        role: savedUser.role,
      },
    });

  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});
// LOGIN USER

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    // Check password
   const passwordMatch = await bcrypt.compare(password, user.password);

if (!passwordMatch) {
  return res.status(400).json({
    message: "Invalid email or password",
  });
}
const token = jwt.sign(
  {
    id: user._id,
    role: user.role,
  },
  JWT_SECRET,
  { expiresIn: "1h" }
);
    // Login successful
    res.json({
  message: "Login successful",
  token: token,
  user: {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    college: user.college,
  },
});

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;