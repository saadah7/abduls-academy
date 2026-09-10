/**
 * What Abdul's Academy teaches, grouped by the stage a student is at.
 *
 * Four cards, three lines each, and the marks of the boards or universities
 * each card prepares for. A parent needs to answer one question here, "do you
 * teach my child's class", and then talk to a human. Detail belongs in that
 * conversation.
 *
 * Source for the coverage list: the academy's own profile post of 19 Sept 2025,
 * the most complete statement it has published, plus the 28 July 2026 "classes
 * available for" post.
 */

import type { MarkKey } from "./marks";

export type ProgrammeGroup = {
  id: string;
  stage: string;
  /** One line a parent can match themselves against. */
  who: string;
  /** The boards or universities this card prepares for. See marks.ts. */
  marks: MarkKey[];
  /** Three short lines at most. Titles only. */
  items: string[];
  /** The prefilled WhatsApp message for this stage's demo booking. */
  message: string;
};

export const programmeGroups: ProgrammeGroup[] = [
  {
    id: "school",
    stage: "Class 6 to 10",
    who: "SSC, CBSE, ICSE and IGCSE. Every subject.",
    marks: ["ssc", "cbse", "cisce", "igcse"],
    items: [
      "Year-round tuition for all four boards",
      "Quarterly and half-yearly exam preparation",
      "Summer camp, April to May",
    ],
    message: "Hello, my child is in Class 6 to 10. I'd like to book the 3 free demo classes.",
  },
  {
    id: "inter",
    stage: "Intermediate",
    who: "MPC, BiPC, CEC and MEC. Both years.",
    marks: ["tsbie"],
    items: [
      "Year-round tuition, all four streams",
      "FA preparation batches",
      "EAMCET and POLYCET crash batches",
    ],
    message: "Hello, I'm in Intermediate. I'd like to book the 3 free demo classes.",
  },
  {
    id: "engg",
    stage: "Diploma and Engineering",
    who: "OU and JNTU, semesters and backlogs.",
    marks: ["ou", "jntuh"],
    items: [
      "Semester subjects, Civil and CSE",
      "Backlog clearing, all branches",
      "ECET, ICET and PGECET",
    ],
    message: "Hello, I'm in Diploma or Engineering. I'd like to book the 3 free demo classes.",
  },
  {
    id: "open",
    stage: "Open schooling and English",
    who: "For anyone who stopped, or wants to start again.",
    marks: ["nios", "toss"],
    items: [
      "NIOS and TOSS, Class 10 and Intermediate equivalents",
      "Spoken English, seven day free trial",
      "IELTS, PTE and TOEFL, with weekly mock tests",
    ],
    message: "Hello, I'd like to ask about open schooling or the English classes.",
  },
];

/**
 * Why parents choose this academy. Four, not six: every line below is something
 * the academy has published about itself, and the two that were cut (concept
 * first, free guess papers) are still on the page elsewhere.
 */
export type ReasonIcon = "demo" | "batches" | "tests" | "languages";

export const reasons: { icon: ReasonIcon; title: string; body: string }[] = [
  {
    icon: "demo",
    title: "Three free demo classes",
    body: "Sit in, watch a subject being taught, then decide.",
  },
  {
    icon: "batches",
    title: "Separate batches for boys and girls",
    body: "Standing policy across every programme.",
  },
  {
    icon: "tests",
    title: "Weekly and monthly tests",
    body: "A problem shows up in October, not in March.",
  },
  {
    icon: "languages",
    title: "Taught in English, Urdu and Telugu",
    body: "Say which you prefer when you message.",
  },
];

/**
 * The academy's clearest differentiator, in its own framing: "Failed
 * Intermediate? Left Madrasa studies midway?" Most academies quietly do not
 * want this student. One band, three figures, one call to action.
 *
 * "85 to 90%" is the academy's own published figure for its engineering
 * students last semester.
 */
export const behind = {
  eyebrow: "If things went wrong",
  title: "Fallen behind? There is usually a path that does not cost you the year.",
  body:
    "Failed Intermediate, backlogs at OU or JNTU, or left madrasa studies midway. Open schooling, backlog batches and ECET lateral entry are the work this academy does most of.",
  facts: [
    { figure: "200+", label: "backlog subjects cleared at OU and JNTU" },
    { figure: "85 to 90%", label: "of engineering students cleared last semester" },
    { figure: "1 year", label: "saved with ECET lateral entry into B.Tech" },
  ],
  message: "Hello, I have fallen behind in my studies and would like to know my options.",
} as const;

/**
 * Guess papers the academy has actually published. These are poster images on
 * Instagram, not PDFs, so they link out. Listed in the footer.
 * TODO: ask Abdul for the source PDFs so these become real downloads.
 */
export const guessPapers = [
  { subject: "SSC Maths", published: "March 2026", href: "https://www.instagram.com/p/DWTpIv4k3kX/" },
  { subject: "SSC Biology", published: "April 2026", href: "https://www.instagram.com/p/DWySQqEkzrC/" },
  { subject: "Intermediate Maths 1A", published: "February 2026", href: "https://www.instagram.com/p/DVQ3ZpmE7Jl/" },
];
