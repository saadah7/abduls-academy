import type { NextConfig } from "next";

/**
 * Static export, hosted on GitHub Pages.
 *
 * The page is fully prerendered, so `output: "export"` writes plain HTML to
 * `out/` and there is no server. GitHub Pages serves a project site under
 * `/<repo>/`, so the deploy workflow sets NEXT_PUBLIC_BASE_PATH to
 * "/abduls-academy"; local `next dev` leaves it unset and serves from `/`.
 * next/image has no optimizer on a static host, so images are served as they
 * are; every raster under public/ is already sized for its slot.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;
