import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";

/**
 * Allow everything, and point at the sitemap.
 *
 * This works on Vercel and does not on Pages, which is worth knowing before
 * reading a crawl report. Crawlers only read robots.txt from the host root.
 * On abdulsacademy.com this file is that root file. On a GitHub Pages project
 * site the same build lands at /abduls-academy/robots.txt, and
 * https://saadah7.github.io/robots.txt is not ours to write, so the Pages copy
 * is inert. The sitemap does not depend on it either way -- submit that
 * directly in Search Console.
 *
 * There is nothing here worth disallowing: the site is three public pages with
 * no admin area, no search parameters and no duplicate paths.
 */
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
