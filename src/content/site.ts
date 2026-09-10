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
   * A Maps *search* for the address, not a fabricated place ID.
   * TODO: replace with the real Google Business place link once Abdul sends it.
   */
  maps: "https://www.google.com/maps/search/?api=1&query=Abdul%27s%20Academy%2C%2016-8-726%2C%20Opposite%20Noor%20Masjid%2C%20New%20Malakpet%2C%20Hyderabad",

  languages: "English, Urdu, Telugu",
  demoClasses: 3,

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
 * Three outcomes, each traceable to a poster. Each label says what a student
 * achieved, never what this website chose to publish.
 *   100%  stated on the academy's own SSC and ICSE 2026 result posters.
 *   97%   Mohammed Muzammil Bagmar, Intermediate second year, 934/1000.
 *   200+  backlog subjects cleared, OU and JNTU.
 * The TS ICET rank 313 (Ruqaiya Abdul Hakeem, poster of 18 June 2026) is real
 * but needs a sentence of context, so it is not a strip figure.
 */
export const stats = [
  { value: "100%", label: "Pass rate in SSC and ICSE, 2026" },
  { value: "97%", label: "Top score, Intermediate 2026" },
  { value: "200+", label: "Engineering backlogs cleared" },
] as const;
