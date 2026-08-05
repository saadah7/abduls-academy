import { Fragment } from "react";
import { marquee } from "@/content/site";

/** Doubled track so the -50% translate loops seamlessly. */
export function Marquee() {
  const run = (
    <span>
      {marquee.map((m) => (
        <Fragment key={m}>
          {m}
          <i />
        </Fragment>
      ))}
    </span>
  );

  return (
    <div className="mq" aria-hidden>
      <div className="mq-t">
        {run}
        {run}
      </div>
    </div>
  );
}
