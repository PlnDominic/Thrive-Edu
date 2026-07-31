import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { AlertTriangle, CheckCircle2, Info, XCircle } from "lucide-react";

import { cn } from "@/lib/utils";

const alertVariants = cva("flex items-start gap-3 rounded-md border p-4 text-small", {
  variants: {
    variant: {
      info: "border-info/25 bg-info/10 text-[#1f4c8f]",
      success: "border-success/25 bg-success/10 text-[#1f5c24]",
      warning: "border-warning/30 bg-warning/10 text-[#8a5a17]",
      error: "border-error/25 bg-error/10 text-[#8f2626]",
    },
  },
  defaultVariants: { variant: "info" },
});

const icons = {
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  error: XCircle,
};

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
  title?: string;
}

function Alert({ className, variant = "info", title, children, ...props }: AlertProps) {
  const Icon = icons[variant ?? "info"];
  return (
    <div role="alert" className={cn(alertVariants({ variant, className }))} {...props}>
      <Icon className="mt-0.5 size-5 shrink-0" aria-hidden />
      <div>
        {title && <p className="font-semibold">{title}</p>}
        <div className={cn(title && "mt-0.5 opacity-90")}>{children}</div>
      </div>
    </div>
  );
}

export { Alert };
