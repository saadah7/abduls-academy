# Abdul's Academy: build plan

Handoff document. Any session picking this up should read this file first, then
`CLAUDE.md`. Update the phase table as you go.

Last updated: 2026-08-06

---

## Where this stands

The project is scaffolded, builds clean and prerenders static. All copy lives in
typed content files. The **design system and the hero are being rebuilt** against
two references the client chose after rejecting the first two attempts.

Dev server: `npm run dev` → <http://localhost:3400>

Nothing is committed. There is no git repo yet, by instruction.

---

## Phase table

| # | Phase | Status |
|---|---|---|
| 0 | Research, IA, content extraction | **done** |
| 1 | Scaffold: Next 16, tokens, typed content, all 13 sections | **done** |
| 2 | Borrowed system: radius, shadow, motion, tracking tokens | **done** |
| 3 | Typography rebuild: Schibsted Grotesk, sentence case, type scale | **done** |
| 4 | Hero rebuild: centred single column, question card below | **done** |
| 5 | Proof row directly after hero | **done** |
| 6 | Sections pass: apply system to sections 3 to 11 | **in progress**. System applied globally in the globals.css rewrite; still needs a per-section review against the references |
| 7 | Footer rebuild (weakest part of the page) | todo |
| 8 | Motion and interaction polish, reduced-motion, focus states | todo |
| 9 | Responsive verification at 390 / 768 / 1024 / 1440 | todo |
| 10 | A11y and performance pass | todo |
| 11 | Real asset integration (blocked on client) | **blocked** |
| 12 | Review, commit, deploy | todo |

---

## LOCKED decisions

Do not reopen these without the client asking.

| Decision | Rationale |
|---|---|
| One page, long scroll | Client chose this over a multi-page site and over four journey-stage pages. |
| White + blue, single light theme | Client: "need the white and blue theme. not dark". No dark variant. |
| `--blue` #2A78FF, `--blue-d` #1257D6 | #2A78FF sampled from the academy's own logo plate. It is 4.05:1 on white so it is display-only; #1257D6 is 6.2:1 and carries all small text. |
| No green anywhere | The logo ring contains #01A54C, but the client said "remove green if present anywhere". |
| No second accent colour | Blue does all accent work. A yellow highlighter was tried and removed. |
| Sentence case headings | Both references are sentence case. Two typefaces were rejected while headings were all-caps. |
| Results = the centrepiece | The academy's strongest asset. Named students, marks verbatim, nothing rounded up. |
| Full transparency: show every result **with** hall ticket numbers | Client, reversing the earlier policy: "full transparency, show all results with roll numbers". The concern was raised and he reaffirmed, so it is his call. `Student.roll` exists and renders, but is empty pending the real result sheets. Never invent one. |
| Results are uniform rows, not a card grid | Cards rendered uneven for three reasons: counts (6, 10, 7, 4, 4) never divided into columns so every board ended on an orphan row; `margin-top: auto` on the note left hollow gaps; and the topper's longer note made the whole first row taller. Rows are identical height at any count. |
| Known-count grids use explicit columns, never `auto-fill` | `auto-fill` resolved to 4 columns at this container width, leaving Reasons as 6 cells in 4 + 2 with a large empty block, and Rescue as 3 + 1. Reasons is now 3 columns, Rescue 4. Programmes keeps 3 and lets a stranded last card span the full row. |
| Icons are Hugeicons free, stroke style | `@hugeicons/react` + `@hugeicons/core-free-icons`, both MIT, 5,437 icons. All usage goes through `src/components/Icon.tsx` so stroke weight and sizing stay consistent. Icon choices live as string keys in content files so those stay pure data. |
| Content lives in `src/content/*.ts` | Client chose "static for now, decide later"; typed files keep a CMS swap cheap. |
| CTAs are `tel:` and `wa.me` deep links | Frontend only. A form with no backend would fail silently. |
| Hero visual = the Arcade widget pattern, not an image | Client: "instead of that visual, add that design as in arcade". Arcade's hero visual is a segmented toggle with a sliding tracker above a 72px input bar with a 36x36 circular submit. Ours picks a stage, takes a subject, and composes a prefilled `wa.me` booking. Values borrowed verbatim from `arcade.css`: track radius 16px / padding 4px / gap 4px, option height 36px, `transition: all .22s cubic-bezier(.6,.6,0,1)`, bar height 72px / radius 24px / max-width 468px / margin-top 16px. Two adaptations: their track is `#11182724` with white labels because their hero is dark, ours is ink at 7% with a white active pill on white; and their bar has no border, ours needs one to read as a surface. |
| Question card moved out of the hero to its own "Our method" section | Displaced by the widget. It now sits after Faculty, where it evidences the "concept first, then the paper" claim instead of competing with the hero. |
| Hero gradient built in CSS, **not** copied from Arcade's technique | Arcade renders theirs as a WebGL shader canvas via `unicornstudio.js@v1.4.34` injected from jsDelivr, which is why it appears in neither their HTML nor their CSS. A continuously running shader plus a third-party CDN is the wrong trade for parents and students on mid-range Android over mobile data. Ours is 3 radial gradients + a 5-stop vertical wash + an inline SVG `feTurbulence` grain at 14% overlay. Static, no dependency, no runtime cost. |
| Hero wash is light to ~58%, blue below | So the eyebrow, headline and lede sit on pale ground in dark ink while the widget sits on colour, exactly as Arcade's does. Consequence: anything below the lede must be light-on-blue. `.demo-note` and `.hero-links .btn-2` are already handled; add nothing dark there. |
| Toggle track reverted to Arcade's original `#11182724` with white labels | An earlier revision lightened it for a white hero. Once the hero gained the blue ground that adaptation became wrong, so it was reverted. Ours resolves to `#0b1a3024`, the same alpha byte over our ink. |

## REJECTED, do not retry

| Attempt | Why it failed |
|---|---|
| "Honours Board" direction: warm paper, ruled marksheet, dense typographic results list | Client: "the honors board isnt good". |
| Dark theme / theme-aware tokens | Client wants light only. |
| **Anton** display face | "the current one is too bold". Ships a single heavy weight, so weight was not tunable. |
| **Bricolage Grotesque** at wght 470-500 | "i dont like the font too". |
| All-caps headings with `+.028em` tracking | Not reference-true. Both references track at ~0. |
| Split hero: copy left, question card right | "i dont like the hero". Both references centre the hero and put the visual below. |
| A graphic pattern as the hero visual | Client clarified: "i need templates for website, not the visual". |
| Multi-agent research workflows | Burns tokens for what grep answers. `CLAUDE.md` in `C:\dev` already says "Grep > general-purpose agent for lookups". Two workflows were launched and stopped. Extract with grep. |

---

## Borrowed system

Real values, grepped from the downloaded stylesheets, not eyeballed. Sources:
`arcade.css` (461KB Webflow) and `miter.css` (184KB Next.js).

### Radius, both references agree

Arcade: `16px` dominant, 106 uses, then `8px`, `12px`, `24px`, `80px` pill.
Miter: `--radius-2xl: 1rem` (= 16px), `--radius-md: .375rem`, `--radius-xs: .125rem`.

```
--r-lg: 16px    /* cards, panels, the hero question card */
--r-md: 8px
--r-sm: 6px
--r-pill: 9999px
```

### Shadows, taken verbatim from Arcade and recoloured to our ink

Arcade layers 4 to 6 stops of `#111827` at 3% to 12% alpha. This is the single
most valuable thing borrowed; the previous shadows here were invented.

```
/* subtle */
0 2px 2px #1118270f, 0 3px 3px #1118270a
/* card */
0 16px 16px #11182708, 0 8px 8px #11182708, 0 4px 4px #11182708, 0 2px 2px -2px #11182708
/* card + hairline ring */
…as card… , 0 0 0 1px #1118271f
/* elevated, use on the hero question card */
0 24px 24px -12px #1118270a, 0 12px 12px -6px #1118270a, 0 6px 6px -3px #1118270a,
0 3px 3px -1.5px #1118270a, 0 1px 1px -.5px #1118270a, 0 0 0 1px #1118271a
```

### Motion

Arcade durations: `.2s` dominant (85 uses), then `.15s`, `.35s`, `.1s`, `.3s`.
Arcade easings: `cubic-bezier(.6,.6,0,1)` (15), `cubic-bezier(.25,.46,.45,.94)`
(11), `cubic-bezier(.16,1,.3,1)` (11).

```
--t-fast: .15s      --t-base: .2s      --t-slow: .35s
--e-out:   cubic-bezier(.16,1,.3,1)     /* entrances, reveals */
--e-emph:  cubic-bezier(.6,.6,0,1)      /* emphasis, exits */
```

### Tracking

Arcade: `letter-spacing: 0` on 23 declarations. Miter: `.01em` / `-.01em`.
So headings sit at `0`, display sizes may go to `-.01em`. Positive tracking is
reserved for small uppercase labels only.

### Spacing

Miter base unit `--spacing: .25rem`. Tailwind v4 default text scale.

### Structure, shared by both references

1. Centred single-column hero: headline → subhead → CTA row, all centre-aligned
2. Product visual full width directly below, not beside
3. Social proof immediately after the hero
4. Tabbed sections for switching between related content
5. Metrics-driven cards for testimonials and outcomes

### Take colour from neither

Arcade primary `#2142e7` is close to our logo blue, which validates electric
blue on white, but the ramp is Tailwind grey. Miter is warm: `#260f14` maroon,
`#f0ebe4` cream, `#ffae9e` peach, `#66a88c` sage. Neither palette is ours.

---

## Typography decision

Rejected: Anton (single weight, too bold), Bricolage Grotesque (disliked).

**Chosen: Schibsted Grotesk**, variable, wght 400 to 900, latin subset already
downloaded and verified. Reasons: a real weight range so "too bold" is fixable
by changing a number; warmer and more characterful than Inter without being
quirky; holds up in sentence case at display size, which is how both references
set their headlines; not on the overused list (Inter, Roboto, Space Grotesk,
Poppins, Montserrat, Playfair, system stacks).

Archivo is being dropped. Arcade runs Inter for 15 of its font-family
declarations, i.e. essentially one face doing everything with weight and size
carrying the hierarchy. Pairing two grotesks (Archivo + Schibsted) would be a
weak pairing anyway. One family, fewer variables, and if the client dislikes it
the swap is one import.

Also downloaded and available locally if this one is rejected too:
Instrument Serif (warning: 400 only, same single-weight trap as Anton),
Fraunces (variable serif, characterful, risks reading artisanal),
Funnel Display (variable, geometric, friendly).

Miter's own display face is **Denim** (`DenimVF.woff2`), which is commercial and
not licensable for this project.

---

## Blocked on the client

Nothing below can be resolved from this side.

| Item | Impact |
|---|---|
| Vector logo (SVG/AI) | `public/logo.png` is his real mark recovered from the Instagram CDN at 150px and upscaled 3x. It is soft. Instagram serves nothing larger. |
| 3 photographs | Building from the street, a batch mid-session, results day. Section 10 renders labelled placeholder slots until these arrive. |
| Year established | The masthead has no "since" line. |
| Real WhatsApp link and Maps place link | Both are `#` placeholders with TODOs in `src/content/site.ts`. |
| Domain | `abdulsacademy.com` resolves to a WordPress.com parking cert, so it is not his. |
| Written consent for publishing student names | Minors, permanently indexed. The page states consent was given; that needs to be true. |
| Is the logo green intentional? | #01A54C is in the profile mark. Removed on instruction, but worth confirming it is not brand. |
| Urdu or Telugu versions? | The contact block says all three languages are spoken; the site is English only. |

---

## Open questions

- Should fees appear on the page? Their creatives say "affordable" and "50% off"
  but never state a number. Current copy says "fees stated up front" without one.
- The academy claims "100% results" alongside an ICSE list topping out at 67%.
  Current copy says "100% pass rate", which is defensible. Confirm it is true.
- Do they want the guess papers (a real thing they publish) as a downloads
  section? It would be a strong reason for students to return to the site.
