"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * The primary CTA leans a few pixels toward the cursor. Pointer-only and
 * disabled under reduced motion, so it never becomes a touch-target problem.
 */
export function MagneticCTA({ href, children }: { href: string; children: ReactNode }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduced = useReducedMotion();

  const enabled =
    !reduced && typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;

  function move(e: PointerEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el || !enabled) return;
    const r = el.getBoundingClientRect();
    el.style.transition = "transform .12s linear";
    el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.12}px, ${
      (e.clientY - r.top - r.height / 2) * 0.22
    }px)`;
  }

  function reset() {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform .5s cubic-bezier(.16,1,.3,1)";
    el.style.transform = "";
  }

  return (
    <a className="btn" href={href} ref={ref} onPointerMove={move} onPointerLeave={reset}>
      {children}
    </a>
  );
}
