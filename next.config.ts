import type { NextConfig } from "next";

/**
 * Two hosts, one config.
 *
 * Vercel is production, on the academy's own domain, with the Next server
 * behind it: no base path, and next/image optimises the photographs on
 * request, which matters because public/ carries about a megabyte of JPEG for
 * a page read mostly on Indian mobile data.
 *
 * GitHub Pages has no server and serves a project site under /<repo>/, so that
 * build keeps `output: "export"` and NEXT_PUBLIC_BASE_PATH, writes plain HTML
 * to out/, and serves every raster under public/ as it is.
 *
 * VERCEL is set by Vercel on every build it runs and by nothing else, so local
 * `next dev` and `next build` take the export path. That is deliberate: the
 * stricter of the two builds is the one that runs by default on a laptop.
 */
const isVercel = Boolean(process.env.VERCEL);
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  ...(isVercel ? {} : { output: "export" as const }),
  basePath,
  images: { unoptimized: !isVercel },
};

export default nextConfig;
