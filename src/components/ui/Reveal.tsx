"use client";

import { Children, type ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type Props = {
  children: ReactNode;
  /** Applied to the wrapper itself, so a Reveal can BE the grid container. */
  className?: string;
  as?: "div" | "section";
  /**
   * Cascade the direct children instead of revealing the block as one. Each
   * child is wrapped in a `.reveal-item`, a one-cell grid, so a card keeps
   * filling its grid track exactly as it did when it was the grid item.
   */
  stagger?: boolean;
};

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const DURATION = 0.5;
/** 60ms between items: inside the 30 to 80ms band where a cascade reads as one gesture. */
const STAGGER = 0.06;
const VIEWPORT = { once: true, margin: "0px 0px -8% 0px" } as const;

/**
 * The site's entrance: a block rises 12px out of an 8px blur over 500ms,
 * once, as it scrolls into view. With `stagger`, the block's children do it
 * one after another, 60ms apart.
 *
 * 2026-09-15: this replaces the 8px, 200ms fade that had been the page's
 * only motion. Saad's review notes asked for a blur stagger reveal of every
 * section and for the figures to count (see Figure). The blur sits on each
 * item, never on a section shell, so the gallery repaints six photographs
 * rather than a band the width of the page.
 *
 * `transform` is written as a string rather than through the `y` shorthand
 * so the browser can composite it while the page is still loading.
 */
export function Reveal({ children, className, as = "div", stagger = false }: Props) {
  const reduced = useReducedMotion();
  const Tag = as === "section" ? motion.section : motion.div;

  /*
    Reduced motion changes only the transition, never the element or its
    initial styles. useReducedMotion() is null on the server and true on a
    client with the OS setting on; the earlier version returned a plain div in
    that case, so the server HTML carried the motion element's inline initial
    styles and the client rendered none. React 19 does not patch attribute
    mismatches on hydration, which left every revealed block invisible for
    reduced-motion visitors. Identical markup on both sides, with a
    zero-length transition, shows the block the moment it enters view.
  */
  const item: Variants = {
    hidden: { opacity: 0, transform: "translateY(12px)", filter: "blur(8px)" },
    show: {
      opacity: 1,
      transform: "translateY(0px)",
      filter: "blur(0px)",
      transition: { duration: reduced ? 0 : DURATION, ease: EASE },
    },
  };

  if (!stagger) {
    return (
      <Tag
        className={className}
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
      >
        {children}
      </Tag>
    );
  }

  const group: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduced ? 0 : STAGGER } },
  };

  return (
    <Tag
      className={className}
      variants={group}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
    >
      {Children.map(children, (child, i) => (
        <motion.div className="reveal-item" variants={item} key={i}>
          {child}
        </motion.div>
      ))}
    </Tag>
  );
}
