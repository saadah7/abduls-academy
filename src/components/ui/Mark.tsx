import Image from "next/image";
import { marks, type MarkKey } from "@/content/marks";
import { asset } from "@/lib/asset";

/**
 * A third-party logo at a CSS-controlled height. Image marks keep their
 * aspect ratio; text marks (a board with no logo of its own) render as a
 * small tile in the brand blue so the row still reads as a row of marks.
 *
 * Two shape flags, both set in marks.ts: `tall` lifts a portrait mark so it
 * does not read as a dot beside the round seals, and `wide` shortens a
 * wordmark so it does not run half the width of the card it sits in.
 *
 * Images are served as they are (static export, no optimiser), so the src is
 * run through asset() to pick up the deploy base path.
 */
export function Mark({ k, className }: { k: MarkKey; className?: string }) {
  const m = marks[k];
  if ("text" in m) {
    return (
      <span className={["mark-text", className].filter(Boolean).join(" ")} aria-label={m.alt}>
        {m.text}
      </span>
    );
  }
  return (
    <Image
      className={[
        "mark-img",
        "tall" in m && m.tall ? "mark-img--tall" : null,
        "wide" in m && m.wide ? "mark-img--wide" : null,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      src={asset(m.src)}
      alt={m.alt}
      width={m.w}
      height={m.h}
    />
  );
}
