import type { Metadata } from "next";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Doodle from "@/components/ui/Doodle";

/* ---------------------------------------------------------------------------
 * /contact — the conversion page (IA v2 §4.7).
 *
 * The terminal of every journey: email first and biggest, then GitHub.
 * Deliberately no form (email is the v2 channel; a GHL-powered form is a
 * future, portfolio-worthy upgrade) and no invented promises — response-time
 * claims, socials, and LinkedIn join only when real. The friction rule:
 * this page adds options, it never adds a step — mailto: works everywhere.
 * ------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation about a product, a business system, or both. Email reaches me directly.",
};

const EMAIL = "blujayabby@gmail.com";
const GITHUB = "https://github.com/hankerism";

export default function ContactPage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-[var(--radius-sm)] focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <header className="border-b border-border bg-gradient-to-b from-lavender-tint/50 to-background">
          <Container size="md" className="py-16 sm:py-20">
            <p className="hand text-2xl text-primary sm:text-3xl">Say hello</p>
            <h1 className="mt-2 text-balance">Let&rsquo;s start a conversation</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground/80">
              Whether you&rsquo;re hiring for a product role, need a business
              system untangled, or have a project that&rsquo;s a bit of both —
              I&rsquo;d love to hear about it. Email reaches me directly.
            </p>
          </Container>
        </header>

        <section aria-label="Contact options" className="py-16 sm:py-20">
          <Container size="md">
            <div className="grid gap-6 sm:grid-cols-[1.4fr_1fr]">
              {/* The letter — email, the primary channel */}
              <div className="grain relative rounded-[var(--radius-2xl)] border border-border bg-surface p-8 sm:p-10">
                <span aria-hidden className="tape tape-peach left-10 -top-3 -rotate-3 rounded-[2px]" />
                <Doodle
                  kind="heart"
                  className="absolute right-8 top-8 size-5 -rotate-6 text-pink-deep/50"
                />
                <p aria-hidden className="hand text-2xl text-accent-hover">
                  the fastest way
                </p>
                <h2 className="mt-2 text-2xl sm:text-3xl">Write to me</h2>
                <p className="mt-3 max-w-md text-foreground/80">
                  A couple of sentences about what you&rsquo;re building — or
                  hiring for — is plenty to start.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <Button href={`mailto:${EMAIL}`} variant="primary" size="lg">
                    Email me
                  </Button>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="font-semibold text-primary underline-offset-4 hover:underline"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>

              {/* The margin — everywhere else that's real */}
              <div className="relative rounded-[var(--radius-2xl)] border border-border bg-card p-8">
                <p aria-hidden className="hand text-2xl text-primary">elsewhere</p>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a
                      href={GITHUB}
                      target="_blank"
                      rel="noreferrer"
                      className="group/el inline-flex items-center gap-2 font-semibold text-foreground/80 no-underline hover:text-primary"
                    >
                      <span className="underline-offset-4 group-hover/el:underline">
                        GitHub — github.com/hankerism
                      </span>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                        className="size-4 transition-transform group-hover/el:-translate-y-0.5 group-hover/el:translate-x-0.5"
                      >
                        <path
                          d="M7 17 17 7M9 7h8v8"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The KATHA source lives here — every case-study claim is
                      checkable against it.
                    </p>
                  </li>
                </ul>
                {/* LinkedIn and other profiles join this list the moment the
                    real URLs are provided — no invented links (standing rule). */}
                <p aria-hidden className="hand mt-8 rotate-[-2deg] text-xl text-muted-foreground">
                  no forms, no funnels — just write ♡
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
