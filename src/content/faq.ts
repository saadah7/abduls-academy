/**
 * The five questions a parent actually asks before they walk in.
 *
 * Every answer is a fact the academy has published; where it has not published
 * one, the answer says so rather than inventing a number. Questions whose
 * answers are already visible on the page (which boards, where exactly) were
 * removed rather than repeated.
 */

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Can we try before paying?",
    a: "Yes. Three free demo classes, on every programme. Sit in, watch a subject being taught, then decide. Nothing is paid before that.",
  },
  {
    q: "What are the fees?",
    a: "Ask on WhatsApp and the academy will tell you before you enrol. The two prices it publishes openly are ₹1500 for the summer camp and ₹999 for the thirty day skills programme.",
  },
  {
    q: "Are boys and girls taught separately?",
    a: "Yes. Separate batches are the standing arrangement across every programme, not something organised on request.",
  },
  {
    q: "I have backlogs, or I did not clear Intermediate. Is it over?",
    a: "No. Backlog clearing at OU and JNTU is the work the academy does most of, with over 200 subjects cleared. If Intermediate did not clear, NIOS and TOSS open schooling give an equivalent qualification and a route onwards, whether the gap has been one year or ten.",
  },
  {
    q: "What languages are classes taught in?",
    a: "English, Urdu and Telugu. Say which you prefer when you message and it will be arranged.",
  },
];
