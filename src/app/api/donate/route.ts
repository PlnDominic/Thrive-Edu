import { NextRequest, NextResponse } from "next/server";

import { submitPayment } from "@/lib/expresspay";

interface DonateRequestBody {
  firstName?: unknown;
  lastName?: unknown;
  email?: unknown;
  phone?: unknown;
  amount?: unknown;
}

export async function POST(request: NextRequest) {
  let body: DonateRequestBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { firstName, lastName, email, phone, amount } = body;

  if (
    typeof firstName !== "string" ||
    typeof lastName !== "string" ||
    typeof email !== "string" ||
    typeof phone !== "string" ||
    !firstName.trim() ||
    !lastName.trim() ||
    !email.trim() ||
    !phone.trim()
  ) {
    return NextResponse.json({ error: "Please fill in every field." }, { status: 400 });
  }

  const amountNumber = Number(amount);
  if (!Number.isFinite(amountNumber) || amountNumber <= 0) {
    return NextResponse.json({ error: "Enter a valid donation amount." }, { status: 400 });
  }

  const origin = request.nextUrl.origin;

  const result = await submitPayment({
    amount: amountNumber,
    firstName: firstName.trim(),
    lastName: lastName.trim(),
    email: email.trim(),
    phone: phone.trim(),
    orderDesc: "Donation to THRIVE EDU",
    redirectUrl: `${origin}/support-our-work`,
    postUrl: `${origin}/api/donate/webhook`,
  });

  if (!result.ok || !result.redirectUrl) {
    return NextResponse.json({ error: result.error ?? "Something went wrong. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ redirectUrl: result.redirectUrl });
}
