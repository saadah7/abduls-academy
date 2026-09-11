/**
 * Reviews from the academy's own Google Business Profile, read on 2026-09-12
 * from https://maps.app.goo.gl/3qNbCgb8S2dbmUaP8 (place ID
 * ChIJhWuYf9OZyzsRdhdRxeOkuv0, "Abdul's Academy", category Coaching Center).
 *
 * TWO RULES.
 *
 * 1. NEVER WRITE A TESTIMONIAL. Every quote below is a real review by a real
 *    signed-in Google account, and the words are the reviewer's own. The only
 *    edits made are mechanical: decorative emoji runs that opened a review
 *    (five stars, a hundred points) and quotation marks the reviewer had typed
 *    around the whole thing were dropped. No wording was corrected, tidied, or
 *    shortened, spelling and grammar included. If a review needs trimming to
 *    fit a layout, change the layout.
 *
 * 2. THE AGGREGATE IS THE AGGREGATE. `rating` and `count` are what Google
 *    showed on the read date, not a selection. Five reviews are quoted because
 *    signed-out Google serves only five; the other 69 exist and are not
 *    cherry-picked away. Re-read the profile before changing either number.
 *
 * Google returns relative dates only ("6 months ago"), so `when` is stored
 * verbatim for provenance and is deliberately not rendered: it would go stale
 * on the page while saying nothing a visitor needs.
 */

export type Review = {
  /** The reviewer's Google display name, as shown. */
  name: string;
  /** Stars awarded. Every review on the profile is currently five. */
  stars: number;
  /** Google's relative date on the read date. Provenance only, not rendered. */
  when: string;
  quote: string;
};

/** Shown on the profile on 2026-09-12. */
export const googleRating = {
  rating: "5.0",
  count: 74,
  /** The real place link, replacing the address search this site used before. */
  url: "https://www.google.com/maps/place/?q=place_id:ChIJhWuYf9OZyzsRdhdRxeOkuv0",
} as const;

export const reviews: Review[] = [
  {
    name: "Anzo Maan",
    stars: 5,
    when: "3 months ago",
    quote:
      "One of the greatest and outstanding institute teacher's here help me to reach my goals. I came here with a perspective to get a rank of below 10000 but I'm thankful to hadi sir who contribute me to get a superb rank of 4400.",
  },
  {
    name: "EEE-003 Moid",
    stars: 5,
    when: "6 months ago",
    quote:
      "One of the best and most underrated institutes. The teachers are extremely friendly, supportive, and always ready to clear doubts with patience. Their way of teaching makes even difficult topics easy to understand. Regular revision sessions and exam-oriented preparation really help in scoring good marks. The faculty genuinely care about students' progress and build confidence before exams. Highly recommended for anyone who wants proper guidance and strong academic improvement.",
  },
  {
    name: "Mohamed Sami",
    stars: 5,
    when: "6 months ago",
    quote:
      "I had a very good experience with this engineering tuition. The faculty Bari and hadi bhai explains every concept in a simple and practical way, which makes difficult subjects easy to understand. doubt-clearing sessions helped me improve my performance. Highly recommended for engineering students who want strong fundamentals and better results.",
  },
  {
    name: "mohammed shoukath ali 049",
    stars: 5,
    when: "6 months ago",
    quote:
      "Abdul's Academy is an excellent institute! I studied the MOM (Mechanics of Materials) subject here and had a great experience. The lectures were very helpful and supportive. In just a few days, I was able to complete all the important parts of the syllabus. The teachers are very encouraging and keep the students motivated to do their best. Highly recommended for anyone who wants to learn effectively!",
  },
  {
    name: "Asad maqsood",
    stars: 5,
    when: "6 months ago",
    quote:
      "Excellent institute with experienced faculty and a positive learning atmosphere and well-structured courses. The teaching methods are clear which helps students understand concepts easily. Overall, it's a wonderful place to learn and grow. I would definitely recommend Abdul's Academy To all students.",
  },
];
