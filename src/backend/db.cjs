require("dotenv").config();

const { createSequelize } = require("../backend-db/connection.cjs");

const sequelize = createSequelize();

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database synchronized");
  })
  .catch((error) => {
    console.error("Failed to synchronize database:", error);
  });

module.exports = sequelize;
