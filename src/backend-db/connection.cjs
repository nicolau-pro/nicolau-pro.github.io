const { Sequelize } = require("sequelize");

function isTruthy(value) {
  return !["false", "0", "no", "off"].includes(String(value).toLowerCase());
}

function buildMysqlConfig() {
  return {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || 3306),
  };
}

function buildSequelizeOptions() {
  const options = {
    ...buildMysqlConfig(),
    dialect: "mysql",
    logging: false,
  };

  if (isTruthy(process.env.DB_SSL ?? "true")) {
    options.dialectOptions = {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    };
  }

  return options;
}

function createSequelize() {
  return new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    buildSequelizeOptions()
  );
}

module.exports = {
  buildMysqlConfig,
  buildSequelizeOptions,
  createSequelize,
};
