// const app = require("./app");
// require("dotenv").config();

// const PORT = process.env.PORT;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

const express = require("express");
const app = express();

// Your routes and middleware
app.get("/", (req, res) => {
  res.send("Hello Vercel!");
});

// Export the app for Vercel (no PORT or app.listen needed!)
module.exports = app;
