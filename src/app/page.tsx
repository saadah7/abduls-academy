import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { Proof } from "@/components/sections/Proof";
import { Programmes } from "@/components/sections/Programmes";
import { ResultsBoard } from "@/components/sections/Results";
import { Behind } from "@/components/sections/Behind";
import { NextGen } from "@/components/sections/NextGen";
import { Reasons } from "@/components/sections/Reasons";
import { Faq } from "@/components/sections/Faq";
import { Visit } from "@/components/sections/Visit";
import { CallBar, Footer } from "@/components/sections/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { boards, passClaim } from "@/content/results";

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
        <Programmes />

        <section className="section section--tint" id="results">
          <div className="wrap">
            <Reveal>
              <SectionHead
                eyebrow="Results 2026"
                title="How our students did in 2026."
                lede={`Board results, exactly as the boards awarded them. ${passClaim}`}
              />
            </Reveal>

            <ResultsBoard boards={boards} />
          </div>
        </section>

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
