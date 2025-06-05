const express = require("express");
const router = express.Router();
const Tech = require("../models/tech.cjs");

// GET all tech items
router.get("/", async (req, res) => {
  try {
    const techItems = await Tech.findAll();
    res.json(techItems);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET tech by ID
router.get("/:id", async (req, res) => {
  try {
    const tech = await Tech.findByPk(req.params.id);
    if (tech) res.json(tech);
    else res.status(404).json({ error: "Tech not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create new tech item
router.post("/", async (req, res) => {
  try {
    const { name, icon } = req.body;
    const newTech = await Tech.create({ name, icon });
    res.status(201).json(newTech);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT update tech by ID
router.put("/:id", async (req, res) => {
  try {
    const tech = await Tech.findByPk(req.params.id);
    if (!tech) return res.status(404).json({ error: "Tech not found" });

    const { name, icon } = req.body;
    await tech.update({ name, icon });
    res.json(tech);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE tech by ID
router.delete("/:id", async (req, res) => {
  try {
    const tech = await Tech.findByPk(req.params.id);
    if (!tech) return res.status(404).json({ error: "Tech not found" });

    await tech.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
