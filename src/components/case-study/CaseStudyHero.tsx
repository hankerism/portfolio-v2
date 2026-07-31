import type { ElementType, ReactNode } from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export type CaseStudyMetaItem = {
  label: string;
  value: string;
};

export type CaseStudyCta = {
  label: string;
  href: string;
  variant?: "primary" | "outline" | "ghost" | "secondary" | "accent";
  target?: string;
  rel?: string;
  as?: ElementType;
};

export interface CaseStudyHeroProps {
  breadcrumbHref?: string;
  breadcrumbLabel?: string;
  eyebrow?: string;
  title: string;
  intro: string;
  meta: CaseStudyMetaItem[];
  primaryCta?: CaseStudyCta;
  secondaryCta?: CaseStudyCta;
  children?: ReactNode;
  className?: string;
}

export default function CaseStudyHero({
  breadcrumbHref = "/projects",
  breadcrumbLabel = "← All projects",
  eyebrow = "Case study",
  title,
  intro,
  meta,
  primaryCta,
  secondaryCta,
  children,
  className,
}: CaseStudyHeroProps) {
  return (
    <header className={className ?? "border-b border-border bg-gradient-to-b from-lavender-tint/50 to-background"}>
      <Container size="md" className="py-16 sm:py-20">
        <Link
          href={breadcrumbHref}
          className="text-sm font-semibold text-foreground/70 no-underline hover:text-primary"
        >
          {breadcrumbLabel}
        </Link>

        {eyebrow && <p className="hand mt-6 text-2xl text-primary sm:text-3xl">{eyebrow}</p>}

        <h1 className="mt-2 text-balance">{title}</h1>

        {intro && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground/80">{intro}</p>
        )}

        {children}

        {meta.length > 0 && (
          <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-border/70 pt-6">
            {meta.map(({ label, value }) => (
              <div key={label}>
                <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</dt>
                <dd className="text-sm font-semibold">{value}</dd>
              </div>
            ))}
          </dl>
        )}

        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {primaryCta && (
              <Button
                href={primaryCta.href}
                as={primaryCta.as ?? (primaryCta.href.startsWith("/") ? Link : undefined)}
                variant={primaryCta.variant ?? "primary"}
                target={primaryCta.target}
                rel={primaryCta.rel}
              >
                {primaryCta.label}
              </Button>
            )}
            {secondaryCta && (
              <Button
                href={secondaryCta.href}
                as={secondaryCta.as ?? (secondaryCta.href.startsWith("/") ? Link : undefined)}
                variant={secondaryCta.variant ?? "outline"}
                target={secondaryCta.target}
                rel={secondaryCta.rel}
              >
                {secondaryCta.label}
              </Button>
            )}
          </div>
        )}
      </Container>
    </header>
  );
}
