import Section from "@/components/layout/Section";
import Stack from "@/components/layout/Stack";
import Button from "@/components/ui/Button";

/* ---------------------------------------------------------------------------
 * Hero — the claim. Carries the page's single <h1>.
 * Leads with the elevated Product-Engineer positioning (per CONTENT.md) in the
 * warm GHL voice, and filters visitors toward the work or a conversation.
 * ------------------------------------------------------------------------- */

const STACK = ["Next.js", "TypeScript", "GoHighLevel", "Make", "Airtable"];

export default function Hero() {
  return (
    <Section id="top" tone="default" className="relative overflow-hidden pt-14 sm:pt-20">
      {/* Decorative scrapbook accents — purely ornamental */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        <span className="absolute -right-10 top-24 hidden size-40 rounded-full bg-lavender-tint blur-2xl sm:block" />
        <span className="absolute left-1/2 top-10 hidden size-24 rounded-full bg-pink/40 blur-2xl lg:block" />
      </div>

      <div className="relative z-10 max-w-3xl">
        <Stack gap="md" align="start">
          <span className="hand text-3xl text-primary sm:text-4xl">Hi, I&apos;m Abby 👋</span>

          <h1 className="text-balance">
            I build complete digital products and{" "}
            <span className="marker">business systems</span>.
          </h1>

          <p className="max-w-2xl text-lg text-foreground/80 sm:text-xl">
            Product engineer and automation specialist with 6+ years in operations.
            I design, build, and automate the things businesses run on — organised
            behind the scenes, lovely out front.
          </p>

          <Stack direction="row" gap="sm" wrap className="pt-2">
            <Button href="#work" size="lg" variant="primary">
              See my work
            </Button>
            <Button href="#contact" size="lg" variant="outline">
              Start a project
            </Button>
          </Stack>

          {/* Tooling — quiet credibility strip */}
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-4" aria-label="Core tools">
            {STACK.map((tool) => (
              <li key={tool} className="text-sm font-semibold text-muted-foreground">
                {tool}
              </li>
            ))}
          </ul>
        </Stack>
      </div>
    </Section>
  );
}
