/**
 * Photographs of the actual place.
 *
 * SOURCE: the academy's own Google Business Profile, which carries 36
 * owner-uploaded photos, pulled on 2026-09-12 from place ID
 * ChIJhWuYf9OZyzsRdhdRxeOkuv0. The client's instruction that day, asked
 * whether to take them from the account: "yes pull". Each is saved as
 * progressive JPEG in public/photos/gallery at the size its slot needs and no
 * larger: 1280px on the long edge, which covers a 390px phone at DPR 3, since
 * a static export has no optimiser and ships one file to every device.
 *
 * Instagram was checked first and is not a photo source: 61 posts, and all
 * but a handful are designed posters rather than photographs.
 *
 * CROPS ARE BAKED IN, not applied in CSS. The six render as an even 4:3 grid.
 * Two of the originals are portrait, and they are cropped to 4:3 in the file
 * itself at anchors chosen by rendering each candidate and looking at it: 12%
 * from the top on the medal photograph, which keeps both faces with headroom
 * and still shows the board behind, and 60% on the signboard, the only anchor
 * that holds the whole board.
 *
 * An earlier pass did this with `object-position` instead and shipped the full
 * portrait frames, so 700 of 1600 rows on one and 622 of 1432 on the other
 * were downloaded and decoded only for `object-fit: cover` to throw them away.
 * Cropping in the file removed 181KB for an identical result. If either
 * photograph is ever replaced, re-measure the anchor and re-crop; do not add
 * `object-position` back, or the anchor is applied twice.
 *
 * CONSENT, unchanged and still outstanding. Two of these frames show
 * identifiable students. The academy published them itself, on its own public
 * profile, which is a stronger basis than the site had before, but it is not
 * the written consent that publishing a minor's photograph needs, and the
 * same gap already applies to the felicitation photograph and to every name
 * in results.ts. Do not add a third face until Abdul confirms consent.
 */

export type Shot = {
  /** Path under public/. Goes through asset() at render time. */
  src: string;
  alt: string;
  w: number;
  h: number;
  /** True where the frame shows an identifiable student. See the note above. */
  people?: boolean;
};

export const gallery: Shot[] = [
  {
    src: "/photos/gallery/building-evening.jpg",
    alt: "The academy building on New Malakpet in the evening, its signboard lit",
    w: 1280,
    h: 960,
  },
  {
    src: "/photos/gallery/class-in-session.jpg",
    alt: "A class in session, students working at desks with the tutor alongside",
    w: 1280,
    h: 960,
    people: true,
  },
  {
    src: "/photos/gallery/classroom-window.jpg",
    alt: "A classroom with the whiteboard and the window along one wall",
    w: 1280,
    h: 960,
  },
  {
    src: "/photos/gallery/student-medal.jpg",
    alt: "A student with his medal beside the founder at the academy",
    w: 1200,
    h: 900,
    people: true,
  },
  {
    src: "/photos/gallery/classroom-empty.jpg",
    alt: "Desks and chairs set out in a classroom before a batch",
    w: 1280,
    h: 960,
  },
  {
    src: "/photos/gallery/signboard.jpg",
    alt: "The academy signboard at the entrance on New Malakpet",
    w: 1080,
    h: 810,
  },
];
