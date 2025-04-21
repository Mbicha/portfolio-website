const express = require("express");
const connectDB = require("./config/db");
const project = require('./routes/project');
const auth = require('./routes/auth');
const cors = require("cors");

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", auth);
app.use("/api/projects", project);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
