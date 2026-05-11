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

function getTableNameRows(rows) {
  return rows.map((row) => row.tableName);
}

function getCreateStatement(row) {
  const key = Object.keys(row).find((name) => /create table/i.test(name));
  if (!key) {
    throw new Error("SHOW CREATE TABLE did not return a create statement");
  }

  return row[key].replace(/"/g, "`");
}

function normalizeValue(value) {
  if (value === null || value === undefined) return value;
  if (Buffer.isBuffer(value)) return value.toString("utf8");
  if (Array.isArray(value)) return value;
  if (value instanceof Date) return value.toISOString();
  if (typeof value === "object") return value;
  return value;
}

async function main() {
  await fs.mkdir(DATABASE_DIR, { recursive: true });

  const connection = await mysql.createConnection({
    ...buildMysqlConfig(),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dateStrings: true,
  });

  const [tableRows] = await connection.query(
    `SELECT table_name AS tableName
     FROM information_schema.tables
     WHERE table_schema = ?
     ORDER BY table_name`,
    [process.env.DB_NAME]
  );

  const tables = getTableNameRows(tableRows);
  const orderedTables = TABLE_ORDER.filter((table) => tables.includes(table)).concat(
    tables.filter((table) => !TABLE_ORDER.includes(table))
  );

  const schemaStatements = [];
  const seedData = {};

  for (const table of orderedTables) {
    const [createRows] = await connection.query(`SHOW CREATE TABLE \`${table}\``);
    const createStatement = getCreateStatement(createRows[0]);
    schemaStatements.push(`${createStatement};`);

    const [rows] = await connection.query(`SELECT * FROM \`${table}\` ORDER BY id ASC`);
    seedData[table] = rows.map((row) => {
      const normalized = {};
      for (const [key, value] of Object.entries(row)) {
        normalized[key] = normalizeValue(value);
      }
      return normalized;
    });
  }

  await fs.writeFile(SCHEMA_PATH, schemaStatements.join("\n\n") + "\n");
  await fs.writeFile(SEED_PATH, JSON.stringify(seedData, null, 2) + "\n");

  await connection.end();

  console.log(`Wrote ${SCHEMA_PATH}`);
  console.log(`Wrote ${SEED_PATH}`);
}

main().catch((error) => {
  console.error("Failed to dump backend database:", error);
  process.exitCode = 1;
});
