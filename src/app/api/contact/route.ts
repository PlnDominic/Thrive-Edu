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
        <div style="margin: 0; padding: 0; background-color: #f4f7f6; font-family: 'Inter', Arial, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f4f7f6; padding: 40px 0;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; width: 100%;">
                  <tr>
                    <td style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06);">
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td style="background: linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%); padding: 36px 40px; text-align: center;">
                            <h1 style="margin: 0; font-size: 26px; font-weight: 700; color: #ffffff; letter-spacing: -0.5px;">THRIVE EDU</h1>
                            <p style="margin: 8px 0 0; font-size: 13px; color: rgba(255,255,255,0.75); font-weight: 500; text-transform: uppercase; letter-spacing: 1.5px;">New Contact Form Submission</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 36px 40px 28px;">
                            <p style="margin: 0 0 24px; font-size: 15px; color: #4a4a4a; line-height: 1.6;">You have received a new message from the Thrive EDU contact form. Here are the details:</p>
                            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 24px;">
                              <tr style="border-bottom: 1px solid #e8eceb;">
                                <td style="padding: 14px 0; font-size: 13px; font-weight: 600; color: #8a9a8e; text-transform: uppercase; letter-spacing: 0.8px; width: 110px;">Name</td>
                                <td style="padding: 14px 0; font-size: 15px; color: #1a1a1a; font-weight: 500;">${name.trim()}</td>
                              </tr>
                              <tr style="border-bottom: 1px solid #e8eceb;">
                                <td style="padding: 14px 0; font-size: 13px; font-weight: 600; color: #8a9a8e; text-transform: uppercase; letter-spacing: 0.8px;">Email</td>
                                <td style="padding: 14px 0; font-size: 15px; color: #2d6a4f; font-weight: 500;"><a href="mailto:${email.trim()}" style="color: #2d6a4f; text-decoration: none;">${email.trim()}</a></td>
                              </tr>
                              <tr style="border-bottom: 1px solid #e8eceb;">
                                <td style="padding: 14px 0; font-size: 13px; font-weight: 600; color: #8a9a8e; text-transform: uppercase; letter-spacing: 0.8px;">Role</td>
                                <td style="padding: 14px 0; font-size: 15px; color: #1a1a1a; font-weight: 500;">${typeof role === "string" ? role.trim() : "Not specified"}</td>
                              </tr>
                            </table>
                            <div style="background-color: #f8faf9; border-left: 3px solid #40916c; border-radius: 8px; padding: 20px 24px;">
                              <p style="margin: 0 0 10px; font-size: 13px; font-weight: 600; color: #2d6a4f; text-transform: uppercase; letter-spacing: 0.8px;">Message</p>
                              <p style="margin: 0; font-size: 14px; color: #3d3d3d; line-height: 1.7; white-space: pre-wrap;">${message.trim()}</p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 20px 40px 32px; text-align: center;">
                            <p style="margin: 0; font-size: 12px; color: #aaa; line-height: 1.5;">This message was sent via the Thrive EDU contact form.</p>
                            <p style="margin: 6px 0 0; font-size: 12px; color: #ccc;">Kumasi, Ghana</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to send message. Please try again later." }, { status: 502 });
  }
}
