import { Figure } from "@/components/ui/Figure";
import { Reveal } from "@/components/ui/Reveal";
import { stats } from "@/content/site";

/**
 * Four figures directly under the hero, as on the reference, on the pale
 * band. They count up the first time they scroll into view (Figure) and
 * arrive one after another (Reveal stagger); both were asked for in Saad's
 * review notes of 2026-09-15. Three are checkable against a poster; the
 * fourth, the free-seat count, is the client's own figure. Provenance for
 * each is in src/content/site.ts against the `stats` export.
 *
 * The band is tinted since the same day, when the admissions strip moved
 * above the hero: without it this white section met the white programmes
 * section, and band alternation is the only separator this page has.
 */
export function Proof() {
  return (
    <section className="proof" aria-label="Results at a glance">
      <div className="wrap">
        <Reveal className="stats" stagger>
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <Figure value={s.value} className="tabular" />
              <span>{s.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
