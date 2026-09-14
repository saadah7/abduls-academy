import { Figure } from "@/components/ui/Figure";
import { Reveal } from "@/components/ui/Reveal";
import { behind } from "@/content/programmes";
import { whatsappLink } from "@/content/site";

/**
 * The academy's clearest differentiator as one centred statement, three
 * figures and one call to action. It sits between the results and the
 * skills wing because that is where the question "and what if it did not go
 * well" arrives.
 *
 * Three Reveals rather than one around the block, on purpose. A Reveal
 * nested inside another inherits the outer one's "show" the moment the outer
 * enters view, which would fade the figures in while they are still below
 * the fold and before Figure has zeroed them. Siblings each wait for their
 * own line.
 */
export function Behind() {
  return (
    <section className="section" id="behind">
      <div className="wrap">
        <div className="behind">
          <Reveal>
            <p className="eyebrow">{behind.eyebrow}</p>
            <h2>{behind.title}</h2>
            <p className="lede">{behind.body}</p>
          </Reveal>

          <Reveal className="facts" stagger>
            {behind.facts.map((f) => (
              <div className="fact" key={f.figure}>
                <Figure value={f.figure} className="tabular" />
                <span>{f.label}</span>
              </div>
            ))}
          </Reveal>

          <Reveal className="ctas ctas--center">
            <a className="btn btn--primary" href={whatsappLink(behind.message)}>
              Talk to us on WhatsApp
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
