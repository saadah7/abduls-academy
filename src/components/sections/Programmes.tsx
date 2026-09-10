import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { Icon } from "@/components/ui/Icon";
import { Mark } from "@/components/ui/Mark";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { programmeGroups } from "@/content/programmes";
import { site, whatsappLink } from "@/content/site";

/**
 * Four cards, one per stage. Each opens with the marks of the boards or
 * universities it prepares for, then three lines, then a demo link that
 * already says which stage the student is at.
 */
export function Programmes() {
  return (
    <section className="section" id="programmes">
      <div className="wrap">
        <Reveal>
          <SectionHead
            eyebrow={site.name}
            title="What we teach."
            lede="Every board from Class 6 to 10, both Intermediate years, and engineering at OU and JNTU. Three free demo classes on all of it."
          />
        </Reveal>

        <Reveal className="cards cards--4">
          {programmeGroups.map((g) => (
            <article className="card" key={g.id}>
              <div className="marks">
                {g.marks.map((m) => (
                  <Mark k={m} key={m} />
                ))}
              </div>
              <h3>{g.stage}</h3>
              <p>{g.who}</p>
              <ul className="list">
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a className="more" href={whatsappLink(g.message)}>
                Book a demo
                <Icon icon={ArrowRight01Icon} size={16} />
              </a>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
