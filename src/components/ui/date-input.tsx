import * as React from "react";
import { Calendar } from "lucide-react";

import { cn } from "@/lib/utils";

export type DateInputProps = React.InputHTMLAttributes<HTMLInputElement>;

const DateInput = React.forwardRef<HTMLInputElement, DateInputProps>(
  ({ className, ...props }, ref) => (
    <div className="relative">
      <input
        type="date"
        ref={ref}
        className={cn(
          "flex h-11 w-full rounded-md border border-border bg-surface pl-4 pr-11 text-body text-text-primary shadow-elevation-1 outline-none transition-colors duration-150",
          "focus-visible:border-growth-green focus-visible:ring-2 focus-visible:ring-growth-green/25",
          "[&::-webkit-calendar-picker-indicator]:opacity-0",
          className
        )}
        {...props}
      />
      <Calendar
        className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-text-secondary"
        aria-hidden
      />
    </div>
  )
);
DateInput.displayName = "DateInput";

export { DateInput };
