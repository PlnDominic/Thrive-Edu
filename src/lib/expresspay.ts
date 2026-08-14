// Server-only client for the expressPay Ghana Merchant API.
// Docs: https://expresspaygh.com/developers/docs/accept-payments/merchant-api
//
// Flow: submitPayment() creates an order and returns a hosted-checkout
// redirectUrl (expressPay collects the donor's mobile money number/network
// or card on their own page). After payment, expressPay redirects the
// browser back to our redirect-url with ?order-id=&token=, and also pings
// our post-url webhook for mobile-money (which can settle async). Either
// path should call queryPayment() to confirm the final status.
//
// Requires EXPRESSPAY_MERCHANT_ID and EXPRESSPAY_API_KEY to be set as real
// environment variables (Vercel project settings) - this file never
// hardcodes or fabricates credentials, and fails clearly if they're unset.

const SANDBOX_BASE_URL = "https://sandbox.expresspaygh.com/api/";
const LIVE_BASE_URL = "https://expresspaygh.com/api/";

function getBaseUrl(): string {
  return process.env.EXPRESSPAY_ENV === "live" ? LIVE_BASE_URL : SANDBOX_BASE_URL;
}

function getCredentials(): { merchantId: string; apiKey: string } | null {
  const merchantId = process.env.EXPRESSPAY_MERCHANT_ID;
  const apiKey = process.env.EXPRESSPAY_API_KEY;
  if (!merchantId || !apiKey) return null;
  return { merchantId, apiKey };
}

const SUBMIT_STATUS_MESSAGES: Record<string, string> = {
  "1": "Success",
  "2": "Invalid credentials",
  "3": "Invalid request",
  "4": "Invalid IP address",
};

export interface SubmitPaymentInput {
  amount: number;
  currency?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  orderDesc: string;
  redirectUrl: string;
  postUrl?: string;
}

export interface SubmitPaymentResult {
  ok: boolean;
  redirectUrl?: string;
  orderId?: string;
  token?: string;
  error?: string;
}

export async function submitPayment(input: SubmitPaymentInput): Promise<SubmitPaymentResult> {
  const creds = getCredentials();
  if (!creds) {
    return { ok: false, error: "Online donations are not configured yet. Please contact us directly to give." };
  }

  const orderId = `thrive-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

  const body = new URLSearchParams({
    "merchant-id": creds.merchantId,
    "api-key": creds.apiKey,
    firstname: input.firstName,
    lastname: input.lastName,
    email: input.email,
    phonenumber: input.phone,
    // These two are documented as required by expressPay's original
    // bill-payment-style API but have no obvious meaning for a donation;
    // we pass safe, non-sensitive placeholders rather than ask a donor to
    // invent a "username"/"account number" that means nothing to them.
    username: input.email,
    accountnumber: orderId.slice(-6),
    currency: input.currency ?? "GHS",
    amount: input.amount.toFixed(2),
    "order-id": orderId,
    "order-desc": input.orderDesc,
    "redirect-url": input.redirectUrl,
    ...(input.postUrl ? { "post-url": input.postUrl } : {}),
  });

  let response: Response;
  try {
    response = await fetch(`${getBaseUrl()}submit.php`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });
  } catch {
    return { ok: false, error: "Could not reach the payment provider. Please try again shortly." };
  }

  if (!response.ok) {
    return { ok: false, error: "The payment provider returned an unexpected error." };
  }

  const data = (await response.json().catch(() => null)) as {
    status?: number;
    token?: string;
    "order-id"?: string;
    message?: string;
  } | null;

  if (!data || data.status !== 1 || !data.token) {
    const reason = SUBMIT_STATUS_MESSAGES[String(data?.status)] ?? data?.message ?? "unknown error";
    return { ok: false, error: `Payment could not be started (${reason}).` };
  }

  return {
    ok: true,
    token: data.token,
    orderId: data["order-id"] ?? orderId,
    redirectUrl: `${getBaseUrl().replace(/\/api\/?$/, "")}/payment?token=${encodeURIComponent(data.token)}`,
  };
}

export interface QueryPaymentResult {
  ok: boolean;
  result?: number;
  resultText?: string;
  orderId?: string;
  transactionId?: string;
  amount?: string;
  currency?: string;
  error?: string;
}

export async function queryPayment(token: string): Promise<QueryPaymentResult> {
  const creds = getCredentials();
  if (!creds) {
    return { ok: false, error: "Online donations are not configured yet." };
  }

  const body = new URLSearchParams({
    "merchant-id": creds.merchantId,
    "api-key": creds.apiKey,
    token,
  });

  let response: Response;
  try {
    response = await fetch(`${getBaseUrl()}query.php`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });
  } catch {
    return { ok: false, error: "Could not reach the payment provider." };
  }

  if (!response.ok) {
    return { ok: false, error: "The payment provider returned an unexpected error." };
  }

  const data = (await response.json().catch(() => null)) as {
    result?: number;
    "result-text"?: string;
    "order-id"?: string;
    "transaction-id"?: string;
    amount?: string;
    currency?: string;
  } | null;

  if (!data) {
    return { ok: false, error: "The payment provider returned an unreadable response." };
  }

  return {
    ok: true,
    result: data.result,
    resultText: data["result-text"],
    orderId: data["order-id"],
    transactionId: data["transaction-id"],
    amount: data.amount,
    currency: data.currency,
  };
}
