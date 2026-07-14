import type { Metadata } from "next";
import { Fraunces, Nunito_Sans, Caveat } from "next/font/google";
import Clarity from "@/components/Clarity";
import "./globals.css";

/* Brand typefaces, self-hosted via next/font (no render-blocking @import).
 * The CSS variables feed the --font-* role tokens in globals.css:
 *   Fraunces    → --font-serif  (editorial headings)
 *   Nunito Sans → --font-sans   (body + UI)
 *   Caveat      → --font-hand   (handwritten scrapbook accents)
 * Fraunces is a variable font with an optical-size axis; Nunito Sans and
 * Caveat load the weights the design system actually uses. */
const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

/* ---------------------------------------------------------------------------
 * Portfolio v2.0 · Root layout
 * The html shell only: brand metadata (a `%s · Abby` title template every
 * page composes into) and the self-hosted brand typefaces. Page chrome
 * (navbar/footer) is added with the homepage in a later phase.
 * ------------------------------------------------------------------------- */
export const metadata: Metadata = {
  title: {
    default: "Abby — Web Developer & AI Automation Builder",
    template: "%s · Abby",
  },
  description:
    "I design, build, and automate complete digital products — modern web apps, AI-powered workflows, and CRM automations on GoHighLevel — combining 6+ years in operations with modern web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${nunito.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Clarity />
      </body>
    </html>
  );
}
