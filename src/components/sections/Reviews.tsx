import { StarIcon } from "@hugeicons/core-free-icons";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { googleRating, reviews } from "@/content/reviews";

/**
 * What parents and students already wrote, on Google, under their own names.
 *
 * Every quote is verbatim; the rules that govern this content, including why
 * spelling is left exactly as the reviewer typed it and why only five of the
 * 74 are quoted, are at the top of src/content/reviews.ts. The aggregate is
 * the honest headline here, so it leads and links straight to the profile
 * where anyone can check it.
 *
 * The heading states arithmetic, not a boast: an average of exactly 5.0 over
 * 74 ratings is only possible if every one of the 74 is five stars, and
 * Google's own histogram on the profile agrees, showing 74 against five stars
 * and zero against four and three. If the rating ever moves off 5.0 the
 * heading is false and has to change with it.
 */
export function Reviews() {
  return (
    <section className="section section--tint" id="reviews">
      <div className="wrap">
        <Reveal>
          <SectionHead
            eyebrow="Reviews"
            title="Not one review below five stars."
            lede={
              <>
                <span className="rating">
                  <span className="rating-stars" aria-hidden="true">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Icon key={i} icon={StarIcon} size={16} />
                    ))}
                  </span>
                  <b className="tabular">{googleRating.rating}</b>
                </span>{" "}
                from {googleRating.count} reviews on{" "}
                <a className="link" href={googleRating.url} target="_blank" rel="noreferrer">
                  Google
                </a>
                .
              </>
            }
          />
        </Reveal>

        <Reveal className="quotes">
          {reviews.map((r) => (
            <figure className="card quote" key={r.name}>
              <blockquote>{r.quote}</blockquote>
              <figcaption>{r.name}</figcaption>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
