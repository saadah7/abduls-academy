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

/**
 * Same prefix, for an in-app destination rather than a file.
 *
 * Separate from asset() because the reason is different, and the difference
 * matters when reading a call site: asset() points at a file under public/,
 * route() points at a page or an anchor on one. Both need the base path for
 * the same reason, and neither can use a bare "/..." path, which would resolve
 * against saadah7.github.io rather than the project site.
 *
 * Anchors have to be written as route("/#results"), not "#results", because
 * the header and footer render on the legal pages too, where a bare fragment
 * would scroll a page that has no such section instead of going home to it.
 * On the home page itself the browser still treats it as a fragment, because
 * the path matches, so nothing navigates.
 */
export function route(path: string): string {
  return `${BASE}${path}`;
}
