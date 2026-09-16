"use client";

import { useEffect, useRef, useState } from "react";
import { Calendar03Icon } from "@hugeicons/core-free-icons";
import { Icon } from "@/components/ui/Icon";
import { Mark } from "@/components/ui/Mark";
import { Reveal } from "@/components/ui/Reveal";
import { admissions, whatsappLink } from "@/content/site";

/** How long a slide holds before the banner advances itself. */
const HOLD = 3000;

/**
 * The dated intakes, as a swipeable banner on its own light band between the
 * header and the hero: one slide each, carrying the date, the batch and one
 * way to ask about it.
 *
 * It began as one line under the figures. A whole dated admissions board was
 * cut from this page in the 2026-09-11 pass for being too much content, and
 * this is deliberately still not that board: one date and one batch name per
 * slide, no countdown, no "limited seats". On 2026-09-15 Saad's review notes
 * moved it above the hero ("shift this banner to the top, above hero", the
 * slot PW uses for its banner) and asked for it taller and centred. The two
 * free assistance lines sat here briefly the same day and came out on his note
 * that they are "not a part of the batches".
 *
 * On 2026-09-16 it became a carousel: "make this horizontally scrollable, add
 * the 999 course here too, maybe add small dots on botttom so that swiping is
 * easier", then "it should auto advanve aswell". The track is native
 * scroll-snap, not a carousel library, so a swipe, a trackpad, shift-wheel and
 * the arrow keys all drive it, and with JavaScript off it is still a scrollable
 * row of two readable slides.
 *
 * WHICH DOT IS LIT IS READ OFF scrollLeft, not tracked alongside it. An
 * IntersectionObserver was tried first and got this wrong in one direction:
 * `isIntersecting` is true at any ratio above zero, so a slide on its way out
 * still reported as visible, and whichever entry the browser happened to put
 * last in the batch won. Scrolling back to the first slide left the second dot
 * lit. Dividing scrollLeft by the track width cannot disagree with the view,
 * because it is the view.
 *
 * THE AUTO-ADVANCE YIELDS TO THE READER, because a banner that moves under
 * someone mid-sentence is worse than one that never moves. It holds while the
 * pointer is over the band or focus is inside it; it stops for good when the
 * reader drives the track themselves; and it never starts under
 * prefers-reduced-motion. Tapping a dot is navigation and not a takeover, so
 * it jumps and restarts the hold from that slide rather than ending the loop.
 *
 * THERE IS NO PAUSE BUTTON, on Saad's note of 2026-09-16: "there Shouldn't be
 * any pause or play button. It should only have those two dots which auto
 * moves every three seconds. In loop." One stood beside the dots until then,
 * and the reason it did still stands: hover and DOM focus are the two things a
 * phone reader does not have, because touch fires no mouseenter until a tap and
 * VoiceOver and TalkBack move a virtual cursor rather than focus. That leaves
 * driving the track as the only way to stop the banner, which is true and
 * undiscoverable, and it is WCAG 2.2.2 at Level A. A 3s hold sits further from
 * that line than the 6s one did. The stop is still in the track handlers below;
 * nothing advertises it. Written down so the next reader knows this is a
 * decision and not an oversight.
 *
 * An earlier version latched a separate flag on ANY wheel event over the
 * track. The track scrolls horizontally only, so an ordinary vertical scroll
 * of the page still dispatched wheel here, and this banner sits directly under
 * the header where every visit starts scrolling: on a mouse or trackpad the
 * auto-advance died on the first scroll and nothing could restart it. The
 * handlers below now read direction and key, not merely that an event arrived.
 *
 * The marks above each date are that intake's own: the bodies conducting its
 * exams where it is an entrance batch (TSCHE sets EAPCET, NTA sets NEET; Saad,
 * "add eapcet and neet logos here"), and NextGen's own mark where NextGen runs
 * the course.
 */
export function Admission() {
  const track = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  /** The pointer is over the band, or focus is inside it. */
  const [held, setHeld] = useState(false);
  /** Stopped for good, by the reader driving the track themselves. */
  const [stopped, setStopped] = useState(false);
  /** Bumped to start the hold again from the slide a dot jumped to. */
  const [restart, setRestart] = useState(0);

  // The lit dot, straight off the scroll position.
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const read = () => setCurrent(Math.round(el.scrollLeft / (el.clientWidth || 1)));
    read();
    el.addEventListener("scroll", read, { passive: true });
    window.addEventListener("resize", read);
    return () => {
      el.removeEventListener("scroll", read);
      window.removeEventListener("resize", read);
    };
  }, []);

  // The advance itself. Reads the position off the element rather than off
  // `current`, so the interval never works from a stale render.
  useEffect(() => {
    if (stopped || held || admissions.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      const el = track.current;
      if (!el) return;
      const width = el.clientWidth || 1;
      const next = (Math.round(el.scrollLeft / width) + 1) % admissions.length;
      el.scrollTo({ left: next * width, behavior: "smooth" });
    }, HOLD);
    return () => window.clearInterval(timer);
  }, [stopped, held, restart]);

  // A dot jumps and hands the slide a full hold of its own, so the banner does
  // not move on again a fraction of a second after the reader picked it.
  function go(index: number) {
    const el = track.current;
    if (!el) return;
    setRestart((n) => n + 1);
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({ left: index * (el.clientWidth || 1), behavior: still ? "auto" : "smooth" });
  }

  return (
    <section
      className="admit"
      aria-label="Admissions"
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
      onFocusCapture={() => setHeld(true)}
      onBlurCapture={() => setHeld(false)}
    >
      <Reveal>
        <div
          className="admit-track"
          ref={track}
          // A scrollable region is only reachable by keyboard if it can hold
          // focus, and then the arrow keys scroll it.
          tabIndex={0}
          role="group"
          aria-label="Intakes"
          // Intent, not movement: a programmatic smooth scroll fires the same
          // scroll events a finger does, so the handover is read from the input
          // rather than from the scrolling. Direction and key matter, though:
          // this track scrolls horizontally only, so a vertical wheel over it
          // is the page scrolling past, not the reader taking it over, and Tab
          // or PageDown on a focused track is not either.
          onPointerDown={() => setStopped(true)}
          onWheel={(e) => {
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) setStopped(true);
          }}
          onKeyDown={(e) => {
            if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) setStopped(true);
          }}
        >
          {admissions.map((intake) => (
            <div className="admit-slide" key={intake.id} role="group" aria-label={intake.title}>
              <div className="wrap admit-row">
                <div className="marks admit-marks">
                  {intake.marks.map((m) => (
                    <Mark k={m} key={m} />
                  ))}
                </div>
                <p className="admit-date">
                  <Icon icon={Calendar03Icon} size={16} />
                  {intake.when}
                </p>
                <p className="admit-title" id={`admit-title-${intake.id}`}>
                  {intake.title}
                </p>
                {/*
                  Both slides carry a link reading "Ask about this batch", so on
                  their own the two are indistinguishable in a link list.
                  aria-describedby points each at its own batch name, which adds
                  the context without changing the visible label out from under
                  the accessible name (2.5.3).
                */}
                <a
                  className="btn btn--primary"
                  href={whatsappLink(intake.message)}
                  aria-describedby={`admit-title-${intake.id}`}
                >
                  Ask about this batch
                </a>
              </div>
            </div>
          ))}
        </div>

        {admissions.length > 1 ? (
          <div className="admit-dots">
            {admissions.map((intake, i) => (
              <button
                key={intake.id}
                type="button"
                className="admit-dot"
                aria-label={intake.title}
                aria-current={i === current ? "true" : undefined}
                onClick={() => go(i)}
              />
            ))}
          </div>
        ) : null}
      </Reveal>
    </section>
  );
}
