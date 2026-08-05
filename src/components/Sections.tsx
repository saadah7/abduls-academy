import Image from "next/image";
import {
  Award01Icon,
  BulbIcon,
  Calendar01Icon,
  Call02Icon,
  CheckmarkCircle02Icon,
  Image01Icon,
  Presentation01Icon,
  ReceiptIndianRupeeIcon,
  TranslateIcon,
  UserGroup02Icon,
} from "@hugeicons/core-free-icons";
import type { IconSvgElement } from "@hugeicons/react";
import { Reveal } from "./Reveal";
import { MagneticCTA } from "./MagneticCTA";
import { Icon } from "./Icon";
import { reasons, rescue, campusShots, type ReasonIcon } from "@/content/programmes";
import { site } from "@/content/site";

const REASON_ICONS: Record<ReasonIcon, IconSvgElement> = {
  calendar: Calendar01Icon,
  award: Award01Icon,
  projector: Presentation01Icon,
  batch: UserGroup02Icon,
  fees: ReceiptIndianRupeeIcon,
  concept: BulbIcon,
};

export function Reasons() {
  return (
    <section className="sec">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">Why here</p>
          <h2>
            Six reasons parents
            <br />
            send the second child too.
          </h2>
        </Reveal>
        <Reveal className="why" delay={0.05}>
          {reasons.map((r) => (
            <div className="w" key={r.title}>
              <span className="w-ico">
                <Icon icon={REASON_ICONS[r.icon]} size={20} />
              </span>
              <b dangerouslySetInnerHTML={{ __html: r.title }} />
              <p>{r.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function Rescue() {
  return (
    <section className="sec field" id="behind">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">If things went wrong</p>
          <h2>
            Behind on your degree?
            <br />
            Start here.
          </h2>
          <p className="lede">
            Backlogs, a dropped year, an exam that will not clear. Most academies quietly do not
            want this student. <strong>It is the work we are best at.</strong>
          </p>
        </Reveal>
        <Reveal className="rescue" delay={0.05}>
          {rescue.map((r) => (
            <div className="rc" key={r.title}>
              <span className="big">{r.big}</span>
              <b>{r.title}</b>
              <p>{r.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function Faculty() {
  return (
    <section className="sec">
      <div className="wrap fac">
        <Reveal>
          <p className="eyebrow">Who teaches</p>
          <span className="fac-badge">
            <Icon icon={Award01Icon} size={15} />
            4th Rank &middot; PGECET
          </span>
          <h2>Abdul Haadi Sir</h2>
          <p className="lede">
            He founded the academy and still teaches in it. The reason the coaching is built around
            the paper rather than the textbook is that he sat the paper himself, and ranked fourth in
            the state.
          </p>
          <div className="ctas" style={{ marginTop: "2rem" }}>
            <a className="btn-2" href="#visit">
              Meet him at a demo class
            </a>
          </div>
        </Reveal>
        <Reveal className="shots" delay={0.05} >
          {/* TODO: replace with the real photograph of Abdul Haadi Sir teaching. */}
          <div className="shot" style={{ aspectRatio: "5 / 4" }}>
            <em>
              <b>Photo needed</b>
              Abdul Haadi Sir teaching, projector lit &middot; 5:4
            </em>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Campus() {
  return (
    <section className="sec">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">The campus</p>
          <h2>Come and see the place.</h2>
          <p className="lede" style={{ marginBottom: "2.5rem" }}>
            Every competing website in Hyderabad runs on stock photography. These are the actual
            rooms, on the actual street, with the actual batches.
          </p>
        </Reveal>
        <Reveal className="shots" delay={0.05}>
          {campusShots.map((s) => (
            <div className="shot" key={s.need}>
              <Icon icon={Image01Icon} size={22} className="shot-ico" />
              <em>
                <b>Photo needed</b>
                {s.need} &middot; {s.ratio}
              </em>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function Visit() {
  return (
    <section className="sec" id="visit">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">Admissions</p>
          <h2>
            Walk in, or send
            <br />
            one message.
          </h2>
        </Reveal>
        <Reveal className="visit" delay={0.05}>
          <div>
            <p className="addr">
              {site.name}
              <br />
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.line3}
            </p>
            <div className="ctas" style={{ marginTop: "2rem" }}>
              <MagneticCTA href={site.whatsapp}>
                Message on WhatsApp <span className="ar">&rarr;</span>
              </MagneticCTA>
              <a className="btn-2" href={site.maps}>
                Open in Maps
              </a>
            </div>
          </div>
          <dl className="dl">
            {site.phones.map((p) => (
              <div key={p.tel}>
                <dt>
                  <Icon icon={Call02Icon} size={16} />
                  Phone
                </dt>
                <dd>
                  <a href={`tel:${p.tel}`}>{p.display}</a>
                </dd>
              </div>
            ))}
            <div>
              <dt>
                <Icon icon={Calendar01Icon} size={16} />
                Demo classes
              </dt>
              <dd>Three, free of charge</dd>
            </div>
            <div>
              <dt>
                <Icon icon={CheckmarkCircle02Icon} size={16} />
                Admissions
              </dt>
              <dd>Open, all programmes</dd>
            </div>
            <div>
              <dt>
                <Icon icon={TranslateIcon} size={16} />
                We speak
              </dt>
              <dd>{site.languages}</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap foot">
        <a className="mark" href="#top">
          <Image src="/logo.png" alt={`${site.name}, ${site.tagline}`} width={375} height={90} />
        </a>
        <div className="creed">
          {site.creed.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function CallBar() {
  return (
    <div className="bar">
      <a href={`tel:${site.phones[0].tel}`}>Call the academy</a>
      <a href={site.whatsapp}>WhatsApp</a>
    </div>
  );
}
