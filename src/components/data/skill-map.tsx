import { cn } from "@/lib/utils";

export interface SkillMapEntry {
  skill: string;
  value: number; // 0–100
}

export interface SkillMapProps {
  skills: SkillMapEntry[];
  size?: number;
  className?: string;
}

function SkillMap({ skills, size = 280, className }: SkillMapProps) {
  const center = size / 2;
  const radius = size * 0.36;
  const angleStep = (Math.PI * 2) / skills.length;

  const point = (value: number, i: number) => {
    const angle = angleStep * i - Math.PI / 2;
    const r = (value / 100) * radius;
    return [center + r * Math.cos(angle), center + r * Math.sin(angle)];
  };

  const polygonPoints = skills.map((s, i) => point(s.value, i).join(",")).join(" ");
  const rings = [0.25, 0.5, 0.75, 1];

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img" aria-label="Skill map">
        {rings.map((r) => (
          <polygon
            key={r}
            points={skills.map((_, i) => point(r * 100, i).join(",")).join(" ")}
            fill="none"
            stroke="var(--color-border)"
            strokeWidth={1}
          />
        ))}
        {skills.map((s, i) => {
          const [x, y] = point(100, i);
          return (
            <line key={s.skill} x1={center} y1={center} x2={x} y2={y} stroke="var(--color-border)" strokeWidth={1} />
          );
        })}
        <polygon
          points={polygonPoints}
          fill="var(--color-growth-green)"
          fillOpacity={0.18}
          stroke="var(--color-growth-green)"
          strokeWidth={2}
          strokeLinejoin="round"
        />
        {skills.map((s, i) => {
          const [x, y] = point(s.value, i);
          return <circle key={s.skill} cx={x} cy={y} r={3.5} fill="var(--color-forest-green-text)" />;
        })}
      </svg>
      <div className="mt-4 grid w-full grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3">
        {skills.map((s) => (
          <div key={s.skill} className="flex items-center justify-between gap-2 text-small">
            <span className="text-text-secondary">{s.skill}</span>
            <span className="font-semibold text-text-primary">{s.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export { SkillMap };
