import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", error = false, ...props }, ref) => (
    <input
      type={type}
      ref={ref}
      aria-invalid={error || undefined}
      className={cn(
        "flex h-11 w-full rounded-md border border-border bg-surface px-4 text-body text-text-primary shadow-elevation-1 outline-none transition-colors duration-150 placeholder:text-text-secondary/70",
        "focus-visible:border-growth-green focus-visible:ring-2 focus-visible:ring-growth-green/25",
        "disabled:cursor-not-allowed disabled:opacity-50",
        error &&
          "border-error focus-visible:border-error focus-visible:ring-error/20",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";

export { Input };
