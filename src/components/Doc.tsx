import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";
import { Icon } from "@/components/ui/Icon";
import type { LegalDoc } from "@/content/legal";
import { route } from "@/lib/asset";

/**
 * The shell both legal pages render in: deep blue head, then one measured
 * column of prose.
 *
 * Deliberately not the marketing page's furniture: no section head, no
 * eyebrow, and no Reveal anywhere. A privacy policy is read top to bottom
 * rather than scanned, so a 65-character measure does more for it than motion
 * could.
 *
 * The no-Reveal part is not taste. Reveal emits `opacity: 0` into the static
 * HTML, and one wrapper around this column made the entire document invisible
 * until JavaScript ran: with JS off or a blocked chunk, /privacy rendered its
 * title and nothing under it. This is the page a parent is sent to in order to
 * get a child's name removed, so it has to render without JS. Dropping the
 * wrapper also keeps framer-motion, 117KB, off both legal pages entirely.
 */
export function Doc({ doc }: { doc: LegalDoc }) {
  return (
    <main className="doc-page" id="content">
      <div className="doc-head">
        <div className="wrap">
          <a className="doc-back" href={route("/")}>
            <Icon icon={ArrowLeft01Icon} size={16} />
            Back to the academy
          </a>
          <h1>{doc.title}</h1>
          <p className="lede">{doc.intro}</p>
          <p className="doc-updated">Last updated {doc.updated}</p>
        </div>
      </div>

      <div className="wrap">
        <div className="doc">
          {doc.sections.map((s) => (
            <section key={s.heading}>
              <h2>{s.heading}</h2>
              {s.body.map((para) => (
                <p key={para}>{para}</p>
              ))}
              {s.points ? (
                <ul className="list">
                  {s.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
