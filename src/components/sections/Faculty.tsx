import { Mark } from "@/components/ui/Mark";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { faculty } from "@/content/faculty";

/**
 * The four people named on this page, with the credential given for each and
 * nothing added. No subjects, no batch assignments, no photographs: see the
 * provenance note at the top of src/content/faculty.ts for why each line reads
 * the way it does and which of them is the academy's own published wording.
 *
 * THE HEAD DOES NOT SAY "teach", because one of the four does not. It read
 * "The people who teach here." while all three entries were teaching staff;
 * Saad's card (Marketing Director) went in on 2026-09-16 and the line would
 * have stated something untrue of him. Four cards also retire cards--3, which
 * would have left him alone on a second row.
 *
 * Each card opens with the marks of the organisations its credential names,
 * the way the programme cards open with the marks of the boards they prepare
 * for. A card whose line names no organisation opens with nothing.
 *
 * The name comes before the title, not after it. An eyebrow above the name
 * dropped the name of any card without a title a line below the rest, and the
 * row read as broken. All four carry a title now, but name-first is what keeps
 * them on one baseline and it stays.
 *
 * THE CARD READS TOP TO BOTTOM as marks, name, role, qualification, and the
 * qualification is pinned to the floor of the card rather than left to follow
 * the role (Saad, 2026-09-16: "first line names in a single line ... and their
 * role and the bottom then their qualifications on the extreme bottom"). The
 * marks row keeps a fixed height whether a card has marks or not, and holds
 * one line, so all four names sit on one baseline and all four qualifications
 * sit on another. Both edges are ruled; only the middle is free to breathe.
 */
export function Faculty() {
  return (
    <section className="section" id="faculty">
      <div className="wrap">
        <Reveal>
          <SectionHead eyebrow="Faculty" title="The people behind the academy." />
        </Reveal>

        <Reveal className="cards cards--4" stagger>
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
