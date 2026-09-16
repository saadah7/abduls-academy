/**
 * The three people the client asked to name, 2026-09-12. Abdul Bari came in a
 * follow-up the same day: "add one more sir, Abdul Bari (aiml engineer)".
 * Saad added himself on 2026-09-16, and he is the only one of the four who is
 * not teaching staff: see the provenance list below and the section head.
 *
 * Revised 2026-09-15 on the client's wording, relayed by Saad through the
 * site's review toolbar: "Abdul Hadi ~ Founder, Civil Engineer, 4th PGECET,
 * Gold Medalist" and "Abdul Bari ~ Managing Director, Gate, CSE AIML". Saad
 * added that Bari is a GATE topper, that "topper" must not appear, and that
 * his engineering degree is in AI and ML.
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
 *   say-so. "Civil Engineer" is his addition of 2026-09-15.
 * - "Senior AI Engineer at Google, ex Tech Mahindra" is also his assertion of
 *   2026-09-12. The NextGen posters said "taught by an AI engineer at Google"
 *   and this site deliberately withheld it until he confirmed. It is a
 *   specific, checkable claim about a named employer: if it is ever wrong it
 *   is the one line on this page that does real damage, so it stays exactly
 *   as he worded it and gets corrected the day he says otherwise.
 * - "Managing Director" and "GATE qualified" for Abdul Bari are the client's
 *   words of 2026-09-15. He called Bari a GATE topper and asked that the word
 *   not appear; no rank was given, so the line says qualified and no more.
 *   "Engineering degree in AI and ML" expands his "CSE AIML" as Saad read it.
 *   No employer was given, so his card carries no logo. Google reviews name a
 *   "Bari" teaching engineering subjects, which is consistent but is a
 *   reviewer's word and is not used here as a source.
 * - "Marketing Director" and "AI Engineer" are Saad's own words about himself,
 *   2026-09-16, through the site's review toolbar: "add one more, Saad Abdul
 *   Hakeem AI Engineer but my role at academy is Marketing director". He is
 *   the only entry here who does not teach, which is why the section head now
 *   reads "The people behind the academy." and not "The people who teach
 *   here." His line names no employer and no exam, so his card carries no
 *   mark. That changed later the same day on "add some logo on my card as
 *   well", then "something related to AI": his card now carries NextGen's
 *   mark and his line names NextGen, so the mark is accounted for the way
 *   every other mark on this page is. NextGen is the only AI mark this repo
 *   holds and it is the academy's own, which is the point. An outside AI
 *   company's logo was not an option: a third-party mark beside a person's
 *   name asserts that he works there, and nobody has said he does. The line
 *   reads as the institute he directs marketing for, NOT as the employer of
 *   his AI engineering, and if that is ever the wrong way round it is one
 *   string to correct. HIS NAME IS DELIBERATELY SHORTENED. He is Saad Abdul
 *   Hakeem and asked the card to read "Saad A.H." the same day, so that all
 *   four names hold one line at the 4-across card width: "shorten my name to
 *   Saad A.H. so that it fits the single line of all the four cards". It is his
 *   own name and his own call. Do not expand it back, and do not abbreviate
 *   anyone else's on the strength of it.
 * - "Instructor" for Abdul Aziz is Saad's of 2026-09-16, "Abdul Aziz is an
 *   instructor at the academy", and it fills the one gap the card grid had: his
 *   was the only card without a title. It is a role at the academy, not a
 *   subject, so it does not reopen the no-subjects rule above.
 *
 * MARKS FOLLOW THE CREDENTIAL, and nothing else. A card carries the mark of
 * the organisation its credential line actually names: the employer where the
 * line names an employer, the awarding body where the line names an exam. So
 * Abdul Aziz carries Google and Tech Mahindra because the line names them, and
 * Abdul Hadi carries TSCHE because TSCHE is the authority that sets PGECET.
 * Abdul Bari carries the GATE mark because his line names GATE, and GATE
 * publishes a mark of its own even though the IITs and IISc run it in
 * rotation (Saad, 2026-09-15: "add GATE logo"). Do not decorate a card with
 * a logo its credential does not account for.
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
    credential: "Civil Engineer. 4th Rank, PGECET. Gold Medalist.",
    // TSCHE conducts PGECET, so its emblem is the mark the credential names.
    marks: ["tsche"],
  },
  {
    name: "Abdul Aziz",
    title: "Instructor",
    credential: "Senior AI Engineer at Google. Formerly Tech Mahindra.",
    marks: ["google", "techmahindra"],
  },
  {
    name: "Abdul Bari",
    title: "Managing Director",
    credential: "GATE qualified. Engineering degree in AI and ML.",
    marks: ["gate"],
  },
  {
    // Saad Abdul Hakeem, shortened on his own instruction. See the note above.
    name: "Saad A.H.",
    title: "Marketing Director",
    credential: "AI Engineer. NextGen AI Training Institute.",
    marks: ["nextgen"],
  },
];
