import { TrendingDown, TrendingUp } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface AnalyticsCardProps {
  title: string;
  value: string;
  changePercent: number;
  data: number[];
  className?: string;
}

function Sparkline({ data, positive }: { data: number[]; positive: boolean }) {
  const width = 240;
  const height = 56;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  const points = data
    .map((d, i) => {
      const x = (i / (data.length - 1)) * width;
      const y = height - ((d - min) / range) * height;
      return `${x},${y}`;
    })
    .join(" ");

  const color = positive ? "var(--color-growth-green)" : "var(--color-error)";

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-14 w-full" preserveAspectRatio="none" aria-hidden>
      <polyline points={points} fill="none" stroke={color} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AnalyticsCard({ title, value, changePercent, data, className }: AnalyticsCardProps) {
  const positive = changePercent >= 0;

  return (
    <Card elevation={2} className={cn(className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-small font-medium text-text-secondary">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="mb-1 flex items-end justify-between">
          <p className="font-heading text-h2 font-bold text-text-primary">{value}</p>
          <span
            className={cn(
              "mb-1.5 flex items-center gap-1 text-small font-semibold",
              positive ? "text-success" : "text-error"
            )}
          >
            {positive ? <TrendingUp className="size-4" /> : <TrendingDown className="size-4" />}
            {Math.abs(changePercent)}%
          </span>
        </div>
        <Sparkline data={data} positive={positive} />
      </CardContent>
    </Card>
  );
}

export { AnalyticsCard };
