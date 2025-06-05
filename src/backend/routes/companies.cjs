const express = require("express");
const router = express.Router();
const Job = require("../models/job.cjs");
const Company = require("../models/company.cjs");

// GET all jobs
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.findAll();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET job by ID
router.get("/:id", async (req, res) => {
  try {
    const job = await Job.findByPk(req.params.id);
    if (job) res.json(job);
    else res.status(404).json({ error: "Job not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create new job
router.post("/", async (req, res) => {
  try {
    const {
      companyId,
      title,
      dateFrom,
      dateTo,
      description,
      bulletpoints,
      tech,
    } = req.body;

    // Optionally check if company exists
    const company = await Company.findByPk(companyId);
    if (!company) {
      return res.status(400).json({ error: "Company not found" });
    }

    const newJob = await Job.create({
      companyId,
      title,
      dateFrom,
      dateTo,
      description,
      bulletpoints,
      tech,
    });

    res.status(201).json(newJob);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT update job by ID
router.put("/:id", async (req, res) => {
  try {
    const job = await Job.findByPk(req.params.id);
    if (!job) return res.status(404).json({ error: "Job not found" });

    const {
      companyId,
      title,
      dateFrom,
      dateTo,
      description,
      bulletpoints,
      tech,
    } = req.body;

    await job.update({
      companyId,
      title,
      dateFrom,
      dateTo,
      description,
      bulletpoints,
      tech,
    });

    res.json(job);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE job by ID
router.delete("/:id", async (req, res) => {
  try {
    const job = await Job.findByPk(req.params.id);
    if (!job) return res.status(404).json({ error: "Job not found" });

    await job.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
