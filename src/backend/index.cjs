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
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Use `false` only for self-signed certs
      },
    },
    logging: false,
  }
);

// Swagger route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
const companyRoutes = require("./routes/companies.cjs");
app.use("/companies", companyRoutes);

const jobRoutes = require("./routes/jobs.cjs");
app.use("/jobs", jobRoutes);

const techRoutes = require("./routes/tech.cjs");
app.use("/tech", techRoutes);

const testimonialRoutes = require("./routes/testimonials.cjs");
app.use("/testimonials", testimonialRoutes);

const arardRoutes = require("./routes/awards.cjs");
app.use("/awards", arardRoutes);

// Start server
const PORT = process.env.PORT || 3000;
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected.");

    // Drop testimonials table
    // await sequelize.query("DROP TABLE IF EXISTS testimonials");
    // console.log("Table 'testimonials' dropped.");

    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
      console.log(`Swagger docs at http://localhost:${PORT}/api-docs`);
    });
  })
  .catch((err) => {
    console.error("DB connection error:", err);
  });
