import { ArrowUpRight } from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export interface StudentCardProps {
  name: string;
  grade: string;
  avatarUrl?: string;
  progress: number;
  attendance: number;
  averageScore: number;
  status?: "on-track" | "needs-attention" | "excelling";
}

const statusMap = {
  "on-track": { label: "On Track", variant: "info" as const },
  "needs-attention": { label: "Needs Attention", variant: "warning" as const },
  excelling: { label: "Excelling", variant: "success" as const },
};

function StudentCard({
  name,
  grade,
  avatarUrl,
  progress,
  attendance,
  averageScore,
  status = "on-track",
}: StudentCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");
  const s = statusMap[status];

  return (
    <Card interactive elevation={2} className="group">
      <CardHeader className="flex-row items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <Avatar className="size-12">
            {avatarUrl && <AvatarImage src={avatarUrl} alt={name} />}
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-heading text-body-lg font-semibold text-text-primary">{name}</p>
            <p className="text-small text-text-secondary">{grade}</p>
          </div>
        </div>
        <Badge variant={s.variant}>{s.label}</Badge>
      </CardHeader>
      <CardContent>
        <div className="mb-3 flex items-center justify-between text-small">
          <span className="text-text-secondary">Learning path progress</span>
          <span className="font-semibold text-text-primary">{progress}%</span>
        </div>
        <Progress value={progress} className="mb-5" />
        <div className="grid grid-cols-2 gap-4 border-t border-border pt-4">
          <div>
            <p className="text-caption text-text-secondary">Attendance</p>
            <p className="font-heading text-h5 font-bold text-text-primary">{attendance}%</p>
          </div>
          <div>
            <p className="text-caption text-text-secondary">Avg. score</p>
            <p className="font-heading text-h5 font-bold text-text-primary">{averageScore}%</p>
          </div>
        </div>
      </CardContent>
      <div className="flex items-center justify-between border-t border-border px-6 py-3.5 text-small font-medium text-forest-green opacity-0 transition-opacity group-hover:opacity-100">
        View full profile
        <ArrowUpRight className="size-4" />
      </div>
    </Card>
  );
}

export { StudentCard };
