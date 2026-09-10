import Image from "next/image";
import { marks, type MarkKey } from "@/content/marks";

/**
 * A third-party logo at a CSS-controlled height. Image marks keep their
 * aspect ratio; text marks (a board with no logo of its own) render as a
 * small tile in the brand blue so the row still reads as a row of marks.
 *
 * SVGs are served as they are; next/image would only rasterise them.
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
      className={["mark-img", "tall" in m && m.tall ? "mark-img--tall" : null, className]
        .filter(Boolean)
        .join(" ")}
      src={m.src}
      alt={m.alt}
      width={m.w}
      height={m.h}
      unoptimized={m.src.endsWith(".svg")}
      sizes="160px"
    />
  );
}
