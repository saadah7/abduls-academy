import { ArrowRight01Icon, Location01Icon } from "@hugeicons/core-free-icons";
import { Icon } from "@/components/ui/Icon";
import { Mark } from "@/components/ui/Mark";
import { nextgen, nextgenHighlights } from "@/content/nextgen";
import { programmeGroups } from "@/content/programmes";
import { site, whatsappLink } from "@/content/site";

const BOOK = whatsappLink(
  "Hello, I found you on your website. I'd like to book the 3 free demo classes.",
);

/**
 * One deep blue band, centred copy, two cards.
 *
 * The two cards are the page's whole argument: two academies in one building.
 * Abdul's Academy on the left, the tuition. NextGen AI Training Institute on
 * the right, the skills. Each card opens with its own mark, lists what it
 * covers in four lines and links to its own section.
 */
export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero-copy">
          <p className="eyebrow">
            <Icon icon={Location01Icon} size={14} />
            {site.address.area}
          </p>

          <h1>From Class 6 to your first job, under one roof.</h1>

          <p className="lede">
            {site.name} teaches Class 6 to 10, Intermediate, Diploma and Engineering.{" "}
            {nextgen.name}, in the same building, teaches the skills that get you hired.
          </p>

          <div className="ctas ctas--center">
            <a className="btn btn--white" href={BOOK}>
              Book {site.demoClasses} free demo classes
            </a>
            <a className="btn btn--ghost" href="#visit">
              Contact us
            </a>
          </div>
        </div>

        <div className="hero-cards">
          <a className="hero-card" href="#programmes">
            <span className="hero-card-logo" data-shape="wide">
              <Mark k="abduls" />
            </span>
            <p className="hero-card-title">Tuition and exam coaching</p>
            <ul className="list">
              {programmeGroups.map((g) => (
                <li key={g.id}>{g.stage}</li>
              ))}
            </ul>
            <span className="more">
              See the programmes
              <Icon icon={ArrowRight01Icon} size={16} />
            </span>
          </a>

          <a className="hero-card" href="#nextgen">
            <span className="hero-card-logo">
              <Mark k="nextgen" />
            </span>
            <p className="hero-card-title">Skills and AI courses</p>
            <ul className="list">
              {nextgenHighlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <span className="more">
              See the courses
              <Icon icon={ArrowRight01Icon} size={16} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
