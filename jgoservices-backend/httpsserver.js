const https = require("https");
const fs = require("fs");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
};

// 👉 SERVIR FRONTEND
const frontendPath = path.join(__dirname, "../frontend");
app.use(express.static(frontendPath));

// 👉 RUTA DE PAGO (LA QUE FALTABA)
app.post("/process-payment", async (req, res) => {
  console.log("🟢 Pago recibido:", req.body);

  // SIMULACIÓN (luego conectamos Square real)
  res.json({ success: true });
});

// 👉 INDEX
app.get("/", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// 👉 HTTPS SERVER
https.createServer(options, app).listen(3001, () => {
  console.log("🔐 HTTPS frontend + backend activo en https://localhost:3001");
});
