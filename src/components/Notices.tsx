"use client";

import { useEffect, useState } from "react";
import { ArrowRight01Icon, BellIcon, Cancel01Icon } from "@hugeicons/core-free-icons";
import { Icon } from "@/components/ui/Icon";
import { announcements } from "@/content/announcements";

/** Per-session memory: which notices were dismissed, and whether the stack was closed. */
const STORE = "aa-notices";
/** The call bar shows below this width, and there the stack opens only on a tap. */
const PHONE = "(max-width: 760px)";
/**
 * How long after mount the widget arms. The hero cascades in CSS the moment the
 * document paints, and a widget landing in the same frame fights it; a beat
 * later it reads as its own arrival. Set to 0 for no delay at all.
 */
const SETTLE = 450;

type Stored = { closed?: boolean; dismissed?: string[] };

function read(): Stored {
  try {
    return JSON.parse(sessionStorage.getItem(STORE) ?? "{}") as Stored;
  } catch {
    return {};
  }
}

function write(patch: Stored) {
  try {
    sessionStorage.setItem(STORE, JSON.stringify({ ...read(), ...patch }));
  } catch {
    // Storage refused (private mode, quota): the widget simply forgets on reload.
  }
}

/**
 * The bottom-right notices: what is live or announced, as a small stack of
 * cards behind a pill. Saad, 2026-09-15: "a sticky bot kinda thing on the
 * page's bottom right, that highlights the courses/batches active or upcoming,
 * kinda like notifications". The content is src/content/announcements.ts.
 *
 * The pill arms on load, a beat after mount. Until 2026-09-16 the whole widget
 * waited for the hero to scroll off, on an IntersectionObserver over #top;
 * Saad, annotating the pill: "this should appear right when the page loads,
 * currently it appears after scrolling down a bit".
 *
 * The stack behind it still waits for that scroll, and only on a desktop. The
 * two were split rather than both moved to load, because the open stack is a
 * white panel in the same corner as the hero's headline and at 1416 wide it
 * covers the last word of it. So the pill answers the note, and the panel keeps
 * out of the headline's way. A phone never auto-opens at all: it shows the pill
 * above the call bar and opens on a tap. Closing the stack or dismissing a card
 * is remembered for the session. With every card dismissed the widget is gone.
 *
 * Server and first client render both produce the hidden shell, so there is
 * nothing to mismatch on hydration; the effects arm it afterwards.
 */
export function Notices() {
  const [armed, setArmed] = useState(false);
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState<string[]>([]);

  function close() {
    setOpen(false);
    write({ closed: true });
  }

  function show() {
    setOpen(true);
    write({ closed: false });
  }

  function dismiss(id: string) {
    const next = [...dismissed, id];
    setDismissed(next);
    write({ dismissed: next });
  }

  // The pill, on load. See SETTLE for why it is not the very first frame.
  useEffect(() => {
    setDismissed(read().dismissed ?? []);
    const t = window.setTimeout(() => setArmed(true), SETTLE);
    return () => window.clearTimeout(t);
  }, []);

  // The stack, once the hero has scrolled off, and never on a phone.
  //
  // It waits for the pill to arm first. An observer reports on its very first
  // frame, so a reload with the scroll restored past the hero, a deep link to
  // #results, or the skip link all used to open the stack while the pill was
  // still SETTLE milliseconds away: the two then landed together and the
  // widget arrived already expanded, which is the one thing the settle exists
  // to avoid. Keyed on armed, the stack can never precede the pill.
  useEffect(() => {
    if (!armed) return;
    const hero = document.getElementById("top");
    if (!hero) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) return;
      if (!read().closed && !window.matchMedia(PHONE).matches) setOpen(true);
      io.disconnect();
    });
    io.observe(hero);
    return () => io.disconnect();
  }, [armed]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const items = announcements.filter((a) => !dismissed.includes(a.id));

  return (
    <div
      className="notices"
      data-open={open}
      // Development only: lifts the widget clear of the review toolbar that
      // shares this corner while the page is being annotated.
      data-dev={process.env.NODE_ENV === "development" ? "" : undefined}
      hidden={!armed || items.length === 0}
    >
      <div className="notices-stack" id="notices-stack" role="region" aria-label="Batches and offers">
        <div className="notices-head">
          <span>What&apos;s on</span>
          <button type="button" aria-label="Hide notices" onClick={close}>
            <Icon icon={Cancel01Icon} size={16} />
          </button>
        </div>
        <ul>
          {items.map((n, i) => (
            <li className="notice" key={n.id} style={{ animationDelay: `${i * 60}ms` }}>
              <a href={n.href} {...(n.external ? { target: "_blank", rel: "noreferrer noopener" } : {})}>
                <span className="notice-kind">{n.kind}</span>
                <span className="notice-title">{n.title}</span>
                <span className="notice-meta">{n.meta}</span>
                <Icon icon={ArrowRight01Icon} size={16} />
              </a>
              <button
                type="button"
                className="notice-x"
                aria-label={`Dismiss: ${n.title}`}
                onClick={() => dismiss(n.id)}
              >
                <Icon icon={Cancel01Icon} size={14} />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        className="notices-pill"
        aria-expanded={open}
        aria-controls="notices-stack"
        onClick={open ? close : show}
      >
        <Icon icon={BellIcon} size={16} />
        Batches and offers
        <b className="tabular">{items.length}</b>
      </button>
    </div>
  );
}
