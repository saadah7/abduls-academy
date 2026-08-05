"use client";

import { motion, useScroll, useReducedMotion } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduced = useReducedMotion();

  if (reduced) return null;

  return <motion.div className="prog" style={{ scaleX: scrollYProgress }} aria-hidden />;
}
