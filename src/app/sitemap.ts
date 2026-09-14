import type { MetadataRoute } from "next";

/* ---------------------------------------------------------------------------
 * sitemap.ts — the known public routes, listed plainly. /style-guide is an
 * internal design reference (deliberately unlisted elsewhere) and is left
 * out on purpose.
 * ------------------------------------------------------------------------- */

const BASE_URL = "https://www.heyitsabby.space";

const ROUTES = [
  "/",
  "/projects",
  "/projects/bahay-liwanag",
  "/projects/katha",
  "/projects/stephanie-center",
  "/projects/wedding-rsvp",
  "/business-systems",
  "/resume",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${BASE_URL}${route}`,
  }));
}
