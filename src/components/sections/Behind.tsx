import { Reveal } from "@/components/ui/Reveal";
import { behind } from "@/content/programmes";
import { whatsappLink } from "@/content/site";

/**
 * The academy's clearest differentiator as one centred statement, three
 * figures and one call to action. It sits between the results and the
 * skills wing because that is where the question "and what if it did not go
 * well" arrives.
 */
export function Behind() {
  return (
    <section className="section" id="behind">
      <div className="wrap">
        <Reveal className="behind">
          <p className="eyebrow">{behind.eyebrow}</p>
          <h2>{behind.title}</h2>
          <p className="lede">{behind.body}</p>

          <div className="facts">
            {behind.facts.map((f) => (
              <div className="fact" key={f.figure}>
                <b className="tabular">{f.figure}</b>
                <span>{f.label}</span>
              </div>
            ))}
          </div>

          <div className="ctas ctas--center">
            <a className="btn btn--primary" href={whatsappLink(behind.message)}>
              Talk to us on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
