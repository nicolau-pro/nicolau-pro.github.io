const express = require("express");
const router = express.Router();
const Company = require("../models/company.cjs");

// GET all companies
router.get("/", async (req, res) => {
  try {
    const companies = await Company.findAll();
    res.json(companies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET company by ID
router.get("/:id", async (req, res) => {
  try {
    const company = await Company.findByPk(req.params.id);
    if (company) res.json(company);
    else res.status(404).json({ error: "Company not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create new company
router.post("/", async (req, res) => {
  try {
    const { name, theme, description, details, meta } = req.body;
    const newCompany = await Company.create({
      name,
      theme,
      description,
      details,
      meta,
    });
    res.status(201).json(newCompany);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT update company by ID
router.put("/:id", async (req, res) => {
  try {
    const company = await Company.findByPk(req.params.id);
    if (!company) return res.status(404).json({ error: "Company not found" });

    const { name, theme, description, details, meta } = req.body;
    await company.update({ name, theme, description, details, meta });
    res.json(company);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE company by ID
router.delete("/:id", async (req, res) => {
  try {
    const company = await Company.findByPk(req.params.id);
    if (!company) return res.status(404).json({ error: "Company not found" });

    await company.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
