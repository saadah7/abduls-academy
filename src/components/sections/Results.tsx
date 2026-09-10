"use client";

import { useState } from "react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { Icon } from "@/components/ui/Icon";
import { Mark } from "@/components/ui/Mark";
import type { Board } from "@/content/results";

/** Rows shown per board before the reader asks for all of them. */
const PREVIEW = 5;

/**
 * One card per board, the board's own mark in the head, the top five rows
 * on each, and a single button that opens every board to its full list.
 *
 * The client's standing instruction is full transparency: every name, every
 * mark, exactly as the board awarded it. The page honours that one click
 * away rather than as every row on first load. Rank order is the poster's
 * own and is never re-sorted here.
 */
export function ResultsBoard({ boards }: { boards: Board[] }) {
  const [all, setAll] = useState(false);
  const hidden = boards.reduce((n, b) => n + Math.max(0, b.students.length - PREVIEW), 0);

  return (
    <>
      <div className="boards">
        {boards.map((board) => {
          const shown = all ? board.students : board.students.slice(0, PREVIEW);
          const rest = board.students.length - shown.length;
          return (
            <article className="card board" key={board.id}>
              <div className="board-head">
                <div className="board-brand">
                  <Mark k={board.mark} />
                  <div>
                    <h3>{board.name}</h3>
                    <p className="board-authority">{board.authority}</p>
                  </div>
                </div>
                {board.claim ? <span className="badge">100% results</span> : null}
              </div>

              <ol className="rows">
                {shown.map((s) => (
                  <li className="row" key={`${board.id}-${s.rank}`}>
                    <span className="row-rank tabular">{s.rank}</span>
                    <span className="row-name">
                      {s.name}
                      {s.note ? <span className="row-note">{s.note}</span> : null}
                      {/* Hall ticket numbers render only when one has actually
                          been transcribed. See src/content/results.ts. */}
                      {s.roll ? (
                        <span className="row-note tabular">Hall ticket {s.roll}</span>
                      ) : null}
                    </span>
                    <span className="row-figures">
                      {s.score ? <span className="tabular">{s.score}</span> : null}
                      {s.percent ? <span className="row-percent tabular">{s.percent}</span> : null}
                    </span>
                  </li>
                ))}
              </ol>

              {rest > 0 ? <p className="board-more">and {rest} more</p> : null}
            </article>
          );
        })}
      </div>

      {hidden > 0 ? (
        <div className="results-foot">
          <button
            type="button"
            className="btn btn--secondary"
            aria-expanded={all}
            onClick={() => setAll((v) => !v)}
          >
            {all ? "Show the top five only" : "Show every name and mark"}
            <Icon icon={ArrowDown01Icon} size={16} className={all ? "flip" : undefined} />
          </button>
        </div>
      ) : null}
    </>
  );
}
