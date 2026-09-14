import { Calendar03Icon } from "@hugeicons/core-free-icons";
import { Icon } from "@/components/ui/Icon";
import { Mark } from "@/components/ui/Mark";
import { Reveal } from "@/components/ui/Reveal";
import { admission, whatsappLink } from "@/content/site";

/**
 * The one dated intake, as a centred banner on its own light band between the
 * header and the hero: the date, the batch, one way to ask about it.
 *
 * It began as one line under the figures. A whole dated admissions board was
 * cut from this page in the 2026-09-11 pass for being too much content, and
 * this is deliberately still not that board: one date, one batch name, no
 * countdown, no "limited seats". On 2026-09-15 Saad's review notes moved it
 * above the hero ("shift this banner to the top, above hero", the slot PW
 * uses for its banner) and asked for it taller and centred. The two free
 * assistance lines sat here briefly the same day and came out on his note
 * that they are "not a part of the batches"; anything more in this banner
 * needs real facts about the batch (fee, timings, duration) from the client.
 *
 * The marks above the title are the bodies that conduct the two exams (Saad:
 * "add eapcet and neet logos here"). Neither exam has a mark of its own, so
 * the rule the boards follow applies: TSCHE sets EAPCET, NTA sets NEET. The
 * order follows the title.
 */
export function Admission() {
  return (
    <section className="admit" aria-label="Admissions">
      <div className="wrap">
        <Reveal className="admit-row" stagger>
          <div className="marks admit-marks">
            {admission.marks.map((m) => (
              <Mark k={m} key={m} />
            ))}
          </div>
          <p className="admit-date">
            <Icon icon={Calendar03Icon} size={16} />
            Next batch, {admission.date}
          </p>
          <p className="admit-title">{admission.title}</p>
          <a className="btn btn--primary" href={whatsappLink(admission.message)}>
            Ask about this batch
          </a>
        </Reveal>
      </div>
    </section>
  );
}
