import type { MetadataRoute } from "next";

/**
 * Allow everything, and point at the sitemap.
 *
 * ONE HONEST CAVEAT, so nobody assumes more of this file than it does. A
 * static export writes it to out/robots.txt, which on a GitHub Pages project
 * site is served at /abduls-academy/robots.txt. Crawlers only read robots.txt
 * from the host root, and https://saadah7.github.io/robots.txt is not ours to
 * write. So this file is inert today: it starts working the moment the site
 * moves to its own domain, and it costs nothing to have ready. The sitemap
 * does not depend on it -- submit that directly in Search Console.
 *
 * There is nothing here worth disallowing: the site is three public pages with
 * no admin area, no search parameters and no duplicate paths.
 */
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3400";
/**
 * Required by `output: "export"`: a metadata route is a route handler, and a
 * static export refuses to build one that has not declared itself static.
 */
export const dynamic = "force-static";


export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
