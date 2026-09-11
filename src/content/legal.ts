/**
 * The two legal pages, as typed content like everything else.
 *
 * WRITTEN AGAINST WHAT THE SITE ACTUALLY DOES, not from a template. Every
 * factual sentence below was checked against the built output on 2026-09-12:
 *
 * - No cookies. The site sets none, and nothing in src/ writes to
 *   localStorage, sessionStorage or document.cookie.
 * - No analytics, no tag manager, no pixels. Nothing to consent to, which is
 *   why there is no cookie banner. If analytics is ever added, this page and
 *   that decision change together.
 * - No third-party subresources at all. The typeface is Schibsted Grotesk via
 *   next/font/google, which downloads it at BUILD time and serves it from our
 *   own origin (/_next/static/media/*.woff2) -- a visitor's browser makes no
 *   request to Google. Verified in out/index.html: the only external hosts in
 *   the document are outbound link targets, not loaded assets.
 * - No forms and no backend. Every call to action is a tel: or wa.me link.
 *
 * The published-data list is meant to be exhaustive, and it is checked against
 * the codebase rather than written from memory: results.ts for names and marks,
 * reviews.ts for the quoted reviewers (one of whom states his own exam rank),
 * faculty.ts for the three teachers, and gallery.ts for the frames that show a
 * student. If you publish a new category of personal data, it goes in that list
 * and in the removal paragraph in the same commit.
 *
 * THE PART THAT MATTERS is the student-data section. This site publishes the
 * names and marks of real children and three photographs in which students are
 * identifiable. The consent for that is still outstanding with the client (see
 * docs/PLAN.md, "Blocked on the client"). A removal route is therefore not a
 * formality here: it is the one mechanism a parent has, so it names the real
 * phone and WhatsApp numbers and promises nothing the academy cannot do.
 *
 * ONE OPERATIONAL COMMITMENT is made here that the academy has to be able to
 * keep: the removal paragraph says that on request we will also clear a name or
 * photograph out of the public repository's git history. That is deliverable (a
 * history rewrite and a force push) but it is manual, so whoever answers the
 * phone needs to know it is promised. The cleaner fix is to make the repository
 * private, which removes the retention entirely; that needs a paid plan for
 * Pages, which is why it is public today (docs/PLAN.md).
 *
 * TODO: these are plain-language drafts, not lawyer-reviewed. Abdul should have
 * someone check them before relying on them, particularly the governing-law
 * line and anything about minors' data.
 */

import { site } from "./site";

export type DocSection = {
  heading: string;
  /** Paragraphs. Rendered in order, one <p> each. */
  body: string[];
  /** An optional bullet list under the paragraphs. */
  points?: string[];
};

export type LegalDoc = {
  slug: "privacy" | "terms";
  title: string;
  /** Shown under the title, and used as the page's meta description. */
  intro: string;
  updated: string;
  sections: DocSection[];
};

const UPDATED = "12 September 2026";

export const privacy: LegalDoc = {
  slug: "privacy",
  title: "Privacy",
  intro:
    "This website collects nothing about you. It has no forms, no accounts, no analytics and no cookies. What it does publish is information about our students, and this page explains what, why, and how to have it removed.",
  updated: UPDATED,
  sections: [
    {
      heading: "What this website collects",
      body: [
        "Nothing. There is no form to fill in, no login, no newsletter and no shopping basket. The site is a set of static pages: there is no server behind it that could store anything about you, and no database.",
        "It sets no cookies and stores nothing in your browser. It runs no analytics, no advertising tags and no tracking pixels, so there is nothing for you to consent to or opt out of. If that ever changes, this page changes with it, and you will be asked before anything is set.",
      ],
    },
    {
      heading: "What loads when you open a page",
      body: [
        "Only files from this site. The typeface is built into the site and served from the same place as the pages, so your browser makes no request to Google or to any font service when you visit. Photographs and logos are served from here too. No part of the page is loaded from a third party.",
        "The pages are hosted on GitHub Pages. Like any web host, GitHub receives your IP address in order to send you the page, and keeps server logs for delivery and security. We never see those logs and cannot link them to a person.",
      ],
    },
    {
      heading: "When you leave this site",
      body: [
        "Every button that contacts us is a link out: WhatsApp, a phone call, Instagram, Facebook, or Google Maps. Nothing is sent anywhere until you tap one, and once you do you are with that company, under its own privacy policy and not ours.",
        "If you message us on WhatsApp or call us, we keep that conversation the way any business keeps an enquiry, and we use it only to answer you and to arrange admission. We do not sell it, and we do not pass it to anyone else.",
      ],
    },
    {
      heading: "Information about our students",
      body: [
        "This is the part of this page worth reading properly. The site publishes:",
      ],
      points: [
        "Students' names and their board exam marks, transcribed from the academy's own result posters.",
        "Competitive exam ranks, with the student's name. One comes from our own result poster; another appears inside a Google review, where the student wrote it himself.",
        "Photographs of the academy, three of which show students recognisably.",
        "Quotations from public Google reviews of the academy, each with the reviewer's Google display name as it already appears there.",
        "The names of our teachers, and the credential each of them has given us.",
      ],
    },
    {
      heading: "Why it is published, and what is not",
      body: [
        "We publish results because parents ask to see them before they enrol, and because we would rather show real names and real marks than a claim nobody can check. Every figure is taken from a poster the academy published itself.",
        "We do not publish hall ticket numbers. Some of the posters carry none, and rather than derive or guess one, the site leaves that space empty. We also publish no home addresses, no phone numbers and no dates of birth for any student, and no total student count.",
      ],
    },
    {
      heading: "Having a name or a photograph removed",
      body: [
        "If any of the above is about you, or about your child, and you want it taken off this site, tell us and we will remove it. That covers a name, a mark, a rank, a quotation and a photograph, and it applies to our teachers as much as to our students. You do not have to give a reason, and it will not affect anyone's classes in any way.",
        `Message or call ${site.phones[0].display}, or send a WhatsApp to ${site.phones[1].display}. Say which page and which name or photograph. We will take it off the site, and we will tell you when we have.`,
        "One thing you should know, because it changes how complete that removal is. This website is built in the open: its source files, including the page that lists results, sit in a public code repository, and that repository keeps a copy of every past version. Taking a name off the page does not take it out of that history. If you want it gone from there too, say so when you ask us, and we will clear it.",
        "What we cannot reach are copies that search engines or other people have already taken."
      ],
    },
    {
      heading: "Children",
      body: [
        "Most of the students named on this site are under 18. We treat a request from a parent or guardian exactly as we would a request from the student, and we act on whichever we receive first.",
      ],
    },
    {
      heading: "Asking us anything about this",
      body: [
        `The academy is at ${site.address.line1}, ${site.address.line3}. You can walk in during our opening hours, call ${site.phones[0].display}, or message ${site.phones[1].display} on WhatsApp. A person, not a form, will answer.`,
      ],
    },
  ],
};

export const terms: LegalDoc = {
  slug: "terms",
  title: "Terms of use",
  intro:
    "This website tells you what the academy teaches and how our students did. It is information, not a contract. Admission happens at the centre, in person.",
  updated: UPDATED,
  sections: [
    {
      heading: "What this site is",
      body: [
        "These pages describe the classes, courses and results of Abdul's Academy and NextGen AI Training Institute, both at the same address in New Malakpet, Hyderabad. Using the site means you accept what is on this page.",
        "Nothing here is an offer, and booking a demo class over WhatsApp does not enrol anyone. Admission, fees and timings are agreed with us in person at the academy.",
      ],
    },
    {
      heading: "Fees, dates and timings",
      body: [
        "Where the site names a fee, a batch start date or an opening time, it is the current position and it can change. Batch dates move, seats fill, and a course can be rescheduled. Confirm anything you are relying on with us before you count on it.",
        "The opening hours shown are the academy's general hours. They are not the timetable for any particular batch, which we will tell you when you enrol.",
      ],
    },
    {
      heading: "Results",
      body: [
        "Results on this site are reproduced as the boards awarded them, transcribed from the academy's own published result posters, in the order those posters rank them. We do not re-sort them, and we do not calculate a percentage that a poster did not print.",
        "Where a pass rate is stated, the source is named in that section. Past results are what our students achieved; they are not a prediction and not a promise about anyone else's exam.",
      ],
    },
    {
      heading: "Other people's names and logos",
      body: [
        "The examination boards, universities, councils, companies and software products named on this site own their own names and logos. They appear here only to say which board or exam a course prepares for, or where a teacher has worked.",
        "None of them endorses, sponsors or is affiliated with this academy, and nothing here should be read as saying otherwise. If you own one of these marks and object to its use, tell us and we will take it down.",
      ],
    },
    {
      heading: "Links to other places",
      body: [
        "Links to WhatsApp, Instagram, Facebook, Google Maps and our guess-paper posts take you to services we do not run. We are not responsible for what is on them or for how they handle your information.",
      ],
    },
    {
      heading: "Accuracy, and telling us when we are wrong",
      body: [
        "We check what goes on this site against our own records and posters, but mistakes are possible, especially in a transcribed name or mark. The site is provided as it is, without a warranty that every detail is correct or current.",
        `If you find something wrong, particularly a student's name or marks, message ${site.phones[1].display} on WhatsApp and we will correct it.`,
      ],
    },
    {
      heading: "Our content",
      body: [
        "The words, photographs and design of this site belong to Abdul's Academy, apart from the third-party marks described above. Please do not republish them elsewhere without asking us first.",
      ],
    },
    {
      heading: "Which law applies",
      body: [
        "These terms are governed by the law of India, and any dispute about them belongs to the courts at Hyderabad, Telangana.",
      ],
    },
  ],
};

export const legalDocs = [privacy, terms];
