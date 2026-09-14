import { StarIcon } from "@hugeicons/core-free-icons";
import { Icon } from "@/components/ui/Icon";
import { Marquee } from "@/components/ui/Marquee";
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
 * The heading states the aggregate and nothing more. An earlier draft read
 * "Not one review below five stars", which does not follow: `rating` is the
 * one-decimal figure Google displays, and 367/74 = 4.9595 also displays as
 * 5.0, so a shown 5.0 tolerates up to three four-star ratings. The absolute
 * claim would have needed the star histogram as data, and it is not in this
 * file. Say what is on the profile, which anyone can open and check.
 *
 * Since 2026-09-15 the quotes run as one self-scrolling row, edge to edge
 * (Saad: "make this section shorter, redesign it to actually look like
 * reviews, can be auto scroll marquee"). Each card is shaped like the review
 * it came from: the reviewer's own star count, the whole quote, the name
 * behind an initial. The quote is never clamped, because reviews.ts forbids
 * trimming; the card width is set so the longest review runs to about a
 * dozen lines. The row pauses under the pointer and, under reduced motion, stands
 * still and scrolls by hand.
 */
export function Reviews() {
  return (
    <section className="section section--tint" id="reviews">
      <div className="wrap">
        <Reveal>
          <SectionHead
            eyebrow="Reviews"
            title="Rated 5.0 out of 5."
            lede={
              <>
                <span className="rating">
                  <span className="rating-stars" aria-hidden="true">
                    {Array.from({ length: Math.round(Number(googleRating.rating)) }, (_, i) => (
                      <Icon key={i} icon={StarIcon} size={16} />
                    ))}
                  </span>
                  <b className="tabular">{googleRating.rating}</b>
                </span>{" "}
                from {googleRating.count} reviews on{" "}
                <a
                  className="link"
                  href={googleRating.url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Google
                </a>
                .
              </>
            }
          />
        </Reveal>
      </div>

      <Reveal>
        <Marquee>
          {reviews.map((r) => (
            <figure className="card review" key={r.name}>
              <span className="review-stars" role="img" aria-label={`${r.stars} out of 5 stars`}>
                {Array.from({ length: r.stars }, (_, i) => (
                  <Icon key={i} icon={StarIcon} size={14} />
                ))}
              </span>
              <blockquote>{r.quote}</blockquote>
              <figcaption>
                <span className="review-avatar" aria-hidden="true">
                  {r.name.charAt(0).toUpperCase()}
                </span>
                {r.name}
              </figcaption>
            </figure>
          ))}
        </Marquee>
      </Reveal>
    </section>
  );
}
