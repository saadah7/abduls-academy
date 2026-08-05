/**
 * The nine-plus teaching lanes, tagged by the stage a visitor is currently at.
 * The hero-to-footer argument of the site is that one academy covers every row
 * here, so the stage tags drive the "tell us where you are" filter.
 */

export type Stage = "school" | "inter" | "engg" | "grad";

export const stageFilters: { id: Stage | "all"; label: string }[] = [
  { id: "all", label: "Show everything" },
  { id: "school", label: "I'm in Class 6 to 10" },
  { id: "inter", label: "I'm in Intermediate" },
  { id: "engg", label: "I'm in Diploma or Engineering" },
  { id: "grad", label: "I've finished studying" },
];

export type Programme = {
  title: string;
  cadence: string;
  blurb: string;
  cta: string;
  stages: Stage[];
};

export const programmes: Programme[] = [
  {
    title: "Class 6 to 10",
    cadence: "Year round",
    blurb:
      "SSC, CBSE and ICSE, every subject.",
    cta: "3 free demo classes",
    stages: ["school"],
  },
  {
    title: "Intermediate",
    cadence: "Year round",
    blurb:
      "MPC, BiPC, CEC and MEC, with FA preparation batches.",
    cta: "3 free demo classes",
    stages: ["school", "inter"],
  },
  {
    title: "Diploma & Engineering",
    cadence: "Per semester",
    blurb:
      "OU and JNTU. Semester subjects and backlog clearing, all branches.",
    cta: "3 free demo classes",
    stages: ["engg"],
  },
  {
    title: "EAMCET & POLYCET",
    cadence: "Crash batches",
    blurb:
      "Crash courses timed to the exam calendar, six hours daily.",
    cta: "3 free demo classes",
    stages: ["school", "inter"],
  },
  {
    title: "ECET, ICET & PGECET",
    cadence: "Crash batches",
    blurb:
      "Direct entry into B.Tech second year. Plus ICET for MBA and MCA.",
    cta: "3 free demo classes",
    stages: ["engg", "grad"],
  },
  {
    title: "NIOS & TOSS",
    cadence: "Admissions open",
    blurb:
      "Open schooling for Class 10 and Intermediate, gap years included.",
    cta: "Talk to us",
    stages: ["school", "inter", "grad"],
  },
  {
    title: "Spoken English",
    cadence: "12 weeks",
    blurb:
      "Real conversation, not grammar drills.",
    cta: "7 day free trial",
    stages: ["school", "inter", "engg", "grad"],
  },
  {
    title: "IELTS, PTE & TOEFL",
    cadence: "45 days",
    blurb:
      "Weekly mock tests, plus university application guidance.",
    cta: "Talk to us",
    stages: ["engg", "grad"],
  },
  {
    title: "Job ready bootcamp",
    cadence: "3 months",
    blurb:
      "Full stack, a mobile app shipped to the Play Store, and AI agents in Python.",
    cta: "3 free demo classes",
    stages: ["engg", "grad"],
  },
  {
    title: "Summer camp",
    cadence: "April to June",
    blurb:
      "Public speaking, sport, Quran and akhlaaq, art and life skills.",
    cta: "Ask about dates",
    stages: ["school"],
  },
];

/**
 * Icon keys map to Hugeicons free exports in src/components/Sections.tsx.
 * Kept as keys rather than imported components so this file stays pure data.
 */
export type ReasonIcon = "calendar" | "award" | "projector" | "batch" | "fees" | "concept";

export const reasons: { title: string; body: string; icon: ReasonIcon }[] = [
  {
    icon: "calendar",
    title: "Three free <em>demo classes</em>",
    body: "Sit in, watch how a subject is actually taught, then decide. You pay nothing until you have seen the teaching.",
  },
  {
    icon: "award",
    title: "Faculty who <em>cleared the exam</em>",
    body: "Founded and taught by Abdul Haadi Sir, 4th Rank in PGECET. Every teacher here has sat the paper they teach.",
  },
  {
    icon: "projector",
    title: "Projector <em>based sessions</em>",
    body: "Previous papers and worked solutions on screen, so you see the method rather than copying a blackboard.",
  },
  {
    icon: "batch",
    title: "Batches small enough <em>to be noticed</em>",
    body: "Every student gets called on. Nobody sits at the back of a hall of two hundred and quietly falls behind.",
  },
  {
    icon: "fees",
    title: "Fees stated <em>up front</em>",
    body: "Affordable, told to you plainly before you enrol, with no charge appearing later in the term.",
  },
  {
    icon: "concept",
    title: "Concept first, <em>then the paper</em>",
    body: "Understanding before technique, in that order. It is slower in week one and much faster by the exam.",
  },
];

export const rescue = [
  {
    big: "200+",
    title: "Backlogs cleared",
    body: "Diploma and B.Tech subjects across OU and JNTU. 90% of our students cleared their backlog last semester.",
  },
  {
    big: "1 year",
    title: "Saved with ECET",
    body: "Direct lateral entry into B.Tech second year for diploma holders. One exam, one year of your life back.",
  },
  {
    big: "NIOS",
    title: "& TOSS open schooling",
    body: "A gap of a year or ten is not a problem. We handle admission, subject choice and the exam preparation.",
  },
  {
    big: "0",
    title: "Years lost",
    body: "Intermediate not cleared? There is almost always a route that does not cost you the academic year. Come and ask.",
  },
];

/** TODO: replace each src once Abdul sends the real photographs. */
export const campusShots = [
  { need: "The building from the street", ratio: "4:3" },
  { need: "A batch mid session", ratio: "4:3" },
  { need: "Results day, group photo", ratio: "4:3" },
];
