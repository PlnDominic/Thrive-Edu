"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface BarChartDatum {
  label: string;
  value: number;
}

export interface BarChartProps {
  data: BarChartDatum[];
  height?: number;
  color?: string;
  className?: string;
}

function BarChart({ data, height = 220, color = "var(--color-growth-green)", className }: BarChartProps) {
  const [hovered, setHovered] = React.useState<number | null>(null);
  const max = Math.max(...data.map((d) => d.value), 1);

  return (
    <div className={cn("w-full", className)}>
      <div className="flex gap-3" style={{ height }}>
        {data.map((d, i) => (
          <div
            key={d.label}
            className="group relative flex flex-1 flex-col items-center justify-end gap-2"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            {hovered === i && (
              <span className="absolute -top-8 rounded-md bg-text-primary px-2 py-1 text-caption font-semibold text-white shadow-elevation-2">
                {d.value}
              </span>
            )}
            <div
              className="w-full rounded-t-md transition-[height,opacity] duration-300 ease-out group-hover:opacity-80"
              style={{ height: `${(d.value / max) * 100}%`, backgroundColor: color, minHeight: 4 }}
            />
          </div>
        ))}
      </div>
      <div className="mt-2.5 flex gap-3">
        {data.map((d) => (
          <span key={d.label} className="flex-1 truncate text-center text-caption text-text-secondary">
            {d.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export { BarChart };
