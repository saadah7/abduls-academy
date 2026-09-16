/**
 * Photographs of the actual place.
 *
 * SOURCES, both the client's own Google listings for the one building.
 *
 * 1. Abdul's Academy, place ID ChIJhWuYf9OZyzsRdhdRxeOkuv0, 36 owner-uploaded
 *    photos. Pulled 2026-09-12 on the client's "yes pull".
 * 2. NextGen AI Training Institute, the skills wing at the same address, place
 *    0x3bcb9972a9d76a75:0x6325c0cf7eceba87, 17 photos. Pulled 2026-09-16 on
 *    Saad's instruction, who sent the listing and asked for frames from it.
 *
 * Signed out, Maps serves only the first 10 of the academy's 36 and 9 of
 * NextGen's 17, the same cap that limits reviews.ts to 5 of 74. Everything
 * beyond that needs a signed-in pull, so the remaining 34 are still untouched
 * if this grid ever wants refreshing.
 *
 * Each is saved as progressive JPEG in public/photos/gallery at the size its
 * slot needs and no larger: 1280px on the long edge, which covers a 390px phone
 * at DPR 3. That ceiling is set by the Pages export, which has no optimiser and
 * ships one file to every device. On Vercel these are the source the optimiser
 * resizes down from, against the sizes attribute in Gallery.tsx.
 *
 * NOT A PHOTO SOURCE: designed posters. Instagram is 61 posts and all but a
 * handful are posters; two of NextGen's nine are the same, the 999 rupee skills
 * card and the AutoCAD lockup. The gallery shows the place, not its adverts.
 *
 * NOTHING HERE IS CROPPED ANY MORE. Every frame is landscape and natively 4:3,
 * bar the second lab angle at 1.351, trimmed 15px centrally to match. Until
 * 2026-09-16 two portrait frames carried baked-in crops at measured anchors,
 * 12% from the top on a medal photograph and 60% on a signboard; both frames
 * are gone and their anchors with them.
 *
 * That history still sets the rule for anything added later. Crop in the file,
 * never with `object-position`. An early pass shipped the full portrait frames
 * and let `object-fit: cover` throw away 700 of 1600 rows on one and 622 of
 * 1432 on the other, 181KB decoded for nothing. If a portrait frame is ever
 * added back, re-measure its anchor and bake it in; adding `object-position`
 * on top of a baked crop applies the anchor twice.
 *
 * CONSENT, still outstanding. Two frames show identifiable people, the same
 * count as before: a school class at work, and a NextGen session whose learners
 * are adults and almost all seen from behind. The close portrait of a boy with
 * his medal came out on 2026-09-16, so no minor's face is now published at any
 * size. The academy published all of these itself on its own public profile,
 * which is a stronger basis than the site had before, but it is not the written
 * consent that publishing a student's photograph needs, and the same gap
 * applies to the felicitation photograph in Visit.tsx and to every name in
 * results.ts. Do not add another face until Abdul confirms consent.
 */

export type Shot = {
  /** Path under public/. Goes through asset() at render time. */
  src: string;
  alt: string;
  w: number;
  h: number;
  /** True where the frame shows an identifiable person. See the note above. */
  people?: boolean;
};

/**
 * Nine frames, three even rows. Ordered so the two exteriors, the two lab
 * frames and the two with people in them never sit side by side.
 */
export const gallery: Shot[] = [
  {
    src: "/photos/gallery/building-boards-night.jpg",
    alt: "The building at night, the Abdul's Academy and NextGen AI Training Institute signboards lit side by side",
    w: 1280,
    h: 960,
  },
  {
    src: "/photos/gallery/ai-lab.jpg",
    alt: "The NextGen computer lab, laptops set out at desks before a batch",
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
    src: "/photos/gallery/nextgen-class.jpg",
    alt: "A NextGen session under way, learners at laptops facing the trainer and the screen",
    w: 1280,
    h: 960,
    people: true,
  },
  {
    src: "/photos/gallery/ai-lab-desks.jpg",
    alt: "The computer lab from the doorway, the teaching screen at the far end",
    w: 1155,
    h: 866,
  },
  {
    src: "/photos/gallery/classroom-whiteboard.jpg",
    alt: "A classroom with the day's working still on the whiteboard",
    w: 1280,
    h: 960,
  },
  {
    src: "/photos/gallery/building-evening.jpg",
    alt: "The academy building on New Malakpet in the evening, its signboard lit",
    w: 1280,
    h: 960,
  },
  {
    src: "/photos/gallery/classroom-empty.jpg",
    alt: "Desks and chairs set out in a classroom before a batch",
    w: 1280,
    h: 960,
  },
];
