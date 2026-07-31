export interface TableOfContentsItem {
  id: string;
  label: string;
}

export interface TableOfContentsProps {
  items: TableOfContentsItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  return (
    <nav aria-label="Case study contents" className="border-b border-border">
      <div className="mx-auto w-full max-w-4xl px-[var(--spacing-gutter)] py-6">
        <ol className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {items.map(({ id, label }, index) => (
            <li key={id}>
              <a href={`#${id}`} className="font-semibold text-foreground/70 no-underline hover:text-primary">
                <span className="font-mono text-xs text-accent-hover">{String(index + 1).padStart(2, "0")}</span>{" "}
                {label}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
