// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
  const data = await req.json();

  // Validate data...

  // Configure your transporter (use environment variables for credentials!)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your password or app password
    },
  });

  await transporter.sendMail({
    from: data.email,
    to: process.env.EMAIL_USER,
    subject: data.subject,
    text: data.message,
  });

  return NextResponse.json({ message: 'Message sent!' }, { status: 200 });
}
