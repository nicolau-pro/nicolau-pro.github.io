const express = require("express");
const router = express.Router();
const Testimonial = require("../models/testimonial.cjs");

// GET all testimonials
router.get("/", async (req, res) => {
  try {
    const testimonials = await Testimonial.findAll();
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET testimonial by ID
router.get("/:id", async (req, res) => {
  try {
    const testimonial = await Testimonial.findByPk(req.params.id);
    if (testimonial) res.json(testimonial);
    else res.status(404).json({ error: "Testimonial not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create new testimonial
router.post("/", async (req, res) => {
  try {
    const { name, companyId, position, link, quote, fullText, media } =
      req.body;

    const newTestimonial = await Testimonial.create({
      name,
      companyId,
      position,
      link,
      quote,
      fullText,
      media,
    });

    res.status(201).json(newTestimonial);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT update testimonial by ID
router.put("/:id", async (req, res) => {
  try {
    const testimonial = await Testimonial.findByPk(req.params.id);
    if (!testimonial)
      return res.status(404).json({ error: "Testimonial not found" });

    const { name, companyId, position, link, quote, fullText, media } =
      req.body;

    await testimonial.update({
      name,
      companyId,
      position,
      link,
      quote,
      fullText,
      media,
    });

    res.json(testimonial);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE testimonial by ID
router.delete("/:id", async (req, res) => {
  try {
    const testimonial = await Testimonial.findByPk(req.params.id);
    if (!testimonial)
      return res.status(404).json({ error: "Testimonial not found" });

    await testimonial.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
