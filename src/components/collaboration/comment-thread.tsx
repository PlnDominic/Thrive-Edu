import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export interface Comment {
  id: string;
  author: string;
  avatarUrl?: string;
  timestamp: string;
  text: string;
}

export interface CommentThreadProps {
  comments: Comment[];
}

function CommentThread({ comments }: CommentThreadProps) {
  return (
    <ul className="space-y-5">
      {comments.map((c) => (
        <li key={c.id} className="flex gap-3">
          <Avatar className="size-9 shrink-0">
            {c.avatarUrl && <AvatarImage src={c.avatarUrl} alt={c.author} />}
            <AvatarFallback className="text-caption">
              {c.author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 rounded-lg bg-subtle-surface px-4 py-3">
            <div className="flex items-baseline gap-2">
              <span className="text-small font-semibold text-text-primary">{c.author}</span>
              <span className="text-caption text-text-secondary">{c.timestamp}</span>
            </div>
            <p className="mt-1 text-small text-text-primary">{c.text}</p>
            <button type="button" className="mt-1.5 text-caption font-semibold text-forest-green-text hover:underline">
              Reply
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export { CommentThread };
