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
 * The heading states the aggregate and nothing more. An earlier draft read
 * "Not one review below five stars", which does not follow: `rating` is the
 * one-decimal figure Google displays, and 367/74 = 4.9595 also displays as
 * 5.0, so a shown 5.0 tolerates up to three four-star ratings. The absolute
 * claim would have needed the star histogram as data, and it is not in this
 * file. Say what is on the profile, which anyone can open and check.
 */
export function Reviews() {
  return (
    <section className="section section--tint" id="reviews">
      <div className="wrap">
        <Reveal>
          <SectionHead
            eyebrow="Reviews"
            title="Rated 5.0 out of 5 on Google."
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
