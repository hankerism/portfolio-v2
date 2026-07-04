import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Stack from "@/components/layout/Stack";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import { cx } from "@/lib/cx";

/* ===========================================================================
 * Internal Style Guide — /style-guide
 *
 * A development-only surface that renders every design-system primitive so we
 * can validate the tokens and components visually before building any real
 * pages. It contains NO homepage sections and NO portfolio content — only
 * neutral specimen text (pangrams, token names) and the primitives themselves.
 *
 * Dev-only: the route 404s in production builds (see the guard below) and is
 * marked noindex. Local helper components live at the bottom of this file so
 * the guide stays fully self-contained and never leaks into the design system.
 * ========================================================================= */

export const metadata: Metadata = {
  title: "Style Guide",
  robots: { index: false, follow: false },
};

export default function StyleGuidePage() {
  // Never serve this internal tool from a production build.
  if (process.env.NODE_ENV === "production") notFound();

  return (
    <main className="bg-background text-foreground">
      {/* Header */}
      <Section tone="surface">
        <Stack gap="sm">
          <span className="hand text-3xl">internal · not shipped</span>
          <h1>Design System Style Guide</h1>
          <p className="max-w-2xl text-muted-foreground">
            Every reusable token and component, rendered in isolation. Specimen
            text only — no product content. Route is <code>noindex</code> and
            returns 404 in production.
          </p>
        </Stack>
      </Section>

      <Container size="lg" as="div" className="pb-24">
        {/* ---- Typography ------------------------------------------------- */}
        <Group eyebrow="Type" title="Typography scale" id="typography">
          <div className="divide-y divide-border">
            <Row label="H1"><h1>The quiet editorial voice</h1></Row>
            <Row label="H2"><h2>The quiet editorial voice</h2></Row>
            <Row label="H3"><h3>The quiet editorial voice</h3></Row>
            <Row label="H4"><h4>The quiet editorial voice</h4></Row>
            <Row label="H5"><h5>The quiet editorial voice</h5></Row>
            <Row label="H6"><h6>Section eyebrow label</h6></Row>
            <Row label="Body">
              <p className="max-w-2xl">
                The quick brown fox jumps over the lazy dog. Body copy is set in
                Nunito Sans at a comfortable 1rem / 1.65 line height for calm,
                unhurried reading.
              </p>
            </Row>
            <Row label="Small"><small>Supporting caption in muted ink.</small></Row>
            <Row label="Caveat">
              <span className="hand text-4xl">a handwritten scrapbook accent</span>
            </Row>
          </div>
        </Group>

        {/* ---- Color ------------------------------------------------------ */}
        <Group eyebrow="Color" title="Palette" id="color"
          description="Semantic tokens drive components; the decorative hues are used for scrapbook accents.">
          <p className="mb-3 text-sm font-semibold">Semantic</p>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            <Swatch name="Primary" role="Plum · --primary" className="bg-primary" />
            <Swatch name="Secondary" role="Paper · --secondary" className="bg-secondary" />
            <Swatch name="Accent" role="Peach · --accent" className="bg-accent" />
            <Swatch name="Background" role="Cream · --background" className="bg-background" />
            <Swatch name="Surface" role="Paper · --surface" className="bg-surface" />
            <Swatch name="Text" role="Ink · --foreground" className="bg-foreground" />
          </div>

          <p className="mt-8 mb-3 text-sm font-semibold">Decorative</p>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-6">
            <Swatch name="Lavender" role="#B6A1D9" className="bg-lavender" />
            <Swatch name="Plum ink" role="#6D52A0" className="bg-plum-ink" />
            <Swatch name="Pink" role="#F6D3DC" className="bg-pink" />
            <Swatch name="Pink deep" role="#E7A3B6" className="bg-pink-deep" />
            <Swatch name="Sage" role="#5FBF8A" className="bg-sage" />
            <Swatch name="Muted" role="Wash · --muted" className="bg-muted" />
          </div>
        </Group>

        {/* ---- Buttons ---------------------------------------------------- */}
        <Group eyebrow="Action" title="Buttons" id="buttons">
          <Stack gap="lg">
            <Tile label="variants">
              <Stack direction="row" gap="sm" wrap align="center">
                <Button variant="primary">Primary</Button>
                <Button variant="accent">Accent</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
              </Stack>
            </Tile>

            <Tile label="sizes">
              <Stack direction="row" gap="sm" wrap align="center">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </Stack>
            </Tile>

            <Tile label="states · link · icons">
              <Stack direction="row" gap="sm" wrap align="center">
                <Button loading>Loading</Button>
                <Button disabled>Disabled</Button>
                <Button href="#buttons">Link variant (renders &lt;a&gt;)</Button>
                <Button
                  variant="accent"
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer"
                  rightIcon={<IconArrow />}
                >
                  External
                </Button>
                <Button variant="outline" leftIcon={<IconSpark />}>With icon</Button>
              </Stack>
            </Tile>

            <Tile label="fullWidth">
              <div className="w-full">
                <Button fullWidth variant="primary">Full width</Button>
              </div>
            </Tile>
          </Stack>
        </Group>

        {/* ---- Cards ------------------------------------------------------ */}
        <Group eyebrow="Surface" title="Cards" id="cards">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card><CardDemo label="Default (paper)" /></Card>
            <Card variant="plain"><CardDemo label='variant="plain"' /></Card>
            <Card variant="outline"><CardDemo label='variant="outline"' /></Card>
            <Card tilt="left"><CardDemo label='tilt="left"' /></Card>
            <Card tilt="right" interactive><CardDemo label='tilt="right" + interactive' /></Card>
            <Card tape><CardDemo label="tape" /></Card>
            <Card tilt="left" tape interactive><CardDemo label="tape + tilt + interactive" /></Card>
          </div>
        </Group>

        {/* ---- Layout ----------------------------------------------------- */}
        <Group eyebrow="Layout" title="Layout primitives" id="layout">
          <Stack gap="lg">
            <div>
              <p className="mb-3 text-sm font-semibold">Container widths</p>
              <Stack gap="sm">
                {(["sm", "md", "lg", "full"] as const).map((sz) => (
                  <div key={sz} className="rounded-[var(--radius-md)] bg-muted py-2">
                    <Container size={sz}>
                      <div className="flex h-8 items-center rounded-[var(--radius-sm)] bg-primary px-3 text-xs font-semibold text-primary-foreground">
                        size=&quot;{sz}&quot;
                      </div>
                    </Container>
                  </div>
                ))}
              </Stack>
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold">Stack spacing (row)</p>
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
                {(["xs", "sm", "md", "lg", "xl"] as const).map((g) => (
                  <Tile key={g} label={`gap="${g}"`}>
                    <Stack direction="row" gap={g}>
                      <Dot /><Dot /><Dot />
                    </Stack>
                  </Tile>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold">
                Section spacing &amp; tones (vertical rhythm = --spacing-section)
              </p>
              <div className="overflow-hidden rounded-[var(--radius-md)] border border-dashed border-border-strong">
                {(["default", "surface", "muted"] as const).map((tone) => (
                  <Section key={tone} tone={tone}>
                    <p className="text-center font-mono text-xs text-muted-foreground">
                      tone=&quot;{tone}&quot;
                    </p>
                  </Section>
                ))}
              </div>
            </div>
          </Stack>
        </Group>

        {/* ---- Decorative ------------------------------------------------- */}
        <Group eyebrow="Flourish" title="Decorative elements" id="decorative">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Tile label=".paper">
              <div className="paper flex h-24 w-full items-center justify-center">
                <span className="text-sm text-muted-foreground">paper surface</span>
              </div>
            </Tile>
            <Tile label=".tape (on .paper)">
              <div className="paper relative flex h-24 w-full items-center justify-center">
                <span aria-hidden className="tape left-1/2 -top-3 -translate-x-1/2 -rotate-2 rounded-[2px]" />
                <span className="text-sm text-muted-foreground">taped down</span>
              </div>
            </Tile>
            <Tile label=".marker">
              <p className="text-center">
                An <span className="marker">emphasized</span> phrase.
              </p>
            </Tile>
            <Tile label=".ornament">
              <div className="ornament w-full">
                <span className="hand text-xl">§</span>
              </div>
            </Tile>
          </div>
        </Group>

        {/* ---- Animation -------------------------------------------------- */}
        <Group eyebrow="Motion" title="Animation" id="animation"
          description="Scroll the page to trigger reveals. All entrance and hover motion is gated behind motion-safe / prefers-reduced-motion.">
          <Stack gap="lg">
            <div>
              <p className="mb-3 text-sm font-semibold">
                &lt;Reveal&gt; — staggered fade-up on scroll
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {[0, 120, 240].map((delay) => (
                  <Reveal key={delay} delay={delay}>
                    <Card padding="md">
                      <CardDemo label={`Reveal delay=${delay}ms`} />
                    </Card>
                  </Reveal>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold">Hover — lift &amp; straighten</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <Tile label="interactive Card (hover me)">
                  <Card tilt="right" interactive className="w-full">
                    <CardDemo label="hover to lift" />
                  </Card>
                </Tile>
                <Tile label="Button hover">
                  <Stack direction="row" gap="sm" wrap>
                    <Button variant="primary">Hover me</Button>
                    <Button variant="accent">Hover me</Button>
                  </Stack>
                </Tile>
              </div>
            </div>

            <Card variant="outline" padding="md">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Motion-safe:</span>{" "}
                translate/rotate effects use the <code>motion-safe:</code> variant, and{" "}
                <code>&lt;Reveal&gt;</code> shows content immediately (no transform) when{" "}
                <code>prefers-reduced-motion: reduce</code> is set. Toggle the OS setting
                and refresh to confirm the page renders fully static.
              </p>
            </Card>
          </Stack>
        </Group>
      </Container>
    </main>
  );
}

/* ===========================================================================
 * Dev-only local helpers — isolated to this file, never exported.
 * ========================================================================= */

function Group({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-6 border-t border-border pt-14 mt-14 first:mt-10 first:border-0 first:pt-0">
      <Stack gap="sm" className="mb-8">
        <span className="hand text-2xl">{eyebrow}</span>
        <h2>{title}</h2>
        {description && <p className="max-w-2xl text-muted-foreground">{description}</p>}
      </Stack>
      {children}
    </section>
  );
}

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid grid-cols-[4rem_1fr] items-baseline gap-4 py-4">
      <span className="pt-1 font-mono text-xs text-muted-foreground">{label}</span>
      <div>{children}</div>
    </div>
  );
}

function Swatch({ name, role, className }: { name: string; role: string; className: string }) {
  return (
    <Stack gap="xs">
      <div className={cx("h-20 w-full rounded-[var(--radius-md)] border border-border", className)} />
      <div>
        <p className="text-sm font-semibold">{name}</p>
        <p className="font-mono text-xs text-muted-foreground">{role}</p>
      </div>
    </Stack>
  );
}

function Tile({ label, children, className }: { label?: string; children: ReactNode; className?: string }) {
  return (
    <Stack gap="xs">
      <div
        className={cx(
          "flex min-h-24 items-center justify-center rounded-[var(--radius-md)] border border-dashed border-border-strong p-6",
          className,
        )}
      >
        {children}
      </div>
      {label && <p className="font-mono text-xs text-muted-foreground">{label}</p>}
    </Stack>
  );
}

function CardDemo({ label }: { label: string }) {
  return (
    <Stack gap="xs">
      <span className="hand text-lg">Aa</span>
      <p className="text-sm font-semibold text-foreground">{label}</p>
      <p className="text-sm text-muted-foreground">
        The quick brown fox jumps over the lazy dog.
      </p>
    </Stack>
  );
}

function Dot() {
  return <span className="inline-block size-6 rounded-[var(--radius-sm)] bg-primary" />;
}

function IconArrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconSpark() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
