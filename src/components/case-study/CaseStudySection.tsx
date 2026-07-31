import type { ReactNode } from "react";
import Container from "@/components/layout/Container";
import { cx } from "@/lib/cx";

export interface CaseStudySectionProps {
  id?: string;
  index?: string;
  title: string;
  children?: ReactNode;
  className?: string;
  contentClassName?: string;
}

export default function CaseStudySection({
  id,
  index,
  title,
  children,
  className,
  contentClassName,
}: CaseStudySectionProps) {
  return (
    <section id={id} className={cx(className)}>
      <Container size="md" className={cx("space-y-10", contentClassName)}>
        <div className="max-w-2xl">
          {index && (
            <p className="font-mono text-sm font-semibold tracking-widest text-accent-hover">
              {index}
            </p>
          )}
          <h2 id={id} className="mt-1 scroll-mt-24">
            {title}
          </h2>
          {children && <div className="mt-4 space-y-4 text-lg text-foreground/80">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
