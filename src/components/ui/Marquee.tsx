"use client";

import { useRef, type ReactNode } from "react";
import { useInView } from "framer-motion";

/**
 * A row that scrolls itself: the children, then a hidden copy of them, on a
 * track that slides by half its width and loops. The copy is what makes the
 * loop seamless, and aria-hidden keeps a screen reader from meeting every
 * review twice.
 *
 * The animation itself is CSS (globals.css, "reviews"). This component only
 * knows whether the row is on screen and stops the track when it is not: a
 * loop nobody can see still spends a phone's frame budget.
 */
export function Marquee({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <div
      ref={ref}
      className={["marquee", className].filter(Boolean).join(" ")}
      data-playing={inView}
    >
      <div className="marquee-track">
        <div className="marquee-set">{children}</div>
        <div className="marquee-set" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
