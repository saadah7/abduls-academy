import {
  Calendar01Icon,
  TaskDone01Icon,
  TranslateIcon,
  UserGroup02Icon,
} from "@hugeicons/core-free-icons";
import type { IconSvgElement } from "@hugeicons/react";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { reasons, type ReasonIcon } from "@/content/programmes";

const ICONS: Record<ReasonIcon, IconSvgElement> = {
  demo: Calendar01Icon,
  batches: UserGroup02Icon,
  tests: TaskDone01Icon,
  languages: TranslateIcon,
};

/** Four cards, one icon and two lines each. */
export function Reasons() {
  return (
    <section className="section" id="why">
      <div className="wrap">
        <Reveal>
          <SectionHead eyebrow="Why here" title="How we teach." />
        </Reveal>

        <Reveal className="cards cards--4">
          {reasons.map((r) => (
            <article className="card" key={r.title}>
              <span className="card-ico">
                <Icon icon={ICONS[r.icon]} size={22} />
              </span>
              <h3>{r.title}</h3>
              <p>{r.body}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
