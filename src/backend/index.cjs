console.log("Starting backend server...");
console.log("✅ DB_NAME", process.env.DB_NAME);
console.log("✅ DB_USER", process.env.DB_USER);
console.log("✅ DB_PASSWORD", process.env.DB_PASSWORD);
console.log("✅ DB_HOST", process.env.DB_HOST);
console.log("✅ DB_PORT", process.env.DB_PORT);

require("dotenv").config();

const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger/swagger.json");
const { Sequelize } = require("sequelize");

const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors()); // Allow requests from any origin
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//   })
// );

// Sequelize setup
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    logging: false,
  }
);

// Swagger route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
const userRoutes = require("./routes/users.cjs");
app.use("/users", userRoutes);

const companyRoutes = require("./routes/companies.cjs");
app.use("/companies", companyRoutes);

// Start server
const PORT = process.env.PORT || 3000;
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected.");
    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
      console.log(`Swagger docs at http://localhost:${PORT}/api-docs`);
    });
  })
  .catch((err) => {
    console.error("DB connection error:", err);
  });
