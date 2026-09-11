/**
 * Every third-party mark on the site, in one place, with where it came from.
 *
 * Board and university marks are the organisations' own logos, used the way
 * every coaching centre uses them: to say which board a course prepares for.
 * They stay trademarks of their owners. The board and university files under
 * public/logos were taken from the English Wikipedia article on each body on
 * 2026-09-11; the NIOS mark is public domain on Commons, the rest are hosted
 * there as fair use.
 *
 * Three files under public/logos do NOT come from that sweep and are documented
 * against their own entries below: `tsche.png` was exported from the academy's
 * own result poster, and `google.svg` and `techmahindra.svg` are employer
 * wordmarks fetched on 2026-09-12 for the faculty cards.
 *
 * Technology marks under public/tech: Excel and Microsoft 365 are the Commons
 * SVGs (public domain, simple geometry); Tally is the Commons PNG; Canva,
 * Instagram, HTML5 and AutoCAD are Simple Icons (CC0) with the brand colour
 * written in.
 *
 * The Telangana SSC board has no logo of its own. Its site uses the state
 * emblem, which the Emblems and Names Act restricts, so SSC is a text mark.
 *
 * `w` and `h` are the file's pixel size, which next/image needs. Display
 * size is set in CSS.
 */
export type Mark =
  | { src: string; alt: string; w: number; h: number; tall?: boolean; wide?: boolean }
  | { text: string; alt: string };

export const marks = {
  // boards and universities
  /*
    The SSC board has no logo of its own; its site and hall tickets carry the
    Telangana state emblem. The Emblems and Names Act restricts a state emblem
    in trade, which was raised with the client. He chose it anyway (2026-09-11:
    "add the state emblem for SSC anyway"). en.wikipedia file, tagged CC0,
    rasterised from the 478KB SVG, then re-exported at 128px and quantised on
    2026-09-12: it renders at 52px at most, so 192px was four times the need.
  */
  ssc: { src: "/logos/telangana.png", alt: "SSC, Board of Secondary Education, Telangana", w: 128, h: 128 },
  cbse: { src: "/logos/cbse.svg", alt: "CBSE", w: 251, h: 297 },
  cisce: { src: "/logos/cisce.png", alt: "ICSE, CISCE", w: 128, h: 92 },
  /*
    IGCSE is Cambridge International's exam. Its lockup reads "Cambridge
    International Education", which nobody in Malakpet calls it, and the
    Cambridge IGCSE mark itself is not published anywhere we can take it from.
    So a text mark, like SSC.
  */
  igcse: { text: "IGCSE", alt: "Cambridge IGCSE" },
  tsbie: { src: "/logos/tsbie.png", alt: "Telangana State Board of Intermediate Education", w: 128, h: 127 },
  ou: { src: "/logos/ou.png", alt: "Osmania University", w: 128, h: 107 },
  jntuh: { src: "/logos/jntuh.png", alt: "JNTU Hyderabad", w: 122, h: 128 },
  /* a tall mark: set larger than the round seals or it reads as a dot */
  nios: { src: "/logos/nios.svg", alt: "NIOS, National Institute of Open Schooling", w: 150, h: 226, tall: true },
  /* The society's own emblem. telanganaopenschool.org publishes it at one size
     only, 120px; this is that file, re-exported at 128px on the long edge and
     quantised, so it is a resample of the only size available rather than a
     larger original. */
  toss: { src: "/logos/toss.png", alt: "TOSS, Telangana Open School Society", w: 109, h: 128 },
  /*
    TSCHE conducts EAPCET, ECET, ICET and PGECET, so its emblem stands for the
    competitive-exams board. Exported on 2026-09-12 from the academy's own TS
    ICET result poster (@abdulsacademy, 18 June 2026), which prints it beside
    the rank: cropped, near-white ground knocked out, resampled to 256px.
    Taken off the artwork rather than redrawn. 128px because it renders at 52px
    at most, and palette-quantised: as a 256px RGBA it was 126KB, the heaviest
    file in this directory by nearly 2x, for a 52px seal.

    Two caveats on the record. It is the one mark here that carries green, and
    PLAN.md's no-green rule is about this brand's own palette, not about a third
    party's seal; that reading is now written into PLAN.md rather than left in
    this comment. And the Emblems and Names Act question raised against the
    Telangana state emblem above applies to a state council's seal too: same
    answer, it is the client's call, and it is recorded in PLAN.md.

    Licence basis: the same nominative fair use as the board marks above. The
    seal is TSCHE's.
  */
  tsche: { src: "/logos/tsche.png", alt: "Telangana State Council of Higher Education", w: 128, h: 128 },

  // the two academies
  abduls: { src: "/logo.png", alt: "Abdul's Academy", w: 858, h: 152 },
  nextgen: { src: "/photos/nextgen-logo.png", alt: "NextGen AI Training Institute", w: 150, h: 150 },

  /*
    Employer wordmarks, for the credential line on the faculty cards. Both were
    fetched from Wikimedia Commons on 2026-09-12: Google is "Google 2015
    logo.svg"; Tech Mahindra is "TM Logo Color Pos RGB.svg", which is the
    company's own brand artwork as uploaded there, and still carries its
    site-export class names.

    Licence basis: nominative fair use, the same as the board marks above, and
    the same caveat: these are somebody else's trademarks, not ours. They are
    named on the faculty cards only because the credential beside them names
    the employer.

    Flagged `wide` because a wordmark set at the emblems' 36px would run 140px
    across a 370px card.
  */
  google: { src: "/logos/google.svg", alt: "Google", w: 272, h: 92, wide: true },
  techmahindra: { src: "/logos/techmahindra.svg", alt: "Tech Mahindra", w: 200, h: 50, wide: true },

  // technologies
  office: { src: "/tech/office.svg", alt: "Microsoft 365", w: 40, h: 44 },
  excel: { src: "/tech/excel.svg", alt: "Microsoft Excel", w: 2290, h: 2130 },
  tally: { src: "/tech/tally.png", alt: "Tally", w: 160, h: 64 },
  canva: { src: "/tech/canva.svg", alt: "Canva", w: 24, h: 24 },
  instagram: { src: "/tech/instagram.svg", alt: "Instagram", w: 24, h: 24 },
} as const satisfies Record<string, Mark>;

export type MarkKey = keyof typeof marks;
