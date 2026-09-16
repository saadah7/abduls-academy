/**
 * What the bottom-right notices show: the batches and offers that are live or
 * announced. Saad, 2026-09-15: "a sticky bot kinda thing on the page's bottom
 * right, that highlights the courses/batches active or upcoming, kinda like
 * notifications", then "build the notification thingy for now with what info
 * you have right now".
 *
 * EVERY LINE HERE IS ALREADY ON THE PAGE, with its provenance where it lives:
 * the dated intake (site.ts `admissions`, the client's 2026-09-12 message),
 * the thirty-day skills programme (nextgen.ts, the academy's own posters),
 * the entrance-exam batches (results.ts `competitiveExams`, the profile post
 * of 2 Oct 2025, which is why that notice asks for the date rather than
 * stating one), and the demo classes (site.ts `demoClasses`). Nothing is
 * dated here that is not dated at its source. When the client sends real
 * batch dates, add them at the source and reflect them here.
 */

import { nextgen, skillsProgramme } from "./nextgen";
import { competitiveExams } from "./results";
import { admissions, site, whatsappLink } from "./site";

/**
 * The banner's slide and this notice are the same intake, matched by id rather
 * than by position: reorder the two slides and a positional read would quietly
 * point the "eapcet-neet" notice at the skills batch, duplicating the notice
 * directly below it.
 */
const intake = admissions.find((a) => a.id === "eapcet-neet") ?? admissions[0];

export type Announcement = {
  id: string;
  /** Small label above the title: what kind of notice this is. */
  kind: string;
  title: string;
  /** One line under the title: the date, the price, the way in. */
  meta: string;
  href: string;
  /** Leaves the page (WhatsApp), so it opens in a new tab. */
  external?: boolean;
};

export const announcements: Announcement[] = [
  {
    id: "eapcet-neet",
    kind: "Upcoming batch",
    title: intake.title,
    meta: intake.when,
    href: whatsappLink(intake.message),
    external: true,
  },
  {
    id: "skills",
    kind: "Skills programme",
    title: skillsProgramme.title,
    meta: `${skillsProgramme.price} at ${nextgen.shortName}, ${skillsProgramme.duration}, from ${skillsProgramme.startsOn}`,
    href: "#nextgen",
  },
  {
    id: "competitive",
    kind: "Entrance coaching",
    title: `Batches for ${competitiveExams}`,
    meta: "Ask for the next start date",
    href: whatsappLink(
      "Hello, I'd like to know when the next POLYCET, EAPCET, ECET or ICET batch starts.",
    ),
    external: true,
  },
  {
    id: "demo",
    kind: "Free demo",
    title: `${site.demoClasses} free demo classes`,
    meta: "Any programme, booked on WhatsApp",
    href: whatsappLink(
      "Hello, I found you on your website. I'd like to book the 3 free demo classes.",
    ),
    external: true,
  },
];
