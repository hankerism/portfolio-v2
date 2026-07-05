import type { CSSProperties } from "react";
import { cx } from "@/lib/cx";

/* ---------------------------------------------------------------------------
 * Doodle — tiny hand-drawn ink marks (sparkles, arrows, flowers, paws…).
 *
 * The scrapbook "drawn by hand" voice, kept as SVG so it inherits currentColor
 * and stays crisp. Purely decorative (aria-hidden, focusable=false). Used
 * sparingly — a mark or two per section — to imply a human placed things, never
 * as clutter. No words, so it adds no copy.
 *
 * `draw` pairs with <Reveal>: the stroke stays invisible until the wrapping
 * reveal fires, then draws itself in like a pen finishing a margin note
 * (see .doodle-draw in globals.css). Stroke paths carry pathLength=1 so the
 * dash animation is unit-normal. Only meaningful on stroked kinds.
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
  | "waves"
  | "flower"
  | "star"
  | "blossom"
  | "route";

export interface DoodleProps {
  kind: DoodleKind;
  /** Draw the stroke in when a wrapping <Reveal> becomes visible. */
  draw?: boolean;
  /** Per-instance motion tuning (animation duration/delay overrides). */
  style?: CSSProperties;
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
        pathLength={1}
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
        pathLength={1}
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
        pathLength={1}
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
        pathLength={1}
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
        pathLength={1}
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
        pathLength={1}
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
        pathLength={1}
      />
    ),
  },
  flower: {
    viewBox: "0 0 24 24",
    node: (
      <g fill="currentColor">
        <circle cx="12" cy="5.2" r="3" />
        <circle cx="18.5" cy="9.9" r="3" />
        <circle cx="16" cy="17.6" r="3" />
        <circle cx="8" cy="17.6" r="3" />
        <circle cx="5.5" cy="9.9" r="3" />
        <circle cx="12" cy="12" r="2.4" opacity="0.45" />
      </g>
    ),
  },
  star: {
    viewBox: "0 0 24 24",
    node: (
      <path
        d="M12 2l2.4 6.2 6.6.3-5.2 4.2 1.8 6.4L12 15.4 6.4 19l1.8-6.4L3 8.5l6.6-.3Z"
        fill="currentColor"
      />
    ),
  },
  blossom: {
    viewBox: "0 0 32 48",
    node: (
      <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <circle cx="16" cy="6" r="4" />
        <circle cx="24" cy="11.5" r="4" />
        <circle cx="21" cy="20" r="4" />
        <circle cx="11" cy="20" r="4" />
        <circle cx="8" cy="11.5" r="4" />
        <circle cx="16" cy="13.5" r="2.6" />
        <path d="M16 24c-1 8 2 14-2 22M14 34c-3-2-6-2.5-9-2M15 40c2.5-2 5-3 8.5-3" />
      </g>
    ),
  },
  route: {
    viewBox: "0 0 64 40",
    node: (
      <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M4 34C18 30 22 12 34 12s18 8 24-2" strokeDasharray="4 5" />
        <path d="M55 4l7 7M62 4l-7 7" />
      </g>
    ),
  },
};

export default function Doodle({ kind, draw = false, style, className }: DoodleProps) {
  const { viewBox, node } = paths[kind];
  return (
    <svg
      viewBox={viewBox}
      aria-hidden="true"
      focusable="false"
      style={style}
      className={cx("pointer-events-none", draw && "doodle-draw", className)}
    >
      {node}
    </svg>
  );
}
