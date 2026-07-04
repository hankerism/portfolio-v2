import Image from "next/image";
import Section from "@/components/layout/Section";
import Stack from "@/components/layout/Stack";
import Button from "@/components/ui/Button";

/* ---------------------------------------------------------------------------
 * FeaturedProject — KATHA, the flagship. One project treated like a launch,
 * not a thumbnail. Facts are drawn from the KATHA codebase (verifiable), not
 * invented. The cover art isn't available yet (asset not hydrated), so a
 * scrapbook "paper" wordmark stands in for it.
 * ------------------------------------------------------------------------- */

const HIGHLIGHTS = [
  "Full-stack Next.js 16 App Router · TypeScript · Tailwind v4",
  "Immersive reader with type controls, bookmarks & progress",
  "Client-side search engine with highlighted results",
  "Author studio for publishing, with cover management",
  "Role-based access for readers and authors",
  "Accessible, responsive, editorial design system",
];

export default function FeaturedProject() {
  return (
    <Section id="work" tone="surface" aria-labelledby="work-heading">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Copy */}
        <Stack gap="md" align="start">
          <span className="hand text-2xl sm:text-3xl">Flagship project</span>
          <h2 id="work-heading">
            KATHA — a production-grade reading &amp; publishing platform
          </h2>
          <p className="text-lg text-foreground/80">
            A calm, premium home for Filipino literature: novels, serials, and
            short fiction, beautifully typeset for slow, unhurried reading.
            Designed, engineered, and shipped end to end — from the reading
            experience to the author studio behind it.
          </p>

          <ul className="grid gap-2.5 sm:grid-cols-2">
            {HIGHLIGHTS.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-sm text-foreground/80">
                <span aria-hidden className="mt-1 size-1.5 shrink-0 rounded-full bg-accent" />
                {h}
              </li>
            ))}
          </ul>

          <Stack direction="row" gap="sm" wrap className="pt-1">
            <Button href="https://katha-sigma.vercel.app/" target="_blank" rel="noreferrer" variant="primary">
              Visit KATHA
            </Button>
          </Stack>
        </Stack>

        {/* Scrapbook stack of real screenshots — homepage in front, two behind */}
        <figure className="relative mx-auto aspect-[4/3] w-full max-w-md" aria-label="KATHA screenshots">
          {/* Behind, left */}
          <div className="absolute left-0 top-8 z-0 w-[56%] motion-safe:-rotate-6">
            <div className="paper relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/katha/katha-library.png"
                alt=""
                aria-hidden="true"
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 240px, 40vw"
              />
            </div>
          </div>

          {/* Behind, right */}
          <div className="absolute right-0 top-12 z-0 w-[52%] motion-safe:rotate-6">
            <div className="paper relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/katha/katha-reader-mode.png"
                alt=""
                aria-hidden="true"
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 220px, 38vw"
              />
            </div>
          </div>

          {/* Front — the hero */}
          <div className="absolute left-1/2 top-0 z-10 w-[66%] -translate-x-1/2 motion-safe:-rotate-1">
            <span aria-hidden className="tape left-1/2 -top-3 -translate-x-1/2 -rotate-2 rounded-[2px]" />
            <div className="paper relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/katha/katha-homepage.png"
                alt="The KATHA homepage — a calm, editorial reading experience"
                fill
                priority
                className="object-cover object-top"
                sizes="(min-width: 1024px) 300px, 55vw"
              />
            </div>
          </div>
        </figure>
      </div>
    </Section>
  );
}
