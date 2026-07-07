"use client";

import Button, { type ButtonProps } from "@/components/ui/Button";

/* ---------------------------------------------------------------------------
 * PrintButton — "Download PDF" as print-to-PDF.
 *
 * The resume's print stylesheet already renders a clean one-page A4 document,
 * so the most reliable "PDF" is the browser's own print → Save as PDF. This
 * keeps the download perfectly in sync with the page (no stale static file)
 * and reuses the @media print work. A thin client wrapper over the shared
 * Button so styling stays consistent with every other CTA.
 * ------------------------------------------------------------------------- */

export default function PrintButton(props: Omit<ButtonProps, "onClick" | "href">) {
  return <Button {...props} onClick={() => window.print()} />;
}
