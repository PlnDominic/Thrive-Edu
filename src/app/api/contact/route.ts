import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface ContactRequestBody {
  name?: unknown;
  email?: unknown;
  role?: unknown;
  message?: unknown;
}

export async function POST(request: NextRequest) {
  let body: ContactRequestBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, role, message } = body;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return NextResponse.json({ error: "Please fill in every required field." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const fromEmail = process.env.CONTACT_FROM;
  const toEmail = process.env.CONTACT_TO;

  if (!fromEmail || !toEmail) {
    return NextResponse.json({ error: "Server is not configured." }, { status: 500 });
  }

  try {
    await transporter.sendMail({
      from: `"Thrive EDU Contact Form" <${fromEmail}>`,
      replyTo: email.trim(),
      to: toEmail,
      subject: `New contact form submission from ${name.trim()}`,
      text: [
        `You have received a new message from the Thrive EDU contact form.`,
        ``,
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        `Role: ${typeof role === "string" ? role.trim() : "Not specified"}`,
        ``,
        `Message:`,
        message.trim(),
        ``,
        `---`,
        `This message was sent via the Thrive EDU contact form.`,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
          <h2 style="color: #2d6a4f; margin-bottom: 16px;">New Contact Form Submission</h2>
          <p style="margin-bottom: 20px;">You have received a new message from the Thrive EDU contact form.</p>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 120px;">Name:</td>
              <td style="padding: 8px 0;">${name.trim()}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email.trim()}">${email.trim()}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Role:</td>
              <td style="padding: 8px 0;">${typeof role === "string" ? role.trim() : "Not specified"}</td>
            </tr>
          </table>
          <div style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
            <p style="font-weight: bold; margin-bottom: 8px;">Message:</p>
            <p style="white-space: pre-wrap; margin: 0;">${message.trim()}</p>
          </div>
          <p style="color: #888; font-size: 12px; border-top: 1px solid #eee; padding-top: 12px;">This message was sent via the Thrive EDU contact form.</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to send message. Please try again later." }, { status: 502 });
  }
}
