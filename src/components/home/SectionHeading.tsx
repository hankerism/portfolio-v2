import Stack from "@/components/layout/Stack";
import { cx } from "@/lib/cx";

/* ---------------------------------------------------------------------------
 * SectionHeading — the shared editorial header used by every homepage section.
 * A handwritten eyebrow (Caveat), a Fraunces title, and an optional intro.
 * The title carries an id so each <section> can be labelled by it via
 * aria-labelledby, keeping the landmark structure accessible.
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
    <Stack
      gap="sm"
      align={align === "center" ? "center" : "start"}
      className={cx(align === "center" && "text-center", "max-w-2xl", align === "center" && "mx-auto", className)}
    >
      <span className="hand text-2xl sm:text-3xl">{eyebrow}</span>
      <h2 id={id}>{title}</h2>
      {intro && <p className="text-lg text-foreground/80">{intro}</p>}
    </Stack>
  );
}
