import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import FeaturedProject from "@/components/home/FeaturedProject";
import AutomationSystems from "@/components/home/AutomationSystems";
import SelectedProjects from "@/components/home/SelectedProjects";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Footer from "@/components/home/Footer";

/* ---------------------------------------------------------------------------
 * Homepage — composes the eight sections in narrative order:
 * claim (Hero) → proof (KATHA, Automation, Projects) → explanation (About)
 * → conversion (Contact). Metadata comes from the root layout's defaults,
 * which already describe the homepage.
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
        <AutomationSystems />
        <SelectedProjects />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
