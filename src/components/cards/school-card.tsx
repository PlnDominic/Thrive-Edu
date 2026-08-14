import { Building2, GraduationCap, Users } from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface SchoolCardProps {
  name: string;
  location: string;
  enrollment: number;
  teacherCount: number;
  performanceScore: number;
}

function SchoolCard({ name, location, enrollment, teacherCount, performanceScore }: SchoolCardProps) {
  const tier = performanceScore >= 85 ? "success" : performanceScore >= 70 ? "info" : "warning";

  return (
    <Card interactive elevation={2}>
      <CardHeader className="flex-row items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-md bg-gradient-brand text-white">
            <Building2 className="size-6" />
          </div>
          <div>
            <p className="font-heading text-body-lg font-semibold text-text-primary">{name}</p>
            <p className="text-small text-text-secondary">{location}</p>
          </div>
        </div>
        <Badge variant={tier}>{performanceScore}/100</Badge>
      </CardHeader>
      <CardContent className="flex items-center gap-6 border-t border-border pt-4">
        <div className="flex items-center gap-1.5">
          <GraduationCap className="size-4 text-text-secondary" />
          <span className="font-heading text-h5 font-bold text-text-primary">{enrollment.toLocaleString()}</span>
          <span className="text-small text-text-secondary">students</span>
        </div>
        <div className="flex items-center gap-1.5 border-l border-border pl-6">
          <Users className="size-4 text-text-secondary" />
          <span className="font-heading text-h5 font-bold text-text-primary">{teacherCount}</span>
          <span className="text-small text-text-secondary">teachers</span>
        </div>
      </CardContent>
    </Card>
  );
}

export { SchoolCard };
