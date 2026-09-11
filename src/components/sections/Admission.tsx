import { Calendar03Icon } from "@hugeicons/core-free-icons";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { admission, whatsappLink } from "@/content/site";

/**
 * The one dated intake, on its own light band directly under the figures.
 *
 * A whole dated admissions board was cut from this page in the 2026-09-11
 * pass for being too much content. This is deliberately not that board: one
 * date, one batch name, one way to ask about it, and the client's own
 * instruction for how to make it stand out (2026-09-12, "highlighting just
 * change the bg") means it earns a background and nothing else. No badge, no
 * countdown, no "limited seats".
 */
export function Admission() {
  return (
    <section className="admit" aria-label="Admissions">
      <div className="wrap">
        <Reveal className="admit-row">
          <p className="admit-copy">
            <span className="admit-date">
              <Icon icon={Calendar03Icon} size={16} />
              {admission.date}
            </span>
            <span className="admit-title">{admission.title}</span>
          </p>
          <a className="btn btn--primary btn--sm" href={whatsappLink(admission.message)}>
            Ask about this batch
          </a>
        </Reveal>
      </div>
    </section>
  );
}
