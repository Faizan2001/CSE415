const http = require("http");

const port = Number(process.env.PORT || 3000);

const payload = {
  app: "node-postgres-secure-demo",
  status: "ok",
  db: {
    host: process.env.DB_HOST || "db",
    port: Number(process.env.DB_PORT || 5432),
    database: process.env.DB_NAME || "appdb",
    user: process.env.DB_USER || "appuser"
  }
};

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "healthy" }));
    return;
  }

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(payload, null, 2));
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Server listening on port ${port}`);
});
