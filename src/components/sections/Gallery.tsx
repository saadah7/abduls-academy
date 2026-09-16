import Image from "next/image";
import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { gallery, type Shot } from "@/content/gallery";
import { asset } from "@/lib/asset";

/**
 * One frame. Shared by the desktop grid and the phone marquee below, so the
 * two can never drift into showing different photographs at different sizes.
 */
function Frame({ shot }: { shot: Shot }) {
  return (
    <figure className="shot">
      {/*
        All nine lazy. next/image promotes any non-lazy image to a
        <link rel="preload"> in the head, and this section sits six sections
        down, so eager-loading the top row put 589KB ahead of the font and the
        stylesheet for images nobody can see yet. The nine sources now weigh
        1.4MB, so the rule matters more, not less, than it did at six.

        The hidden arrangement is cheap rather than free: both render the same
        nine URLs, so whichever is display:none at this width resolves from the
        same cache entries the visible one filled. Measured on a fresh load at
        phone width: 27 img elements, four distinct requests. It costs DOM
        nodes, not bytes.

        `sizes` tracks both arrangements. A marquee card is 78vw but clamped to
        340px, so 80vw only describes it below about 430px; above that the card
        is the flat 340px and declaring 80vw would ask next/image for a bigger
        candidate than anything on screen. Then two columns under 900px, three
        above that, and .wrap caps the
        row at --max 1200px less two --pad and two 16px gaps, so the widest a
        frame ever gets is (1120 - 32) / 3 = 363px. Without the attribute
        next/image emits no srcset at all and every device, phones included,
        takes the w=3840 render: 592KB across the original six rather than
        about 190KB. On the Pages build images.unoptimized means there is no
        srcset to pick from and this is inert.
      */}
      <Image
        src={asset(shot.src)}
        alt={shot.alt}
        width={shot.w}
        height={shot.h}
        sizes="(max-width: 430px) 80vw, (max-width: 560px) 340px, (max-width: 900px) 50vw, (max-width: 1280px) 33vw, 363px"
        loading="lazy"
      />
    </figure>
  );
}

/**
 * The place itself. Photographs from the client's two Google listings, the
 * academy's and NextGen's, pulled on the client's say-so; provenance and the
 * outstanding consent note are in src/content/gallery.ts.
 *
 * TWO ARRANGEMENTS OF THE SAME NINE FRAMES, chosen by width alone.
 *
 * Above 560px, the grid: an even 4:3 grid, nine frames in three rows since
 * 2026-09-16. CSS columns was tried when the grid was six, to avoid cropping
 * the two portrait frames at all, and could not fill three columns evenly: the
 * shortest ran about 230px short whichever way the frames were ordered, which
 * reads as a hole rather than as a gallery. The grid stayed, and the portrait
 * frames have since been replaced, so nothing crops now. At the two-column
 * breakpoint the last frame takes both tracks, so the set ends square instead
 * of leaving half a row empty.
 *
 * At 560px and below, the marquee, on Saad's note of 2026-09-16: "this section
 * on mobile should be same as the reviews section, marquee, desktop
 * unchanged". So it is literally the reviews section's Marquee, edge to edge
 * outside .wrap exactly as that one sits, pausing off screen and standing
 * still under reduced motion. It runs slower than the reviews row, 80s against
 * 48s, because it carries nine frames rather than five and the point is to
 * hold the pace at about 35px a second either way.
 *
 * The desktop grid is deliberately untouched by any of this, down to its
 * staggered reveal: the marquee is a second arrangement beside it, not a
 * rewrite of it. Only one of the two is ever rendered at a given width.
 */
export function Gallery() {
  return (
    <section className="section section--tint" id="gallery">
      <div className="wrap">
        <Reveal>
          <SectionHead
            eyebrow="Inside the academy"
            title="The building, the classrooms, the batches."
          />
        </Reveal>

        <Reveal className="shots" stagger>
          {gallery.map((shot) => (
            <Frame shot={shot} key={shot.src} />
          ))}
        </Reveal>
      </div>

      <Reveal className="shots-marquee">
        <Marquee>
          {gallery.map((shot) => (
            <Frame shot={shot} key={shot.src} />
          ))}
        </Marquee>
      </Reveal>
    </section>
  );
}
