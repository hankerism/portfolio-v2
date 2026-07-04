/* Dependency-free class joiner. Filters out falsy values so components can
 * write `cx(base, active && "…", className)` without leaking `false`/`undefined`
 * into the DOM. Swap for clsx + tailwind-merge if the project later needs
 * conflict-aware merging; the call sites won't change. */
export function cx(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}
