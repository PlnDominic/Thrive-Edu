export interface DonutChartSegment {
  label: string;
  value: number;
  color: string;
}

export interface DonutChartProps {
  segments: DonutChartSegment[];
  size?: number;
  thickness?: number;
  centerLabel?: string;
}

function DonutChart({ segments, size = 200, thickness = 26, centerLabel }: DonutChartProps) {
  const total = segments.reduce((sum, s) => sum + s.value, 0) || 1;
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;

  const dashes = segments.map((s) => (s.value / total) * circumference);
  const offsets = dashes.reduce<number[]>((acc, dash, i) => {
    acc.push(i === 0 ? 0 : acc[i - 1] + dashes[i - 1]);
    return acc;
  }, []);

  return (
    <div className="flex items-center gap-6">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90" role="img" aria-label="Distribution chart">
          <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="var(--color-subtle-surface)" strokeWidth={thickness} />
          {segments.map((s, i) => (
            <circle
              key={s.label}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={s.color}
              strokeWidth={thickness}
              strokeDasharray={`${dashes[i]} ${circumference - dashes[i]}`}
              strokeDashoffset={-offsets[i]}
              strokeLinecap="butt"
            />
          ))}
        </svg>
        {centerLabel && (
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-heading text-h4 font-bold text-text-primary">{centerLabel}</span>
          </div>
        )}
      </div>
      <ul className="space-y-2">
        {segments.map((s) => (
          <li key={s.label} className="flex items-center gap-2 text-small">
            <span className="size-2.5 rounded-full" style={{ backgroundColor: s.color }} aria-hidden />
            <span className="text-text-secondary">{s.label}</span>
            <span className="font-semibold text-text-primary">{Math.round((s.value / total) * 100)}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { DonutChart };
