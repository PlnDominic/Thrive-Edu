import { Star, Users } from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export interface TeacherCardProps {
  name: string;
  subject: string;
  avatarUrl?: string;
  classCount: number;
  studentCount: number;
  rating: number;
}

function TeacherCard({ name, subject, avatarUrl, classCount, studentCount, rating }: TeacherCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <Card interactive elevation={2}>
      <CardHeader className="flex-row items-center gap-3">
        <Avatar className="size-12">
          {avatarUrl && <AvatarImage src={avatarUrl} alt={name} />}
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div className="min-w-0 flex-1">
          <p className="truncate font-heading text-body-lg font-semibold text-text-primary">{name}</p>
          <p className="truncate text-small text-text-secondary">{subject}</p>
        </div>
        <Badge variant="gold" className="shrink-0">
          <Star className="size-3 fill-current" />
          {rating.toFixed(1)}
        </Badge>
      </CardHeader>
      <CardContent className="flex items-center gap-6 border-t border-border pt-4">
        <div>
          <p className="text-caption text-text-secondary">Classes</p>
          <p className="font-heading text-h5 font-bold text-text-primary">{classCount}</p>
        </div>
        <div className="flex items-center gap-1.5 border-l border-border pl-6">
          <Users className="size-4 text-text-secondary" />
          <p className="font-heading text-h5 font-bold text-text-primary">{studentCount}</p>
          <span className="text-small text-text-secondary">students</span>
        </div>
      </CardContent>
    </Card>
  );
}

export { TeacherCard };
