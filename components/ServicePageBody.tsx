import { CTASection } from "@/components/CTASection";
import { PadListItem, SectionHeading, SpecLabel } from "@/components/ui";
import type { Service } from "@/content/services";

/** Renders a full service page from a Service content entry. */
export function ServicePageBody({
  service,
  children,
}: {
  service: Service;
  children?: React.ReactNode;
}) {
  const tone = service.accent === "signal" ? "signal" : "brass";

  return (
    <>
      {/* Page hero */}
      <section className="bg-ink-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SpecLabel tone="light">{service.specNote}</SpecLabel>
          <h1 className="font-display mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl">
            {service.name}
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-steel-300">
            {service.tagline}
          </p>
          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Standards and frameworks">
            {service.standards.map((s) => (
              <li
                key={s}
                className="spec-label border border-ink-600 px-3 py-2 text-steel-300"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>

        {service.stats && (
          <div className="border-t border-ink-700">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px bg-ink-700 sm:grid-cols-3 sm:px-6 lg:px-8">
              {service.stats.map((stat) => (
                <div key={stat.label} className="bg-ink-950 px-4 py-7 sm:px-6">
                  <p className="font-display text-2xl font-bold text-brass-300 sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-snug text-steel-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Summary + audience */}
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.3fr_0.7fr] lg:px-8">
        <div>
          <SpecLabel tone={tone}>Overview</SpecLabel>
          <p className="mt-4 text-lg leading-relaxed text-steel-900">{service.summary}</p>
          {service.capabilities && (
            <div className="mt-8">
              <h2 className="spec-label text-steel-500">Capabilities</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {service.capabilities.map((c) => (
                  <li
                    key={c}
                    className={`border px-3 py-2 text-sm font-medium text-ink-900 ${
                      service.accent === "signal"
                        ? "border-signal-300 bg-signal-100"
                        : "border-steel-200 bg-steel-50"
                    }`}
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <aside className="border border-steel-200 bg-steel-50 p-7">
          <h2 className="spec-label text-steel-500">Who this is for</h2>
          <ul className="mt-4 space-y-3">
            {service.audience.map((a) => (
              <PadListItem key={a} tone={service.accent}>
                {a}
              </PadListItem>
            ))}
          </ul>
        </aside>
      </section>

      {/* What it covers */}
      <section className="bg-steel-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading spec="Scope" title="What this service covers" tone={tone} />
          <div className="mt-10 grid gap-px border border-steel-200 bg-steel-200 md:grid-cols-2">
            {service.covers.map((c) => (
              <div key={c.title} className="bg-white p-7">
                <h3 className="font-display text-lg font-bold text-ink-900">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-steel-700">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery process — numbered against real stages */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          spec="Method"
          title={service.deliveryHeading}
          tone={tone}
          intro="The numbering below maps to actual engagement stages — each stage has an entry criterion, a deliverable and a decision point."
        />
        <ol className="mt-12 space-y-0">
          {service.delivery.map((step, i) => (
            <li
              key={step.title}
              className="grid gap-4 border-t border-steel-200 py-8 last:border-b sm:grid-cols-[6rem_1fr]"
            >
              <span
                className={`spec-label ${
                  service.accent === "signal" ? "text-signal-700" : "text-brass-600"
                }`}
              >
                Stage {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-xl font-bold text-ink-900">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-3xl leading-relaxed text-steel-700">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Outcomes */}
      <section className="bg-ink-900">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            spec="Outcomes"
            title="What you walk away with"
            dark
          />
          <ul className="mt-10 grid gap-x-10 gap-y-5 md:grid-cols-2">
            {service.outcomes.map((o) => (
              <li key={o} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className={`mt-[0.45rem] h-2 w-2 shrink-0 ${
                    service.accent === "signal" ? "bg-signal-300" : "bg-brass-400"
                  }`}
                />
                <span className="leading-relaxed text-steel-200">{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {children}

      <CTASection
        title={`Discuss a ${service.navLabel.toLowerCase()} engagement`}
        body="Tell us where you are — a tender requirement, a gap assessment finding, a product that needs building — and we'll respond with a concrete view on scope, approach and effort."
      />
    </>
  );
}
