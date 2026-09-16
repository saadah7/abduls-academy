import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { Proof } from "@/components/sections/Proof";
import { Admission } from "@/components/sections/Admission";
import { Programmes } from "@/components/sections/Programmes";
import { ResultsBoard } from "@/components/sections/Results";
import { Gallery } from "@/components/sections/Gallery";
import { Faculty } from "@/components/sections/Faculty";
import { Reviews } from "@/components/sections/Reviews";
import { Behind } from "@/components/sections/Behind";
import { NextGen } from "@/components/sections/NextGen";
import { Reasons } from "@/components/sections/Reasons";
import { Faq } from "@/components/sections/Faq";
import { Visit } from "@/components/sections/Visit";
import { CallBar, Footer } from "@/components/sections/Footer";
import { Notices } from "@/components/Notices";
import { Figure } from "@/components/ui/Figure";
import { Mark } from "@/components/ui/Mark";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { boards, competitiveExams, highlights, passClaim } from "@/content/results";

/**
 * The canonical lives here rather than on the layout. On the layout every page
 * inherited it, which gave the 404 and the legal pages a canonical pointing at
 * this page: a crawler reading that is being told the 404 is the home page.
 */
export const metadata = { alternates: { canonical: "/" } };

/**
 * One page, one goal: three free demo classes booked over WhatsApp.
 *
 * Two academies in one building, in the order a parent decides in: what do
 * you teach, did it work, what if we are already behind, what comes after,
 * why you, questions, where are you.
 *
 * 2026-09-11 pass, against cadmus.io as the layout reference. Cut: the
 * dated admissions board, the guess-paper band (now footer links), the
 * six-reason grid (now four), the route line, the results tile mosaic, and
 * the numbered chapter rules. Every section is a centred head and one grid.
 *
 * 2026-09-12, on the client's notes: the results moved onto the deep band so
 * they read as the centre of the page, and four sections joined the scroll,
 * each answering something a parent asks out loud. One dated intake is back
 * as a single line under the figures, not as the board that was cut.
 *
 * 2026-09-15, on Saad's review notes: that intake line moved above the hero,
 * the slot PW uses for its banner, and the figures took the tint so two
 * white sections never meet. The single competitive card became a row of
 * three highlight cards, the figures count up, and every grid cascades in.
 *
 * Bands alternate deliberately, and the alternation is the only section
 * separator this design has: strip, deep, tint, white, deep, tint, white and
 * on. Two sections of the same ground never touch except Reasons and
 * Questions, which read as one block and always have. Taking the tint off
 * NextGen to make its offer band pop harder broke that for four sections in
 * a row and was reverted; the offer band steps up to --blue-200 instead.
 */
export default function Home() {
  return (
    <>
      <a className="skip" href="#programmes">
        Skip to the programmes
      </a>

      <Header />

      <main>
        <Admission />
        <Hero />
        <Proof />
        <Programmes />

        <section className="section section--deep" id="results">
          <div className="wrap">
            <Reveal>
              <SectionHead
                eyebrow="Results 2026"
                title="How our students did in 2026."
                lede={`Board results, exactly as the boards awarded them. ${passClaim}`}
              />
            </Reveal>

            {/*
              Three figures lead, as white cards on the band, before a single
              name. What the row is, and why POLYCET is not in it, is argued
              in src/content/results.ts.
            */}
            <Reveal className="cards cards--3 highlights" stagger>
              {highlights.map((h) => (
                <article className="card highlight" key={h.label}>
                  <div className="marks marks--credential">
                    {h.marks?.map((m) => (
                      <Mark k={m} key={m} />
                    ))}
                  </div>
                  <p className="highlight-figure">
                    <Figure value={h.figure} className="tabular" />
                  </p>
                  <h3>{h.label}</h3>
                  <p className="highlight-detail">{h.detail}</p>
                  {h.students?.length ? (
                    <ul className="highlight-names">
                      {h.students.map((s) => (
                        /*
                          The space is a real node, not formatting. JSX drops
                          whitespace that spans a newline, so rank and name
                          concatenate into "1500Syed Rayyan" for a screen
                          reader, for copy-paste and for find-in-page. The 4px
                          margin on the <b> only fixes the look of it.
                        */
                        <li key={s.name}>
                          <b className="tabular">{s.rank}</b>{" "}
                          {s.name}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}
            </Reveal>

            <ResultsBoard boards={boards} />

            <Reveal>
              <p className="note note--center results-exams">
                Batches also run for {competitiveExams}.
              </p>
            </Reveal>
          </div>
        </section>

        <Gallery />
        <Faculty />
        <Reviews />
        <Behind />
        <NextGen />
        <Reasons />
        <Faq />
        <Visit />
      </main>

      <Footer />
      <CallBar />
      <Notices />
    </>
  );
}
