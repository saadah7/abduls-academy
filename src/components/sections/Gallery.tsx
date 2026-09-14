import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { gallery } from "@/content/gallery";
import { asset } from "@/lib/asset";

/**
 * The place itself. Photographs from the academy's own Google Business
 * Profile, pulled on the client's say-so; provenance and the outstanding
 * consent note are in src/content/gallery.ts.
 *
 * An even 4:3 grid. CSS columns was tried first, to avoid cropping the two
 * portrait frames at all, but six photographs at 4 landscape to 2 portrait
 * cannot fill three columns evenly: the shortest column ran about 230px short
 * of the others whichever way they were ordered, which reads as a hole rather
 * than as a gallery. So the portraits crop, at anchors measured per file and
 * baked into the files themselves. See src/content/gallery.ts.
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

        <Reveal className="shots">
          {gallery.map((s) => (
            <figure className="shot" key={s.src}>
              {/*
                All six lazy. next/image promotes any non-lazy image to a
                <link rel="preload"> in the head, and this section sits six
                sections down, so eager-loading the top row put 589KB ahead of
                the font and the stylesheet for images nobody can see yet.

                `sizes` tracks the grid in globals.css: one column under 560px,
                two under 900px, three above that, and .wrap caps the row at
                --max 1200px less two --pad and two 16px gaps, so the widest a
                frame ever gets is (1120 - 32) / 3 = 363px. Without the
                attribute next/image emits no srcset at all and every device,
                phones included, takes the w=3840 render: 592KB across the six
                rather than about 190KB. On the Pages build images.unoptimized
                means there is no srcset to pick from and this is inert.
              */}
              <Image
                src={asset(s.src)}
                alt={s.alt}
                width={s.w}
                height={s.h}
                sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, (max-width: 1280px) 33vw, 363px"
                loading="lazy"
              />
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
