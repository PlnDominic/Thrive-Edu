import { MessageCircle } from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export interface ParentCardChild {
  name: string;
  avatarUrl?: string;
}

export interface ParentCardProps {
  name: string;
  avatarUrl?: string;
  learners: ParentCardChild[];
  unreadMessages?: number;
}

function ParentCard({ name, avatarUrl, learners, unreadMessages = 0 }: ParentCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <Card elevation={2}>
      <CardHeader className="flex-row items-center gap-3">
        <Avatar className="size-12">
          {avatarUrl && <AvatarImage src={avatarUrl} alt={name} />}
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div className="min-w-0 flex-1">
          <p className="truncate font-heading text-body-lg font-semibold text-text-primary">{name}</p>
          <p className="text-small text-text-secondary">Parent / Guardian</p>
        </div>
      </CardHeader>
      <CardContent className="border-t border-border pt-4">
        <p className="mb-2.5 text-caption font-medium text-text-secondary">Linked learners</p>
        <div className="mb-4 flex -space-x-2.5">
          {learners.map((child) => (
            <Avatar key={child.name} className="size-9 border-2 border-surface">
              {child.avatarUrl && <AvatarImage src={child.avatarUrl} alt={child.name} />}
              <AvatarFallback className="text-caption">
                {child.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
          ))}
        </div>
        <Button variant="secondary" size="sm" className="w-full">
          <MessageCircle className="size-4" />
          Message teachers
          {unreadMessages > 0 && (
            <span className="ml-auto flex size-5 items-center justify-center rounded-full bg-error text-caption font-bold text-white">
              {unreadMessages}
            </span>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}

export { ParentCard };
