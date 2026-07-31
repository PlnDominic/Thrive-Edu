"use client";

import * as React from "react";
import { Check, ChevronDown, X } from "lucide-react";

import { cn } from "@/lib/utils";

export interface MultiSelectOption {
  label: string;
  value: string;
}

export interface MultiSelectProps {
  options: MultiSelectOption[];
  value: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
  className?: string;
}

function MultiSelect({ options, value, onChange, placeholder = "Select…", className }: MultiSelectProps) {
  const [open, setOpen] = React.useState(false);
  const rootRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const toggle = (val: string) => {
    onChange(value.includes(val) ? value.filter((v) => v !== val) : [...value, val]);
  };

  const selected = options.filter((o) => value.includes(o.value));

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="listbox"
        className={cn(
          "flex min-h-11 w-full flex-wrap items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-2 text-body shadow-elevation-1 outline-none transition-colors duration-150",
          "focus-visible:border-growth-green focus-visible:ring-2 focus-visible:ring-growth-green/25"
        )}
      >
        {selected.length === 0 && (
          <span className="px-1 text-text-secondary/70">{placeholder}</span>
        )}
        {selected.map((o) => (
          <span
            key={o.value}
            className="flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-caption font-semibold text-forest-green"
          >
            {o.label}
            <X
              className="size-3 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                toggle(o.value);
              }}
            />
          </span>
        ))}
        <ChevronDown className="ml-auto size-4 shrink-0 text-text-secondary" />
      </button>
      {open && (
        <ul
          role="listbox"
          aria-multiselectable
          className="absolute z-50 mt-2 max-h-64 w-full overflow-auto rounded-md border border-border bg-surface p-1.5 shadow-elevation-3"
        >
          {options.map((o) => {
            const isSelected = value.includes(o.value);
            return (
              <li
                key={o.value}
                role="option"
                aria-selected={isSelected}
                onClick={() => toggle(o.value)}
                className="flex cursor-pointer items-center justify-between rounded-sm px-3 py-2.5 text-small text-text-primary transition-colors hover:bg-subtle-surface"
              >
                {o.label}
                {isSelected && <Check className="size-4 text-growth-green" />}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export { MultiSelect };
