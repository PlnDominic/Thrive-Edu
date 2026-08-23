"use client";

import { Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";

export function DeleteButton({ action, confirmMessage }: { action: () => Promise<void>; confirmMessage: string }) {
  return (
    <form
      action={action}
      onSubmit={(e) => {
        if (!window.confirm(confirmMessage)) e.preventDefault();
      }}
    >
      <Button type="submit" variant="ghost" size="sm" className="rounded-full text-error hover:bg-error/10">
        <Trash2 className="size-3.5" />
        Delete
      </Button>
    </form>
  );
}
