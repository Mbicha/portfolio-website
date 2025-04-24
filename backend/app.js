import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import project from "./routes/project.js";
import auth from "./routes/auth.js";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes (MUST come before static files)
app.use("/api/auth", auth);
app.use("/api/projects", project);

// Serve static files from React app
const staticPath = path.join(__dirname, "frontend", "build");
app.use(express.static(staticPath));

// Handle React routing - return all requests to React app
app.get("*", (req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
    console.log(`Serving static files from: ${staticPath}`);
});
