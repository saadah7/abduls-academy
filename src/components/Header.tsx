"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Cancel01Icon, CheckmarkCircle02Icon, Menu01Icon } from "@hugeicons/core-free-icons";
import { Icon } from "@/components/ui/Icon";
import { assistance, site, whatsappLink } from "@/content/site";
import { asset } from "@/lib/asset";

const LINKS = [
  { href: "#programmes", label: "Programmes" },
  { href: "#results", label: "Results" },
  { href: "#nextgen", label: "NextGen" },
  { href: "#visit", label: "Visit" },
];

const BOOK = whatsappLink(
  "Hello, I found you on your website. I'd like to book the 3 free demo classes.",
);

/**
 * A tinted strip of what is free here, then the sticky white bar: mark left,
 * links centred, call to action right. Below 980px the links move into a
 * panel under the bar rather than disappearing.
 *
 * The strip is inside the header block but outside the sticky element on
 * purpose. Two stacked rows pinned to the top of a 390px phone take a fifth
 * of the viewport away from the hero for the whole scroll, so the strip
 * scrolls away and only the bar pins.
 */
export function Header() {
  const [open, setOpen] = useState(false);

  // Close on Escape, and whenever the viewport grows past the breakpoint, so
  // the panel can never be left open behind a desktop layout.
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

  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <ul className="topbar-list">
            {assistance.map((a) => (
              <li key={a}>
                <Icon icon={CheckmarkCircle02Icon} size={15} />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <header className="hdr">
        <div className="wrap">
          <div className="mast">
            <a className="mark" href="#top" aria-label={`${site.name}, home`}>
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
                aria-expanded={open}
                aria-controls="nav-panel"
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((v) => !v)}
              >
                <Icon icon={open ? Cancel01Icon : Menu01Icon} size={20} />
              </button>
            </div>
          </div>

          <div className="nav-panel" id="nav-panel" data-open={open}>
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
          </div>
        </div>
      </header>
    </>
  );
}
