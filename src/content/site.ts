/**
 * Single source of truth for everything the academy can change without a designer.
 * Kept as typed data (not inline JSX) so a CMS can be dropped in later without a rewrite.
 */

export const site = {
  name: "Abdul's Academy",
  tagline: "empowering minds",
  creed: ["Clarity", "Purpose", "Results"],
  // TODO: confirm with Abdul, currently absent from the masthead
  establishedYear: null as number | null,
  address: {
    line1: "16-8-726, Opposite Noor Masjid",
    line2: "Near Akbar Towers, Nawab Shah Alam Khan College",
    line3: "New Malakpet, Hyderabad, Telangana",
    area: "New Malakpet, Hyderabad",
    landmark: "Opposite Noor Masjid",
  },
  phones: [
    { display: "88016 48481", tel: "+918801648481" },
    { display: "89786 76960", tel: "+918978676960" },
  ],
  // TODO: confirm this is the number that actually answers WhatsApp
  whatsappNumber: "918801648481",
  whatsapp: "https://wa.me/918801648481",
  // TODO: replace with the real Google Maps place link
  maps: "#",
  languages: "English, Urdu, Telugu",
  demoClasses: 3,
} as const;

export const stats = [
  { value: 100, suffix: "%", label: "Pass rate in SSC, CBSE & ICSE" },
  { value: 200, suffix: "+", label: "Engineering backlogs cleared" },
  { value: 313, suffix: "", label: "Best rank, TS ICET" },
  { value: 30, suffix: "+", label: "Free college seats won" },
] as const;

export const marquee = [
  "SSC", "CBSE", "ICSE", "MPC", "BiPC", "CEC", "MEC",
  "EAMCET", "POLYCET", "ECET", "TG ICET", "PGECET",
  "NIOS", "TOSS", "OU", "JNTU",
  "IELTS", "PTE", "TOEFL", "Spoken English", "Full Stack", "AI & ML",
] as const;
