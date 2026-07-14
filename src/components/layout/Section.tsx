import type { ElementType, ReactNode, HTMLAttributes } from "react";
import { cx } from "@/lib/cx";
import Container, { type ContainerSize } from "./Container";

/* ---------------------------------------------------------------------------
 * Section — vertical rhythm primitive.
 * A full-bleed band that owns the page's vertical spacing (--spacing-section)
 * and its own background tone, with an inner Container for width. Pass
 * `contained={false}` when a section needs to manage its own inner layout
 * (e.g. a full-bleed gallery).
 * ------------------------------------------------------------------------- */

export type SectionTone = "default" | "surface" | "muted";

const tones: Record<SectionTone, string> = {
  default: "bg-background text-foreground",
  surface: "bg-surface text-foreground",   // aged-paper band
  muted: "bg-muted text-foreground",        // quiet plum wash
};

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  /** Background tone of the band. @default 'default' */
  tone?: SectionTone;
  /** Wrap children in a Container. Set false to control inner width yourself. @default true */
  contained?: boolean;
  /** Inner Container width when `contained`. @default 'lg' */
  size?: ContainerSize;
  /** Semantic element. @default 'section' */
  as?: ElementType;
  children?: ReactNode;
}

export default function Section({
  tone = "default",
  contained = true,
  size = "lg",
  as: Tag = "section",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <Tag
      /* scroll-mt clears the sticky header (h-16) when a section is an
         anchor target (e.g. /#about), plus a breath of air. */
      className={cx("scroll-mt-20 py-[var(--spacing-section)]", tones[tone], className)}
      {...props}
    >
      {contained ? <Container size={size}>{children}</Container> : children}
    </Tag>
  );
}
