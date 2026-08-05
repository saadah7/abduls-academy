"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { stats } from "@/content/site";

const DURATION = 1150;

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduced = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (reduced) {
      setN(to);
      return;
    }
    if (!inView) return;

    let raf = 0;
    let start: number | null = null;
    const step = (t: number) => {
      if (start === null) start = t;
      const k = Math.min((t - start) / DURATION, 1);
      const eased = 1 - Math.pow(1 - k, 3);
      setN(Math.round(to * eased));
      if (k < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced, to]);

  return (
    <b ref={ref}>
      {n}
      {suffix}
    </b>
  );
}

export function Stats() {
  return (
    <dl className="stats">
      {stats.map((s) => (
        <div className="stat" key={s.label}>
          <Counter to={s.value} suffix={s.suffix} />
          <span>{s.label}</span>
        </div>
      ))}
    </dl>
  );
}
