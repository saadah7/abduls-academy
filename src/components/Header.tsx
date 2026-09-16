"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Cancel01Icon, Menu01Icon } from "@hugeicons/core-free-icons";
import { Icon } from "@/components/ui/Icon";
import { site, whatsappLink } from "@/content/site";
import { asset, route } from "@/lib/asset";

/*
  Written as full paths, not bare fragments. This header renders on the legal
  pages and the 404 as well, where "#results" would scroll a page that has no
  results section instead of going home to it. On the home page the browser
  still treats these as fragments, because the path already matches.
*/
const LINKS = [
  { href: route("/#programmes"), label: "Programmes" },
  { href: route("/#results"), label: "Results" },
  { href: route("/#nextgen"), label: "NextGen" },
  { href: route("/#visit"), label: "Visit" },
];

const BOOK = whatsappLink(
  "Hello, I found you on your website. I'd like to book the 3 free demo classes.",
);

/**
 * The sticky white bar: mark left, links centred, call to action right.
 *
 * Below 980px the links move into a side drawer: a panel at the right edge
 * over a scrim, under the bar. Saad, 2026-09-16: "nav in mbile should be like
 * a drawer with nice animation", then "it should be side drawer". Until then
 * it was a panel that simply appeared under the bar and pushed the page down,
 * with no transition at all on either edge. It enters from the right, the edge
 * the toggle sits on, so it reads as coming out of the button pressed.
 *
 * THE DRAWER IS A SIBLING OF <header>, NOT A CHILD, and has to be. `.hdr`
 * carries a backdrop-filter, and a filter makes an element the containing
 * block for every fixed-position descendant, so a drawer nested inside it
 * would resolve `inset` against the 68px bar rather than against the viewport
 * and open as a 68px sliver. Both pages that render this header mount it at
 * the top level, so out here `position: fixed` means the viewport.
 *
 * The motion is a CSS transition rather than keyframes or a JS animation: this
 * is a toggle, it gets pressed and re-pressed, and a transition is the only one
 * of the three that reverses cleanly from wherever it happens to be. 280ms on
 * the iOS sheet curve for the panel and 200ms for the scrim, the panel being
 * the one that travels; the links and the button cascade 40ms apart behind it,
 * and leave together, because a staggered exit reads as the drawer coming
 * apart rather than closing. Under reduced motion nothing translates and it
 * simply appears.
 *
 * A tinted strip of the two free 1:1 assistance lines sat above the bar from
 * 2026-09-12 until 2026-09-15, when Saad's review note took it out of the
 * header ("remove this from here"). The lines themselves stay in
 * src/content/site.ts as `assistance`.
 */
export function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLElement>(null);

  // Close on Escape, and whenever the viewport grows past the breakpoint, so
  // the drawer can never be left open behind a desktop layout.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const mq = window.matchMedia("(min-width: 981px)");
    const onChange = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, [open]);

  // While it is open the page behind must not scroll under it, and focus must
  // not be left on a control the reader can no longer see. preventScroll
  // because the panel is still off screen at the moment it takes focus, and
  // without it the browser scrolls the page to chase it.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // The drawer behaves modally: it dims the page, locks the scroll and closes
    // on an outside tap. Without this it only looked modal. Tabbing past its
    // last control walked straight into <main>, which is behind the scrim and
    // cannot be scrolled to, and a screen reader's virtual cursor reached all
    // of it. inert takes the page out of both the tab order and the
    // accessibility tree, and it goes on <main> rather than on everything so
    // the header, and with it the button that closes this, stays live.
    const main = document.querySelector("main");
    main?.setAttribute("inert", "");
    // Two frames, and both are load-bearing. The drawer carries visibility in
    // its transition, and an element that is visibility:hidden as far as style
    // is concerned cannot take focus. At the moment this effect runs the
    // transition is still at progress zero, where visibility computes as
    // hidden, so focus() here is silently refused and the reader is left on
    // the button behind the scrim. Forcing a layout read does not help, nor
    // does a single rAF, which runs before the recalc rather than after it.
    // One full frame later the open state has painted and the focus lands.
    let second = 0;
    const first = requestAnimationFrame(() => {
      second = requestAnimationFrame(() => panel.current?.focus({ preventScroll: true }));
    });
    return () => {
      cancelAnimationFrame(first);
      cancelAnimationFrame(second);
      document.body.style.overflow = previous;
      main?.removeAttribute("inert");
      // Only if the toggle is still rendered. When the drawer closes because
      // the viewport grew past 980px, the toggle is display:none by then and
      // focus() is a silent no-op, so focus would sit on a drawer that is also
      // gone and fall to <body>. offsetParent is null for a display:none
      // element, which is the cheap way to ask.
      if (toggle.current?.offsetParent) toggle.current.focus({ preventScroll: true });
    };
  }, [open]);

  return (
    <>
      <header className="hdr">
        <div className="wrap">
          <div className="mast">
            <a className="mark" href={route("/")} aria-label={`${site.name}, home`}>
              {/*
                Re-sourced at 858x152 from the academy's own result posters.
                TODO: replace with the vector mark once Abdul sends it.
              */}
              <Image src={asset("/logo.png")} alt={site.name} width={858} height={152} priority />
            </a>

            <nav className="nav" aria-label="Primary">
              {LINKS.map((l) => (
                <a key={l.href} href={l.href}>
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="mast-end">
              <a className="btn btn--primary btn--sm" href={BOOK}>
                Book a demo
              </a>
              <button
                type="button"
                className="nav-toggle"
                ref={toggle}
                aria-expanded={open}
                aria-controls="nav-panel"
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((v) => !v)}
              >
                <Icon icon={open ? Cancel01Icon : Menu01Icon} size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className="nav-scrim"
        data-open={open}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/*
        No aria-hidden when closed: the drawer is visibility:hidden then, which
        already takes it out of the accessibility tree and out of the tab
        order, and aria-hidden on an element that is about to hold focus is the
        contradiction screen readers complain about.
      */}
      <nav
        className="nav-panel"
        id="nav-panel"
        data-open={open}
        ref={panel}
        tabIndex={-1}
        aria-label="Primary"
      >
        <ul>
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-panel-cta">
          <a className="btn btn--primary btn--block" href={BOOK} onClick={() => setOpen(false)}>
            Book {site.demoClasses} free demo classes
          </a>
        </div>
      </nav>
    </>
  );
}
