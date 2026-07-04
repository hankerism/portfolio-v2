"use client";

import { useEffect, useRef, useState } from "react";
import type { ElementType, ReactNode, CSSProperties } from "react";
import { cx } from "@/lib/cx";

/* ---------------------------------------------------------------------------
 * Reveal — shared scroll-in animation utility.
 *
 * Wraps content and fades/rises it into view the first time it enters the
 * viewport (IntersectionObserver — no scroll listeners, no animation library).
 * Pairs with the `.reveal` / `.is-visible` classes in globals.css.
 *
 * Accessibility & robustness (all handled in CSS, so the component's only
 * state change happens inside the observer callback):
 *  · prefers-reduced-motion → content shown immediately, no transform.
 *  · SSR-safe: server and client both render the hidden state (no hydration
 *    mismatch); the observer flips it visible after mount.
 *  · If IntersectionObserver is unavailable, a rAF fallback reveals the
 *    content rather than leaving it stuck hidden.
 *
 * This is the client-side companion to the CSS `animate-*` tokens in
 * globals.css (use those for immediate, non-scroll entrance animations).
 * ------------------------------------------------------------------------- */

export interface RevealProps {
  children: ReactNode;
  /** Wrapper element. @default 'div' */
  as?: ElementType;
  /** Entrance delay in ms (for staggering sibling reveals). @default 0 */
  delay?: number;
  /** Vertical travel distance in px. @default 14 */
  y?: number;
  /** Reveal only once (stay visible after leaving view). @default true */
  once?: boolean;
  /** Fraction of the element visible before triggering. @default 0.15 */
  threshold?: number;
  className?: string;
}

export default function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  y = 14,
  once = true,
  threshold = 0.15,
  className,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node || typeof IntersectionObserver === "undefined") {
      // Fallback (older engines / non-DOM): reveal on the next frame rather
      // than leaving content hidden. setState runs in a callback, not the
      // effect body.
      const raf = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(raf);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.disconnect();
          } else if (!once) {
            setVisible(false);
          }
        }
      },
      { threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, threshold]);

  // Static per-instance tuning passed as CSS custom properties (not state).
  const style = {
    "--reveal-y": `${y}px`,
    "--reveal-delay": `${delay}ms`,
  } as CSSProperties;

  return (
    <Tag
      ref={ref}
      style={style}
      className={cx("reveal", visible && "is-visible", className)}
    >
      {children}
    </Tag>
  );
}
