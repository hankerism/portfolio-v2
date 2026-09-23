"use client";

import Image from "next/image";
import { useState } from "react";
import { cx } from "@/lib/cx";
import GalleryModal from "./GalleryModal";
import { SOCIAL_COLLECTIONS, coverFor } from "@/lib/socialDesigns";
import type { SocialCollection } from "@/lib/socialDesigns";

/* ---------------------------------------------------------------------------
 * DesignGallery — the project grid. One tile per source folder.
 *
 * The page shows collections, not frames: each tile is a single cover on a
 * fixed 4:5 stage so every card occupies the same footprint regardless of the
 * artwork's own ratio (the square set letterboxes inside it rather than being
 * cropped or stretched — `object-contain`, always). Opening a tile hands the
 * whole folder to GalleryModal.
 *
 * The tile is one <button>, so the entire card is clickable and reachable by
 * keyboard; the hover treatment is decoration on top of that, never the way
 * in.
 * ------------------------------------------------------------------------- */

export default function DesignGallery() {
  const [open, setOpen] = useState<SocialCollection | null>(null);

  return (
    <>
      <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:gap-x-10 lg:gap-y-16">
        {SOCIAL_COLLECTIONS.map((c, i) => (
          <li key={c.slug}>
            <button
              type="button"
              onClick={() => setOpen(c)}
              aria-haspopup="dialog"
              className="group block w-full text-left focus-visible:outline-none"
            >
              {/* Fixed stage — identical for every collection */}
              <div
                className={cx(
                  "paper relative aspect-[4/5] overflow-hidden p-3 transition duration-300 ease-[var(--ease-paper)]",
                  "group-hover:shadow-lg group-focus-visible:ring-2 group-focus-visible:ring-ring group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-background",
                  "motion-safe:group-hover:-translate-y-1.5 motion-safe:group-hover:-rotate-[0.4deg]",
                )}
              >
                <div className="relative h-full w-full overflow-hidden rounded-[var(--radius-md)] bg-muted">
                  <Image
                    src={coverFor(c)}
                    alt={`${c.title} — cover frame`}
                    fill
                    priority={i < 2}
                    className="object-contain transition-transform duration-500 ease-[var(--ease-paper)] motion-safe:group-hover:scale-[1.03]"
                    sizes="(min-width: 1024px) 460px, (min-width: 640px) 45vw, 90vw"
                  />
                </div>

                {/* Frame count — signals there's a set behind this cover */}
                <span className="pointer-events-none absolute bottom-5 right-5 rounded-full bg-ink/70 px-2.5 py-1 font-mono text-[0.65rem] font-bold text-white backdrop-blur-sm">
                  {String(c.count).padStart(2, "0")} designs
                </span>
              </div>

              {/* Caption */}
              <div className="mt-4">
                <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.18em] text-accent-hover">
                  {c.brand}
                </p>
                <h2 className="mt-1.5 text-xl sm:text-2xl">{c.title}</h2>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-foreground/75">
                  {c.summary}
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-semibold text-muted-foreground">
                  <span>{c.meta.category}</span>
                  <span aria-hidden className="text-border-strong">·</span>
                  <span>{c.meta.format}</span>
                  <span
                    aria-hidden
                    className="ml-auto inline-flex items-center gap-1 font-bold text-primary transition-transform duration-200 motion-safe:group-hover:translate-x-0.5"
                  >
                    View collection →
                  </span>
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>

      {open && (
        <GalleryModal collection={open} onClose={() => setOpen(null)} />
      )}
    </>
  );
}
