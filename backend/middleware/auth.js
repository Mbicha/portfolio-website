const jwt = require("jsonwebtoken");
require("dotenv").config(); // Load environment variables


module.exports.authenticate = (req, res, next) => {
  // Check both header and cookie for token
  const token = req.header('Authorization')?.replace('Bearer ', '') || req.cookies.token;
  
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};