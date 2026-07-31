import type { ReactNode } from "react";

export interface EvidenceBlockProps {
  source: string;
  children: ReactNode;
}

export default function EvidenceBlock({ source, children }: EvidenceBlockProps) {
  return (
    <figure className="overflow-hidden rounded-[var(--radius-lg)] border border-border bg-card shadow-xs">
      <figcaption className="flex items-center gap-2 border-b border-border bg-surface/70 px-4 py-2 font-mono text-xs font-semibold text-muted-foreground">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-3.5">
          <path
            d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z M14 3v5h5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
        {source}
      </figcaption>
      <blockquote className="not-italic border-0 p-4 font-mono text-[0.8rem] leading-relaxed text-foreground/85 sm:px-5">
        {children}
      </blockquote>
    </figure>
  );
}
