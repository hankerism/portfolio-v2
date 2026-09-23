import Navbar from "@/components/home/Navbar";
import Background from "@/components/home/Background";
import Hero from "@/components/home/Hero";
import ProofStrip from "@/components/home/ProofStrip";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/home/SectionHeading";
import FeaturedProject from "@/components/home/FeaturedProject";
import FeaturedRsvp from "@/components/home/FeaturedRsvp";
import FeaturedSystem from "@/components/home/FeaturedSystem";
import SelectedProjects from "@/components/home/SelectedProjects";
import About from "@/components/home/About";
import HowIWork from "@/components/home/HowIWork";
import CurrentlyExploring from "@/components/home/CurrentlyExploring";
import Contact from "@/components/home/Contact";
import Footer from "@/components/home/Footer";

/* ---------------------------------------------------------------------------
 * Homepage — the introduction, not the destination (IA v2 §4.1):
 * claim (Hero) → proof → featured products (KATHA, the wedding RSVP platform) →
 * business systems (Bahay Liwanag) → client websites → explanation (About)
 * → method (How I Work) → direction (Current Focus) → conversion (Contact).
 * Every section hands off to its deeper page. Metadata comes from the root
 * layout's defaults, which already describe the homepage.
 *
 * Environment: the whole page sits on ONE continuous scrapbook master image
 * (`<Background />`) rather than each section carrying its own — see that
 * component for how it's sized. It lives on the outer wrapper below — behind
 * the Navbar too, which is intentionally transparent at rest, so the canvas
 * shows from the very top edge — and every section's own tone is a
 * translucent wash over it (not an opaque fill), so the same image reads
 * through the entire scroll. Scoped to this page only (not the root
 * layout), since the environment is homepage-specific, not site-wide.
 * ------------------------------------------------------------------------- */

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-col">
      <Background />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-[var(--radius-sm)] focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />

        <ProofStrip />

        <About />

        <FeaturedProject />
        <FeaturedRsvp />

        <FeaturedSystem />

        {/* Automation bridge — connects all projects under one idea */}
        <Section tone="default" className="!bg-transparent bg-none" aria-labelledby="automation-bridge">
          <SectionHeading
            id="automation-bridge"
            eyebrow="the connective thread"
            title="Automation ties it together"
            align="center"
          />
          <p className="mx-auto max-w-2xl text-center text-lg text-foreground/80">
            The same systems thinking powers client work too, from landing pages
            with automations behind them to CRM pipelines that catch and route
            enquiries without spreadsheets.
          </p>
        </Section>

        <SelectedProjects />

        <HowIWork />
        <CurrentlyExploring />
        <Contact />
      </main>

      <Footer className="!bg-transparent" />
    </div>
  );
}