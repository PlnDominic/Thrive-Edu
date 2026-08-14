"use client";

import * as React from "react";
import { Check, Copy, Landmark, Smartphone } from "lucide-react";

const presetAmounts = [50, 100, 250, 500, 1000];

interface DetailRow {
  label: string;
  value: string;
}

const mobileMoneyDetails: DetailRow[] = [
  { label: "Network", value: "MTN Mobile Money" },
  { label: "Number", value: "Add MoMo number" },
  { label: "Account name", value: "THRIVE EDU" },
];

const bankDetails: DetailRow[] = [
  { label: "Bank", value: "Add bank name" },
  { label: "Account name", value: "THRIVE EDU" },
  { label: "Account number", value: "Add account number" },
  { label: "Branch", value: "Add branch" },
];

function CopyRow({ label, value }: DetailRow) {
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
    <div className="flex items-center justify-between gap-3 border-b border-border py-3 last:border-b-0">
      <div>
        <p className="text-caption font-semibold uppercase tracking-wide text-text-secondary">{label}</p>
        <p className="mt-0.5 font-heading text-body-lg font-bold text-text-primary">{value}</p>
      </div>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={`Copy ${label.toLowerCase()}`}
        className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-growth-green/50 hover:text-forest-green-text"
      >
        {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
      </button>
    </div>
  );
}

function DonatePanel() {
  const [selected, setSelected] = React.useState<number | null>(100);
  const [customAmount, setCustomAmount] = React.useState("");

  const activeAmount = customAmount ? Number(customAmount) || 0 : selected;

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-elevation-2">
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

      {/* Mobile money + bank details */}
      <div className="grid gap-px border-t border-border bg-border sm:grid-cols-2">
        <div className="bg-surface p-8 sm:p-10">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-forest-green-text">
              <Smartphone className="size-5" />
            </span>
            <h3 className="font-heading text-h5 font-bold text-text-primary">Mobile Money</h3>
          </div>
          <div className="mt-5">
            {mobileMoneyDetails.map((row) => (
              <CopyRow key={row.label} {...row} />
            ))}
          </div>
        </div>

        <div className="bg-surface p-8 sm:p-10">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-forest-green-text">
              <Landmark className="size-5" />
            </span>
            <h3 className="font-heading text-h5 font-bold text-text-primary">Bank Transfer</h3>
          </div>
          <div className="mt-5">
            {bankDetails.map((row) => (
              <CopyRow key={row.label} {...row} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer note */}
      <div className="border-t border-border bg-subtle-surface px-8 py-6 text-center sm:px-10">
        <p className="text-small text-text-secondary">
          {activeAmount ? `Sending GH₵${activeAmount}? ` : ""}
          Already sent a gift? Let us know so we can send you a receipt and say thank you.
        </p>
      </div>
    </div>
  );
}

export { DonatePanel };
