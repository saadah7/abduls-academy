# Abdul's Academy: build plan

Handoff document. Any session picking this up should read this file first, then
`CLAUDE.md`. Update the phase table as you go.

Last updated: 2026-09-12 (client notes: results highlight, gallery, faculty,
reviews, hours, Open Graph, favicon)

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

Dev server: `npm run dev` → <http://localhost:3400>

Repo: <https://github.com/saadah7/abduls-academy> (public). The standing rule
is branch, then PR, then merge; never push to `main` directly.

---

## The page, top to bottom

| # | Section | Band | What it is |
|---|---|---|---|
| 0 | Header | white, sticky | Full-width rectangle with a hairline below. Mark left, four links centred, "Book a demo" right. Collapses to a menu button below 980px. |
| 1 | Hero | deep blue, rounded bottom | Centred eyebrow, headline, two-sentence lede naming both academies, "Book 3 free demo classes" and "Contact us". Below: two white cards, one per academy, each opening with its own logo, four lines each, linking to their sections. |
| 2 | Proof | white | Four figures: 100% (SSC, CBSE and ICSE), 97% (Intermediate top score), 70+ (free seats in top colleges), 200+ (backlogs cleared). |
| 2a | Admissions | `--blue-100` band | One dated intake, 25 September, the long term EAPCET and NEET batch, with a WhatsApp link. One line, deliberately not the dated admissions board that was cut. |
| 3 | Programmes | white, tint cards | Four cards: Class 6 to 10, Intermediate, Diploma and Engineering, Open schooling and English. Each opens with the marks of the boards or universities it prepares for, then three lines and a demo link. |
| 4 | Results 2026 | **deep blue, rounded both ends**, white cards | The competitive result leads as one wide card (TS ICET rank 313), then one card per board with the board's own mark in the head, top five rows, one button opens every row. Names and marks verbatim. No headcount anywhere. A line under the boards names the exams batches run for. |
| 4a | Inside the academy | tint | Six photographs from the academy's own Google Business Profile, an even 4:3 grid. Crops are baked into the files, not applied in CSS. |
| 4b | Faculty | white | Three cards: Abdul Hadi, Abdul Aziz, Abdul Bari. Each carries the credential the client gave and the mark of the organisation that credential names. No subjects stated. |
| 4c | Reviews | tint | Five Google reviews verbatim, in two columns, under the 5.0 and 74-review aggregate linking to the profile. |
| 5 | Fallen behind | white | One centred statement, three figures, one button. |
| 6 | NextGen | tint | The NextGen mark above the head. Deep blue featured card for the ₹999 thirty day programme beside a three by three grid of the nine skills, each with its technology's mark. Four career course cards with icons below. |
| 7 | How we teach | white, tint cards | Four cards, one icon each. |
| 8 | Questions | white | Five native `<details>`. |
| 9 | Visit | tint | The felicitation photograph with a white card floating over it: founder line, address, opening hours, WhatsApp and Maps. |
| 10 | Footer | deep blue, rounded top | Four columns. Guess papers live here as links. |

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

---

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
| ICSE (CISCE) | `logos/cisce.png` | en.wikipedia, "CISCE logo.png", downscaled to 160px | fair use |
| IGCSE | text tile | IGCSE is Cambridge International's exam. Its lockup reads "Cambridge International Education", which the client rejected ("why did you add Cambridge International Education"), and the Cambridge IGCSE mark itself is not published anywhere takeable. Typographic, like SSC. | |
| TOSS | `logos/toss.png` | telanganaopenschool.org, its own site icon (120px, the only size it publishes), white ground made transparent | the society's own |
| TSBIE | `logos/tsbie.png` | en.wikipedia, "TSBIE Logo.jpg", white ground made transparent | fair use |
| Osmania University | `logos/ou.png` | en.wikipedia, downscaled | fair use |
| JNTU Hyderabad | `logos/jntuh.png` | en.wikipedia, downscaled | fair use |
| NIOS | `logos/nios.svg` | Commons | public domain |
| SSC (Telangana) | `logos/telangana.png` | The board has no logo; its site and hall tickets use the Telangana state emblem. The Emblems and Names Act restricts a state emblem in trade; this was raised, and the client chose it anyway ("add the state emblem for SSC anyway"). en.wikipedia, "Emblem of Telangana.svg", rasterised to 192px because the SVG is 478KB | CC0 |
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
| Domain | `abdulsacademy.com` is a WordPress.com parking page, so it is not his, even though his Google listing points at it. Worth telling him: the listing is advertising a domain he does not control. Until there is a real domain, `NEXT_PUBLIC_SITE_URL` in the deploy workflow carries the Pages URL for the Open Graph card and the canonical link. |
| Guess paper PDFs | Footer links go to Instagram posts because only poster images exist. |
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
  of the 61 posts was re-read looking for more. Ask for the EAPCET and NEET
  result posters.
- Only five of the 74 Google reviews are quoted, because signed-out Google
  serves five. If he wants more on the page he can paste them.
- Opening hours are the listing's, not a batch timetable. Ask whether the
  batch timings should appear anywhere.
