"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Applied to the wrapper itself, so a Reveal can BE the grid container. */
  className?: string;
  delay?: number;
};

/**
 * Scroll reveal. The wrapper carries className so wrapping a grid does not add
 * a layout-breaking extra element between the grid and its items.
 */
export function Reveal({ children, className, delay = 0 }: Props) {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
