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
 * than as a gallery. So the portraits crop, and the anchor for each is
 * measured and recorded in src/content/gallery.ts rather than guessed.
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
          {gallery.map((s, i) => (
            <figure className="shot" key={s.src}>
              <Image
                src={asset(s.src)}
                alt={s.alt}
                width={s.w}
                height={s.h}
                sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
                style={s.focus ? { objectPosition: s.focus } : undefined}
                // The first three are the top row, so they decode with the section.
                loading={i < 3 ? "eager" : "lazy"}
              />
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
