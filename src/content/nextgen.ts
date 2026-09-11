/**
 * NextGen AI Training Institute: the academy's skills wing, run out of the
 * same building on New Malakpet. Confirmed by the client as part of Abdul's
 * Academy rather than a separate business: two academies, one address.
 *
 * Sourced from @abdulsacademy posts of 18 Aug, 28 Aug, 30 Aug and 4 Sept 2026,
 * and the tagged account @nextgenaitraininginstitute.
 *
 * THE GOOGLE CLAIM IS NOW PUBLISHED, ONCE, AND NOT FROM HERE. The posters say
 * the course is "taught by an AI engineer at Google". This file withheld it
 * until it could be confirmed, because it is a specific claim about a named
 * employer and the kind that does real damage if it is wrong. The client
 * confirmed it on 2026-09-12, and it is published on the faculty card as
 * "Senior AI Engineer at Google" against Abdul Aziz. The provenance lives with
 * it, in src/content/faculty.ts. Do not restate it in the NextGen copy: one
 * claim, one place, one record of who stands behind it.
 */

import type { MarkKey } from "./marks";

export const nextgen = {
  name: "NextGen AI Training Institute",
  relation: "The academy's skills wing, same building on New Malakpet.",
  lede:
    "A degree gets you started. This is the part that gets you hired: practical software, AI tools and the English to interview in.",
  phone: { display: "89786 76960", tel: "+918978676960" },
} as const;

/**
 * Generic icons for the skills and courses that are not a single brand.
 * Resolved to Hugeicons in the component so this file stays pure data.
 */
export type TechIcon = "code" | "web" | "app" | "english" | "ai";

export type Tech = {
  label: string;
  /** A brand mark, where the skill is one product. */
  mark?: MarkKey;
  /** Otherwise a generic icon. */
  icon?: TechIcon;
  detail?: string;
};

/** The four career courses launched on 4 September 2026. */
export const careerCourses: Tech[] = [
  {
    label: "Data Science, Gen AI and Agentic AI",
    icon: "ai",
    detail: "The whole modern stack, built into projects rather than lectured at.",
  },
  { label: "AutoCAD", icon: "code", detail: "Drafting and design, for civil and mechanical routes." },
  { label: "Full Stack Web Development", icon: "web", detail: "Front end, back end and deployment." },
  { label: "Full Stack App Development", icon: "app", detail: "Mobile apps, built and shipped." },
];

/** The thirty day programme. Nine skills, one price. */
export const skillsProgramme = {
  title: "Nine skills in thirty days",
  price: "₹999",
  wasPrice: "₹4,999",
  duration: "30 days",
  skills: [
    { label: "MS Office", mark: "office" },
    { label: "Advanced Excel", mark: "excel" },
    { label: "Tally", mark: "tally" },
    { label: "Canva and digital marketing", mark: "canva" },
    { label: "Social media handling", mark: "instagram" },
    { label: "Coding basics", icon: "code" },
    { label: "AI tools for web development", icon: "web" },
    { label: "AI tools for app development", icon: "app" },
    { label: "Basic English", icon: "english" },
  ] as Tech[],
  includes: [
    "Free laptop access",
    "Air-conditioned classrooms",
    "Course certification",
    "Resume building",
    "Free one-to-one career consultation",
  ],
} as const;

/** The four lines on the hero card. Short forms of the courses above. */
export const nextgenHighlights = [
  "Data Science, Gen AI and Agentic AI",
  "Full Stack Web and App Development",
  "AutoCAD",
  "Nine skills in 30 days, ₹999",
] as const;
