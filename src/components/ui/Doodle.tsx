import { cx } from "@/lib/cx";

/* ---------------------------------------------------------------------------
 * Doodle — tiny hand-drawn ink marks (sparkle, arrow, underline, circle).
 *
 * The scrapbook "drawn by hand" voice, kept as SVG so it inherits currentColor
 * and stays crisp. Purely decorative (aria-hidden, focusable=false). Used
 * sparingly — a mark or two per section — to imply a human placed things, never
 * as clutter. No words, so it adds no copy.
 * ------------------------------------------------------------------------- */

export type DoodleKind =
  | "sparkle"
  | "arrow"
  | "underline"
  | "circle"
  | "paw"
  | "leaf"
  | "steam"
  | "heart"
  | "waves";

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
  paw: {
    viewBox: "0 0 24 24",
    node: (
      <g fill="currentColor">
        <ellipse cx="12" cy="16.5" rx="4.6" ry="3.6" />
        <circle cx="5.4" cy="10.6" r="2" />
        <circle cx="9.4" cy="7.4" r="2.1" />
        <circle cx="14.6" cy="7.4" r="2.1" />
        <circle cx="18.6" cy="10.6" r="2" />
      </g>
    ),
  },
  leaf: {
    viewBox: "0 0 24 24",
    node: (
      <path
        d="M20 4C10 5 4.5 10 5.5 19.5 15 20 20 14 20 4ZM5.5 19.5C9 13 13 9 18 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  steam: {
    viewBox: "0 0 24 24",
    node: (
      <path
        d="M7 19c-1.5-2.5 1.5-3.5 0-6.5M12 20c-1.5-2.5 1.5-3.5 0-7M17 19c-1.5-2.5 1.5-3.5 0-6.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    ),
  },
  heart: {
    viewBox: "0 0 24 24",
    node: (
      <path
        d="M12 20c-6-4.4-9-8-8.2-11.4C4.4 6 7 5 9 6.2c1.3.8 2.4 2 3 3 .6-1 1.7-2.2 3-3 2-1.2 4.6-.2 5.2 2.4C21 12 18 15.6 12 20Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  waves: {
    viewBox: "0 0 44 24",
    node: (
      <path
        d="M2 4c7-3 12 3 19 0s12 3 19 0M2 12c7-3 12 3 19 0s12 3 19 0M2 20c7-3 12 3 19 0s12 3 19 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
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
