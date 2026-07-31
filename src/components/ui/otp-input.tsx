"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface OTPInputProps {
  length?: number;
  value?: string;
  onChange?: (value: string) => void;
  error?: boolean;
}

function OTPInput({ length = 6, value = "", onChange, error = false }: OTPInputProps) {
  const inputRefs = React.useRef<(HTMLInputElement | null)[]>([]);
  const digits = React.useMemo(
    () => Array.from({ length }, (_, i) => value[i] ?? ""),
    [value, length]
  );

  const setDigit = (index: number, char: string) => {
    const next = digits.slice();
    next[index] = char;
    onChange?.(next.join(""));
  };

  const handleChange = (index: number, raw: string) => {
    const char = raw.replace(/\D/g, "").slice(-1);
    setDigit(index, char);
    if (char && index < length - 1) inputRefs.current[index + 1]?.focus();
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, length);
    onChange?.(pasted.padEnd(length, "").slice(0, length).trimEnd());
    inputRefs.current[Math.min(pasted.length, length - 1)]?.focus();
  };

  return (
    <div className="flex gap-2.5" role="group" aria-label="One-time passcode">
      {digits.map((digit, i) => (
        <input
          key={i}
          ref={(el) => {
            inputRefs.current[i] = el;
          }}
          value={digit}
          onChange={(e) => handleChange(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          onPaste={handlePaste}
          inputMode="numeric"
          maxLength={1}
          aria-label={`Digit ${i + 1} of ${length}`}
          aria-invalid={error || undefined}
          className={cn(
            "h-13 w-11 rounded-md border border-border bg-surface text-center text-h5 font-heading font-semibold text-text-primary shadow-elevation-1 outline-none transition-colors duration-150",
            "focus-visible:border-growth-green focus-visible:ring-2 focus-visible:ring-growth-green/25",
            error && "border-error focus-visible:border-error focus-visible:ring-error/20"
          )}
        />
      ))}
    </div>
  );
}

export { OTPInput };
