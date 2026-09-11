/**
 * Single source of truth for everything the academy can change without a designer.
 * Kept as typed data (not inline JSX) so a CMS can be dropped in later without a rewrite.
 *
 * SOURCING RULE for this file and every other file in src/content:
 * every claim here is traceable to the academy's own Instagram (@abdulsacademy,
 * 61 posts read on 2026-09-11) or to a result poster published there. Anything
 * that could not be traced was removed rather than softened. If you add a claim,
 * put the source next to it.
 */

export const site = {
  name: "Abdul's Academy",
  tagline: "empowering minds",
  creed: ["Clarity", "Purpose", "Results"],
  instagram: "https://www.instagram.com/abdulsacademy/",
  instagramHandle: "@abdulsacademy",
  /** Given by Abdul on 2026-09-11. A profile.php link because the page has no vanity URL yet. */
  facebook: "https://www.facebook.com/profile.php?id=61594266991215",

  /** TODO: confirm with Abdul. Absent from the profile, the bio and all 61 posts. */
  establishedYear: null as number | null,

  address: {
    line1: "16-8-726, Opposite Noor Masjid",
    line2: "Near Akbar Towers, Nawab Shah Alam Khan College",
    line3: "New Malakpet, Hyderabad, Telangana",
    area: "New Malakpet, Hyderabad",
    landmark: "Opposite Noor Masjid",
  },

  /**
   * Three numbers are in circulation across the account:
   *   8801648481  bio, and every post up to mid-2026. Treated as the call line.
   *   8978676960  the bio's own wa.me link, and every NextGen post. WhatsApp line.
   *   9701825617  paired with the first in the Sept 2025 posts.
   * TODO: ask Abdul which line answers what, and whether 9701825617 is still live.
   */
  phones: [
    { display: "88016 48481", tel: "+918801648481", note: "Academy" },
    { display: "89786 76960", tel: "+918978676960", note: "WhatsApp & NextGen" },
  ],
  whatsappNumber: "918978676960",
  whatsapp: "https://wa.me/918978676960",

  /**
   * The real Google Business place, sent by Abdul on 2026-09-12
   * (maps.app.goo.gl/3qNbCgb8S2dbmUaP8, which resolves to place ID
   * ChIJhWuYf9OZyzsRdhdRxeOkuv0, "Abdul's Academy", Coaching Center). Written
   * as the place_id form rather than the short link so it cannot rot into
   * somebody else's listing. This replaces the address search the site used
   * before. Reviews from the same profile are in src/content/reviews.ts.
   */
  maps: "https://www.google.com/maps/place/?q=place_id:ChIJhWuYf9OZyzsRdhdRxeOkuv0",

  languages: "English, Urdu, Telugu",
  demoClasses: 3,

  /**
   * The listing's opening hours, read off the Google Business Profile on
   * 2026-09-12: 11 am to 11 pm Monday to Saturday, 3:30 pm to 11 pm on Sunday.
   *
   * Two things these are not. They are not batch timings: a specific batch
   * runs when its poster says it runs, and the site does not claim otherwise.
   * And the one-off Ganesh Chaturthi note Google showed against that Monday is
   * a holiday exception, not a standing hour, so it is not reproduced here.
   * Re-read the profile if Abdul changes the listing.
   */
  hours: [
    {
      days: "Monday to Saturday",
      time: "11am to 11pm",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "11:00",
      closes: "23:00",
    },
    {
      days: "Sunday",
      time: "3:30pm to 11pm",
      dayOfWeek: ["Sunday"],
      opens: "15:30",
      closes: "23:00",
    },
  ],

  /** From the Sept 2025 profile post, which lists the academy's standing features. */
  separateBatches: true,
} as const;

/**
 * Compose a WhatsApp deep link with the message already written.
 * Every primary CTA on the site goes through here so the wording stays consistent.
 */
export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Four outcomes. Each label says what a student achieved, never what this
 * website chose to publish.
 *   100%  printed on the academy's own SSC and ICSE 2026 result posters. CBSE
 *         was added on 2026-09-12: the client marked up a screenshot with
 *         "CBSE is missing in pass rate section" and confirmed it when asked.
 *         The CBSE poster prints percentages only and makes no pass claim, so
 *         that third board rests on his word rather than on a printed line.
 *   97%   Mohammed Muzammil Bagmar, Intermediate second year, 934/1000.
 *   70+   His figure, same day, in his words: "70 + students secured free seat
 *         in top colleges by studying EAPCET etc". No year and no college list
 *         were given, so none are stated.
 *   200+  backlog subjects cleared, OU and JNTU.
 * TS ICET rank 313 (Ruqaiya Abdul Hakeem, 18 June 2026) is not a strip figure;
 * it is a named result row on the competitive board in results.ts.
 */
export const stats = [
  { value: "100%", label: "Pass rate in SSC, CBSE and ICSE, 2026" },
  { value: "97%", label: "Top score, Intermediate 2026" },
  { value: "70+", label: "Free seats secured in top colleges" },
  { value: "200+", label: "Engineering backlogs cleared" },
] as const;

/**
 * The tinted strip above the header. Client, 2026-09-12: "Can we also add free
 * 1:1 Career Assistance & Free 1:1 Job Assistance in header section with
 * different light color." Career consultation was already promised inside the
 * NextGen programme list; this says both where a visitor reads them first.
 */
export const assistance = [
  "Free 1:1 career assistance",
  "Free 1:1 job assistance",
] as const;

/**
 * The one dated intake on the page. Client, 2026-09-12: "just 25sep for now,
 * its Long term EAPCET & NEET batch". No year, no fee and no timings were
 * given, so none are invented. An earlier pass cut a whole dated admissions
 * board for being too much content; this is one line, not that board.
 */
export const admission = {
  date: "25 September",
  title: "Long term EAPCET and NEET batch",
  message:
    "Hello, I'd like to know about the long term EAPCET and NEET batch starting 25 September.",
} as const;
