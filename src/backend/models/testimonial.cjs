const Sequelize = require("sequelize");
const sequelize = require("../db.cjs");

const Testimonial = sequelize.define(
  "Testimonial",
  {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },

    name: {
      type: Sequelize.STRING,
      allowNull: false,
      comment: "Name of the person giving the testimonial",
    },

    companyId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      comment: "Reference to the company ID",
    },

    position: {
      type: Sequelize.STRING,
      allowNull: true,
      comment: "Job position of the person",
    },

    link: {
      type: Sequelize.STRING,
      allowNull: true,
      comment: "Link to LinkedIn or personal profile",
    },

    quote: {
      type: Sequelize.STRING,
      allowNull: false,
      comment: "Short quote or summary of the testimonial",
    },

    fullText: {
      type: Sequelize.TEXT,
      allowNull: false,
      comment: "Full testimonial text",
    },

    media: {
      type: Sequelize.STRING,
      allowNull: true,
      comment: "Optional media reference (e.g. image or icon name)",
    },

    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  },
  {
    tableName: "testimonials",
    timestamps: true,
  }
);

module.exports = Testimonial;
