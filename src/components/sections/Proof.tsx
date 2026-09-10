import { stats } from "@/content/site";

/**
 * Three figures directly under the hero, as on the reference. No borders, no
 * counting animation: every one of these is checkable against a poster.
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
