"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Applied to the wrapper itself, so a Reveal can BE the grid container. */
  className?: string;
  as?: "div" | "section";
};

/**
 * The site's only motion. One reveal, 8px, 200ms, once.
 *
 * The staggered cascade this replaced (18px, 700ms, per-item delays) is the
 * single most recognisable "generated landing page" tell. Distance and
 * duration are deliberately below the threshold where a reader notices the
 * animation rather than the content.
 */
export function Reveal({ children, className, as = "div" }: Props) {
  const reduced = useReducedMotion();
  const Tag = as === "section" ? motion.section : motion.div;

  if (reduced) {
    return as === "section" ? (
      <section className={className}>{children}</section>
    ) : (
      <div className={className}>{children}</div>
    );
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Tag>
  );
}
