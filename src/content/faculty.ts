/**
 * The three people the client asked to name, 2026-09-12. Abdul Bari came in a
 * follow-up the same day: "add one more sir, Abdul Bari (aiml engineer)".
 *
 * WHY THERE ARE NO SUBJECTS HERE. Asked what each man teaches, the client
 * said "no roles/subjects just general". So each entry is a name and the
 * credential he gave, and nothing else. Do not fill the gap by inferring a
 * subject from a Google review or a poster: reviews name "hadi sir" and
 * "Bari" for engineering, which is not the same as the academy stating it.
 *
 * PROVENANCE, because these are claims about identifiable people.
 *
 * - "Founder" for Abdul Hadi is the academy's own published line
 *   (@abdulsacademy reel of 2 Oct 2025: "Founder: Abdul Hadi").
 * - "4th Rank, PGECET" and "Gold Medalist" are the client's assertion of
 *   2026-09-12. An earlier pass had cut the PGECET badge for being
 *   unverified; he has now asked for it by name, so it is published on his
 *   say-so.
 * - "Senior AI Engineer at Google, ex Tech Mahindra" is also his assertion of
 *   2026-09-12. The NextGen posters said "taught by an AI engineer at Google"
 *   and this site deliberately withheld it until he confirmed. It is a
 *   specific, checkable claim about a named employer: if it is ever wrong it
 *   is the one line on this page that does real damage, so it stays exactly
 *   as he worded it and gets corrected the day he says otherwise.
 * - "AI and ML engineer" for Abdul Bari is his wording, "aiml engineer",
 *   expanded. No employer was given, so his card carries no logo. Google
 *   reviews name a "Bari" teaching engineering subjects, which is consistent
 *   but is a reviewer's word and is not used here as a source.
 *
 * The marks are the employers named in the credential and nothing more. Do not
 * decorate a card with a logo for an organisation the line does not name.
 */

import type { MarkKey } from "./marks";

export type Teacher = {
  name: string;
  /** The academy's own title for them, where they publish one. */
  title?: string;
  /** The credential, worded as the client gave it. */
  credential: string;
  /** Marks for the organisations the credential names. Nothing else. */
  marks?: MarkKey[];
};

export const faculty: Teacher[] = [
  {
    name: "Abdul Hadi",
    title: "Founder",
    credential: "4th Rank, PGECET. Gold Medalist.",
    // TSCHE conducts PGECET, so its emblem is the mark the credential names.
    marks: ["tsche"],
  },
  {
    name: "Abdul Aziz",
    credential: "Senior AI Engineer at Google. Formerly Tech Mahindra.",
    marks: ["google", "techmahindra"],
  },
  {
    name: "Abdul Bari",
    credential: "AI and ML engineer.",
  },
];
