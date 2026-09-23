"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { cx } from "@/lib/cx";
import type { SocialCollection } from "@/lib/socialDesigns";
import { framesFor } from "@/lib/socialDesigns";

/* ---------------------------------------------------------------------------
 * GalleryModal — the opened collection, browsed like the carousel it was
 * designed as.
 *
 * Interaction is deliberately the familiar one: swipe/drag the track, click
 * the arrows, tap a dot, ← / → to move, Escape or a click on the backdrop to
 * leave. Scrolling is native (scroll-snap on an overflow-x track) so touch
 * inertia behaves the way the platform already does; JS only mirrors the
 * active frame for the dots and counter.
 *
 * Steps are taken from `targetRef` — the frame we're heading to — rather than
 * the live scroll position, because a smooth scroll hasn't moved yet at click
 * time and two quick arrow presses would otherwise resolve to the same frame.
 * It re-syncs once scrolling settles, so a swipe (which never calls goTo)
 * still updates the base.
 * ------------------------------------------------------------------------- */

export interface GalleryModalProps {
  collection: SocialCollection;
  onClose: () => void;
}

export default function GalleryModal({
  collection,
  onClose,
}: GalleryModalProps) {
  const frames = framesFor(collection);
  const trackRef = useRef<HTMLUListElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const targetRef = useRef(0);
  const [index, setIndex] = useState(0);

  const frameAt = useCallback(
    (scrollLeft: number) => {
      const track = trackRef.current;
      if (!track) return 0;
      const slide = track.scrollWidth / frames.length;
      if (!slide) return 0;
      return Math.max(
        0,
        Math.min(frames.length - 1, Math.round(scrollLeft / slide)),
      );
    },
    [frames.length],
  );

  const goTo = useCallback(
    (i: number) => {
      const track = trackRef.current;
      if (!track) return;
      const clamped = Math.max(0, Math.min(frames.length - 1, i));
      targetRef.current = clamped;
      track.scrollTo({
        left: (track.scrollWidth / frames.length) * clamped,
        behavior: "smooth",
      });
      setIndex(clamped);
    },
    [frames.length],
  );

  const step = useCallback(
    (delta: number) => goTo(targetRef.current + delta),
    [goTo],
  );

  /* Track → dots/counter, and re-base the step target once motion stops. */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    let settle: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setIndex(frameAt(track.scrollLeft)));
      clearTimeout(settle);
      settle = setTimeout(() => {
        targetRef.current = frameAt(track.scrollLeft);
      }, 120);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(settle);
      track.removeEventListener("scroll", onScroll);
    };
  }, [frameAt]);

  /* Escape to leave, arrows to move — bound at the document so they work
     wherever focus currently sits inside the dialog. */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        step(1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        step(-1);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, step]);

  /* Hold the page still behind the dialog, and hand focus to Close so the
     keyboard lands somewhere sensible. Scroll position is restored on exit. */
  useEffect(() => {
    const { overflow, paddingRight } = document.body.style;
    const gutter = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (gutter > 0) document.body.style.paddingRight = `${gutter}px`;
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
    };
  }, []);

  /* Keep Tab inside the dialog while it's open. */
  const onKeyDownTrap = (e: React.KeyboardEvent) => {
    if (e.key !== "Tab") return;
    const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
      'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
    );
    if (!focusables?.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  const atStart = index === 0;
  const atEnd = index === frames.length - 1;
  const square = collection.ratio === "1:1";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${collection.title} — full collection`}
      onKeyDown={onKeyDownTrap}
    >
      {/* Backdrop — click anywhere off the panel to leave */}
      <button
        type="button"
        aria-label="Close gallery"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-ink/45 backdrop-blur-sm motion-safe:animate-fade-in"
      />

      <div
        ref={dialogRef}
        className="paper relative flex max-h-full w-full max-w-3xl flex-col overflow-hidden p-3 motion-safe:animate-scale-in sm:p-5"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-3">
          <div className="min-w-0">
            <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.18em] text-accent-hover">
              {collection.brand}
            </p>
            <h2 className="mt-1 truncate text-xl sm:text-2xl">
              {collection.title}
            </h2>
          </div>

          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close gallery"
            className="grid size-9 shrink-0 place-items-center rounded-full border border-border bg-card text-foreground transition hover:border-primary hover:text-primary"
          >
            <span aria-hidden className="text-lg leading-none">×</span>
          </button>
        </div>

        {/* Frames */}
        <div className="relative min-h-0 flex-1">
          <ul
            ref={trackRef}
            aria-label={`${collection.title} — ${frames.length} frames`}
            className={cx(
              "flex h-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain rounded-[var(--radius-md)] bg-muted",
              "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
              "motion-safe:scroll-smooth",
            )}
          >
            {frames.map((src, i) => (
              <li
                key={src}
                className="relative flex w-full shrink-0 snap-center items-center justify-center"
              >
                <div
                  className={cx(
                    "relative max-h-[62vh] w-full",
                    square ? "aspect-square" : "aspect-[3/4]",
                  )}
                  style={{ maxWidth: square ? "62vh" : "46.5vh" }}
                >
                  <Image
                    src={src}
                    alt={`${collection.title}, frame ${i + 1} of ${frames.length}`}
                    fill
                    className="object-contain"
                    sizes="(min-width: 768px) 700px, 92vw"
                    priority={i === 0}
                  />
                </div>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => step(-1)}
            disabled={atStart}
            aria-label="Previous frame"
            className={cx(
              "absolute left-2 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-border bg-card/95 text-foreground shadow-sm transition",
              "hover:border-primary hover:text-primary",
              "disabled:pointer-events-none disabled:opacity-0",
            )}
          >
            <span aria-hidden className="text-xl leading-none">←</span>
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            disabled={atEnd}
            aria-label="Next frame"
            className={cx(
              "absolute right-2 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-border bg-card/95 text-foreground shadow-sm transition",
              "hover:border-primary hover:text-primary",
              "disabled:pointer-events-none disabled:opacity-0",
            )}
          >
            <span aria-hidden className="text-xl leading-none">→</span>
          </button>
        </div>

        {/* Counter + dots */}
        <div className="flex items-center justify-between gap-4 pt-3">
          <p
            className="font-mono text-xs font-bold text-muted-foreground"
            aria-live="polite"
          >
            {index + 1} / {frames.length}
          </p>

          {/* The dot is small; its hit area isn't — the button carries padding
              so it stays comfortably tappable on a phone. */}
          <ul className="-mr-1.5 flex flex-wrap items-center justify-end">
            {frames.map((src, i) => (
              <li key={src}>
                <button
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to frame ${i + 1}`}
                  aria-current={i === index}
                  className="grid size-7 place-items-center rounded-full"
                >
                  <span
                    aria-hidden
                    className={cx(
                      "block size-2.5 rounded-full transition-[background-color,scale] duration-200",
                      i === index
                        ? "bg-primary motion-safe:scale-125"
                        : "bg-border-strong",
                    )}
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
