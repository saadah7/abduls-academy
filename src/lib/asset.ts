/**
 * Prefix a public/ path with the deploy base path.
 *
 * GitHub Pages serves this as a project site under /abduls-academy/, and with
 * image optimisation off (static export) next/image uses the src verbatim, so
 * root-relative paths would point at the wrong host root. NEXT_PUBLIC_BASE_PATH
 * is inlined at build time; it is empty in local development.
 */
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return `${BASE}${path}`;
}
