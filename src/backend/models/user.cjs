const Sequelize = require("sequelize");
const sequelize = require("../db.cjs");

const User = sequelize.define(
  "User",
  {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: { type: Sequelize.STRING, allowNull: false },
    lastName: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING, allowNull: false, unique: true },
    age: { type: Sequelize.INTEGER, allowNull: false },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  },
  {
    tableName: "users",
    timestamps: true,
  }
);

module.exports = User;
