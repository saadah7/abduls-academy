import Image from "next/image";
import { Mark } from "@/components/ui/Mark";
import { careerCourses, nextgen, skillsProgramme } from "@/content/nextgen";
import { guessPapers, programmeGroups } from "@/content/programmes";
import { legalDocs } from "@/content/legal";
import { site, whatsappLink } from "@/content/site";
import { asset, route } from "@/lib/asset";

const MESSAGE = whatsappLink("Hello, I'd like to ask about Abdul's Academy.");

/**
 * Deep blue, rounded top corners, four columns: the academy, its programmes,
 * the skills wing under its own mark, and how to reach both. The free guess
 * papers live here as links because what exists is poster images, not files.
 * TODO: ask Abdul for the source PDFs so these become real downloads.
 */
export function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr-grid">
          <div>
            <a className="mark" href={route("/")} aria-label={`${site.name}, home`}>
              <Image src={asset("/logo.png")} alt={site.name} width={858} height={152} />
            </a>
            <p style={{ marginTop: "var(--sp-5)", maxWidth: "34ch" }}>
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.line3}
            </p>
            <p style={{ marginTop: "var(--sp-3)" }}>Classes in {site.languages}.</p>
            <p style={{ marginTop: "var(--sp-3)" }}>
              {site.hours.map((h) => `${h.days}, ${h.time}.`).join(" ")}
            </p>
          </div>

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
            <h4 style={{ marginTop: "var(--sp-8)" }}>Free guess papers</h4>
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
            <span className="ftr-tile">
              <Mark k="nextgen" />
            </span>
            <h4>{nextgen.name}</h4>
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

        <div className="ftr-base">
          <p style={{ fontSize: "inherit", color: "inherit" }}>
            {site.name}, {site.address.area}.
          </p>
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
