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

  /*
    Reduced motion changes only the transition, never the element or its
    initial styles. useReducedMotion() is null on the server and true on a
    client with the OS setting on; the earlier version returned a plain div in
    that case, so the server HTML carried the motion element's opacity:0
    inline style and the client rendered none. React 19 does not patch
    attribute mismatches on hydration, which left every revealed block
    invisible for reduced-motion visitors. Identical markup on both sides,
    with a zero-length transition, shows the block the moment it enters view.
  */
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: reduced ? 0 : 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Tag>
  );
}
