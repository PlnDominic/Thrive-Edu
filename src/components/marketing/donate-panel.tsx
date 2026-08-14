"use client";

import * as React from "react";
import { Check, ChevronDown, Copy, Landmark, Smartphone } from "lucide-react";

const presetAmounts = [50, 100, 250, 500, 1000];

interface NetworkOption {
  value: string;
  label: string;
  number: string;
}

const momoNetworks: NetworkOption[] = [
  { value: "mtn", label: "MTN Mobile Money", number: "Add MTN MoMo number" },
  { value: "telecel", label: "Telecel Cash (Vodafone)", number: "Add Telecel Cash number" },
  { value: "airteltigo", label: "AirtelTigo Money", number: "Add AirtelTigo Money number" },
];

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

function DonatePanel() {
  const [selected, setSelected] = React.useState<number | null>(100);
  const [customAmount, setCustomAmount] = React.useState("");
  const [network, setNetwork] = React.useState(momoNetworks[0].value);
  const [bank, setBank] = React.useState(ghanaBanks[0].value);

  const activeAmount = customAmount ? Number(customAmount) || 0 : selected;
  const activeNetwork = momoNetworks.find((n) => n.value === network) ?? momoNetworks[0];
  const activeBank = ghanaBanks.find((b) => b.value === bank) ?? ghanaBanks[0];

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
            <FieldRow label="Network">
              <div className="relative">
                <select
                  value={network}
                  onChange={(e) => setNetwork(e.target.value)}
                  className="w-full appearance-none rounded-lg border border-border bg-surface px-3 py-2.5 pr-9 font-heading text-body-lg font-bold text-text-primary outline-none focus:border-growth-green/50"
                >
                  {momoNetworks.map((n) => (
                    <option key={n.value} value={n.value}>
                      {n.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-text-secondary"
                  aria-hidden
                />
              </div>
            </FieldRow>

            <FieldRow label="Number">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  readOnly
                  value={activeNetwork.number}
                  className="w-full rounded-lg border border-border bg-subtle-surface px-3 py-2.5 font-heading text-body-lg font-bold text-text-primary outline-none"
                />
                <CopyButton value={activeNetwork.number} label="number" />
              </div>
            </FieldRow>
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
          {activeAmount ? `Sending GH₵${activeAmount}? ` : ""}
          Already sent a gift? Let us know so we can send you a receipt and say thank you.
        </p>
      </div>
    </div>
  );
}

export { DonatePanel };
