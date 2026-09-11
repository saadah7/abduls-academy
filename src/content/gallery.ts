/**
 * Photographs of the actual place.
 *
 * SOURCE: the academy's own Google Business Profile, which carries 36
 * owner-uploaded photos, pulled on 2026-09-12 from place ID
 * ChIJhWuYf9OZyzsRdhdRxeOkuv0. The client's instruction that day, asked
 * whether to take them from the account: "yes pull". They are downscaled to
 * 1600px on the long edge and saved as progressive JPEG in
 * public/photos/gallery.
 *
 * Instagram was checked first and is not a photo source: 61 posts, and all
 * but a handful are designed posters rather than photographs.
 *
 * CROPS. The six render as an even 4:3 grid, so the four landscape frames
 * (all of them natively 4:3) are uncropped and the two portrait frames lose
 * top and bottom. `focus` is the vertical anchor for those two, chosen by
 * rendering each candidate crop and looking at it rather than by guessing:
 * 12% on the medal photograph keeps both faces with headroom and still shows
 * the board behind, and 60% on the signboard is the only anchor that holds
 * the whole board. Re-measure if either file is ever replaced.
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
  /**
   * Vertical anchor for the 4:3 crop, as a CSS object-position percentage.
   * Only the portrait frames need one; the rest are already 4:3.
   */
  focus?: string;
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
    w: 1600,
    h: 1200,
  },
  {
    src: "/photos/gallery/student-medal.jpg",
    alt: "A student with his medal beside the founder at the academy",
    w: 1200,
    h: 1600,
    people: true,
    focus: "center 12%",
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
    h: 1432,
    focus: "center 60%",
  },
];
