# Abdul's Academy: build plan

Handoff document. Any session picking this up should read this file first, then
`CLAUDE.md`. Update the phase table as you go.

Last updated: 2026-09-15 (Saad's review notes: motion across the page,
admissions strip above the hero, results highlights row, faculty lines,
reviews marquee)

---

## Where this stands

The site was rebuilt twice. The first build followed miter.com and
arcade.software; the client did not like the result. On 2026-09-11 he gave a
new layout reference, <https://cadmus.io/>, with two instructions: keep the
white and blue, and cut the content down ("too much content, keep it simple,
keep it straightforward"). He also reframed the site: **two academies in one
building**, Abdul's Academy (tuition) and NextGen AI Training Institute (skills
and AI), and the page has to say so.

The 2026-09-11 pass was reviewed by the client the same day, revised on his
notes (logos, header, CTAs, headcount, consent line), and **merged to `main`
as PR #1**. PR #2 fixed a reduced-motion hydration bug in `Reveal` that left
most of the page invisible for visitors with the OS setting on. The site is
**live on GitHub Pages**: <https://saadah7.github.io/abduls-academy/>, built
and deployed by `.github/workflows/pages.yml` on every push to `main`. The
repo was made public on 2026-09-11 because GitHub Pages on a private repo
needs a paid plan.

**Production moved to Vercel on 2026-09-14**, onto the academy's own domain
`abdulsacademy.com`. Vercel runs the Next server, so that build drops
`output: "export"` and keeps next/image's optimiser; the Pages build is
untouched and still exports. `next.config.ts` switches on `VERCEL`, which
Vercel sets on every build it runs and nothing else does. The Vercel project
carries `NEXT_PUBLIC_SITE_URL=https://abdulsacademy.com` and no
`NEXT_PUBLIC_BASE_PATH`, so the site serves from `/`. Pages still builds on
every push to `main`; decide whether to retire it rather than leave two live
copies of the same three pages competing in search.

Dev server: `npm run dev` → <http://localhost:3400>

Repo: <https://github.com/saadah7/abduls-academy> (public). The standing rule
is branch, then PR, then merge; never push to `main` directly.

---

## The page, top to bottom

| # | Section | Band | What it is |
|---|---|---|---|
| 0 | Header | white, sticky | Full-width rectangle with a hairline below. Mark left, four links centred, "Book a demo" right. Collapses to a menu button below 980px. The tinted strip of the two free 1:1 assistance lines that sat above it from 2026-09-12 came out on 2026-09-15 (Saad: "remove this from here"); the lines are unplaced. |
| 0a | Admissions | `--blue-100` banner | One dated intake as a centred banner: the TSCHE seal and NTA wordmark (the bodies that set EAPCET and NEET; the exams have no marks of their own), "Next batch, 25 September", the long term EAPCET and NEET batch set large, "Ask about this batch" on WhatsApp. Still not the dated admissions board that was cut: no countdown, no seats. Sat under the figures as one line until 2026-09-15, when Saad moved it between the header and the hero (PW's banner slot) and asked for it taller and centred. The two free 1:1 assistance lines sat here briefly and came out on his note that they are "not a part of the batches"; they are unplaced, kept in `site.ts` as `assistance`. More banner content needs real batch facts (fee, timings, duration) from the client. |
| 1 | Hero | deep blue, rounded bottom | Centred eyebrow, headline, two-sentence lede naming both academies, "Book 3 free demo classes" and "Contact us". Below: two white cards, one per academy, each opening with its own logo, four lines each, linking to their sections. |
| 2 | Proof | tint | Four figures: 100% (SSC, CBSE, ICSE and Intermediate), 97% (Intermediate top score), 70+ (free seats in top colleges), 200+ (backlogs cleared). They count up on first view. Tinted since 2026-09-15 so it does not meet the white programmes section. |
| 3 | Programmes | white, tint cards | Four cards: Class 6 to 10, Intermediate, Diploma and Engineering, Open schooling and English. Each opens with the marks of the boards or universities it prepares for, then three lines and a demo link. |
| 4 | Results 2026 | **deep blue, rounded both ends**, white cards | Three highlight cards lead (TS ICET rank 313, 70+ free seats through EAPCET and ECET, 200+ backlogs cleared), each with the mark of the body it names, then one card per board with the board's own mark in the head, top five rows, one button opens every row. Intermediate carries the 100% badge since 2026-09-15 (printed on the achievements poster). Closed, the four board cards share the tallest card's height with the "and N more" line pinned to the foot; open, each takes its own height (SSC runs to 21 rows). Names and marks verbatim. No headcount anywhere. A line under the boards names the exams batches run for. |
| 4a | Inside the academy | tint | Six photographs from the academy's own Google Business Profile, an even 4:3 grid. Crops are baked into the files, not applied in CSS. |
| 4b | Faculty | white | Three cards: Abdul Hadi (Founder), Abdul Aziz, Abdul Bari (Managing Director). Each carries the credential the client gave and the mark of the organisation that credential names. No subjects stated. |
| 4c | Reviews | tint | Five Google reviews verbatim as one self-scrolling row of review cards (stars, full quote, initial and name), edge to edge, under the 5.0 and 74-review aggregate linking to the profile. Every card is the height of the longest, with the reviewer pinned to the foot behind a hairline so the equal height reads as the design. Pauses under the pointer; scrolls by hand under reduced motion. |
| 5 | Fallen behind | white | One centred statement, three figures, one button. |
| 6 | NextGen | tint | The NextGen mark above the head. Deep blue featured card for the ₹999 thirty day programme beside a three by three grid of the nine skills, each with its technology's mark. Four career course cards with icons below. |
| 7 | How we teach | white, tint cards | Four cards, one icon each. |
| 8 | FAQs | white | Five native `<details>`. Head reads "FAQs" over "Frequently asked questions." since 2026-09-15; the eyebrow and title had both said "Questions". |
| 9 | Visit | tint | The felicitation photograph with a white card floating over it: founder line, address, opening hours, WhatsApp and Maps. |
| 11 | Notices | fixed, bottom right | A pill ("Batches and offers", with a count) and above it a stack of cards for what is live or announced: the 25 September batch, the ₹999 thirty-day skills programme, entrance-exam batches (start date on request, because none is published), the three free demo classes. Content in `src/content/announcements.ts`, every line already on the page with its provenance at the source. Appears once the hero scrolls off; a desktop opens the stack itself, a phone shows the pill above the call bar and opens on tap. Closing or dismissing is remembered for the session. Saad, 2026-09-15: "a sticky bot kinda thing on the page's bottom right ... kinda like notifications", then "build the notification thingy for now with what info you have right now". |
| 10 | Footer | deep blue, rounded top | Four equal link columns, two across on a phone: programmes, free guess papers, NextGen (mark plus short name), get in touch, where the address, languages and hours sit above the phones and links so the contact details read together at the bottom right. Base row: the mark, legal links side by side, creed. Reorganised 2026-09-15 (Saad: "refine the footer, organize properly, and in mobile the footer is too long"; "the address and all should come at the bottom right"). |

Cut in the 2026-09-11 pass, all of it content the client called too much: the
dated admissions board, the guess-paper band, the six-reason grid, the route
line, the results tile mosaic and its caption, the numbered chapter rules, and
two FAQ entries whose answers are visible elsewhere on the page.

The founder's "4th Rank, PGECET" badge was cut in that pass too, for being
unverified. It is back, on the client's say-so of 2026-09-12. See "Published on
the client's word" below.

---

## Phase table

| # | Phase | Status |
|---|---|---|
| 0 | Research, IA, content extraction | **done** |
| 1 | Scaffold: Next 16, tokens, typed content | **done** |
| 2 | First build against miter and arcade | superseded |
| 3 | Design pass against cadmus.io, content cut to two academies | **done**, PR #1 |
| 4 | Client review of the pass; iterate on what he flags | **done**, same day, in PR #1 |
| 5 | Responsive check with a human eye (headless numbers are clean) | todo |
| 6 | A11y and performance pass | **done for the 2026-09-12 diff**, four passes reported. It caught a focus-ring regression on the new deep band (the disclosure button's ring was 2.03:1 on it), 589KB of gallery JPEG promoted to head preloads by `loading="eager"`, and 362KB of over-provisioned assets. All fixed in PR #4. The pre-existing page has still never had a full pass. |
| 7 | Real asset integration | **partly done**. Six photographs and the real Google place link are in; the vector logo and the guess-paper PDFs are still blocked on the client. |
| 8 | Deploy | **done**, GitHub Pages via Actions |
| 9 | Client notes of 2026-09-12 | **done**, PR #4 |
| 10 | Saad's review notes of 2026-09-15: blur stagger reveal across the page (hero included), counting figures, admissions strip above the hero, free-assistance strip out of the header, results highlights row, boards and review cards at equal heights, faculty lines, reviews marquee | **built**, branch `feat/agentation-notes-15-sep`, awaiting his look. Includes the taller centred banner (no logos: TSCHE covers EAPCET but NEET is NTA's and no NTA mark is sourced) and the bottom-right notices widget built from what the page already states |

---

## LOCKED decisions

Do not reopen these without the client asking.

| Decision | Rationale |
|---|---|
| One page, long scroll | Client chose this over a multi-page site. |
| White + blue, single light theme | Client: "need the white and blue theme. not dark". No dark variant, no `prefers-color-scheme`. The deep blue hero, results band, NextGen offer card and footer are brand colour blocks, the reference's maroon translated, not a theme. |
| Band alternation is the section separator | Deep, white, tint, white. Two sections of the same ground never touch except Reasons and Questions, which read as one block. On 2026-09-12 the tint was taken off NextGen to make its offer band pop harder; that put four white sections in a row and quietly re-skinned its career cards, and was reverted. The offer band steps up to `--blue-200` instead. Do not repeat it. |
| `--blue-500` #2A78FF, `--blue-600` #1257D6 | #2A78FF sampled from the academy's own logo plate. It is 4.05:1 on white so it is display-only; #1257D6 is 6.2:1 and carries all small text. The deep band is `--blue-900` #0A2E73. |
| No green anywhere in *this brand's* palette | The logo ring contains #01A54C, but the client said "remove green if present anywhere". This governs the site's own colours. It does not govern a third party's seal: the TSCHE emblem added on 2026-09-12 carries a green ring and is reproduced as published, the same way the Telangana state emblem is. Recolouring somebody else's mark would be worse than showing it. |
| No second accent colour | Blue does all accent work. |
| Sentence case headings | Two typefaces were rejected while headings were all-caps. |
| Two academies, one building | Client, 2026-09-11: "abdul's academy where next gen AI training institute is also a part of abdul's academy. two academies at the same place, same building." The hero says it; NextGen has its own section, its own footer column and its own phone number. |
| Content cut, not condensed | Client, 2026-09-11: "there is too much content present currently. refine it, keep it simple, keep it straightforward." Every section is one head and one grid. Do not add a lede where a heading will do. |
| Results: every name and mark, verbatim, one click away | Client wants full transparency. Top five per board render on load; "Show all" opens every board. Rank order is the poster's own, never re-sorted. `Student.roll` renders when present and is empty everywhere because the posters carry no hall ticket numbers. **Never invent one.** |
| Content lives in `src/content/*.ts` | Typed files keep a CMS swap cheap. |
| CTAs are `tel:` and `wa.me` deep links | Frontend only. A form with no backend would fail silently. |
| Schibsted Grotesk, one family | Chosen after Anton and Bricolage were rejected. Display weights are 500 because "too bold" has been the complaint twice. |
| Icons are Hugeicons free, stroke style | All usage goes through `src/components/ui/Icon.tsx`. |
| Header is a full-width rectangle, sticky | Client, 2026-09-11: "I don't like that pill nav bar. Make it a rectangle. And it should be sticky, obviously." |
| Secondary CTA reads "Contact us", never a raw phone number | Client, 2026-09-11, on the hero's "Call 88016 48481" button: "Why is the number present directly there?" Numbers live in the footer, the Visit card and the mobile call bar, not in headline CTAs. |
| No student headcount on the page | Client, 2026-09-11, on "38 students across four boards": "there are hundreds of students studying, not just thirty eight." The 38 are only those on the 2026 result posters. Never total them into a claim about the academy. |
| Both academies' logos wherever each is named | Client, 2026-09-11: "add NextGen Institute logo wherever it is present." Hero cards carry both marks; NextGen's section head and footer column carry its mark. |
| Real board, university and technology logos, never drawn | Client, 2026-09-11: "I need those icons, their logos actual." Sourced files under `public/logos` and `public/tech`; registry with provenance in `src/content/marks.ts`. See "Third-party marks" below. |
| The Telangana state emblem stands for SSC | The Emblems and Names Act concern was raised; the client reaffirmed: "add the state emblem for SSC anyway." His call, recorded here so it is not re-litigated. IGCSE stays a text tile because Cambridge's IGCSE mark is not published anywhere takeable. |

### Published on the client's word, 2026-09-12

Three claims on the page are the client's assertion rather than something
traceable to a poster. Each is recorded where it is used, and each is his call,
recorded here so it is not quietly re-cut by a later session.

| Claim | Where | What he said |
|---|---|---|
| "4th Rank, PGECET. Gold Medalist." against Abdul Hadi | `src/content/faculty.ts` | Asked for by name after the badge had been cut for being unverified. |
| "Senior AI Engineer at Google. Formerly Tech Mahindra." against Abdul Aziz | `src/content/faculty.ts` | "Abdul Aziz Sir - Senior AI Engineer @Google , ex- Tech Mahindra". This was deliberately withheld until he confirmed it; it is the one line on the page that does real damage if it is wrong. Published once, on the faculty card, and nowhere else. |
| CBSE in the 100% pass-rate figure | `src/content/site.ts` `stats`, `src/content/results.ts` `passClaim` and the CBSE board's `claim` | He marked up a screenshot with "CBSE is missing in pass rate section" and confirmed it when asked. The CBSE poster prints percentages only and claims nothing, so this third board rests on his word. |
| "Civil Engineer" against Abdul Hadi | `src/content/faculty.ts` | 2026-09-15, relayed by Saad: "Abdul Hadi ~ Founder, Civil Engineer, 4th PGECET, Gold Medalist". |
| "Managing Director" and "GATE qualified. Engineering degree in AI and ML." against Abdul Bari | `src/content/faculty.ts` | 2026-09-15, relayed by Saad: "Abdul Bari ~ Managing Director, Gate, CSE AIML"; Saad added that he is a GATE topper, that "topper" must not appear, and that his engineering degree is in AI and ML. No rank was given, so none is stated. |

Printed, not word of mouth, but from a later poster than the result it
describes: Intermediate's 100% badge and its place in `passClaim` and the
pass-rate figure come from the academy's "Proud Achievements 2025 - 2026"
poster (2026-09-15), which prints "100% RESULT IN MPC | BIPC | CEC | MEC". The
April Intermediate result poster claims nothing.

Also his figure, same day: "70 + students secured free seat in top colleges by
studying EAPCET etc". No year and no college list were given, so none are
stated on the page.

### Superseded on 2026-09-11 by the change of reference

These were locked against arcade.software and no longer apply: the segmented
toggle plus input bar hero widget, the three-row stage picker that replaced it,
the CSS gradient hero wash with SVG grain, the "light to 58%, blue below"
rule, the numbered chapter rule as section head, and the results tile mosaic.
They are listed so nobody reads the old rationale in git history and restores
one.

## REJECTED, do not retry

| Attempt | Why it failed |
|---|---|
| "Honours Board" direction: warm paper, ruled marksheet, dense results list | Client: "the honors board isnt good". |
| Dark theme / theme-aware tokens | Client wants light only. |
| **Anton** display face | "the current one is too bold". Single weight. |
| **Bricolage Grotesque** | "i dont like the font too". |
| All-caps headings | Two typefaces rejected while set that way. |
| Split hero: copy left, visual right | "i dont like the hero". |
| A graphic pattern as the hero visual | Client: "i need templates for website, not the visual". |
| The miter + arcade build (stage picker, gradient wash, chapter rules, tile mosaic, dated admissions board) | Client, 2026-09-11: "we redesigned the website, but I still don't like it." Replaced by the cadmus.io pass. |
| Multi-agent research workflows | Burns tokens for what grep answers. |
| Transcribing names, ranks or hall tickets from the "Proud Achievements 2025 - 2026" poster | Its cells are a copied template: one hall ticket, 2661207759, against some fifteen students, one student with four ranks in one exam, whole rows repeated. Only its headline claims are used, each sourced where it appears. See rule 1 in `src/content/results.ts`. |
| A "state top ranks in POLYCET" highlight | The poster's headline, and the only evidence under it is that unusable rank list. Waits for a real list. |

---

## Motion

Added 2026-09-15 on Saad's review notes ("add blur stagger reveal of all
sections across the full page", "add animations of stats", "animate" the
figures). Until then the page's only motion was an 8px, 200ms fade.

| Piece | What it does | Where |
|---|---|---|
| `Reveal` | A block rises 12px out of an 8px blur over 500ms, once, on entering view (`framer-motion` `whileInView`, margin `-8%`). With `stagger`, its direct children cascade 60ms apart, each wrapped in a `.reveal-item` one-cell grid so cards keep filling their tracks. Blur sits on items, never on a section shell, so the gallery repaints six photographs rather than a band. `transform` is written as a string so it composites during load. | `src/components/ui/Reveal.tsx` |
| `Figure` | A figure counts up to itself over 1.2s the first time it enters view. Only digit runs move, so "85 to 90%" counts both numbers and "Rank 313" keeps its word; anything under 10 stays still ("1 year"). The server renders the finished value; the client zeroes it on mount, while the Reveal around it is still transparent, so nothing snaps back. | `src/components/ui/Figure.tsx`; used by Proof, Behind and the results highlights |
| `Marquee` | The reviews as one row, duplicated once (copy `aria-hidden`), sliding by half its width on a 48s linear CSS loop. Runs only while on screen, pauses under a fine pointer. | `src/components/ui/Marquee.tsx`, CSS under "reviews" |
| Hero cascade | The same beat as Reveal, in CSS: `@keyframes rise` on `.hero-copy > *` and the two `.hero-card`s, 60ms apart, `animation-fill-mode: backwards`. CSS rather than Reveal because the hero is the first paint and a reveal that waits for hydration holds the headline invisible until the JavaScript arrives. Backwards fill so the card's hover transform still applies afterwards. | `globals.css` under "hero" |

Reduced motion: every Reveal and Figure renders its finished state with a
zero-length transition (the markup is identical on server and client, which is
what PR #2 fixed), the hero's animation delays are zeroed so nothing is held
invisible, and the marquee becomes a row you scroll by hand with the copy
hidden. Do not nest one Reveal inside another: the inner inherits the
outer's "show" the moment the outer enters view, which is why `Behind` uses
three siblings.

## The reference, and what was taken from it

<https://cadmus.io/> (Gatsby, `AT Realm` display + Inter body). Grepped from
the served HTML on 2026-09-11, not eyeballed:

- **Structure**: one deep brand colour (maroon `#580c1d`) for the hero band,
  a featured card and the footer, all with large rounded corners
  (`border-radius: 32px 32px 0 0` on the footer). Everything else is a warm
  off-white page with pastel card fills (`#b6dbff` light blue is the most used).
  Centred section heads with a one-line lede. A photograph with a white card
  floating over it (`.image-card-wrapper` + `.floating-content-card`, `p40`,
  `br-12`, `max-650`), alternating sides. Four-card "why choose" grid. Three
  large stats. Small pill "Learn more" links with an arrow.
- **Geometry**: radius `8px` on images, `12px` on cards, `4px` on small
  controls; shadow `1px 8px 12px hsla(31,24%,75%,.12)`; body `16px` / `14px`;
  display up to `64-90px`; `transition: all .3s ease`.
- **Translated to this brand**: maroon → `--blue-900`; pastels → `--blue-50`
  and `--blue-100`; warm shadow → `0 8px 12px rgb(10 22 40 / .08)`; band
  corners → `--r-xl: clamp(20px, 3vw, 32px)`; cards `--r-lg: 16px`.
- **Not taken**: its colours, its typeface, its title-case h1, its logo
  marquee (no logos to run), its illustrations.

---

## Third-party marks

All in `src/content/marks.ts`, rendered through `src/components/ui/Mark.tsx`
at a CSS-set height. Fetched 2026-09-11.

| Mark | File | Source | Licence on the source |
|---|---|---|---|
| CBSE | `logos/cbse.svg` | en.wikipedia, "CBSE new logo.svg" | fair use |
| ICSE (CISCE) | `logos/cisce.png` | en.wikipedia, "CISCE logo.png" | fair use |
| IGCSE | text tile | IGCSE is Cambridge International's exam. Its lockup reads "Cambridge International Education", which the client rejected ("why did you add Cambridge International Education"), and the Cambridge IGCSE mark itself is not published anywhere takeable. Typographic, like SSC. | |
| TOSS | `logos/toss.png` | telanganaopenschool.org, its own site icon (120px, the only size it publishes), white ground made transparent | the society's own |
| | | **2026-09-12:** every raster mark in this table was re-exported at 128px on the long edge and palette-quantised. They render at 52px at most, and between them they were 338KB. They are now 100KB, with transparency intact and every `w`/`h` in `marks.ts` re-synced to the real file. `logo.png` went the same way: 91KB to 25KB, and it is on the critical path. | |
| TSBIE | `logos/tsbie.png` | en.wikipedia, "TSBIE Logo.jpg", white ground made transparent | fair use |
| Osmania University | `logos/ou.png` | en.wikipedia, downscaled | fair use |
| JNTU Hyderabad | `logos/jntuh.png` | en.wikipedia, downscaled | fair use |
| NIOS | `logos/nios.svg` | Commons | public domain |
| SSC (Telangana) | `logos/telangana.png` | The board has no logo; its site and hall tickets use the Telangana state emblem. The Emblems and Names Act restricts a state emblem in trade; this was raised, and the client chose it anyway ("add the state emblem for SSC anyway"). en.wikipedia, "Emblem of Telangana.svg", rasterised from the 478KB SVG, now 128px | CC0 |
| Microsoft 365, Excel | `tech/office.svg`, `tech/excel.svg` | Commons | public domain (simple geometry) |
| Tally | `tech/tally.png` | Commons, "Tally - Logo.png", cropped and downscaled | see file page |
| Canva, Instagram | `tech/*.svg` | Simple Icons 15 / 16, brand colour written into the file | CC0 |
| AutoCAD, HTML5 | inline paths in `src/components/ui/BrandIcon.tsx` | Simple Icons 16 | CC0 |

Added 2026-09-12, and not from the Wikipedia sweep above:

| Mark | File | Source | Licence on the source |
|---|---|---|---|
| TSCHE (competitive exams, and Abdul Hadi's PGECET rank) | `logos/tsche.png` | Exported from the academy's own TS ICET result poster of 18 June 2026, which prints it beside the rank. Cropped, near-white ground knocked out, 128px palette PNG because it renders at 52px at most | nominative fair use, as the boards. The Emblems and Names Act question raised for the Telangana state emblem applies here too; same answer, the client's call |
| Google | `logos/google.svg` | Wikimedia Commons, "Google 2015 logo.svg" | nominative fair use |
| Tech Mahindra | `logos/techmahindra.svg` | Wikimedia Commons, "TM Logo Color Pos RGB.svg", the company's own brand artwork as uploaded there | nominative fair use |

Added 2026-09-15, on Saad's note "add GATE logo" against Abdul Bari:

| Mark | File | Source | Licence on the source |
|---|---|---|---|
| NTA (stands for NEET in the admissions banner) | `logos/nta.png` | en.wikipedia, "National Testing Agency logo.png", credited there to nta.ac.in. Kept at its 421x72 source size: a wordmark shown 28px tall needs the width at 2x | public domain on Wikipedia; nominative use here |
| GATE (Abdul Bari's credential) | `logos/gate.png` | en.wikipedia, "GATE current logo.png", credited there to gate2027.iitm.ac.in. Each year's organising institute issues the lockup and this one reads "GATE 2027, IIT Madras" under the emblem; Bari did not sit GATE 2027, so only the emblem ring is kept and the year and organiser lines are cropped away. Real artwork, not redrawn; 128px on the long edge, palette PNG | fair use on Wikipedia; nominative use here, as the boards |

**Caveat for the client.** Every one of these is somebody else's trademark.
Coaching centres use board logos routinely to say which board a course
prepares for, and that nominative use is the norm, but the marks are not ours
and a board could object. The NextGen logo is the 150px Instagram avatar,
the only size that exists; TODO: ask Abdul for the vector. The TOSS emblem is
120px for the same reason.

## Blocked on the client

| Item | Impact |
|---|---|
| Vector logo (SVG/AI) | `public/logo.png` is re-sourced at 858x152 from a result poster. Soft at footer size. |
| More photographs | Seven now exist: the felicitation photograph of 4 May 2026, plus six pulled from the academy's own Google Business Profile on 2026-09-12 on the client's instruction ("yes pull"). The profile carries 36; more of the remainder can be taken if wanted. Instagram is not a photo source, being almost entirely designed posters. |
| Consent for the photographs | Three frames now show identifiable students: the felicitation photograph and two of the six gallery frames. The academy published all of them itself, which is a stronger basis than the site had before, but it is not the written consent that publishing a minor's photograph needs. Do not add a fourth face until Abdul confirms. |
| Written consent for publishing student names | The page no longer states that consent was given (client, 2026-09-11: "remove this line"), but the names of minors are still published, so the consent itself is still needed. |
| Year established | No "since" line anywhere. |
| ~~Real Google Business place link~~ | **Resolved 2026-09-12.** Abdul sent it; `site.maps` is now the `place_id` form for `ChIJhWuYf9OZyzsRdhdRxeOkuv0`, and `src/content/reviews.ts` reads the same constant. The listing's opening hours came from the same profile. |
| Which phone answers what | Three numbers are in circulation; `site.ts` documents them. |
| ~~Domain~~ | **Resolved 2026-09-14, DNS pending.** `abdulsacademy.com` is the academy's after all, registered on Hostinger, and the credentials sit with its owner rather than with Saad. It is now the production origin on Vercel and carries the canonical link and the Open Graph card. The A and CNAME records still have to be added to the Hostinger zone by whoever holds that login; see "Deployment" above. |
| Guess paper PDFs | Footer links go to Instagram posts because only poster images exist. |
| A real POLYCET and EAPCET rank list | The achievements poster's list is unusable (see REJECTED). Until one exists, TS ICET 313 is the only competitive rank on the page. Saad, 2026-09-15: leave it for now. |
| ~~"Taught by an AI engineer at Google"~~ | **Resolved 2026-09-12.** Confirmed by the client and published once, on the faculty card. See "Published on the client's word" above. |
| Urdu or Telugu versions? | The site is English only; the page says classes run in three languages. |

## Open questions

- Should fees appear? Only ₹1500 (summer camp) and ₹999 (thirty day skills)
  are published. The FAQ says so.
- "100% results" is printed on the SSC and ICSE posters and repeated here as
  written. Confirm it is true. CBSE was added to the same figure on 2026-09-12
  on the client's word, with no poster behind it, so it needs confirming twice
  over.
- The engineering pass rate is stated two ways and both are the academy's own:
  the site says "85 to 90% of engineering students cleared last semester", from
  the Instagram post of 2 Oct 2025, while the owner post on the Google profile
  of 8 April 2026 says "95% Engineering result in last semester". Ask which
  figure to publish.
- Competitive exam results: the client asked for these highlighted, and the
  account has published exactly one (TS ICET rank 313, 18 June 2026). Every one
  of the 61 posts was re-read looking for more. The achievements poster of
  2026-09-15 names POLYCET and EAPCET ranks but its list is unusable (see
  REJECTED). Ask for the real rank lists when the client is ready.
- Free seats: the client said 70+ on 2026-09-12 and his own achievements
  poster prints 30+. Saad chose 70+ on 2026-09-15; the page says 70+
  everywhere. Worth asking the client which he wants printed.
- Only five of the 74 Google reviews are quoted, because signed-out Google
  serves five. If he wants more on the page he can paste them.
- Opening hours are the listing's, not a batch timetable. Ask whether the
  batch timings should appear anywhere.
