const Sequelize = require("sequelize");
const sequelize = require("../db.cjs");

const Tech = sequelize.define(
  "Tech",
  {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },

    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      comment: "Name of the technology/tool",
    },

    icon: {
      type: Sequelize.STRING,
      allowNull: false,
      comment: "Icon identifier (e.g. material icon name)",
    },

    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  },
  {
    tableName: "tech",
    timestamps: true,
  }
);

module.exports = Tech;
