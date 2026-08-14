import { NextRequest, NextResponse } from "next/server";

import { queryPayment } from "@/lib/expresspay";

// Called client-side after the donor is redirected back from expressPay's
// hosted checkout, to confirm the final status of their payment.
export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");
  if (!token) {
    return NextResponse.json({ error: "Missing token." }, { status: 400 });
  }

  const result = await queryPayment(token);
  if (!result.ok) {
    return NextResponse.json({ error: result.error ?? "Could not check payment status." }, { status: 502 });
  }

  return NextResponse.json(result);
}
