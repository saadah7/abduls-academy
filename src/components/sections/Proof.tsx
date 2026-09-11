import { stats } from "@/content/site";

/**
 * Four figures directly under the hero, as on the reference. No borders, no
 * counting animation. Three are checkable against a poster; the fourth, the
 * free-seat count, is the client's own figure. Provenance for each is in
 * src/content/site.ts against the `stats` export.
 */
export function Proof() {
  return (
    <section className="proof" aria-label="Results at a glance">
      <div className="wrap">
        <div className="stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <b className="tabular">{s.value}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
