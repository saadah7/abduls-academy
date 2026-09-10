import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { site, whatsappLink } from "@/content/site";

const MESSAGE = whatsappLink(
  "Hello, I'd like to ask about admissions at Abdul's Academy.",
);

/**
 * The reference's signature layout: a photograph with a white card floating
 * over it. The photograph is real, Felicitation Day for the Class 10 batch
 * of 2025-26, published by the academy on 4 May 2026.
 *
 * Still open with the client: the students in this photograph are
 * identifiable minors, so the consent that covers publishing names has to
 * cover this too. The "4th Rank in PGECET" badge that used to sit here was
 * removed because it appears in none of the academy's posts.
 */
export function Visit() {
  return (
    <section className="section section--tint" id="visit">
      <div className="wrap">
        <Reveal>
          <SectionHead
            eyebrow="Visit"
            title="Come and see the place."
            lede={`${site.address.landmark}, ${site.address.area}. Walk in, or message first and we will be expecting you.`}
          />
        </Reveal>

        <Reveal className="spot">
          <figure className="spot-photo">
            <Image
              src="/photos/felicitation-2026.jpg"
              alt="Students of the Class 10 batch of 2025-26 holding their certificates and medals on Felicitation Day, with Abdul Hadi Sir"
              width={1080}
              height={810}
              sizes="(max-width: 900px) 100vw, 860px"
            />
          </figure>

          <div className="spot-card">
            <p className="eyebrow">{site.name}</p>
            <h3>Abdul Hadi Sir founded it, and still teaches in it.</h3>
            <p>
              The coaching is built around the paper rather than the textbook, because he sat
              the paper himself.
            </p>
            <p className="addr">
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.line3}
            </p>
            <div className="ctas">
              <a className="btn btn--primary" href={MESSAGE}>
                Message on WhatsApp
              </a>
              <a
                className="btn btn--secondary"
                href={site.maps}
                target="_blank"
                rel="noreferrer noopener"
              >
                Open in Maps
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
