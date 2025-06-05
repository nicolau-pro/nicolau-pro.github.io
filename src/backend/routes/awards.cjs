const express = require("express");
const router = express.Router();
const Award = require("../models/award.cjs");

// GET all awards
router.get("/", async (req, res) => {
  try {
    const awards = await Award.findAll();
    res.json(awards);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET award by ID
router.get("/:id", async (req, res) => {
  try {
    const award = await Award.findByPk(req.params.id);
    if (award) res.json(award);
    else res.status(404).json({ error: "Award not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create new award
router.post("/", async (req, res) => {
  try {
    const {
      companyId,
      projectId,
      prize,
      icon,
      event,
      year,
      description,
      logo,
    } = req.body;

    const newAward = await Award.create({
      companyId,
      projectId,
      prize,
      icon,
      event,
      year,
      description,
      logo,
    });

    res.status(201).json(newAward);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT update award by ID
router.put("/:id", async (req, res) => {
  try {
    const award = await Award.findByPk(req.params.id);
    if (!award) return res.status(404).json({ error: "Award not found" });

    const updatedFields = req.body;
    await award.update(updatedFields);

    res.json(award);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE award by ID
router.delete("/:id", async (req, res) => {
  try {
    const award = await Award.findByPk(req.params.id);
    if (!award) return res.status(404).json({ error: "Award not found" });

    await award.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
