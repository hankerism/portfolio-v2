import type { ElementType, ReactNode, HTMLAttributes } from "react";
import { cx } from "@/lib/cx";

/* ---------------------------------------------------------------------------
 * Stack — one-dimensional flow primitive.
 * Lays children out in a column (default) or row with a consistent gap from
 * the spacing scale. Removes the need for ad-hoc `space-y-*` / flex wrappers
 * scattered across sections.
 * ------------------------------------------------------------------------- */

export type StackDirection = "col" | "row";
export type StackGap = "xs" | "sm" | "md" | "lg" | "xl";
export type StackAlign = "start" | "center" | "end" | "stretch";
export type StackJustify = "start" | "center" | "end" | "between";

const gaps: Record<StackGap, string> = {
  xs: "gap-2",   // 0.5rem
  sm: "gap-4",   // 1rem
  md: "gap-6",   // 1.5rem
  lg: "gap-10",  // 2.5rem
  xl: "gap-16",  // 4rem
};

const aligns: Record<StackAlign, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
};

const justifies: Record<StackJustify, string> = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
};

export interface StackProps extends HTMLAttributes<HTMLElement> {
  /** Flow axis. @default 'col' */
  direction?: StackDirection;
  /** Gap between children. @default 'md' */
  gap?: StackGap;
  /** Cross-axis alignment. */
  align?: StackAlign;
  /** Main-axis distribution. */
  justify?: StackJustify;
  /** Allow items to wrap (useful for row layouts). */
  wrap?: boolean;
  /** Semantic element. @default 'div' */
  as?: ElementType;
  children?: ReactNode;
}

export default function Stack({
  direction = "col",
  gap = "md",
  align,
  justify,
  wrap = false,
  as: Tag = "div",
  className,
  children,
  ...props
}: StackProps) {
  return (
    <Tag
      className={cx(
        "flex",
        direction === "col" ? "flex-col" : "flex-row",
        gaps[gap],
        align && aligns[align],
        justify && justifies[justify],
        wrap && "flex-wrap",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
