"use client";

import * as React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { CheckCircle2, X, XCircle } from "lucide-react";

import { cn } from "@/lib/utils";

export const ToastProvider = ToastPrimitive.Provider;

export const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Viewport
    ref={ref}
    className={cn(
      "fixed bottom-0 right-0 z-[100] flex max-h-screen w-full flex-col gap-3 p-4 sm:max-w-sm sm:p-6",
      className
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitive.Viewport.displayName;

export interface ToastProps extends React.ComponentPropsWithoutRef<typeof ToastPrimitive.Root> {
  variant?: "default" | "success" | "error";
}

export const Toast = React.forwardRef<React.ElementRef<typeof ToastPrimitive.Root>, ToastProps>(
  ({ className, variant = "default", ...props }, ref) => (
    <ToastPrimitive.Root
      ref={ref}
      className={cn(
        "pointer-events-auto flex items-start gap-3 rounded-md border border-l-4 border-border bg-surface p-4 shadow-elevation-3",
        variant === "success" && "border-l-success",
        variant === "error" && "border-l-error",
        variant === "default" && "border-l-growth-green",
        "data-[state=open]:animate-in data-[state=open]:slide-in-from-bottom-4 data-[state=open]:fade-in-0",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
        "data-[swipe=end]:animate-out",
        className
      )}
      {...props}
    />
  )
);
Toast.displayName = ToastPrimitive.Root.displayName;

export const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Title ref={ref} className={cn("text-small font-semibold text-text-primary", className)} {...props} />
));
ToastTitle.displayName = ToastPrimitive.Title.displayName;

export const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Description ref={ref} className={cn("mt-0.5 text-caption text-text-secondary", className)} {...props} />
));
ToastDescription.displayName = ToastPrimitive.Description.displayName;

export const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Close
    ref={ref}
    aria-label="Dismiss"
    className={cn("ml-auto shrink-0 text-text-secondary transition-colors hover:text-text-primary", className)}
    {...props}
  >
    <X className="size-4" />
  </ToastPrimitive.Close>
));
ToastClose.displayName = ToastPrimitive.Close.displayName;

export function ToastIcon({ variant }: { variant?: ToastProps["variant"] }) {
  if (variant === "success") return <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-success" aria-hidden />;
  if (variant === "error") return <XCircle className="mt-0.5 size-5 shrink-0 text-error" aria-hidden />;
  return null;
}
