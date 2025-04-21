const mongoose = require("mongoose");
const DEFAULT_USER = require("../controllers/auth");
require("dotenv").config();

const connectDB = async () => {
  LIVE_DB = process.env.LIVE_URL;
    
  try {
    await mongoose.connect(LIVE_DB);
    console.log("✅ MongoDB Connected");
    await DEFAULT_USER.createDefaultUser();
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
