import { Email } from '@/app/components/EmailComposition';
import { NextResponse } from 'next/server';
const nodemailer = require("nodemailer");



export async function POST(request: Request) {
  const body = await request.json();

  // Pass user input to Email()
  


 const message = {
  from: `Client!!!!!!!!`,
  to: "yousseflmardi13@gmail.com",
  subject: "Advice!!!!!!!!!!!!!!!!",
  html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.5;">
      <h2 style="font-size: 20px; margin-bottom: 8px;">NAME: ${body?.name}</h2>
      <p style="font-size: 14px; white-space: pre-line;">
        ${body.message1}
      </p>
    </div>
  `,
  headers: {
    "X-Entity-Ref-ID": "newmail",
  },
};

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  try {
    await transporter.sendMail(message);
    return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
