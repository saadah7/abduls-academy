@AGENTS.md

# Abdul's Academy: project instructions

One-page marketing site for **Abdul's Academy**, a physical tuition centre at
16-8-726, Opposite Noor Masjid, New Malakpet, Hyderabad. Personal project under
`saadah7`, not SupaStellar.

**Read `docs/PLAN.md` before doing anything.** It carries the phase status, every
locked design decision with its rationale, and the approaches the client has
already rejected. Do not relitigate what is marked LOCKED there.

## Run it

```bash
npm install
npm run dev        # http://localhost:3400
npm run build      # static prerender, must stay clean
npx tsc --noEmit   # must stay clean
```

## Stack

Next 16 App Router · React 19 · Tailwind v4 (`@theme` tokens in
`src/app/globals.css`) · framer-motion · `next/font/google`. No backend.

## Layout

```
src/content/     all copy and data, typed. Edit content here, never in JSX.
src/components/  one component per section, plus Reveal / MagneticCTA / ScrollProgress
src/app/         layout.tsx · page.tsx · globals.css
public/logo.png  the academy's real mark
```

## Hard rules for this repo

1. **Hall ticket numbers: show them, but never invent one.** The client asked for
   full transparency, so `Student.roll` in `src/content/results.ts` exists and
   renders. It is empty everywhere because the source posters do not carry roll
   numbers against these students. Type them in only from an official result
   sheet. A fabricated hall ticket number against a real child's name is far
   worse than an absent one. Consent from the families is not optional here.
2. **No dark mode.** Single committed light theme. Do not add
   `prefers-color-scheme` overrides.
3. **Headings are sentence case.** Both design references are, and the client
   rejected two typefaces while headings were set in all-caps.
4. **`--blue` (#2A78FF) is display-only.** It is 4.05:1 on white and fails AA for
   body text. Small text, buttons and links use `--blue-d` (#1257D6, 6.2:1). Do
   not swap them.
5. **Frontend only.** No forms that post. Every CTA is a `tel:` or `wa.me` deep
   link. Backend work gets `// TODO: replace with API data`.
6. **Never commit or push unless asked.** No AI attribution in commits or PR
   bodies, ever.
7. Run the `redline` skill on the diff before opening any PR. It is the single
   post-code review; do not chain other review skills with it.

## Design references

The client chose two, and only two: <https://www.miter.com/> and
<https://www.arcade.software/>. Their stylesheets were downloaded and grepped for
real values; the extracted numbers are recorded in `docs/PLAN.md` under "Borrowed
system". Take geometry and system values from them. **Take colour from neither**:
Miter is warm maroon and cream, Arcade is Tailwind greys, and this brand is white
plus the academy's own electric blue.
