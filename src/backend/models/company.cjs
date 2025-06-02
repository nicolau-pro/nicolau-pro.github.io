const Sequelize = require("sequelize");
const sequelize = require("../db.cjs");

const Company = sequelize.define(
  "Company",
  {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING, allowNull: false },
    theme: { type: Sequelize.STRING },
    description: { type: Sequelize.TEXT },
    details: { type: Sequelize.TEXT },
    meta: { type: Sequelize.JSON },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  },
  {
    tableName: "companies",
    timestamps: true,
  }
);

module.exports = Company;
