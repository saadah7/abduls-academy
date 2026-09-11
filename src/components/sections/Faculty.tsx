import { Mark } from "@/components/ui/Mark";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { faculty } from "@/content/faculty";

/**
 * The three people the client asked to name, with the credential he gave each
 * and nothing added. No subjects, no batch assignments, no photographs: see
 * the provenance note at the top of src/content/faculty.ts for why each line
 * reads the way it does and which of them is the academy's own published
 * wording.
 *
 * Each card opens with the marks of the organisations its credential names,
 * the way the programme cards open with the marks of the boards they prepare
 * for. A card whose line names no organisation opens with nothing.
 *
 * The name comes before the title, not after it. Only one of the three has a
 * title, so an eyebrow above the name dropped that one name a line below the
 * other two and the row read as broken. Name first puts all three on the same
 * baseline and leaves the uneven line at the bottom of the card, where a
 * ragged edge is what a card grid looks like anyway.
 */
export function Faculty() {
  return (
    <section className="section" id="faculty">
      <div className="wrap">
        <Reveal>
          <SectionHead eyebrow="Faculty" title="Who will actually teach you." />
        </Reveal>

        <Reveal className="cards cards--3">
          {faculty.map((t) => (
            <article className="card teacher" key={t.name}>
              <div className="marks marks--credential">
                {t.marks?.map((m) => (
                  <Mark k={m} key={m} />
                ))}
              </div>
              <h3>{t.name}</h3>
              {t.title ? <p className="teacher-title">{t.title}</p> : null}
              <p className="teacher-cred">{t.credential}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
