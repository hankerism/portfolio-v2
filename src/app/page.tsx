import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import FeaturedProject from "@/components/home/FeaturedProject";
import FeaturedRsvp from "@/components/home/FeaturedRsvp";
import FeaturedSystem from "@/components/home/FeaturedSystem";
import SelectedProjects from "@/components/home/SelectedProjects";
import About from "@/components/home/About";
import CurrentlyExploring from "@/components/home/CurrentlyExploring";
import Contact from "@/components/home/Contact";
import Footer from "@/components/home/Footer";

/* ---------------------------------------------------------------------------
 * Homepage — the introduction, not the destination (IA v2 §4.1):
 * claim (Hero) → featured products (KATHA, the wedding RSVP platform) →
 * business systems (Bahay Liwanag) → client websites → explanation (About)
 * → trajectory (Currently Exploring) → conversion (Contact).
 * Every section hands off to its deeper page. Metadata comes from the root
 * layout's defaults, which already describe the homepage.
 * ------------------------------------------------------------------------- */

export default function Home() {
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
        <Hero />
        <FeaturedProject />
        <FeaturedRsvp />
        <FeaturedSystem />
        <SelectedProjects />
        <About />
        <CurrentlyExploring />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
