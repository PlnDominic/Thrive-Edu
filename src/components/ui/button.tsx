import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-small font-semibold transition-all duration-200 ease-out disabled:pointer-events-none disabled:opacity-40 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-elevation-1 hover:bg-primary-hover hover:shadow-elevation-2 active:scale-[0.98]",
        secondary:
          "bg-surface text-text-primary border border-border shadow-elevation-1 hover:border-growth-green/50 hover:bg-subtle-surface active:scale-[0.98]",
        ghost:
          "bg-transparent text-text-primary hover:bg-subtle-surface active:scale-[0.98]",
        destructive:
          "bg-error text-white shadow-elevation-1 hover:bg-error/90 active:scale-[0.98]",
        accent:
          "bg-accent text-accent-foreground shadow-elevation-1 hover:brightness-95 active:scale-[0.98]",
      },
      size: {
        sm: "h-9 px-3.5 text-small",
        md: "h-11 px-5",
        lg: "h-13 px-7 text-body-lg",
        icon: "h-11 w-11 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, loading = false, disabled, children, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        {...props}
      >
        {loading && <Loader2 className="animate-spin" aria-hidden />}
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button };
