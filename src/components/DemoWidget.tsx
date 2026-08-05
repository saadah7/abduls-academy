"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowRight01Icon,
  Book02Icon,
  Mortarboard02Icon,
  Target01Icon,
} from "@hugeicons/core-free-icons";
import type { IconSvgElement } from "@hugeicons/react";
import { Icon } from "./Icon";
import { site } from "@/content/site";

/**
 * Hero widget, modelled directly on arcade.software's hero.
 *
 * Arcade pairs a segmented toggle (a sliding `.tracker` pill measured from the
 * active option in JS) with a single 72px input bar and a 36x36 circular submit,
 * so the hero's visual IS the product's first action rather than a screenshot.
 *
 * Their geometry, taken verbatim from arcade.css:
 *   toggle track  border-radius 16px, padding 4px, gap 4px
 *   toggle option height 36px, transition all .22s cubic-bezier(.6,.6,0,1)
 *   input bar     height 72px, border-radius 24px, max-width 468px, margin-top 16px
 *   submit        36x36
 *
 * Adapted in two ways, both deliberate: their toggle sits on a dark hero so its
 * track is #11182724 with white labels, whereas ours is on white, so the track
 * is our ink at 7% and the active pill is white; and their bar has no border
 * because the dark ground separates it, while ours needs one to read as a
 * surface.
 *
 * There is no backend, so submitting composes a prefilled wa.me deep link.
 */

const STAGES: { id: string; label: string; icon: IconSvgElement }[] = [
  { id: "school", label: "Class 6 to 10", icon: Book02Icon },
  { id: "inter", label: "Intermediate", icon: Mortarboard02Icon },
  { id: "engg", label: "Diploma / Engineering", icon: Target01Icon },
];

export function DemoWidget() {
  const [stage, setStage] = useState(0);
  const [subject, setSubject] = useState("");
  const optRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [track, setTrack] = useState({ left: 0, width: 0 });

  const measure = useCallback(() => {
    const el = optRefs.current[stage];
    if (el) setTrack({ left: el.offsetLeft, width: el.offsetWidth });
  }, [stage]);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  // Labels shift once the webfont lands, so re-measure the tracker after it does.
  useEffect(() => {
    document.fonts?.ready.then(measure);
  }, [measure]);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const lines = [
      `Hi ${site.name}, I would like to book a free demo class.`,
      `Stage: ${STAGES[stage].label}`,
      subject.trim() ? `Subject or course: ${subject.trim()}` : null,
    ].filter(Boolean);
    window.open(
      `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <div className="demo-w">
      <div className="seg" role="group" aria-label="Which stage are you at?">
        <span className="tracker" style={{ transform: `translateX(${track.left}px)`, width: track.width }} aria-hidden />
        {STAGES.map((s, i) => (
          <button
            key={s.id}
            ref={(el) => {
              optRefs.current[i] = el;
            }}
            type="button"
            aria-pressed={i === stage}
            onClick={() => setStage(i)}
          >
            <Icon icon={s.icon} size={16} />
            {s.label}
          </button>
        ))}
      </div>

      <form className="demo-bar" onSubmit={submit}>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Which subject do you need?"
          aria-label="Which subject do you need?"
          autoComplete="off"
        />
        <button type="submit" aria-label="Book a free demo class on WhatsApp">
          <Icon icon={ArrowRight01Icon} size={17} strokeWidth={2} />
        </button>
      </form>

      <p className="demo-note">
        {site.demoClasses} free demo classes. Nothing to pay until you have seen the teaching.
      </p>
    </div>
  );
}
