const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async () => {
  try {
    await resend.emails.send({
      from: "JGo Brows <onboarding@resend.dev>",
      to: "jgobrows1@outlook.com",
      subject: "Test Email ✅",
      html: `
        <h2>Email Test Successful 🎉</h2>
        <p>If you are reading this, Resend is working correctly.</p>
      `,
    });

    return {
      statusCode: 200,
      body: "Email sent successfully",
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: "Error sending email",
    };
  }
};
