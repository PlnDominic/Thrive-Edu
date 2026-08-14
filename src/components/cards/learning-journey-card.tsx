import { Check, Circle } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

export interface LearningJourneyMilestone {
  label: string;
  complete: boolean;
}

export interface LearningJourneyCardProps {
  subject: string;
  description: string;
  progress: number;
  milestones: LearningJourneyMilestone[];
}

function LearningJourneyCard({ subject, description, progress, milestones }: LearningJourneyCardProps) {
  return (
    <Card elevation={2}>
      <CardHeader>
        <CardTitle>{subject}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Progress value={progress} className="mb-5" />
        <ol className="space-y-3">
          {milestones.map((m, i) => (
            <li key={m.label} className="flex items-center gap-3">
              <span
                className={cn(
                  "flex size-6 shrink-0 items-center justify-center rounded-full text-caption font-bold",
                  m.complete
                    ? "bg-growth-green text-white"
                    : "border border-border bg-subtle-surface text-text-secondary"
                )}
              >
                {m.complete ? <Check className="size-3.5" /> : <Circle className="size-2 fill-current" />}
              </span>
              <span
                className={cn(
                  "text-small",
                  m.complete ? "text-text-secondary line-through decoration-border" : "font-medium text-text-primary"
                )}
              >
                {m.label}
              </span>
              {i === milestones.findIndex((x) => !x.complete) && (
                <span className="ml-auto text-caption font-semibold text-leaf-gold">Next</span>
              )}
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}

export { LearningJourneyCard };
