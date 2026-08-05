"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { boards, type Student } from "@/content/results";

/**
 * Results by board.
 *
 * Uniform rows rather than a card grid. Cards were tried and read as uneven:
 * student counts (6, 10, 7, 4, 4) never divided evenly into columns, so every
 * board ended on an orphan row, and each card held so little content that it
 * looked hollow. Rows are identical height at any count.
 *
 * Rank numbers are deliberately absent. The point is completeness, not ranking,
 * and the entrance-exam board holds outcomes rather than a ranked cohort.
 *
 * Tabs carry a sliding indicator measured from the live button so it stays
 * correct at any width and after the webfont swaps in.
 */
export function Results() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [ind, setInd] = useState({ left: 0, width: 0 });

  const measure = useCallback(() => {
    const el = tabRefs.current[active];
    if (el) setInd({ left: el.offsetLeft, width: el.offsetWidth });
  }, [active]);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  useEffect(() => {
    document.fonts?.ready.then(measure);
  }, [measure]);

  function onKey(e: React.KeyboardEvent, i: number) {
    const next = e.key === "ArrowRight" ? i + 1 : e.key === "ArrowLeft" ? i - 1 : -1;
    if (next < 0 || next >= boards.length) return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  const board = boards[active];
  const all: (Student & { badge?: string })[] = [board.topper, ...board.rest];

  return (
    <>
      <div className="tabs" role="tablist" aria-label="Results by board">
        {boards.map((b, i) => (
          <button
            key={b.id}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            className="tab"
            role="tab"
            type="button"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKey(e, i)}
          >
            {b.tab}
          </button>
        ))}
        <div className="ind" style={{ width: ind.width, transform: `translateX(${ind.left}px)` }} />
      </div>

      <div className="panel" role="tabpanel" key={board.id}>
        <div className="rsum">
          <span>
            <b>{all.length}</b> listed
          </span>
          <span>
            <b>{board.topper.score}</b> highest
          </span>
          <span className="rsum-auth">{board.authority}</span>
        </div>

        <div className="rlist">
          {all.map((s, i) => (
            <div className={i === 0 ? "rrow top" : "rrow"} key={`${board.id}-${s.name}`}>
              <div>
                {i === 0 && <span className="badge">{s.badge ?? "Highest"}</span>}
                <span className="nm">{s.name}</span>
                {s.roll && <i className="roll">Hall ticket {s.roll}</i>}
                {s.note && <i>{s.note}</i>}
              </div>
              <b>{s.score}</b>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
