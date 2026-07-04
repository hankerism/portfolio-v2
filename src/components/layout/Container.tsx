import type { ElementType, ReactNode, HTMLAttributes } from "react";
import { cx } from "@/lib/cx";

/* ---------------------------------------------------------------------------
 * Container — horizontal width + gutter primitive.
 * Centers content, applies the fluid page gutter (--spacing-gutter), and caps
 * width per `size`. The single place that owns page inset, so sections never
 * hard-code max-widths.
 * ------------------------------------------------------------------------- */

export type ContainerSize = "sm" | "md" | "lg" | "full";

const sizes: Record<ContainerSize, string> = {
  sm: "max-w-2xl",   // ~42rem — prose / narrow reading measure
  md: "max-w-4xl",   // ~56rem — text-forward sections
  lg: "max-w-6xl",   // ~72rem — default page width
  full: "max-w-none",
};

export interface ContainerProps extends HTMLAttributes<HTMLElement> {
  /** Max width cap. @default 'lg' */
  size?: ContainerSize;
  /** Render as a different element (e.g. 'section', 'main'). @default 'div' */
  as?: ElementType;
  children?: ReactNode;
}

export default function Container({
  size = "lg",
  as: Tag = "div",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cx(
        "mx-auto w-full px-[var(--spacing-gutter)]",
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
