require("dotenv").config();

const fs = require("fs/promises");
const path = require("path");
const mysql = require("mysql2/promise");
const { buildMysqlConfig } = require("./connection.cjs");

const ROOT = __dirname;
const DATABASE_DIR = path.join(ROOT, "database");
const SCHEMA_PATH = path.join(DATABASE_DIR, "schema.sql");
const SEED_PATH = path.join(DATABASE_DIR, "seed-data.json");
const TABLE_ORDER = [
  "companies",
  "projects",
  "tech",
  "jobs",
  "testimonials",
  "awards",
  "users",
];

function prepareValue(value) {
  if (value === null || value === undefined) return value;
  if (Array.isArray(value)) return JSON.stringify(value);
  if (typeof value === "object") return JSON.stringify(value);
  return value;
}

async function dropExistingTables(connection) {
  const [rows] = await connection.query(
    `SELECT table_name AS tableName
     FROM information_schema.tables
     WHERE table_schema = ?`,
    [process.env.DB_NAME]
  );

  for (const row of rows) {
    await connection.query(`DROP TABLE IF EXISTS \`${row.tableName}\``);
  }
}

async function insertSeedData(connection, seedData) {
  for (const table of TABLE_ORDER) {
    const rows = seedData[table] || [];
    if (!rows.length) continue;

    for (const row of rows) {
      const columns = Object.keys(row);
      const values = columns.map((column) => prepareValue(row[column]));
      const placeholders = columns.map(() => "?").join(", ");
      const escapedColumns = columns.map((column) => `\`${column}\``).join(", ");

      await connection.query(
        `INSERT INTO \`${table}\` (${escapedColumns}) VALUES (${placeholders})`,
        values
      );
    }
  }
}

async function main() {
  const connection = await mysql.createConnection({
    ...buildMysqlConfig(),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    multipleStatements: true,
  });

  const schema = await fs.readFile(SCHEMA_PATH, "utf8");
  const seedData = JSON.parse(await fs.readFile(SEED_PATH, "utf8"));

  await connection.query("SET FOREIGN_KEY_CHECKS = 0");
  await dropExistingTables(connection);
  await connection.query(schema);
  await insertSeedData(connection, seedData);
  await connection.query("SET FOREIGN_KEY_CHECKS = 1");

  await connection.end();

  console.log("Restored backend database snapshot");
}

main().catch((error) => {
  console.error("Failed to restore backend database:", error);
  process.exitCode = 1;
});
