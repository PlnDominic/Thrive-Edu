"use client";

import * as React from "react";

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  variant?: "default" | "success" | "error";
}

type Listener = (toasts: ToastMessage[]) => void;

let toasts: ToastMessage[] = [];
const listeners = new Set<Listener>();

function emit() {
  listeners.forEach((l) => l(toasts));
}

export function toast(message: Omit<ToastMessage, "id">) {
  const id = crypto.randomUUID();
  toasts = [...toasts, { ...message, id }];
  emit();
  return id;
}

export function dismissToast(id: string) {
  toasts = toasts.filter((t) => t.id !== id);
  emit();
}

export function useToast() {
  const [state, setState] = React.useState<ToastMessage[]>(toasts);

  React.useEffect(() => {
    listeners.add(setState);
    return () => {
      listeners.delete(setState);
    };
  }, []);

  return { toasts: state, toast, dismiss: dismissToast };
}
