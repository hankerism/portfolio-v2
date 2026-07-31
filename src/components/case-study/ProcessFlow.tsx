import { cx } from "@/lib/cx";

export interface ProcessFlowNode {
  label: string;
  description: string;
  tone?: "default" | "muted" | "accent";
}

export interface ProcessFlowProps {
  nodes: ProcessFlowNode[];
  className?: string;
}

export default function ProcessFlow({ nodes, className }: ProcessFlowProps) {
  return (
    <figure className={cx("mx-auto max-w-2xl", className)}>
      <div className="space-y-0 text-center text-sm">
        {nodes.map((node, index) => {
          const isMuted = node.tone === "muted";
          const isAccent = node.tone === "accent";

          return (
            <div key={`${node.label}-${index}`}>
              <div
                className={cx(
                  "rounded-[var(--radius-md)] bg-card px-4 py-3 shadow-xs",
                  isMuted ? "border border-dashed border-border-strong/70" : "border border-border",
                  isAccent && "border-primary/60 bg-primary/5",
                )}
              >
                <p className="font-serif text-base font-semibold text-primary">{node.label}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{node.description}</p>
              </div>
              {index < nodes.length - 1 && (
                <p aria-hidden className="py-1 text-muted-foreground">
                  ↓
                </p>
              )}
            </div>
          );
        })}
      </div>
    </figure>
  );
}
