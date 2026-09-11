import {
  AiBrain01Icon,
  LanguageSkillIcon,
  MobileProgramming01Icon,
  SourceCodeIcon,
  WebProgrammingIcon,
} from "@hugeicons/core-free-icons";
import type { IconSvgElement } from "@hugeicons/react";
import { Icon } from "@/components/ui/Icon";
import { Mark } from "@/components/ui/Mark";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { BrandIcon } from "@/components/ui/BrandIcon";
import {
  careerCourses,
  nextgen,
  skillsProgramme,
  type Tech,
  type TechIcon,
} from "@/content/nextgen";
import { whatsappLink } from "@/content/site";

const ENQUIRE = whatsappLink(
  `Hello, I'd like to know more about the courses at ${nextgen.name}.`,
);

const ICONS: Record<TechIcon, IconSvgElement> = {
  code: SourceCodeIcon,
  web: WebProgrammingIcon,
  app: MobileProgramming01Icon,
  english: LanguageSkillIcon,
  ai: AiBrain01Icon,
};

/** A brand mark where the skill is one product, a stroke icon otherwise. */
function TechMark({ t, size }: { t: Tech; size: number }) {
  if (t.mark) return <Mark k={t.mark} />;
  if (t.label === "AutoCAD") return <BrandIcon name="autocad" size={size} />;
  if (t.label === "Full Stack Web Development") return <BrandIcon name="html5" size={size} />;
  return <Icon icon={ICONS[t.icon ?? "code"]} size={size} />;
}

/**
 * The second academy. Its mark above the head, then the thirty day programme
 * as one deep blue card beside a grid of the nine skills with their marks,
 * then the four career courses.
 *
 * The offer sits on its own tinted band inside an otherwise white section.
 * The client asked on 2026-09-12 for the price to be highlighted and said how:
 * "highlighting just change the bg". The card itself stays on the deep blue
 * rather than going bright: white on --blue-500 is 4.05:1, so the price would
 * read but "Free laptop access" under it would not, and --blue-500 is
 * display-only for exactly that reason. Changing the ground behind the card
 * gets the emphasis without putting small text below AA.
 */
export function NextGen() {
  return (
    <section className="section" id="nextgen">
      <div className="wrap">
        <Reveal>
          <SectionHead
            mark={<Mark k="nextgen" />}
            eyebrow={nextgen.name}
            title="The skills wing, in the same building."
            lede={nextgen.lede}
          />
        </Reveal>

        <div className="ng-band">
          <Reveal className="ng">
            <article className="feature">
              <p className="eyebrow">{skillsProgramme.duration}, one price</p>
              <h3>{skillsProgramme.title}</h3>
              <div className="price">
                <b className="tabular">{skillsProgramme.price}</b>
                <s className="tabular">{skillsProgramme.wasPrice}</s>
              </div>
              <ul className="list">
                {skillsProgramme.includes.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <div className="ctas">
                <a className="btn btn--white" href={ENQUIRE}>
                  Ask about the programme
                </a>
              </div>
            </article>

            <ul className="skills">
              {skillsProgramme.skills.map((s) => (
                <li className="skill" key={s.label}>
                  <span className="skill-ico">
                    <TechMark t={s} size={24} />
                  </span>
                  {s.label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="cards cards--4">
          {careerCourses.map((c) => (
            <article className="card" key={c.label}>
              <span className="card-ico">
                <TechMark t={c} size={24} />
              </span>
              <h3>{c.label}</h3>
              <p>{c.detail}</p>
            </article>
          ))}
        </Reveal>

        <Reveal>
          <p className="note note--center" style={{ marginTop: "var(--sp-8)" }}>
            {nextgen.name} answers on{" "}
            <a className="link tabular" href={`tel:${nextgen.phone.tel}`}>
              {nextgen.phone.display}
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
