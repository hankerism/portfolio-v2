import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

/* ---------------------------------------------------------------------------
 * BrowserFrame — a screenshot presented like a real window.
 *
 * A `.paper` card with a faux browser chrome (traffic-light dots + an address
 * pill) above the screenshot area. It turns a flat screenshot into an artefact
 * that reads as "a live product" — the craft cue that separates a shipped app
 * from a mockup. Decorative only: the chrome is aria-hidden, the caption in the
 * address bar is not read as content.
 * ------------------------------------------------------------------------- */

export interface BrowserFrameProps {
  /** Address shown in the chrome pill (e.g. a domain). Decorative. */
  url?: string;
  /** The screenshot area — typically a relative box with a fill <Image>. */
  children: ReactNode;
  className?: string;
}

export default function BrowserFrame({ url, children, className }: BrowserFrameProps) {
  return (
    <div className={cx("paper overflow-hidden", className)}>
      <div
        aria-hidden
        className="flex items-center gap-2 border-b border-border bg-surface/70 px-3.5 py-2.5"
      >
        <span className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-pink-deep/70" />
          <span className="size-2.5 rounded-full bg-peach/80" />
          <span className="size-2.5 rounded-full bg-sage/70" />
        </span>
        {url && (
          <span className="ml-1 flex-1 truncate rounded-full bg-background/80 px-3 py-1 text-center text-[0.7rem] font-semibold tracking-tight text-muted-foreground">
            {url}
          </span>
        )}
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
