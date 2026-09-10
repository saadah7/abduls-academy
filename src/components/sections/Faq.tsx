import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { faqs } from "@/content/faq";
import { whatsappLink } from "@/content/site";

const ASK = whatsappLink("Hello, I have a question about Abdul's Academy.");

/**
 * Five questions, native <details>: works with JavaScript off, keyboard
 * operable for free, no client bundle.
 */
export function Faq() {
  return (
    <section className="section" id="faq">
      <div className="wrap">
        <Reveal>
          <SectionHead eyebrow="Questions" title="Questions parents ask." />
        </Reveal>

        <Reveal className="faq">
          {faqs.map((f) => (
            <details className="faq-item" key={f.q}>
              <summary>
                {f.q}
                <span className="faq-mark" aria-hidden />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </Reveal>

        <Reveal>
          <p className="note note--center faq-foot">
            Something not answered here?{" "}
            <a className="link" href={ASK}>
              Ask on WhatsApp
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
