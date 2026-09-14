import Image from "next/image";
import { Mark } from "@/components/ui/Mark";
import { careerCourses, nextgen, skillsProgramme } from "@/content/nextgen";
import { guessPapers, programmeGroups } from "@/content/programmes";
import { legalDocs } from "@/content/legal";
import { site, whatsappLink } from "@/content/site";
import { asset, route } from "@/lib/asset";

const MESSAGE = whatsappLink("Hello, I'd like to ask about Abdul's Academy.");

/**
 * Deep blue, rounded top corners. Four equal link columns: programmes, the
 * free guess papers, the skills wing under its own mark, and how to reach
 * both, which is where the address, languages and hours live too. Under
 * them a base row: the mark, the legal links, the creed. The guess papers
 * live here as links because what exists is poster images, not files.
 * TODO: ask Abdul for the source PDFs so these become real downloads.
 *
 * Reorganised 2026-09-15 on Saad's notes ("refine the footer, organize
 * properly, and in mobile the footer is too long"; "technically the address
 * and all should come at the bottom right"). Before, the brand block with
 * the address was a wide first column and the guess papers a second list
 * under the programmes, so that column ran longest and a phone stacked
 * everything into one column about four screens tall. Now the four lists
 * are equal, a phone shows them two across, and the contact details sit
 * together in the last column, bottom right on every width.
 *
 * The NextGen column is headed by its mark and short name: the full name
 * beside the tile ran to three lines in a 170px phone column.
 */
export function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr-grid">
          <div>
            <h4>Programmes</h4>
            <ul>
              {programmeGroups.map((g) => (
                <li key={g.id}>
                  <a href={route("/#programmes")}>{g.stage}</a>
                </li>
              ))}
              <li>
                <a href={route("/#results")}>Results 2026</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Free guess papers</h4>
            <ul>
              {guessPapers.map((p) => (
                <li key={p.subject}>
                  <a href={p.href} target="_blank" rel="noreferrer noopener">
                    {p.subject}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>
              {/* The NextGen mark has a white ground, so on the deep band it sits in a tile. */}
              <span className="ftr-tile">
                <Mark k="nextgen" />
              </span>
              {nextgen.shortName}
            </h4>
            <ul>
              {careerCourses.map((c) => (
                <li key={c.label}>
                  <a href={route("/#nextgen")}>{c.label}</a>
                </li>
              ))}
              <li>
                <a href={route("/#nextgen")}>{skillsProgramme.title}</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Get in touch</h4>
            {/* One block, so the column stays heading over body on the subgrid rows. */}
            <div className="ftr-contact">
              <address>
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.line3}
              </address>
              <p>
                Classes in {site.languages}.
                <br />
                {site.hours.map((h) => `${h.days}, ${h.time}.`).join(" ")}
              </p>
              <ul>
                {site.phones.map((p) => (
                  <li key={p.tel}>
                    <a className="tabular" href={`tel:${p.tel}`}>
                      {p.display}
                    </a>
                  </li>
                ))}
                <li>
                  <a href={MESSAGE}>WhatsApp</a>
                </li>
                <li>
                  <a href={site.instagram} target="_blank" rel="noreferrer noopener">
                    Instagram {site.instagramHandle}
                  </a>
                </li>
                <li>
                  <a href={site.facebook} target="_blank" rel="noreferrer noopener">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href={site.maps} target="_blank" rel="noreferrer noopener">
                    Find us on Maps
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="ftr-base">
          <a className="mark" href={route("/")} aria-label={`${site.name}, home`}>
            <Image src={asset("/logo.png")} alt={site.name} width={858} height={152} />
          </a>
          <ul className="ftr-legal">
            {legalDocs.map((d) => (
              <li key={d.slug}>
                <a href={route(`/${d.slug}`)}>{d.title}</a>
              </li>
            ))}
          </ul>
          <div className="creed">
            {site.creed.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/** Sticky call and WhatsApp bar, phones only. */
export function CallBar() {
  return (
    <div className="bar">
      <a href={`tel:${site.phones[0].tel}`}>Call the academy</a>
      <a href={MESSAGE}>WhatsApp</a>
    </div>
  );
}
