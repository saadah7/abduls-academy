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
  | { src: string; alt: string; w: number; h: number; tall?: boolean }
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

  // the two academies
  abduls: { src: "/logo.png", alt: "Abdul's Academy", w: 858, h: 152 },
  nextgen: { src: "/photos/nextgen-logo.png", alt: "NextGen AI Training Institute", w: 150, h: 150 },

  // technologies
  office: { src: "/tech/office.svg", alt: "Microsoft 365", w: 40, h: 44 },
  excel: { src: "/tech/excel.svg", alt: "Microsoft Excel", w: 2290, h: 2130 },
  tally: { src: "/tech/tally.png", alt: "Tally", w: 480, h: 192 },
  canva: { src: "/tech/canva.svg", alt: "Canva", w: 24, h: 24 },
  instagram: { src: "/tech/instagram.svg", alt: "Instagram", w: 24, h: 24 },
} as const satisfies Record<string, Mark>;

export type MarkKey = keyof typeof marks;
