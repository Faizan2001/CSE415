const express = require("express");
const fs = require("fs").promises;
const path = require("path");
const { Pool } = require("pg");

const app = express();
const port = Number(process.env.PORT || 3000);

// Database connection pool with minimal configuration
const pool = new Pool({
  host: process.env.DB_HOST || "db",
  port: Number(process.env.DB_PORT || 5432),
  database: process.env.DB_NAME || "appdb",
  user: process.env.DB_USER || "appuser",
  password: process.env.DB_PASSWORD || "appsecret",
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

const uploadDir = path.join(__dirname, "..", "uploads");

app.use(express.json());

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "healthy" });
});

// Info endpoint
app.get("/", (req, res) => {
  res.status(200).json({
    agent: "GitHub Copilot",
    model: "Claude Haiku 4.5",
    app: "node-postgres-copilot-secure",
    status: "running",
    database: {
      host: process.env.DB_HOST || "db",
      port: Number(process.env.DB_PORT || 5432),
      database: process.env.DB_NAME || "appdb",
      user: process.env.DB_USER || "appuser",
    },
    features: [
      "Express.js server",
      "PostgreSQL database connectivity",
      "File upload capability",
      "Non-root execution",
      "Proper permission scoping",
    ],
  });
});

// Simple file listing endpoint
app.get("/uploads", async (req, res) => {
  try {
    const files = await fs.readdir(uploadDir);
    res.status(200).json({
      uploads: files,
      count: files.length,
      directory: "/app/uploads",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// File upload endpoint - demonstrates write permissions
app.post("/upload", express.text(), async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).json({ error: "No data provided" });
    }

    const filename = `upload-${Date.now()}.txt`;
    const filepath = path.join(uploadDir, filename);

    await fs.writeFile(filepath, req.body);

    res.status(201).json({
      message: "File uploaded successfully",
      filename: filename,
      path: `/app/uploads/${filename}`,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Database ping endpoint
app.get("/db/ping", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.status(200).json({
      status: "connected",
      timestamp: result.rows[0].now,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal server error" });
});

// Start server
const server = app.listen(port, "0.0.0.0", () => {
  console.log(`[GitHub Copilot] Server listening on port ${port}`);
  console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
  console.log(
    `Database: ${process.env.DB_HOST || "db"}:${process.env.DB_PORT || 5432}`,
  );
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("SIGTERM received, shutting down gracefully");
  server.close(() => {
    pool.end();
    process.exit(0);
  });
});

process.on("SIGINT", () => {
  console.log("SIGINT received, shutting down gracefully");
  server.close(() => {
    pool.end();
    process.exit(0);
  });
});
