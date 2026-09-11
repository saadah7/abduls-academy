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
import { Mark } from "@/components/ui/Mark";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { boards, competitive, competitiveExams, passClaim } from "@/content/results";

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
 * Bands alternate deliberately, and the alternation is the only section
 * separator this design has: deep, white, tint, white. Two sections of the
 * same ground never touch except Reasons and Questions, which read as one
 * block and always have. Taking the tint off NextGen to make its offer band
 * pop harder broke that for four sections in a row and was reverted; the
 * offer band steps up to --blue-200 instead.
 */
export default function Home() {
  return (
    <>
      <a className="skip" href="#programmes">
        Skip to the programmes
      </a>

      <Header />

      <main>
        <Hero />
        <Proof />
        <Admission />
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
              The competitive result leads, as one wide card. Why it is not a
              fifth board card is argued in src/content/results.ts.
            */}
            <Reveal className="card standout">
              <div className="standout-brand">
                <Mark k={competitive.mark} />
                <div>
                  <h3>{competitive.title}</h3>
                  <p className="standout-authority">{competitive.authority}</p>
                </div>
              </div>
              <p className="standout-figure">
                <span>
                  <strong>{competitive.student}</strong>
                  {competitive.exam}
                </span>
                <b className="tabular">{competitive.rank}</b>
              </p>
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
    </>
  );
}
