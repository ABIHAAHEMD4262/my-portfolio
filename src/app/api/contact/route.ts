import nodemailer from "nodemailer";

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

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Please provide a valid email address" }),
        { status: 400 }
      );
    }

    // Configure nodemailer transporter with Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS?.replace(/\s/g, ""), // Remove spaces from app password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      replyTo: email, // User's email for easy reply
      subject: `Portfolio Contact: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00cc88; border-bottom: 2px solid #00cc88; padding-bottom: 10px;">
            New Contact Form Message
          </h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;">
              <strong style="color: #333;">Name:</strong>
              <span style="color: #666;">${name}</span>
            </p>
            <p style="margin: 10px 0;">
              <strong style="color: #333;">Email:</strong>
              <span style="color: #666;">${email}</span>
            </p>
            <p style="margin: 10px 0;">
              <strong style="color: #333;">Timestamp:</strong>
              <span style="color: #666;">${new Date().toLocaleString()}</span>
            </p>
          </div>
          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
            <div style="background: #fff; padding: 15px; border-left: 4px solid #00cc88; border-radius: 4px;">
              <p style="color: #444; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; color: #999; font-size: 12px;">
            <p>This message was sent from your portfolio contact form at abihacode.vercel.app</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Message

Name: ${name}
Email: ${email}
Timestamp: ${new Date().toLocaleString()}

Message:
${message}

---
This message was sent from your portfolio contact form.
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Log success
    console.log("✅ Email sent successfully to:", process.env.EMAIL_USER);
    console.log("From:", name, `<${email}>`);

    // Return success
    return new Response(
      JSON.stringify({
        success: true,
        message: "Thank you for your message! I'll get back to you soon."
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );

  } catch (error) {
    console.error("❌ Contact form error:", error);

    return new Response(
      JSON.stringify({
        error: "Something went wrong sending your message. Please email me directly at abihaahmed413@gmail.com"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
}
