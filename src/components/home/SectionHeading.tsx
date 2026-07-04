import { cx } from "@/lib/cx";

/* ---------------------------------------------------------------------------
 * SectionHeading — the shared editorial header used by every homepage section.
 * A handwritten eyebrow (Caveat) sits tight above a Fraunces title like a
 * kicker, with the optional intro given room to breathe. The title carries an
 * id so each <section> can be labelled by it via aria-labelledby.
 * ------------------------------------------------------------------------- */

export interface SectionHeadingProps {
  /** id set on the <h2> — reference it from the section's aria-labelledby. */
  id: string;
  /** Handwritten kicker above the title. */
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cx("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <span className="hand block text-2xl leading-none sm:text-3xl">{eyebrow}</span>
      <h2 id={id} className="mt-2">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-lg leading-relaxed text-foreground/80">{intro}</p>
      )}
    </div>
  );
}
