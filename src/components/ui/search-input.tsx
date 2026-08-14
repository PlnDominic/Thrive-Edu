import * as React from "react";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";

export type SearchInputProps = React.InputHTMLAttributes<HTMLInputElement>;

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, placeholder = "Search…", ...props }, ref) => (
    <div className="relative">
      <Search
        className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-text-secondary"
        aria-hidden
      />
      <input
        type="search"
        ref={ref}
        placeholder={placeholder}
        className={cn(
          "flex h-11 w-full rounded-full border border-border bg-surface pl-10 pr-4 text-body text-text-primary shadow-elevation-1 outline-none transition-colors duration-150 placeholder:text-text-secondary/70",
          "focus-visible:border-growth-green focus-visible:ring-2 focus-visible:ring-growth-green/25",
          className
        )}
        {...props}
      />
    </div>
  )
);
SearchInput.displayName = "SearchInput";

export { SearchInput };
