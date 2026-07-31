import BrowserFrame from "@/components/ui/BrowserFrame";
import { cx } from "@/lib/cx";

export interface EvidenceGalleryItem {
  title: string;
  description: string;
  whyItMatters: string;
  placeholderLabel: string;
  alt: string;
  url?: string;
  fullWidth?: boolean;
  annotation?: string;
}

export interface EvidenceGalleryProps {
  items: EvidenceGalleryItem[];
  className?: string;
}

export default function EvidenceGallery({ items, className }: EvidenceGalleryProps) {
  return (
    <div className={cx("grid gap-6 md:grid-cols-2", className)}>
      {items.map((item) => (
        <figure
          key={item.title}
          aria-label={item.alt}
          className={cx("group", item.fullWidth && "md:col-span-2")}
        >
          <BrowserFrame url={item.url ?? "evidence pending"} className="shadow-soft">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(163,122,180,0.14),_transparent_45%),linear-gradient(135deg,_rgba(93,66,74,0.08),_transparent_68%)]" />
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="relative z-10 max-w-md rounded-[var(--radius-md)] border border-border bg-background/75 px-4 py-3 text-center shadow-xs backdrop-blur-sm">
                  <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Placeholder asset
                  </p>
                  <p className="mt-2 text-sm font-semibold text-foreground">{item.placeholderLabel}</p>
                </div>
              </div>
            </div>
          </BrowserFrame>

          <figcaption className="mt-3 space-y-2">
            <p className="font-serif text-xl font-semibold text-primary">{item.title}</p>
            <p className="text-sm leading-relaxed text-foreground/80">{item.description}</p>
            <p className="text-sm leading-relaxed text-foreground/80">
              <span className="font-bold text-sage">Why it matters:</span> {item.whyItMatters}
            </p>
            {item.annotation && (
              <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {item.annotation}
              </p>
            )}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
