const Sequelize = require("sequelize");
const sequelize = require("../db.cjs");

const Project = sequelize.define(
  "Project",
  {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },

    client: {
      type: Sequelize.STRING,
      allowNull: false,
      comment: "Name of the client",
    },

    name: {
      type: Sequelize.STRING,
      allowNull: false,
      comment: "Name of the project",
    },

    year: {
      type: Sequelize.INTEGER,
      allowNull: false,
      comment: "Year the project was completed or started",
    },

    companyId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      comment: "Associated company ID",
    },

    paragraphs: {
      type: Sequelize.JSON,
      allowNull: false,
      comment: "Array of paragraph descriptions for the project",
    },

    metaImage: {
      type: Sequelize.STRING,
      allowNull: false,
      comment: "Path to meta image for social media",
    },

    metaDescription: {
      type: Sequelize.STRING,
      allowNull: false,
      comment: "Meta description for SEO or sharing",
    },

    videoLink: {
      type: Sequelize.STRING,
      allowNull: true,
      comment: "Optional video URL",
    },

    videoTheme: {
      type: Sequelize.STRING,
      allowNull: true,
      comment: "Optional theme identifier for the video",
    },

    image: {
      type: Sequelize.STRING,
      allowNull: true,
      comment: "Optional main image for the project",
    },

    externalLink: {
      type: Sequelize.STRING,
      allowNull: true,
      comment: "Optional external project link",
    },

    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  },
  {
    tableName: "projects",
    timestamps: true,
  }
);

module.exports = Project;
