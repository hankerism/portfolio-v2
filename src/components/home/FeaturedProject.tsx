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

        {/* Scrapbook wordmark placeholder (stands in for cover art) */}
        <figure className="relative mx-auto w-full max-w-md" aria-label="KATHA platform">
          <span aria-hidden className="tape left-1/2 -top-3 -translate-x-1/2 -rotate-2 rounded-[2px]" />
          <div className="paper flex aspect-[4/3] flex-col items-center justify-center gap-3 p-8 motion-safe:-rotate-1">
            <span className="hand text-xl text-muted-foreground">a quiet bookstore, online</span>
            <span className="font-serif text-6xl font-semibold tracking-tight text-primary sm:text-7xl">
              KATHA
            </span>
            <span className="h-px w-24 bg-border-strong" />
            <span className="text-sm font-semibold text-muted-foreground">Filipino literature, beautifully read</span>
          </div>
        </figure>
      </div>
    </Section>
  );
}
