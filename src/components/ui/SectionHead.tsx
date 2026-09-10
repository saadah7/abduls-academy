import type { ReactNode } from "react";

/**
 * Centred eyebrow, heading and one-line lede, as on the reference, with an
 * optional mark above the eyebrow for a section that belongs to one of the
 * two academies.
 */
export function SectionHead({
  mark,
  eyebrow,
  title,
  lede,
  align = "center",
  id,
}: {
  mark?: ReactNode;
  eyebrow?: ReactNode;
  title: ReactNode;
  lede?: ReactNode;
  align?: "center" | "left";
  id?: string;
}) {
  return (
    <div className={align === "left" ? "head head--left" : "head"}>
      {mark ? <div className="head-mark">{mark}</div> : null}
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 id={id}>{title}</h2>
      {lede ? <p className="lede">{lede}</p> : null}
    </div>
  );
}
