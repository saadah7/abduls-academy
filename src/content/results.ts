/**
 * 2026 results, transcribed from the academy's own result posters on Instagram.
 * Every poster was read at full resolution on 2026-09-11; sources are named
 * against each board below.
 *
 * THREE RULES, in order of how badly it goes if you break them.
 *
 * 1. NEVER INVENT A HALL TICKET NUMBER. `roll` exists because the client asked
 *    for full transparency, and it renders when present. It is empty on every
 *    row here because the 2026 posters do not carry hall ticket numbers. The one
 *    poster that does (17 May 2025, "batch 24-2025") is a different cohort
 *    entirely and its numbers must never be moved onto these names. A fabricated
 *    hall ticket number against a real child's name is far worse than an absent
 *    one, and consent from the families is not optional either way.
 *
 * 2. NEVER COMPUTE A PERCENTAGE THE POSTER DID NOT PRINT. SSC and ICSE posters
 *    print both marks and percentage. CBSE prints percentage only. Intermediate
 *    prints marks only. So `percent` is optional and stays empty where the
 *    academy did not publish one. Deriving 934/1000 into "93%" would contradict
 *    the academy's own "97% in second year" and is not ours to do.
 *
 * 3. RANK ORDER IS THE POSTER'S OWN. Do not re-sort. The Intermediate poster
 *    ranks Salma Fatima (417/500) second and Mohammed Luqman Uddin (616/1000)
 *    fourth, because it ranks on percentage, not on the raw number. Sorting by
 *    `score` here would silently demote a student the academy placed higher.
 */

import type { MarkKey } from "./marks";

export type Student = {
  /** Rank exactly as numbered on the academy's poster. */
  rank: number;
  name: string;
  /** Marks verbatim with their denominator. Absent where the poster gave none. */
  score?: string;
  /** Percentage verbatim. Absent where the poster gave none. Never derived. */
  percent?: string;
  /** Only for facts the score cannot carry on its own. */
  note?: string;
  /** Hall ticket number. Only ever transcribed from an official sheet. */
  roll?: string;
};

export type Board = {
  id: string;
  name: string;
  /** The board's own mark. See marks.ts. */
  mark: MarkKey;
  authority: string;
  /** Verbatim from the poster, where it makes one. Rendered as a small note. */
  claim?: string;
  /** Source post, so the next person can re-check the transcription. */
  source: string;
  students: Student[];
};

export const boards: Board[] = [
  {
    id: "ssc",
    name: "SSC Class X",
    mark: "ssc",
    authority: "Board of Secondary Education, Telangana",
    claim: "100% results from the academy",
    // instagram.com/p/DXuVFHAEyY3/ , 29 April 2026. Two-slide carousel:
    // ranks 1-10 on slide one, 11-21 on slide two. Both slides transcribed.
    source: "SSC 10th Results 2026 poster, 29 April 2026",
    students: [
      { rank: 1, name: "Ayesha Siddiqua", score: "509 / 600", percent: "85%" },
      { rank: 2, name: "Adeeba Jabeen", score: "500 / 600", percent: "83%" },
      { rank: 3, name: "Mohammed Musaib", score: "487 / 600", percent: "81%" },
      { rank: 4, name: "Mohammed Murtaza Ali Amaan", score: "477 / 600", percent: "80%" },
      { rank: 5, name: "Syeda Mahveen Khundmiri", score: "477 / 600", percent: "80%" },
      { rank: 6, name: "Saba Sultana", score: "477 / 600", percent: "80%" },
      { rank: 7, name: "Simra Fatima", score: "475 / 600", percent: "79%" },
      { rank: 8, name: "Mohd Ashaz Moin Uddin", score: "468 / 600", percent: "78%" },
      { rank: 9, name: "Mohammed Osman Ali", score: "463 / 600", percent: "77%" },
      { rank: 10, name: "Syeda Khudaija Zeba", score: "445 / 600", percent: "75%" },
      { rank: 11, name: "Zoya Fatima", score: "443 / 600", percent: "73%" },
      { rank: 12, name: "Syed Jamal Uddin", score: "438 / 600", percent: "73%" },
      { rank: 13, name: "Mohammed Jamal Uddin Abuzar", score: "432 / 600", percent: "72%" },
      { rank: 14, name: "Syed Nemath Amaan", score: "430 / 600", percent: "71%" },
      { rank: 15, name: "Syed Irfan", score: "420 / 600", percent: "70%" },
      { rank: 16, name: "Hafsa Fatima", score: "416 / 600", percent: "69%" },
      { rank: 17, name: "Safura Nusrath", score: "408 / 600", percent: "68%" },
      { rank: 18, name: "Mohd Mudassir Khan", score: "377 / 600", percent: "62%" },
      { rank: 19, name: "Md Raziuddin", score: "376 / 600", percent: "62%" },
      { rank: 20, name: "Mohammed Izhaan", score: "366 / 600", percent: "61%" },
      { rank: 21, name: "Mohd Asrar Ali", score: "335 / 600", percent: "55%" },
    ],
  },
  {
    id: "inter",
    name: "Intermediate",
    mark: "tsbie",
    authority: "Board of Intermediate Education, Telangana",
    // instagram.com/p/DXb5ka_E1YD/ , 22 April 2026. Marks only, no percentages,
    // except the topper's "97% in second year". Ranked on percentage by the
    // academy, which is why 417/500 sits above 616/1000. Do not re-sort.
    source: "Intermediate Results poster, 22 April 2026",
    students: [
      {
        rank: 1,
        name: "Mohammed Muzammil Bagmar",
        score: "934 / 1000",
        note: "97% in second year, with 75/75 in Maths",
      },
      { rank: 2, name: "Salma Fatima", score: "417 / 500" },
      { rank: 3, name: "Ahmeduddin Mohammed Siddiqui", score: "370 / 500" },
      { rank: 4, name: "Mohammed Luqman Uddin", score: "616 / 1000" },
      { rank: 5, name: "Syed Ibrahim Ali", score: "536 / 1000" },
      { rank: 6, name: "Ahmed Abdul Muteeb", score: "530 / 1000" },
    ],
  },
  {
    id: "cbse",
    name: "CBSE Class X",
    mark: "cbse",
    authority: "Central Board of Secondary Education",
    // instagram.com/p/DXcYxlkkxwZ/ , 22 April 2026. Percentages only.
    source: "10th CBSE Results poster, 22 April 2026",
    students: [
      { rank: 1, name: "Juwairiyah Tahoor", percent: "88.2%" },
      { rank: 2, name: "Husna Ayesha Maudood", percent: "84.4%" },
      { rank: 3, name: "Mohammed Fasihuddin Siddiqui", percent: "82%" },
      { rank: 4, name: "Amtul Lateef Aatika", percent: "81.6%" },
      { rank: 5, name: "Syeda Afsheen Fatima", percent: "71%" },
      { rank: 6, name: "Fasahath Fatima", percent: "66.2%" },
      { rank: 7, name: "Mohammed Sohaan", percent: "63.4%" },
    ],
  },
  {
    id: "icse",
    name: "ICSE Class X",
    mark: "cisce",
    authority: "Council for the Indian School Certificate Examinations",
    claim: "100% results from the academy",
    // instagram.com/p/DXwayt9k8IE/ , 30 April 2026.
    source: "ICSE 10th Results 2026 poster, 30 April 2026",
    students: [
      { rank: 1, name: "Syed Mohammed Ruhaan", score: "336 / 500", percent: "67%" },
      { rank: 2, name: "Syed Fawaz Ahmed", score: "316 / 500", percent: "63%" },
      { rank: 3, name: "Syeda Simrah Fatima", score: "313 / 500", percent: "62%" },
      { rank: 4, name: "Kashan Ahmed", score: "274 / 500", percent: "55%" },
    ],
  },
];

export const totalStudents = boards.reduce((n, b) => n + b.students.length, 0);

/**
 * Two standouts, as one quiet sentence rather than a grid of big blue
 * figures. The section is deliberately not a leaderboard: the academy's real
 * argument is that everyone who sat the exam got through, not that a few
 * scored highly.
 */
export const standouts =
  "Best of the year: 934 / 1000 in Intermediate, and rank 313 in TS ICET.";

/** Verified on the academy's own SSC and ICSE posters. Not claimed elsewhere. */
export const passClaim = "100% results in SSC and ICSE.";
