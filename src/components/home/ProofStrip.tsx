export default function ProofStrip() {
  return (
    <section
      aria-label="A few things I've shipped"
      className="px-6 py-10 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-primary/10 bg-primary/[0.035] px-6 py-8 shadow-[var(--shadow-sm)] sm:px-10">
          {/* Handwritten label */}
          <p className="mb-6 font-[family-name:var(--font-caveat)] text-lg text-primary sm:text-xl">
            a few things I&apos;ve actually shipped ↓
          </p>

          <div className="grid gap-6 sm:grid-cols-3 sm:gap-0">
            <div className="sm:border-r sm:border-primary/10 sm:pr-8">
              <p className="font-serif text-3xl text-foreground sm:text-4xl">
                <span aria-label="2 full-stack products">02</span>
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">
                Full-stack products
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Built with Next.js, TypeScript &amp; Supabase
              </p>
            </div>

            <div className="sm:px-8">
              <p className="font-serif text-3xl text-foreground sm:text-4xl">
                <span aria-label="4 business systems">04</span>
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">
                Business systems
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                CRM, workflows &amp; automation built around real operations
              </p>
            </div>

            <div className="sm:border-l sm:border-primary/10 sm:pl-8">
              <p className="font-serif text-3xl text-foreground sm:text-4xl">
                <span aria-label="6 or more years in operations">06+</span>
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">
                Years in operations
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Enough time to learn what software actually needs to do
              </p>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-2 border-t border-primary/10 pt-5">
            {[
              "Next.js",
              "TypeScript",
              "Supabase",
              "GoHighLevel",
              "Make",
              "Airtable",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-primary/10 bg-background/70 px-3 py-1 text-[11px] text-muted-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}