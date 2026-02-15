const crypto = require("crypto");
const { SquareClient, SquareEnvironment } = require("square");
const { createClient } = require("@supabase/supabase-js");
const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);


const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

const squareClient = new SquareClient({
  token: process.env.SQUARE_ACCESS_TOKEN,
  environment:
    process.env.SQUARE_ENV === "production"
      ? SquareEnvironment.Production
      : SquareEnvironment.Sandbox,
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

  if (payment.status !== "COMPLETED") {
  return {
    statusCode: 400,
    body: JSON.stringify({ error: "Payment not completed" }),
  };
}



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

              // Obtener datos completos de la cita
            const { data: appointment, error: fetchError } = await supabase
              .from("appointments")
              .select("*")
              .eq("id", appointmentId)
              .single();

            if (fetchError || !appointment) {
              return {
                statusCode: 404,
                body: JSON.stringify({ error: "Appointment not found" }),
              };
            }


            // Enviar email al cliente
            if (!appointment.email) {
              console.warn("Appointment has no email");
            } else {
              await resend.emails.send({
              from: "JGo Brows <info@jgobrows.ca>",
              to: appointment.email,
              subject: "Your Appointment Confirmation 💖",
              html: `
                <h2>Hello ${appointment.full_name},</h2>
                <p>Your appointment for <strong>${appointment.service}</strong> has been successfully confirmed.</p>
                <p>Your payment was processed successfully.</p>
                <p>Thank you for choosing JGo Brows 💕</p>
              `,
            });

            }



                  // Enviar email para ti
                 await resend.emails.send({
                  from: "JGo Brows <info@jgobrows.ca>",
                  to: "jgobrows1@outlook.com",
                  subject: "New Paid Appointment 💰",
                  html: `
                    <h2>New Paid Appointment</h2>
                    <p>Client: ${appointment.full_name}</p>
                    <p>Email: ${appointment.email}</p>
                    <p>Service: ${appointment.service}</p>
                  `,
                });

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
