"use client";

import * as React from "react";
import { Heart } from "lucide-react";

import { cn } from "@/lib/utils";

function WishlistButton({ label }: { label: string }) {
  const [wishlisted, setWishlisted] = React.useState(false);

  return (
    <button
      type="button"
      onClick={() => setWishlisted((w) => !w)}
      aria-label={wishlisted ? `Remove ${label} from wishlist` : `Add ${label} to wishlist`}
      aria-pressed={wishlisted}
      className="absolute right-3 top-3 z-10 flex size-8 items-center justify-center rounded-full bg-white/90 text-text-secondary shadow-elevation-1 transition-colors hover:text-error"
    >
      <Heart className={cn("size-4 transition-colors", wishlisted && "fill-error text-error")} />
    </button>
  );
}

export { WishlistButton };
