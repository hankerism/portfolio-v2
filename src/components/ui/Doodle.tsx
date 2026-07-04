import { cx } from "@/lib/cx";

/* ---------------------------------------------------------------------------
 * Doodle — tiny hand-drawn ink marks (sparkle, arrow, underline, circle).
 *
 * The scrapbook "drawn by hand" voice, kept as SVG so it inherits currentColor
 * and stays crisp. Purely decorative (aria-hidden, focusable=false). Used
 * sparingly — a mark or two per section — to imply a human placed things, never
 * as clutter. No words, so it adds no copy.
 * ------------------------------------------------------------------------- */

export type DoodleKind = "sparkle" | "arrow" | "underline" | "circle";

export interface DoodleProps {
  kind: DoodleKind;
  className?: string;
}

const paths: Record<DoodleKind, { viewBox: string; node: React.ReactNode }> = {
  sparkle: {
    viewBox: "0 0 24 24",
    node: (
      <path
        d="M12 2c.4 4.6 2.4 6.6 7 7-4.6.4-6.6 2.4-7 7-.4-4.6-2.4-6.6-7-7 4.6-.4 6.6-2.4 7-7Z"
        fill="currentColor"
      />
    ),
  },
  arrow: {
    viewBox: "0 0 64 40",
    node: (
      <path
        d="M3 8c14 20 34 26 55 22M58 30c.6-3 1-6.6.8-10.2M58 30c-3-.6-6.3-1.6-9.4-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  underline: {
    viewBox: "0 0 120 12",
    node: (
      <path
        d="M2 7c22-5 74-6 116-2M4 10c30-3 66-3 108 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    ),
  },
  circle: {
    viewBox: "0 0 90 60",
    node: (
      <path
        d="M55 5C28 1 8 11 6 27c-2 15 20 27 44 27 20 0 36-9 34-24C82 16 68 8 50 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    ),
  },
};

export default function Doodle({ kind, className }: DoodleProps) {
  const { viewBox, node } = paths[kind];
  return (
    <svg
      viewBox={viewBox}
      aria-hidden="true"
      focusable="false"
      className={cx("pointer-events-none", className)}
    >
      {node}
    </svg>
  );
}
