import { Send } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export interface Message {
  id: string;
  author: string;
  avatarUrl?: string;
  text: string;
  timestamp: string;
  fromSelf?: boolean;
}

export interface MessageThreadProps {
  messages: Message[];
}

function MessageThread({ messages }: MessageThreadProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-border bg-surface shadow-elevation-1">
      <div className="flex-1 space-y-4 overflow-y-auto p-5">
        {messages.map((m) => (
          <div key={m.id} className={cn("flex items-end gap-2.5", m.fromSelf && "flex-row-reverse")}>
            <Avatar className="size-8 shrink-0">
              {m.avatarUrl && <AvatarImage src={m.avatarUrl} alt={m.author} />}
              <AvatarFallback className="text-caption">
                {m.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className={cn("max-w-[75%]", m.fromSelf && "text-right")}>
              <div
                className={cn(
                  "inline-block rounded-lg px-4 py-2.5 text-small",
                  m.fromSelf ? "bg-primary text-primary-foreground" : "bg-subtle-surface text-text-primary"
                )}
              >
                {m.text}
              </div>
              <p className="mt-1 text-caption text-text-secondary">{m.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
      <form className="flex items-center gap-2 border-t border-border p-3" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Write a message…"
          className="h-11 flex-1 rounded-full border border-border bg-subtle-surface px-4 text-small text-text-primary outline-none placeholder:text-text-secondary/70 focus-visible:border-growth-green focus-visible:ring-2 focus-visible:ring-growth-green/25"
        />
        <button
          type="submit"
          aria-label="Send message"
          className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary-hover"
        >
          <Send className="size-4" />
        </button>
      </form>
    </div>
  );
}

export { MessageThread };
