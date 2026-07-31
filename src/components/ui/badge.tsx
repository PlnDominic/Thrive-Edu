import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-caption font-semibold tracking-wide",
  {
    variants: {
      variant: {
        neutral: "bg-subtle-surface text-text-secondary border border-border",
        primary: "bg-primary/10 text-forest-green",
        success: "bg-success/10 text-success",
        warning: "bg-warning/10 text-[#8a5a17]",
        error: "bg-error/10 text-error",
        info: "bg-info/10 text-info",
        gold: "bg-leaf-gold/15 text-[#8a5a17]",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, className }))} {...props} />;
}

export { Badge };
