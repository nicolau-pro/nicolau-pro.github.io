const express = require("express");
const router = express.Router();
const Project = require("../models/project.cjs");

// GET all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET project by ID
router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (project) res.json(project);
    else res.status(404).json({ error: "Project not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create new project
router.post("/", async (req, res) => {
  try {
    const {
      client,
      name,
      year,
      companyId,
      paragraphs,
      metaImage,
      metaDescription,
      videoLink,
      videoTheme,
      image,
      externalLink,
    } = req.body;

    const newProject = await Project.create({
      client,
      name,
      year,
      companyId,
      paragraphs,
      metaImage,
      metaDescription,
      videoLink,
      videoTheme,
      image,
      externalLink,
    });

    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT update project by ID
router.put("/:id", async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) return res.status(404).json({ error: "Project not found" });

    await project.update(req.body);
    res.json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE project by ID
router.delete("/:id", async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) return res.status(404).json({ error: "Project not found" });

    await project.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
