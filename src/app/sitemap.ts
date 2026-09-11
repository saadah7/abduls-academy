import type { MetadataRoute } from "next";

/**
 * Three URLs, written absolute.
 *
 * A static export emits this as out/sitemap.xml, so it is served from the
 * project path (/abduls-academy/sitemap.xml). That is fine for a sitemap: it
 * is found by being submitted in Search Console or named in robots.txt, not by
 * sitting at the host root. The URLs inside it have to be absolute and have to
 * carry the base path, which is why they come from the same
 * NEXT_PUBLIC_SITE_URL that metadataBase uses rather than from a bare "/".
 *
 * lastModified is the date this content was last actually revised, by hand. It
 * is not `new Date()`: a sitemap that claims every page changed on every build
 * teaches crawlers to ignore the field.
 */
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3400";
/**
 * Required by `output: "export"`: a metadata route is a route handler, and a
 * static export refuses to build one that has not declared itself static.
 */
export const dynamic = "force-static";

const REVISED = "2026-09-12";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: REVISED,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: REVISED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: REVISED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
