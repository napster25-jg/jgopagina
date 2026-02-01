const { createClient } = require("@supabase/supabase-js");


const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);


export async function handler(event) {
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

    const startTime = `${appointment_date} ${appointment_time}:00`;

    // ⏱ duración fija por ahora (opción A)
    const durationMinutes = 150;

    const endTimeQuery = await supabase.rpc("add_minutes", {
      start_time: startTime,
      minutes: durationMinutes,
    });

    const endTime = endTimeQuery.data;

    // 🔎 verificar solape
    const { data: conflicts } = await supabase
      .from("appointments")
      .select("id")
      .or(
        `and(start_time.lte.${startTime},end_time.gt.${startTime}),and(start_time.lt.${endTime},end_time.gte.${endTime})`
      );

    if (conflicts?.length) {
      return {
        statusCode: 409,
        body: JSON.stringify({
          error: "This time slot is not available",
        }),
      };
    }

    const { data, error } = await supabase.from("appointments").insert([
      {
        full_name,
        phone,
        email,
        service,
        start_time: startTime,
        end_time: endTime,
        status: "pending_payment",
      },
    ]);

    if (error) throw error;

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Appointment created",
      }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
