import Section from "@/components/layout/Section";
import Stack from "@/components/layout/Stack";
import Button from "@/components/ui/Button";

/* ---------------------------------------------------------------------------
 * Contact — the conversion. One clear, low-friction way to start a
 * conversation (email-first, per the IA/spec decision). This is where the
 * old scaffold's dead "Hire Me" button finally does its job — as a link.
 * ------------------------------------------------------------------------- */

const EMAIL = "blujayabby@gmail.com";

export default function Contact() {
  return (
    <Section id="contact" tone="muted" aria-labelledby="contact-heading">
      <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[var(--radius-2xl)] border border-border bg-card p-8 text-center shadow-lg sm:p-14">
        <span aria-hidden className="tape left-1/2 -top-3 -translate-x-1/2 -rotate-2 rounded-[2px]" />
        <Stack gap="md" align="center" className="text-center">
          <span className="hand text-3xl text-primary sm:text-4xl">let&apos;s make something lovely</span>
          <h2 id="contact-heading">Have a project in mind?</h2>
          <p className="max-w-xl text-lg text-foreground/80">
            Whether you need a website, an automation that finally takes a task
            off your plate, or a full product built end to end — I&apos;d love to help.
          </p>
          <Stack direction="row" gap="sm" wrap justify="center" className="pt-2">
            <Button href={`mailto:${EMAIL}`} size="lg" variant="primary">
              Say hello
            </Button>
            <Button href={`mailto:${EMAIL}`} size="lg" variant="outline">
              {EMAIL}
            </Button>
          </Stack>
        </Stack>
      </div>
    </Section>
  );
}
