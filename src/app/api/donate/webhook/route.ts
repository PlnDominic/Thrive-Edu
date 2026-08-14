import { NextRequest, NextResponse } from "next/server";

import { queryPayment } from "@/lib/expresspay";

// expressPay pings this URL when a mobile-money payment's status changes,
// since momo confirmations can land anywhere from a few seconds to several
// minutes after checkout. We must confirm the status and respond quickly.
//
// TODO: once there's a database (#49) and outbound email (#50), persist the
// order here and send a donor receipt / internal notification instead of
// just logging - right now nothing durable happens on this event.
export async function POST(request: NextRequest) {
  const form = await request.formData().catch(() => null);
  const token = form?.get("token")?.toString();

  if (!token) {
    return NextResponse.json({ error: "Missing token." }, { status: 400 });
  }

  const result = await queryPayment(token);
  console.log("[expresspay webhook]", { token, result });

  return NextResponse.json({ received: true });
}
