// Contact form API - Currently logs messages to console
// TODO: Configure email service or use Formspree/Web3Forms for production

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400 }
      );
    }

    // Log the message (for development)
    console.log("=== NEW CONTACT FORM MESSAGE ===");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    console.log("Timestamp:", new Date().toISOString());
    console.log("================================");

    // TODO: Uncomment and configure when ready for production email
    /*
    // Option 1: Use nodemailer (requires EMAIL_USER and EMAIL_PASS env vars)
    const nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // App-specific password
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${name}`,
      html: `
        <h3>New Contact Form Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });
    */

    // Option 2: Use a service like Formspree or Web3Forms
    // Just forward to their API

    // Return success
    return new Response(
      JSON.stringify({
        success: true,
        message: "Thank you for your message! I'll get back to you soon."
      }),
      { status: 200 }
    );

  } catch (error) {
    console.error("Contact form error:", error);
    return new Response(
      JSON.stringify({
        error: "Something went wrong. Please email me directly at abihaahmed413@gmail.com"
      }),
      { status: 500 }
    );
  }
}
