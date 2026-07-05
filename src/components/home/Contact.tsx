import Section from "@/components/layout/Section";
import Stack from "@/components/layout/Stack";
import Button from "@/components/ui/Button";
import Doodle from "@/components/ui/Doodle";
import Reveal from "@/components/ui/Reveal";

/* ---------------------------------------------------------------------------
 * Contact — the conversion. One clear, low-friction way to start a
 * conversation (email-first, per the IA/spec decision). This is where the
 * old scaffold's dead "Hire Me" button finally does its job — as a link.
 *
 * Art direction: the card is a letter left on the desk — resting at a slight
 * angle on a second sheet, held down by two mismatched pieces of tape, with
 * paper grain and a small inked sparkle. Warm, personal, unmistakably placed
 * by hand.
 * ------------------------------------------------------------------------- */

const EMAIL = "blujayabby@gmail.com";

export default function Contact() {
  return (
    <Section id="contact" tone="muted" aria-labelledby="contact-heading">
      <Reveal rot={-1.2} y={22}>
      <div className="paper-stack grain relative mx-auto max-w-3xl rounded-[var(--radius-2xl)] border border-border bg-card p-8 text-center shadow-lg motion-safe:-rotate-[0.5deg] sm:p-14">
        <span aria-hidden className="tape tape-peach left-10 -top-3 z-10 -rotate-6 rounded-[2px]" />
        <span aria-hidden className="tape right-12 -top-3 z-10 rotate-3 rounded-[2px]" />
        <Doodle
          kind="sparkle"
          className="absolute -right-3 -top-4 z-10 size-7 text-accent motion-safe:animate-twinkle"
        />
        <Doodle
          kind="star"
          className="absolute -left-10 bottom-4 hidden size-4 text-primary/40 motion-safe:animate-twinkle lg:block" style={{ animationDelay: "1.6s" }}
        />
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
      </Reveal>
    </Section>
  );
}
