"use client";

import { usePathname } from "next/navigation";
import type { MouseEvent, ReactNode } from "react";

/**
 * Intercepts link clicks while viewing the homepage so it can be shared as a
 * standalone preview without the client navigating into pages that aren't
 * ready yet. Only active on "/"; every other route is unaffected.
 */
function HomepagePreviewGuard({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  function handleClickCapture(event: MouseEvent<HTMLDivElement>) {
    if (!isHome) return;
    const link = (event.target as HTMLElement).closest("a");
    if (link) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  return (
    <div onClickCapture={handleClickCapture} className={isHome ? "contents [&_a]:cursor-default" : "contents"}>
      {children}
    </div>
  );
}

export { HomepagePreviewGuard };
