import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Without this, tailwind-merge can't tell our custom font-size scale
// (text-h1..text-caption, text-body-lg, etc.) apart from color utilities
// like text-primary-foreground, and silently drops one of them.
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: ["display", "h1", "h2", "h3", "h4", "h5", "body-lg", "body", "small", "caption"],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
