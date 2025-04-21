const User = require('../models/user');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Constants
const MAX_USERS = 2; // Set your user limit here

exports.createDefaultUser = async () => {
  try {
    const defaultUser = await User.findOne({ email: "admin@admin.com" });

    if (!defaultUser) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash("1234", salt);

      const user = new User({
        email: "admin@admin.com",
        password: hashedPassword,
      });

      await user.save();
      return { status: 201, message: "Default user created successfully." };
    } else {
      return { status: 200, message: "Default user already exists." };
    }
  } catch (error) {
    return { 
      status: 500, 
      message: "Internal server error while creating default user.",
      error: error.message 
    };
  }
};

// User Registration
exports.register = async (req, res) => {
  const { full_name, email, password, confirm_password } = req.body;

  // Validate input
  if (!full_name || !email || !password || !confirm_password) {
    return res.status(400).json({ 
      status: "fail", 
      message: "All fields are required" 
    });
  }

  try {
    // Check user count first (before other operations)
    const userCount = await User.countDocuments();
    if (userCount >= MAX_USERS) {
      return res.status(403).json({ 
        status: "fail", 
        message: "Maximum user limit reached" 
      });
    }

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ 
        status: "fail", 
        message: "User already exists" 
      });
    }

    // Password validation
    if (password !== confirm_password) {
      return res.status(400).json({ 
        status: "fail", 
        message: "Passwords do not match" 
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = new User({ 
      full_name, 
      email, 
      password: hashedPassword 
    });

    await user.save();

    // Generate JWT
    const token = jwt.sign(
      { user: { id: user._id } }, 
      process.env.JWT_SECRET, 
      { expiresIn: "1h" }
    );

    res.status(201).json({
      status: "success",
      data: { 
        user: { 
          id: user._id, 
          full_name, 
          email: user.email 
        }, 
        token 
      }
    });

  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ 
      status: "error", 
      message: "Internal server error" 
    });
  }
};

// User Login (unchanged but included for completeness)
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { user: { id: user.id, email } },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token, id: user.id });

  } catch (err) {
    console.error("Login error:", err);
    res.status(500).send("Internal server error");
  }
};