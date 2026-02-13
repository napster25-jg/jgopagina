const crypto = require("crypto");
const { SquareClient, SquareEnvironment } = require("square");
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

const squareClient = new SquareClient({
  token: process.env.SQUARE_ACCESS_TOKEN,
  environment: SquareEnvironment.Sandbox,
});


exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    const { sourceId, appointmentId } = JSON.parse(event.body);

    if (!sourceId || !appointmentId) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing payment data" }),
      };
    }

    // Crear pago en Square
    const paymentResponse = await squareClient.payments.create({
  sourceId,
  idempotencyKey: crypto.randomUUID(),
  amountMoney: {
    amount: 2000n,
    currency: "CAD",
  },
});
const payment = paymentResponse.payment;


    // Actualizar cita en Supabase
    const { error } = await supabase
      .from("appointments")
      .update({
        status: "paid",
        payment_id: payment.id,
        paid_at: new Date().toISOString(),
      })
      .eq("id", appointmentId);

    if (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Payment succeeded but DB update failed" }),
      };
    }

   return {
  statusCode: 200,
  body: JSON.stringify({
    success: true,
    paymentId: payment.id,
    status: payment.status,
  }),
};

  } catch (err) {
    console.error("Payment error:", err);

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: err.message || "Payment failed",
      }),
    };
  }
};
