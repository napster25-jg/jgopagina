require("dotenv").config();

const fs = require("fs");
const https = require("https");
const express = require("express");
const cors = require("cors");
const crypto = require("crypto");
const { SquareClient } = require("square");

const app = express();
app.use(cors());
app.use(express.json());

const path = require("path");

// 📂 Servir frontend (está un nivel arriba)
const frontendPath = path.join(__dirname, "..", "frontend");

app.use(express.static(frontendPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});


// 🔐 Cliente Square (SANDBOX)
const client = new SquareClient({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: "sandbox"
});

const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

// 🧹 Limpieza automática de citas no pagadas
const CLEANUP_INTERVAL_MINUTES = 5;

setInterval(async () => {
  try {
    const result = await pool.query(`
      UPDATE appointments
      SET status = 'expired'
      WHERE status = 'pending_payment'
      AND created_at < NOW() - INTERVAL '15 minutes'
    `);

    if (result.rowCount > 0) {
      console.log(`🧹 ${result.rowCount} citas expiradas liberadas`);
    }
  } catch (err) {
    console.error("❌ Error limpiando citas:", err);
  }
}, CLEANUP_INTERVAL_MINUTES * 60 * 1000);


app.post("/api/create-appointment", async (req, res) => {
  try {
    console.log("📥 BODY RECIBIDO:", req.body);

    const {
      full_name,
      phone,
      email,
      service,
      appointment_date,
      appointment_time
    } = req.body;

    // 1️⃣ Validar campos obligatorios
    if (
      !full_name ||
      !phone ||
      !email ||
      !service ||
      !appointment_date ||
      !appointment_time
    ) {
      return res.status(400).json({
        error: "Missing required fields"
      });
    }

    // 2️⃣ Construir startTime
    const startTime = new Date(`${appointment_date}T${appointment_time}:00`);

    if (isNaN(startTime.getTime())) {
      return res.status(400).json({
        error: "Invalid date or time"
      });
    }

    // 3️⃣ Obtener duración del servicio
          const serviceResult = await pool.query(
        "SELECT duration_minutes FROM services WHERE code = $1",
        [service]
      );


    if (serviceResult.rows.length === 0) {
      return res.status(400).json({
        error: "Service not found"
      });
    }

    const durationMinutes = serviceResult.rows[0].duration_minutes;

    // 4️⃣ Calcular endTime
    const endTime = new Date(startTime);
    endTime.setMinutes(endTime.getMinutes() + durationMinutes);

    // 5️⃣ Validar cruces
    const conflict = await pool.query(
      `
      SELECT 1
      FROM appointments
      WHERE start_time < $1
        AND end_time > $2
      LIMIT 1
      `,
      [endTime, startTime]
    );

    if (conflict.rows.length > 0) {
      return res.status(409).json({
        error: "This time slot is not available"
      });
    }

    // 6️⃣ Insertar cita (UNA SOLA VEZ)
    const result = await pool.query(
  `
  INSERT INTO appointments
  (full_name, phone, email, service, start_time, end_time, status)
  VALUES ($1, $2, $3, $4, $5, $6, 'pending_payment')
  RETURNING id
  `,
  [
    full_name,
    phone,
    email,
    service,
    startTime,
    endTime
  ]
);


    // 7️⃣ Respuesta final
    res.status(201).json({
      success: true,
      appointmentId: result.rows[0].id
    });

  } catch (err) {
    console.error("❌ DB error:", err);
    res.status(500).json({
      error: "Server error"
    });
  }
});


// 💳 Endpoint de pago
app.post("/process-payment", async (req, res) => {
  console.log("🟢 BODY RECIBIDO:", req.body);

  const { sourceId, appointmentId } = req.body;

  // 1️⃣ Validar datos
  if (!sourceId || !appointmentId) {
    return res.status(400).json({
      error: "Missing payment or appointment data"
    });
  }

  try {
    // 2️⃣ Crear pago en Square
    const response = await client.paymentsApi.createPayment({
      sourceId,
      idempotencyKey: crypto.randomUUID(),
      amountMoney: {
        amount: 2000, // $20 CAD
        currency: "CAD"
      }
    });

    const payment = response.result.payment;

    // 3️⃣ 🔒 PASO 3.3 — BLOQUEAR CITA (ESTO FALTABA)
    await pool.query(
      `
      UPDATE appointments
      SET
        status = 'paid',
        payment_id = $1,
        paid_at = NOW()
      WHERE id = $2
      `,
      [
        payment.id,
        appointmentId
      ]
    );

    // 4️⃣ Respuesta final
    res.json({
      success: true,
      paymentId: payment.id
    });

  } catch (error) {
    console.error("❌ Square error:", error);

    res.status(500).json({
      success: false,
      error: error.errors || error.message || "Payment failed"
    });
  }
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`🟢 Backend running on http://localhost:${PORT}`);
});

