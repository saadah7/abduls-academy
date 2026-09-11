/**
 * Every third-party mark on the site, in one place, with where it came from.
 *
 * Board and university marks are the organisations' own logos, used the way
 * every coaching centre uses them: to say which board a course prepares for.
 * They stay trademarks of their owners. Files under public/logos were taken
 * from the English Wikipedia article on each body on 2026-09-11; the NIOS mark
 * is public domain on Commons, the rest are hosted there as fair use.
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
    rasterised to 192px because the SVG is 478KB.
  */
  ssc: { src: "/logos/telangana.png", alt: "SSC, Board of Secondary Education, Telangana", w: 192, h: 192 },
  cbse: { src: "/logos/cbse.svg", alt: "CBSE", w: 251, h: 297 },
  cisce: { src: "/logos/cisce.png", alt: "ICSE, CISCE", w: 223, h: 160 },
  /*
    IGCSE is Cambridge International's exam. Its lockup reads "Cambridge
    International Education", which nobody in Malakpet calls it, and the
    Cambridge IGCSE mark itself is not published anywhere we can take it from.
    So a text mark, like SSC.
  */
  igcse: { text: "IGCSE", alt: "Cambridge IGCSE" },
  tsbie: { src: "/logos/tsbie.png", alt: "Telangana State Board of Intermediate Education", w: 214, h: 213 },
  ou: { src: "/logos/ou.png", alt: "Osmania University", w: 192, h: 160 },
  jntuh: { src: "/logos/jntuh.png", alt: "JNTU Hyderabad", w: 153, h: 160 },
  /* a tall mark: set larger than the round seals or it reads as a dot */
  nios: { src: "/logos/nios.svg", alt: "NIOS, National Institute of Open Schooling", w: 150, h: 226, tall: true },
  /* the society's own emblem, taken from telanganaopenschool.org, the only size it publishes */
  toss: { src: "/logos/toss.png", alt: "TOSS, Telangana Open School Society", w: 113, h: 133 },
  /*
    TSCHE conducts EAPCET, ECET, ICET and PGECET, so its emblem stands for the
    competitive-exams board. Exported on 2026-09-12 from the academy's own TS
    ICET result poster (@abdulsacademy, 18 June 2026), which prints it beside
    the rank: cropped, near-white ground knocked out, resampled to 256px.
    Taken off the artwork rather than redrawn, and note it is the one mark here
    that carries green, which the no-green rule covers brand colour by, not
    somebody else's seal.
  */
  tsche: { src: "/logos/tsche.png", alt: "Telangana State Council of Higher Education", w: 256, h: 256 },

  // the two academies
  abduls: { src: "/logo.png", alt: "Abdul's Academy", w: 858, h: 152 },
  nextgen: { src: "/photos/nextgen-logo.png", alt: "NextGen AI Training Institute", w: 150, h: 150 },

  /*
    Employer wordmarks, for the credential line on the faculty cards. Both are
    the companies' own current logos off Wikipedia, fetched 2026-09-12: Google
    is "Google 2015 logo.svg" on Commons, Tech Mahindra is "TM Logo Color Pos
    RGB.svg" from the company's own brand artwork. Nominative use, the same
    basis as the boards above, and the same caveat: they are not ours. They are
    flagged `wide` because a wordmark set at the emblems' 36px would run 140px
    across a 370px card.
  */
  google: { src: "/logos/google.svg", alt: "Google", w: 272, h: 92, wide: true },
  techmahindra: { src: "/logos/techmahindra.svg", alt: "Tech Mahindra", w: 200, h: 50, wide: true },

  // technologies
  office: { src: "/tech/office.svg", alt: "Microsoft 365", w: 40, h: 44 },
  excel: { src: "/tech/excel.svg", alt: "Microsoft Excel", w: 2290, h: 2130 },
  tally: { src: "/tech/tally.png", alt: "Tally", w: 480, h: 192 },
  canva: { src: "/tech/canva.svg", alt: "Canva", w: 24, h: 24 },
  instagram: { src: "/tech/instagram.svg", alt: "Instagram", w: 24, h: 24 },
} as const satisfies Record<string, Mark>;

export type MarkKey = keyof typeof marks;
