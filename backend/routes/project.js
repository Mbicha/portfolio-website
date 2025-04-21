const express = require("express");
const router = express.Router();
const Project = require('../controllers/project');

router.get("/", Project.getProjects);
router.get("/:id", Project.getProjectById);
router.post("/", Project.newProject);
router.patch("/:id", Project.updateProject);
router.delete("/:id", Project.deleteProject);

module.exports = router;
