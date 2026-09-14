"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

const DURATION = 1.2;
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
/** Below this a count reads as a stutter, not a count: "1 year" stays still. */
const MIN = 10;

/**
 * A figure that counts up to itself the first time it scrolls into view.
 *
 * The string is kept whole and only its digit runs move, so "100%" counts
 * 0% to 100%, "85 to 90%" counts both numbers together and "Rank 313"
 * keeps its word. Anything whose largest number is under ten never moves.
 *
 * The server renders the finished value, so crawlers and anyone without
 * JavaScript read the real figure. On the client the digits drop to zero as
 * soon as the component mounts, which happens while the Reveal around it is
 * still at opacity 0, and count when the figure itself reaches the same
 * viewport line the Reveal fires on. So a reader never sees a finished
 * figure snap back to zero. Under reduced motion nothing runs and the
 * finished value stands.
 */
export function Figure({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });
  const reduced = useReducedMotion();
  const [text, setText] = useState(value);

  useEffect(() => {
    if (reduced) return;
    // Odd indices are the digit runs; even indices are the text around them.
    const parts = value.split(/(\d+)/);
    const largest = Math.max(...parts.filter((_, i) => i % 2 === 1).map(Number));
    if (!Number.isFinite(largest) || largest < MIN) return;

    const render = (p: number) =>
      setText(parts.map((s, i) => (i % 2 === 1 ? String(Math.round(Number(s) * p)) : s)).join(""));

    if (!inView) {
      render(0);
      return;
    }
    const controls = animate(0, 1, { duration: DURATION, ease: EASE, onUpdate: render });
    return () => controls.stop();
  }, [inView, reduced, value]);

  return (
    <b ref={ref} className={className}>
      {text}
    </b>
  );
}
