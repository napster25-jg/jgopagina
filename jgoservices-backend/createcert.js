const selfsigned = require("selfsigned");
const fs = require("fs");

const attrs = [{ name: "commonName", value: "localhost" }];

const pems = selfsigned.generate(attrs, {
  keySize: 4096, // 🔐 clave fuerte requerida por Node 24
  days: 365,
  algorithm: "sha256",
});

fs.writeFileSync("key.pem", pems.private);
fs.writeFileSync("cert.pem", pems.cert);

console.log("✅ Certificados HTTPS creados correctamente (4096 bits)");
