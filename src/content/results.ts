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
 */

export type Student = {
  name: string;
  /** Rendered verbatim, so "934 / 1000" and "88.2%" both stay honest. */
  score: string;
  note?: string;
  /** Hall ticket number. Only ever transcribed from an official sheet. */
  roll?: string;
};

export type Board = {
  id: string;
  tab: string;
  authority: string;
  /** Highest scorer in this board, given the large card. */
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
      note: "97% · Intermediate, 2026 · 75/75 in Maths",
    },
    rest: [
      { name: "Mohammed Luqman Uddin", score: "616", note: "out of 1000" },
      { name: "Syed Ibrahim Ali", score: "536", note: "out of 1000" },
      { name: "Ahmed Abdul Muteeb", score: "530", note: "out of 1000" },
      { name: "Salma Fatima", score: "417", note: "out of 500" },
      { name: "Ahmeduddin Mohammed Siddiqui", score: "370", note: "out of 500" },
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
      note: "SSC Class X, 2026 · Board of Secondary Education, TS",
    },
    rest: [
      { name: "Adeeba Jabeen", score: "83%", note: "SSC Class X" },
      { name: "Mohammed Musaib", score: "81%", note: "SSC Class X" },
      { name: "Mohammed Murtaza Ali Amaan", score: "80%", note: "SSC Class X" },
      { name: "Syeda Mahveen Khundmiri", score: "80%", note: "SSC Class X" },
      { name: "Saba Sultana", score: "80%", note: "SSC Class X" },
      { name: "Simra Fatima", score: "79%", note: "SSC Class X" },
      { name: "Mohd Ashaz Moin Uddin", score: "78%", note: "SSC Class X" },
      { name: "Mohammed Osman Ali", score: "77%", note: "SSC Class X" },
      { name: "Syeda Khudaija Zeba", score: "75%", note: "SSC Class X" },
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
      note: "CBSE Class X, 2026",
    },
    rest: [
      { name: "Husna Ayesha Maudood", score: "84.4%", note: "CBSE Class X" },
      { name: "Mohammed Fasihuddin Siddiqui", score: "82.0%", note: "CBSE Class X" },
      { name: "Amtul Lateef Aatika", score: "81.6%", note: "CBSE Class X" },
      { name: "Syeda Afsheen Fatima", score: "71.0%", note: "CBSE Class X" },
      { name: "Fasahath Fatima", score: "66.2%", note: "CBSE Class X" },
      { name: "Mohammed Sohaan", score: "63.4%", note: "CBSE Class X" },
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
      note: "ICSE Class X, 2026 · one of very few academies in Hyderabad coaching ICSE",
    },
    rest: [
      { name: "Syed Fawaz Ahmed", score: "63%", note: "ICSE Class X" },
      { name: "Syeda Simrah Fatima", score: "62%", note: "ICSE Class X" },
      { name: "Kashan Ahmed", score: "55%", note: "ICSE Class X" },
    ],
  },
  {
    id: "ent",
    tab: "Entrance exams",
    authority: "State common entrance tests",
    topper: {
      badge: "Best rank",
      name: "Ruqaiya Abdul Hakeem",
      score: "313",
      note: "State rank · TS ICET entrance examination",
    },
    rest: [
      { name: "Free seats secured in top colleges", score: "30+", note: "TG POLYCET state ranks" },
      { name: "Backlog subjects cleared", score: "200+", note: "Diploma & B.Tech, OU and JNTU" },
      { name: "Of our students cleared their backlog", score: "90%", note: "Last semester" },
      { name: "Mohammed Muzammil Bagmar, Maths", score: "75/75", note: "Intermediate second year" },
    ],
  },
];
