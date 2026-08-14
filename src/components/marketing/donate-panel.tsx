"use client";

import * as React from "react";
import {
  Check,
  ChevronDown,
  CircleAlert,
  CircleCheck,
  Copy,
  Landmark,
  Loader2,
  Smartphone,
} from "lucide-react";

const presetAmounts = [50, 100, 250, 500, 1000];

interface BankOption {
  value: string;
  label: string;
  accountNumber: string;
}

const ghanaBanks: BankOption[] = [
  { value: "gcb", label: "GCB Bank", accountNumber: "Add GCB Bank account number" },
  { value: "ecobank", label: "Ecobank Ghana", accountNumber: "Add Ecobank account number" },
  { value: "absa", label: "Absa Bank Ghana", accountNumber: "Add Absa account number" },
  { value: "stanbic", label: "Stanbic Bank Ghana", accountNumber: "Add Stanbic account number" },
  { value: "fidelity", label: "Fidelity Bank Ghana", accountNumber: "Add Fidelity account number" },
  { value: "cal", label: "CalBank", accountNumber: "Add CalBank account number" },
  { value: "zenith", label: "Zenith Bank Ghana", accountNumber: "Add Zenith account number" },
  { value: "access", label: "Access Bank Ghana", accountNumber: "Add Access Bank account number" },
  { value: "stanchart", label: "Standard Chartered Ghana", accountNumber: "Add Standard Chartered account number" },
  { value: "republic", label: "Republic Bank Ghana", accountNumber: "Add Republic Bank account number" },
];

const branch = "Add branch";

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard API unavailable; ignore silently.
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={`Copy ${label.toLowerCase()}`}
      className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-growth-green/50 hover:text-forest-green-text"
    >
      {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
    </button>
  );
}

function FieldRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-border py-3 last:border-b-0">
      <p className="text-caption font-semibold uppercase tracking-wide text-text-secondary">{label}</p>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}

const inputClasses =
  "w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-body font-medium text-text-primary outline-none placeholder:font-normal placeholder:text-text-secondary focus:border-growth-green/50";

type PaymentStatus = "approved" | "pending" | "declined" | "error" | null;

const statusCopy: Record<Exclude<PaymentStatus, null>, { icon: typeof CircleCheck; text: string; className: string }> = {
  approved: {
    icon: CircleCheck,
    text: "Thank you! Your donation was received.",
    className: "border-forest-green/40 bg-forest-green/10 text-forest-green-text",
  },
  pending: {
    icon: Loader2,
    text: "Your mobile money payment is still confirming. This can take a minute.",
    className: "border-leaf-gold/40 bg-leaf-gold/10 text-text-primary",
  },
  declined: {
    icon: CircleAlert,
    text: "That payment was declined. Please try again.",
    className: "border-error/40 bg-error/10 text-error",
  },
  error: {
    icon: CircleAlert,
    text: "We could not confirm that payment. Please try again or contact us.",
    className: "border-error/40 bg-error/10 text-error",
  },
};

function usePaymentStatus() {
  const [status, setStatus] = React.useState<PaymentStatus>(null);

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    if (!token) return;

    fetch(`/api/donate/status?token=${encodeURIComponent(token)}`)
      .then((res) => res.json())
      .then((data: { result?: number }) => {
        if (data.result === 1) setStatus("approved");
        else if (data.result === 4) setStatus("pending");
        else if (data.result === 2) setStatus("declined");
        else setStatus("error");
      })
      .catch(() => setStatus("error"))
      .finally(() => {
        params.delete("token");
        params.delete("order-id");
        const query = params.toString();
        window.history.replaceState({}, "", window.location.pathname + (query ? `?${query}` : ""));
      });
  }, []);

  return status;
}

function DonatePanel() {
  const [selected, setSelected] = React.useState<number | null>(100);
  const [customAmount, setCustomAmount] = React.useState("");
  const [bank, setBank] = React.useState(ghanaBanks[0].value);

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [submitting, setSubmitting] = React.useState(false);
  const [formError, setFormError] = React.useState<string | null>(null);

  const paymentStatus = usePaymentStatus();

  const activeAmount = customAmount ? Number(customAmount) || 0 : selected;
  const activeBank = ghanaBanks.find((b) => b.value === bank) ?? ghanaBanks[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!activeAmount || activeAmount <= 0) {
      setFormError("Choose or enter an amount first.");
      return;
    }
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !phone.trim()) {
      setFormError("Please fill in every field.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, phone, amount: activeAmount }),
      });
      const data = (await res.json()) as { redirectUrl?: string; error?: string };
      if (!res.ok || !data.redirectUrl) {
        setFormError(data.error ?? "Something went wrong. Please try again.");
        setSubmitting(false);
        return;
      }
      window.location.href = data.redirectUrl;
    } catch {
      setFormError("Network error. Please check your connection and try again.");
      setSubmitting(false);
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-elevation-2">
      {paymentStatus && (
        <div className={`flex items-center gap-3 border-b px-8 py-4 text-small font-semibold sm:px-10 ${statusCopy[paymentStatus].className}`}>
          {React.createElement(statusCopy[paymentStatus].icon, {
            className: `size-5 shrink-0 ${paymentStatus === "pending" ? "animate-spin" : ""}`,
          })}
          <span>{statusCopy[paymentStatus].text}</span>
        </div>
      )}

      {/* Amount picker */}
      <div className="flex flex-col gap-6 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
        <div>
          <p className="text-small font-semibold uppercase tracking-wide text-text-secondary">Choose an amount</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {presetAmounts.map((amount) => (
              <button
                key={amount}
                type="button"
                onClick={() => {
                  setSelected(amount);
                  setCustomAmount("");
                }}
                className={`rounded-full border px-4 py-2 text-small font-semibold transition-colors ${
                  selected === amount && !customAmount
                    ? "border-forest-green bg-forest-green text-text-primary"
                    : "border-border bg-surface text-text-secondary hover:border-growth-green/50"
                }`}
              >
                GH₵{amount}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden text-small font-semibold uppercase tracking-wide text-text-secondary sm:block">
            Or
          </span>
          <div>
            <p className="text-small font-semibold uppercase tracking-wide text-text-secondary sm:hidden">Or</p>
            <label className="mt-1 flex items-center gap-1 rounded-full border border-border bg-subtle-surface px-4 py-2 text-small font-semibold text-text-primary focus-within:border-growth-green/50">
              GH₵
              <input
                type="number"
                min={1}
                inputMode="numeric"
                placeholder="Enter your own"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelected(null);
                }}
                className="w-36 bg-transparent outline-none placeholder:font-normal placeholder:text-text-secondary"
              />
            </label>
          </div>
        </div>
      </div>

      {/* Mobile money (ExpressPay checkout) + bank details */}
      <div className="grid gap-px border-t border-border bg-border sm:grid-cols-2">
        <form onSubmit={handleSubmit} className="bg-surface p-8 sm:p-10">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-forest-green-text">
              <Smartphone className="size-5" />
            </span>
            <div>
              <h3 className="font-heading text-h5 font-bold text-text-primary">Mobile Money</h3>
              <p className="text-caption text-text-secondary">Secure checkout powered by ExpressPay</p>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <label className="block">
              <span className="text-caption font-semibold uppercase tracking-wide text-text-secondary">
                First name
              </span>
              <input
                type="text"
                required
                autoComplete="given-name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={`mt-1.5 ${inputClasses}`}
              />
            </label>
            <label className="block">
              <span className="text-caption font-semibold uppercase tracking-wide text-text-secondary">
                Last name
              </span>
              <input
                type="text"
                required
                autoComplete="family-name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={`mt-1.5 ${inputClasses}`}
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="text-caption font-semibold uppercase tracking-wide text-text-secondary">Email</span>
              <input
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`mt-1.5 ${inputClasses}`}
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="text-caption font-semibold uppercase tracking-wide text-text-secondary">
                Mobile money number
              </span>
              <input
                type="tel"
                required
                inputMode="tel"
                autoComplete="tel"
                placeholder="024 xxx xxxx"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={`mt-1.5 ${inputClasses}`}
              />
            </label>
          </div>

          {formError && <p className="mt-3 text-small font-medium text-error">{formError}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-forest-green px-5 py-3 text-small font-bold text-text-primary transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {submitting && <Loader2 className="size-4 animate-spin" />}
            {submitting ? "Redirecting to checkout..." : `Donate GH₵${activeAmount || 0} now`}
          </button>
        </form>

        <div className="bg-surface p-8 sm:p-10">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-forest-green-text">
              <Landmark className="size-5" />
            </span>
            <h3 className="font-heading text-h5 font-bold text-text-primary">Bank Transfer</h3>
          </div>

          <div className="mt-5">
            <FieldRow label="Bank">
              <div className="relative">
                <select
                  value={bank}
                  onChange={(e) => setBank(e.target.value)}
                  className="w-full appearance-none rounded-lg border border-border bg-surface px-3 py-2.5 pr-9 font-heading text-body-lg font-bold text-text-primary outline-none focus:border-growth-green/50"
                >
                  {ghanaBanks.map((b) => (
                    <option key={b.value} value={b.value}>
                      {b.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-text-secondary"
                  aria-hidden
                />
              </div>
            </FieldRow>

            <FieldRow label="Account number">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  readOnly
                  value={activeBank.accountNumber}
                  className="w-full rounded-lg border border-border bg-subtle-surface px-3 py-2.5 font-heading text-body-lg font-bold text-text-primary outline-none"
                />
                <CopyButton value={activeBank.accountNumber} label="account number" />
              </div>
            </FieldRow>

            <FieldRow label="Branch">
              <div className="flex items-center justify-between gap-2">
                <p className="font-heading text-body-lg font-bold text-text-primary">{branch}</p>
                <CopyButton value={branch} label="branch" />
              </div>
            </FieldRow>
          </div>
        </div>
      </div>

      {/* Footer note */}
      <div className="border-t border-border bg-subtle-surface px-8 py-6 text-center sm:px-10">
        <p className="text-small text-text-secondary">
          Already sent a gift? Let us know so we can send you a receipt and say thank you.
        </p>
      </div>
    </div>
  );
}

export { DonatePanel };
