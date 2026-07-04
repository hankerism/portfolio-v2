import type {
  ReactNode,
  ElementType,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
} from "react";
import { cx } from "@/lib/cx";

/* ---------------------------------------------------------------------------
 * Button — the primary interactive primitive.
 *
 * Polymorphic by intent: a call-to-action is navigation, so passing `href`
 * renders a semantic <a> (styled as a button) instead of a click-handler
 * <button> — the fix for the audit's "dead CTA" finding. For client-side
 * routing, pass a router link via `as` (e.g. <Button as={Link} href="/work">).
 * With no href it is a real <button> and defaults to type="button".
 *
 * Consumes design-system tokens from globals.css (bg-primary/​accent, ring,
 * the soft plum shadow scale). No internal state or hooks, so it stays a
 * Server Component and never pulls consumers into the client bundle.
 * ------------------------------------------------------------------------- */

export type ButtonVariant =
  | "primary"   // plum — main actions
  | "accent"    // peach — highlight CTAs
  | "secondary" // aged-paper surface
  | "outline"   // hairline, chromeless fill
  | "ghost";    // text-only until hover
export type ButtonSize = "sm" | "md" | "lg";

interface ButtonOwnProps {
  /** Visual style. @default 'primary' */
  variant?: ButtonVariant;
  /** Height / padding / type scale. @default 'md' (48px) */
  size?: ButtonSize;
  /** Stretch to fill the available inline space. */
  fullWidth?: boolean;
  /** Decorative icon before the label. */
  leftIcon?: ReactNode;
  /** Decorative icon after the label. */
  rightIcon?: ReactNode;
  /** Spinner + blocked interaction (button mode; on links sets aria-disabled). */
  loading?: boolean;
  /** Presence renders a semantic anchor instead of a <button>. */
  href?: string;
  /** Element to render in link mode — e.g. a framework Link. @default 'a' */
  as?: ElementType;
  className?: string;
  children?: ReactNode;
}

/* One interface (not a discriminated union) keeps consumer ergonomics simple
 * and the render path lint-clean. Button DOM attributes are the base; a few
 * anchor-only attributes are added so external CTAs can set target/rel. */
export type ButtonProps = ButtonOwnProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonOwnProps> &
  Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "target" | "rel" | "download" | "hrefLang">;

const base = cx(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap select-none align-middle",
  "font-sans font-bold leading-none rounded-[var(--radius-lg)] border border-transparent no-underline",
  "transition-[color,background-color,border-color,box-shadow,transform,filter] duration-200",
  "ease-[var(--ease-soft)] cursor-pointer outline-none",
  "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  "disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none",
  "aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
  "[&_svg]:shrink-0 [&_svg]:pointer-events-none",
);

const variants: Record<ButtonVariant, string> = {
  primary: cx(
    "bg-primary text-primary-foreground shadow-sm",
    "motion-safe:hover:-translate-y-px hover:brightness-[1.08] hover:shadow-soft",
    "active:translate-y-0 active:brightness-100",
  ),
  accent: cx(
    "bg-accent text-accent-foreground shadow-sm",
    "motion-safe:hover:-translate-y-px hover:brightness-105 hover:shadow-glow",
    "active:translate-y-0 active:brightness-100",
  ),
  secondary: cx(
    "bg-secondary text-secondary-foreground border-border shadow-xs",
    "hover:border-border-strong hover:brightness-[0.98]",
    "active:translate-y-0",
  ),
  outline: cx(
    "bg-transparent text-foreground border-border-strong",
    "hover:bg-muted hover:border-primary",
  ),
  ghost: cx("bg-transparent text-foreground", "hover:bg-muted"),
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm [&_svg]:size-4",
  md: "h-12 px-6 text-[0.9375rem] [&_svg]:size-[1.125rem]", // 48px default
  lg: "h-14 px-8 text-base [&_svg]:size-5",
};

/** Inline spinner sized to the current font. */
function Spinner() {
  return (
    <svg
      className="size-[1.15em] animate-spin"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <circle className="opacity-25" cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="3" />
      <path
        className="opacity-90"
        d="M21 12a9 9 0 0 0-9-9"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  leftIcon,
  rightIcon,
  loading = false,
  href,
  as,
  type = "button",
  disabled,
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cx(
    base,
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    className,
  );

  const content = (
    <>
      {leftIcon != null && (
        <span className="inline-flex shrink-0" aria-hidden="true">
          {leftIcon}
        </span>
      )}
      {children != null && <span className="inline-flex items-center">{children}</span>}
      {rightIcon != null && (
        <span className="inline-flex shrink-0" aria-hidden="true">
          {rightIcon}
        </span>
      )}
    </>
  );

  // Link mode — semantic anchor (or a passed-in Link component).
  if (href !== undefined) {
    const Tag = as ?? "a";
    return (
      <Tag
        href={href}
        className={classes}
        data-variant={variant}
        aria-disabled={loading || undefined}
        {...rest}
      >
        {content}
      </Tag>
    );
  }

  // Button mode.
  return (
    <button
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      data-variant={variant}
      className={classes}
      {...rest}
    >
      {loading ? (
        <>
          <Spinner />
          <span className="sr-only">Loading</span>
        </>
      ) : (
        content
      )}
    </button>
  );
}
