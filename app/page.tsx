import Link from "next/link";
import type { Metadata } from "next";
import { CircuitSchematic } from "@/components/CircuitSchematic";
import { CTASection } from "@/components/CTASection";
import { ArrowLink, ButtonLink, SectionHeading, SpecLabel } from "@/components/ui";
import { services } from "@/content/services";
import { industries } from "@/content/industries";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Crest Technologies — Embedded, Mechanical & Software Engineering with IEC 62443 Compliance",
  description:
    "Specialist engineering firm delivering embedded systems, mechanical engineering, software, cloud, IoT and IACS cybersecurity compliance (IEC 62443) — with UK & Germany engagement, Bengaluru delivery, GCC/BOT and workforce solutions.",
};

const proofPoints = [
  {
    stat: "IEC 62443-4-1",
    label: "Secure development lifecycle with certification-ready evidence",
  },
  {
    stat: "ISO 9001:2015",
    label: "Certified quality management across UK and Bengaluru delivery",
  },
  {
    stat: "5M+ hours",
    label: "Mechanical engineering man-hours delivered onsite & offshore",
  },
  {
    stat: "3 locations",
    label: "UK & Germany client engagement, Bengaluru engineering delivery",
  },
];

function serviceHref(slug: string) {
  return slug === "digital-product-passport"
    ? "/products/digital-product-passport"
    : `/services/${slug}`;
}

export default function HomePage() {
  const manufacturing = industries.filter((i) => i.group === "Manufacturing");
  const moreIndustries = industries.filter((i) => i.group === "More industries");

  return (
    <>
      {/* Hero */}
      <section className="bg-ink-950 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <div>
            <SpecLabel tone="light">
              Engineering · IEC 62443 · Safety-critical systems
            </SpecLabel>
            <h1 className="font-display mt-4 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
              Embedded systems, engineered and certified for rail, aerospace and
              industrial OT.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-steel-300">
              Crest Technologies is a specialist engineering and digital services
              firm for safety- and security-critical industries. We build the
              systems — and produce the IEC 62443 compliance evidence — that
              your buyers and auditors have to see before anything ships.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/contact" variant="brass">
                Start a conversation
              </ButtonLink>
              <ButtonLink href="/services" variant="outline-light">
                Explore services
              </ButtonLink>
            </div>
          </div>
          <CircuitSchematic className="hidden w-full text-steel-300 lg:block" />
        </div>

        {/* Proof points */}
        <div className="border-t border-ink-700">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-ink-700 sm:px-6 lg:grid-cols-4 lg:px-8">
            {proofPoints.map((p) => (
              <div key={p.stat} className="bg-ink-950 px-4 py-7 sm:px-6">
                <p className="font-display text-xl font-bold text-brass-300 sm:text-2xl">
                  {p.stat}
                </p>
                <p className="mt-2 text-sm leading-snug text-steel-400">{p.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service pillars */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          spec="Services"
          title="Nine practices, one engineering discipline"
          intro="Every practice runs under the same certified QMS and secure development lifecycle — whether the deliverable is firmware, a Class A surface, a cloud platform or a certification evidence pack."
        />
        <div className="mt-12 grid gap-px border border-steel-200 bg-steel-200 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={serviceHref(s.slug)}
              className="group flex flex-col bg-white p-7 transition-colors hover:bg-steel-50"
            >
              <SpecLabel tone={s.accent === "signal" ? "signal" : "brass"}>
                {s.specNote}
              </SpecLabel>
              <h3 className="font-display mt-3 text-xl font-bold text-ink-900">
                {s.navLabel === "Digital Product Passport"
                  ? "Sustainability — DPP"
                  : s.navLabel}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-steel-700">
                {s.tagline}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 group-hover:text-brass-600">
                View service
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Industries strip */}
      <section className="bg-steel-50">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeading
            spec="Industries"
            title="Depth in the sectors where evidence beats promises"
            intro="Manufacturing is the core — rail, aerospace, industrial and automotive — extended by the sectors that share the same engineering and compliance discipline."
          />
          {/* Manufacturing group */}
          <div className="mt-12 border border-steel-200 bg-white p-7">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-xl font-bold text-ink-900">Manufacturing</h3>
              <SpecLabel tone="steel">Core sector group</SpecLabel>
            </div>
            <div className="mt-6 grid gap-px border border-steel-200 bg-steel-200 sm:grid-cols-2 lg:grid-cols-4">
              {manufacturing.map((ind) => (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="group bg-white p-6 transition-colors hover:bg-steel-50"
                >
                  <SpecLabel tone="steel">{ind.specNote}</SpecLabel>
                  <h4 className="font-display mt-2 text-lg font-bold text-ink-900">
                    {ind.name}
                  </h4>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 group-hover:text-brass-600">
                    Sector detail <span aria-hidden="true">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
          {/* More industries */}
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {moreIndustries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="group border border-steel-200 bg-white p-7 transition-colors hover:border-ink-900"
              >
                <SpecLabel tone="steel">{ind.specNote}</SpecLabel>
                <h3 className="font-display mt-3 text-xl font-bold text-ink-900">
                  {ind.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-steel-700">
                  {ind.tagline}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 group-hover:text-brass-600">
                  Sector detail
                  <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Private equity callout — its own visual moment */}
      <section className="border-y-4 border-brass-500 bg-ink-950">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.3fr_0.7fr] lg:px-8">
          <div>
            <SpecLabel tone="light">For deal teams & operating partners</SpecLabel>
            <h2 className="font-display mt-3 text-3xl font-bold text-white sm:text-4xl">
              Technical due diligence on targets most DD providers can&apos;t read.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-steel-300">
              Embedded product lines, industrial control estates, IEC 62443
              exposure — assessed at deal speed, with remediation costs that plug
              into the model. Then the same firm executes the fix through the
              hold period, including GCC/BOT capability build for portfolio
              companies.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { label: "Technical & Cyber Due Diligence", href: "/private-equity#due-diligence" },
              { label: "Post-Acquisition Value Creation", href: "/private-equity#value-creation" },
              { label: "GCC / BOT for Portfolio Companies", href: "/private-equity#gcc-bot" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group flex items-center justify-between border border-ink-600 px-5 py-4 text-sm font-semibold text-white transition-colors hover:border-brass-400 hover:text-brass-300"
              >
                {l.label}
                <span aria-hidden="true" className="text-brass-400 transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery model */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeading
            spec="Delivery model"
            title="UK & Germany accountability. Bengaluru engineering depth."
            intro="A deliberate dual-shore model: client relationships, programme management, architecture and compliance ownership stay in the UK and Germany; execution runs from a certified Bengaluru delivery centre. The cost advantage is real — but it's the consequence of the model, not the point of it. We'll also build this model for you, as a GCC or under Build-Operate-Transfer."
          />
          <div className="grid gap-px border border-steel-200 bg-steel-200 sm:grid-cols-3">
            {site.offices.map((office) => (
              <div key={office.country} className="bg-white p-6">
                <SpecLabel tone="brass">{office.country}</SpecLabel>
                <p className="mt-3 text-sm font-semibold text-ink-900">
                  {office.address[office.address.length - 2] ?? office.country}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-steel-700">{office.role}</p>
              </div>
            ))}
            <div className="bg-steel-50 p-6 sm:col-span-3">
              <p className="text-sm leading-relaxed text-steel-700">
                <span className="font-semibold text-ink-900">
                  Want this capability in-house?
                </span>{" "}
                Crest offers GCC consulting and Build-Operate-Transfer for
                European and US organisations standing up their own India
                engineering centre.
              </p>
              <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                <ArrowLink href="/delivery-model">The delivery model in detail</ArrowLink>
                <ArrowLink href="/services/gcc-bot">GCC & BOT as a service</ArrowLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ventures teaser — deliberately secondary */}
      <section className="border-t border-steel-200 bg-steel-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SpecLabel tone="steel">Ventures</SpecLabel>
              <h2 className="font-display mt-2 text-2xl font-bold text-ink-900">
                Product ventures from the same engineering bench
              </h2>
            </div>
            <p className="max-w-md text-sm text-steel-500">
              Sibling ventures within Crest&apos;s complete product-development
              offering — separate brands, same discipline.
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <a
              href={site.ventures.tmua.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-steel-200 bg-white p-6 transition-colors hover:border-ink-900"
            >
              <div className="flex items-center justify-between">
                <SpecLabel tone="steel">EdTech</SpecLabel>
                <span aria-hidden="true" className="text-brass-500">↗</span>
              </div>
              <h3 className="font-display mt-2 text-lg font-bold text-ink-900">
                TMUA.AI
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-steel-700">
                {site.ventures.tmua.blurb}
              </p>
              <span className="mt-4 block text-sm font-semibold text-ink-900 group-hover:text-brass-600">
                tmua.ai
              </span>
            </a>
            <div className="border border-steel-200 bg-white p-6">
              <div className="flex items-center justify-between">
                <SpecLabel tone="signal">Sustainability</SpecLabel>
                <span aria-hidden="true" className="text-signal-500">↗</span>
              </div>
              <h3 className="font-display mt-2 text-lg font-bold text-ink-900">
                GreenX — Digital Product Passport
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-steel-700">
                {site.ventures.greenx.blurb}
              </p>
              <span className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm font-semibold">
                <a
                  href={site.ventures.greenx.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-900 hover:text-signal-700"
                >
                  greenxcorp.com <span aria-hidden="true">↗</span>
                </a>
                <Link
                  href="/products/digital-product-passport"
                  className="text-signal-700 hover:text-signal-500"
                >
                  DPP advisory at Crest <span aria-hidden="true">→</span>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
