import type { ElementType, ReactNode, HTMLAttributes } from "react";
import { cx } from "@/lib/cx";

/* ---------------------------------------------------------------------------
 * Card — the scrapbook surface primitive.
 *
 * A lifted "paper" panel with the reference's soft plum shadow. Optional
 * scrapbook flourishes — a slight resting tilt that straightens on hover, and
 * a strip of washi `tape` — give the editorial, hand-placed feel without the
 * consumer re-implementing it each time. All flourishes are motion-safe and
 * the tape is decorative (aria-hidden).
 * ------------------------------------------------------------------------- */

export type CardVariant = "paper" | "plain" | "outline";
export type CardPadding = "none" | "sm" | "md" | "lg";
export type CardTilt = "none" | "left" | "right";

const variants: Record<CardVariant, string> = {
  paper: "bg-card border border-border shadow-paper",
  plain: "bg-card border border-border shadow-xs",
  outline: "bg-transparent border border-border-strong",
};

const paddings: Record<CardPadding, string> = {
  none: "p-0",
  sm: "p-4",
  md: "p-6",
  lg: "p-8 sm:p-10",
};

/* Small resting tilts — enough to read as "placed by hand", not askew. */
const tilts: Record<CardTilt, string> = {
  none: "",
  left: "motion-safe:-rotate-1",
  right: "motion-safe:rotate-1",
};

export interface CardProps extends HTMLAttributes<HTMLElement> {
  /** Surface style. @default 'paper' */
  variant?: CardVariant;
  /** Inner padding. @default 'md' */
  padding?: CardPadding;
  /** Resting scrapbook tilt (straightens on hover when interactive). @default 'none' */
  tilt?: CardTilt;
  /** Lift + straighten on hover/focus; sets a keyboard focus ring. */
  interactive?: boolean;
  /** Show a decorative strip of washi tape pinned to the top edge. */
  tape?: boolean;
  /** Semantic element (e.g. 'article', 'li'). @default 'div' */
  as?: ElementType;
  children?: ReactNode;
}

export default function Card({
  variant = "paper",
  padding = "md",
  tilt = "none",
  interactive = false,
  tape = false,
  as: Tag = "div",
  className,
  children,
  ...props
}: CardProps) {
  return (
    <Tag
      className={cx(
        "relative rounded-[var(--radius-xl)]",
        variants[variant],
        paddings[padding],
        tilt !== "none" && tilts[tilt],
        "transition-[transform,box-shadow,border-color] duration-[320ms] ease-[var(--ease-paper)]",
        interactive &&
          "cursor-pointer motion-safe:hover:-translate-y-1 motion-safe:hover:rotate-0 hover:shadow-lg hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
      {...props}
    >
      {tape && (
        <span
          aria-hidden="true"
          className="tape left-1/2 -top-3 -translate-x-1/2 -rotate-2 rounded-[2px]"
        />
      )}
      {children}
    </Tag>
  );
}
