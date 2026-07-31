import { CheckCircle2, XCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

export interface StatusScreenProps {
  variant: "success" | "error";
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}

function StatusScreen({ variant, title, description, actionLabel, onAction }: StatusScreenProps) {
  const isSuccess = variant === "success";
  const Icon = isSuccess ? CheckCircle2 : XCircle;

  return (
    <div className="flex flex-col items-center gap-5 px-8 py-20 text-center">
      <span
        className={
          isSuccess
            ? "flex size-20 items-center justify-center rounded-full bg-success/10 text-success"
            : "flex size-20 items-center justify-center rounded-full bg-error/10 text-error"
        }
      >
        <Icon className="size-10" />
      </span>
      <div>
        <p className="font-heading text-h3 font-bold text-text-primary">{title}</p>
        {description && <p className="mt-2 max-w-md text-body text-text-secondary">{description}</p>}
      </div>
      {actionLabel && (
        <Button variant={isSuccess ? "primary" : "secondary"} onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
}

export { StatusScreen };
