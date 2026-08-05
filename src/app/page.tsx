import { Location01Icon } from "@hugeicons/core-free-icons";
import { Icon } from "@/components/Icon";
import { Header } from "@/components/Header";
import { ScrollProgress } from "@/components/ScrollProgress";
import { QuestionCard } from "@/components/QuestionCard";
import { DemoWidget } from "@/components/DemoWidget";
import { Stats } from "@/components/Stats";
import { Marquee } from "@/components/Marquee";
import { Results } from "@/components/Results";
import { Programmes } from "@/components/Programmes";
import { Reveal } from "@/components/Reveal";
import { Reasons, Rescue, Faculty, Campus, Visit, Footer, CallBar } from "@/components/Sections";
import { site } from "@/content/site";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />

      <main id="top">
        {/*
          ---------- hero ----------
          Centred single column with the interactive card full width directly
          below, not beside. Both design references (miter.com,
          arcade.software) do exactly this, and the earlier split layout was
          rejected. See docs/PLAN.md.
        */}
        <section className="hero">
          <div className="wrap">
            <div className="hero-inner">
            <p className="eyebrow an d1">
              <Icon icon={Location01Icon} size={15} />
              {site.address.area} &nbsp;&middot;&nbsp; {site.address.landmark}
            </p>
              <h1 className="an d2">
                One academy, from Class 6 to{" "}
                <span className="hl">
                  your first job
                  <i />
                </span>
                .
              </h1>
              <p className="lede an d3">
                Abdul&rsquo;s Academy teaches SSC, CBSE and ICSE, then Intermediate, then Diploma
                and Engineering, then the entrance exams, spoken English and job skills that
                follow. Taught by faculty who cleared these papers themselves.
              </p>
            {/* The hero's visual IS the first action, as on arcade.software.
                Submitting composes a prefilled WhatsApp booking. */}
            <div className="an d4">
              <DemoWidget />
            </div>

              <div className="hero-links an d5">
                <a className="btn-2" href="#results">
                  See the 2026 results
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Social proof immediately after the hero, as on both references. We
            have no client logos, so the hard numbers do that job. */}
        <section className="proof">
          <div className="wrap">
            <Stats />
          </div>
        </section>

        <Marquee />

        {/* ---------- results ---------- */}
        <section className="sec" id="results">
          <div className="wrap">
            <Reveal>
              <p className="eyebrow">Results &middot; 2026</p>
              <h2>
                They sat the exam.
                <br />
                Here is what they got.
              </h2>
              <p className="lede">
                Every student below prepared at this academy. Marks exactly as awarded by the board,
                nothing rounded up and nobody left off the list.
              </p>
            </Reveal>

            <Results />

            {/* TODO: hall ticket numbers are not in src/content/results.ts yet.
                They must be typed in from the official result sheets, never
                guessed. See the header comment in that file. */}
            <p className="foot-note">
              Published in full, every student who sat the exam, with marks exactly as the board
              awarded them. Shown with the consent of students and their families.
            </p>
          </div>
        </section>

        {/* ---------- programmes ---------- */}
        <section className="sec tinted" id="programmes">
          <div className="wrap">
            <Reveal>
              <p className="eyebrow">Programmes</p>
              <h2>Tell us where you are.</h2>
              <p className="lede">
                A student who joins in Class 6 is still with us when they are clearing a JNTU
                backlog or sitting IELTS.{" "}
                <strong>No other academy in Malakpet covers the whole route.</strong> Pick your
                stage and we will show you only what applies.
              </p>
            </Reveal>

            <Programmes />
          </div>
        </section>

        <Reasons />
        <Rescue />
        <Faculty />

        {/* The question card lived in the hero until the hero took arcade's
            widget pattern. It belongs here instead: it demonstrates the
            "concept first, then the paper" claim the faculty section makes. */}
        <section className="sec tinted">
          <div className="wrap">
            <Reveal>
              <p className="eyebrow">Our method</p>
              <h2>Try a question from one of our papers.</h2>
              <p className="lede">
                Answer it and we show you the reasoning, not just the mark. That order is the whole
                method.
              </p>
            </Reveal>
            <div className="hero-visual" style={{ marginTop: "2.5rem" }}>
              <QuestionCard />
            </div>
          </div>
        </section>

        <Campus />
        <Visit />
      </main>

      <Footer />
      <CallBar />
    </>
  );
}
