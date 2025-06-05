const Sequelize = require("sequelize");
const sequelize = require("../db.cjs");

const Award = sequelize.define(
  "Award",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    companyId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      comment: "ID of the company that received the award",
    },

    projectId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      comment: "ID of the project that won the award",
    },

    prize: {
      type: Sequelize.STRING,
      allowNull: false,
      comment: "Name of the prize or award",
    },

    icon: {
      type: Sequelize.STRING,
      allowNull: true,
      comment: "Icon identifier (e.g. 'star')",
    },

    event: {
      type: Sequelize.STRING,
      allowNull: false,
      comment: "Event where the award was given",
    },

    year: {
      type: Sequelize.INTEGER,
      allowNull: false,
      comment: "Year the award was received",
    },

    description: {
      type: Sequelize.TEXT,
      allowNull: true,
      comment: "Short description of the award",
    },

    logo: {
      type: Sequelize.STRING,
      allowNull: true,
      comment: "Logo filename or path for the award",
    },

    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  },
  {
    tableName: "awards",
    timestamps: true,
  }
);

module.exports = Award;
