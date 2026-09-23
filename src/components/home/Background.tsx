import Image from "next/image";

/* ---------------------------------------------------------------------------
 * Background — the homepage's single continuous scrapbook canvas.
 *
 * One tall master image (public/images/homepage-background.webp, sourced
 * from docs/reference/portfolio-scrapbook-master-background.webp — do not
 * regenerate it) laid down ONCE behind the whole page, at its own true
 * proportions — no stretching.
 *
 * The artwork (1536×9500, h÷w ≈ 6.18) is proportioned for a page far
 * shorter, relative to its width, than this homepage actually renders at —
 * measured: h÷w ≈ 8.25 at 1440px, ≈ 42.3 at 375px (mobile stacks content
 * much taller relative to its width than desktop does). Width-matching the
 * artwork with its aspect ratio intact therefore doesn't reach the bottom
 * of the page — short by roughly a quarter of the page at desktop widths,
 * and by most of the page on mobile. Rather than stretch to close that gap
 * (distorting the art) or tile (repeating it, restarting the composition),
 * the artwork is pinned to the top at its native ratio, and BASE_TONE — the
 * artwork's own quiet paper colour, sampled from its centre column, not
 * guessed from the design system's own tokens — fills the rest of the page
 * beneath it. Below the artwork it's a plain paper colour rather than more
 * scrapbook detail; above it, one continuous, undistorted drawing.
 * ------------------------------------------------------------------------- */

const BASE_TONE = "#f2e5d9";

export default function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      style={{ backgroundColor: BASE_TONE }}
    >
      <Image
        src="/images/homepage-background.webp"
        alt=""
        width={1536}
        height={9500}
        priority
        className="absolute left-0 top-0 h-auto w-full"
        sizes="100vw"
      />
    </div>
  );
}
