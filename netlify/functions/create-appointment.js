const { createClient } = require("@supabase/supabase-js");
const { DateTime } = require("luxon");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  try {
    const {
      full_name,
      phone,
      email,
      service,
      appointment_date,
      appointment_time,
    } = JSON.parse(event.body);

    console.log("FECHA RECIBIDA:", appointment_date);
console.log("HORA RECIBIDA:", appointment_time);

// Crear fecha directamente (ya viene en formato correcto del frontend)
const calgaryDateTime = DateTime.fromISO(
  `${appointment_date}T${appointment_time}`,
  { zone: "America/Edmonton" }
);

if (!calgaryDateTime.isValid) {
  throw new Error("Invalid date format received");
}

// Convertir a formato SQL compatible
const startTime = calgaryDateTime.toFormat("yyyy-MM-dd HH:mm:ss");


    const durationMinutes = 150;

    const { data: endTime, error: rpcError } = await supabase.rpc("add_minutes", {
  minutes: durationMinutes,
  start_time: startTime,
  });

    if (rpcError) throw rpcError;

    const { data: conflicts } = await supabase
      .from("appointments")
      .select("id")
      .or(
        `and(start_time.lte.${startTime},end_time.gt.${startTime}),and(start_time.lt.${endTime},end_time.gte.${endTime})`
      );

              console.log("==============");
        console.log("START TIME:", startTime);
        console.log("END TIME:", endTime);
        console.log("CONFLICTS:", conflicts);
        console.log("==============");


    if (conflicts?.length) {
      return {
        statusCode: 409,
        body: JSON.stringify({
          error: "This time slot is not available",
        }),
      };
    }

    const { data, error } = await supabase
      .from("appointments")
      .insert([
        {
          full_name,
          phone,
          email,
          service,
          start_time: startTime,
          end_time: endTime,
          status: "pending_payment",
        },
      ])
      .select();

    if (error) throw error;

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        appointmentId: data[0].id,
      }),
    };
    } catch (err) {
    console.error("ERROR COMPLETO:", err);

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: err.message,
        stack: err.stack
      }),
    };
  }
};
