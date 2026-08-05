"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { programmes, stageFilters, type Stage } from "@/content/programmes";

import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { Icon } from "./Icon";

/**
 * "Tell us where you are" filter. Doubles as the argument for the whole site:
 * whichever stage you pick, this academy already teaches it.
 */
export function Programmes() {
  const [stage, setStage] = useState<Stage | "all">("all");
  const reduced = useReducedMotion();

  const shown = programmes.filter((p) => stage === "all" || p.stages.includes(stage));

  return (
    <>
      <div className="picker" role="group" aria-label="Filter programmes by stage">
        {stageFilters.map((f) => (
          <button
            key={f.id}
            className="pick"
            type="button"
            aria-pressed={stage === f.id}
            onClick={() => setStage(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="progs">
        <AnimatePresence mode="popLayout" initial={false}>
          {shown.map((p, i) => (
            <motion.div
              className="pr"
              key={p.title}
              layout={!reduced}
              initial={reduced ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: reduced ? 0 : i * 0.035 }}
            >
              <div className="tp">
                <h3>{p.title}</h3>
                <span className="du">{p.cadence}</span>
              </div>
              <p>{p.blurb}</p>
              <span className="go">
                {p.cta} <Icon icon={ArrowRight01Icon} size={16} />
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}
