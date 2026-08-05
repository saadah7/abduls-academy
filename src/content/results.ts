/**
 * 2026 results, transcribed from the academy's own published result posters.
 *
 * POLICY CHANGED on the client's instruction: he wants full transparency, with
 * every result shown and hall ticket numbers included. The previous policy here
 * was names and marks only. The `roll` field below exists for that.
 *
 * The consequence, stated once for whoever reads this next: a name plus a hall
 * ticket number on a permanently indexed page lets a third party look a minor up
 * on the board portal at any time. That is the client's decision to make and he
 * has made it. Consent from the families is therefore not optional.
 *
 * `roll` IS DELIBERATELY EMPTY EVERYWHERE. The Instagram posters this data came
 * from do not carry hall ticket numbers against these students, and the one
 * poster that does show hall ticket numbers is a different cohort entirely, read
 * off a low-resolution screenshot. Roll numbers must be typed in from the real
 * result sheets. NEVER invent one: a fabricated hall ticket number against a
 * real child's name is far worse than an absent one.
 *
 * `score` carries its own denominator ("616 / 1000") rather than pushing it into
 * `note`. A note line under every single name doubled every row's height and
 * repeated what the board column already said. Keep `note` for facts the score
 * cannot carry on its own.
 */

export type Student = {
  name: string;
  /** Rendered verbatim, including any denominator, so nothing is rounded. */
  score: string;
  /** Only for information the score itself cannot carry. Leave out otherwise. */
  note?: string;
  /** Hall ticket number. Only ever transcribed from an official sheet. */
  roll?: string;
};

export type Board = {
  id: string;
  tab: string;
  authority: string;
  /** Highest scorer in this board, given the emphasised first row. */
  topper: Student & { badge: string };
  rest: Student[];
};

export const boards: Board[] = [
  {
    id: "inter",
    tab: "Intermediate",
    authority: "Board of Intermediate Education, TS",
    topper: {
      badge: "Academy topper",
      name: "Mohammed Muzammil Bagmar",
      score: "934 / 1000",
      note: "97%, with 75/75 in Maths",
    },
    rest: [
      { name: "Mohammed Luqman Uddin", score: "616 / 1000" },
      { name: "Syed Ibrahim Ali", score: "536 / 1000" },
      { name: "Ahmed Abdul Muteeb", score: "530 / 1000" },
      { name: "Salma Fatima", score: "417 / 500" },
      { name: "Ahmeduddin Mohammed Siddiqui", score: "370 / 500" },
    ],
  },
  {
    id: "ssc",
    tab: "SSC Class X",
    authority: "Board of Secondary Education, TS",
    topper: {
      badge: "Academy topper",
      name: "Ayesha Siddiqua",
      score: "85%",
    },
    rest: [
      { name: "Adeeba Jabeen", score: "83%" },
      { name: "Mohammed Musaib", score: "81%" },
      { name: "Mohammed Murtaza Ali Amaan", score: "80%" },
      { name: "Syeda Mahveen Khundmiri", score: "80%" },
      { name: "Saba Sultana", score: "80%" },
      { name: "Simra Fatima", score: "79%" },
      { name: "Mohd Ashaz Moin Uddin", score: "78%" },
      { name: "Mohammed Osman Ali", score: "77%" },
      { name: "Syeda Khudaija Zeba", score: "75%" },
    ],
  },
  {
    id: "cbse",
    tab: "CBSE Class X",
    authority: "Central Board of Secondary Education",
    topper: {
      badge: "Academy topper",
      name: "Juwairiyah Tahoor",
      score: "88.2%",
    },
    rest: [
      { name: "Husna Ayesha Maudood", score: "84.4%" },
      { name: "Mohammed Fasihuddin Siddiqui", score: "82.0%" },
      { name: "Amtul Lateef Aatika", score: "81.6%" },
      { name: "Syeda Afsheen Fatima", score: "71.0%" },
      { name: "Fasahath Fatima", score: "66.2%" },
      { name: "Mohammed Sohaan", score: "63.4%" },
    ],
  },
  {
    id: "icse",
    tab: "ICSE Class X",
    authority: "One of very few academies in Hyderabad coaching ICSE",
    topper: {
      badge: "Academy topper",
      name: "Syed Mohammed Ruhaan",
      score: "67%",
    },
    rest: [
      { name: "Syed Fawaz Ahmed", score: "63%" },
      { name: "Syeda Simrah Fatima", score: "62%" },
      { name: "Kashan Ahmed", score: "55%" },
    ],
  },
  {
    id: "ent",
    tab: "Entrance exams",
    authority: "State common entrance tests",
    topper: {
      badge: "Best rank",
      name: "Ruqaiya Abdul Hakeem",
      score: "Rank 313",
      note: "TS ICET entrance examination",
    },
    rest: [
      { name: "Free seats secured in top colleges", score: "30+", note: "TG POLYCET state ranks" },
      { name: "Backlog subjects cleared", score: "200+", note: "Diploma and B.Tech, OU and JNTU" },
      { name: "Students who cleared their backlog", score: "90%", note: "Last semester" },
      { name: "Mohammed Muzammil Bagmar, Maths", score: "75 / 75", note: "Intermediate second year" },
    ],
  },
];
