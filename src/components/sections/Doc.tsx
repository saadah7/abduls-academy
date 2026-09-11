import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import type { LegalDoc } from "@/content/legal";
import { route } from "@/lib/asset";

/**
 * The shell both legal pages render in: deep blue head, then one measured
 * column of prose.
 *
 * Deliberately not the marketing page's furniture. There is no section head,
 * no eyebrow and no reveal-per-block, because a privacy policy is read top to
 * bottom rather than scanned, and a 65-character measure does more for that
 * than anything else on this page could. The one Reveal wraps the whole
 * column, so the text does not arrive in pieces.
 */
export function Doc({ doc }: { doc: LegalDoc }) {
  return (
    <main className="doc-page">
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
        <Reveal className="doc">
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
        </Reveal>
      </div>
    </main>
  );
}
