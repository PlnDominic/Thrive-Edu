"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

export interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  value: number;
  indicatorClassName?: string;
}

const Progress = React.forwardRef<React.ElementRef<typeof ProgressPrimitive.Root>, ProgressProps>(
  ({ className, value, indicatorClassName, ...props }, ref) => (
    <ProgressPrimitive.Root
      ref={ref}
      value={value}
      className={cn("h-2 w-full overflow-hidden rounded-full bg-subtle-surface", className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn("h-full flex-1 rounded-full bg-growth-green transition-transform duration-300 ease-out", indicatorClassName)}
        style={{ transform: `translateX(-${100 - Math.min(Math.max(value, 0), 100)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
);
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
