const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false, // ✅ Required for Aiven Cloud DB
  },
});

pool.connect()
  .then(() => console.log("✅ Connected to Aiven PostgreSQL successfully!"))
  .catch((err) => console.error("❌ Database connection error:", err));

module.exports = pool;
