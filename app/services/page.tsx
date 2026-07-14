import Link from "next/link";
import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { SectionHeading, SpecLabel } from "@/components/ui";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services — Embedded, Mechanical, Software, Cybersecurity, Cloud, IoT, GCC/BOT & Resourcing",
  description:
    "Crest Technologies services: embedded systems, mechanical engineering, software services, IEC 62443 IACS cybersecurity compliance, cloud & data, IoT engineering, GCC & Build-Operate-Transfer, and recruitment & resource augmentation.",
};

export default function ServicesPage() {
  const coreServices = services.filter((s) => s.slug !== "digital-product-passport");
  const dpp = services.find((s) => s.slug === "digital-product-passport")!;

  return (
    <>
      <section className="bg-ink-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SpecLabel tone="light">Services</SpecLabel>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Engineering services with the evidence trail built in
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-steel-300">
            Eight practices, one discipline: everything Crest delivers runs under
            an ISO 9001:2015 QMS and a secure development lifecycle aligned to
            IEC 62443-4-1. The documentation your auditors need is a by-product
            of how we work, not a separate work package.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {coreServices.map((s, i) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group grid gap-6 border border-steel-200 p-8 transition-colors hover:border-ink-900 md:grid-cols-[8rem_1fr_auto] md:items-center"
            >
              <div>
                <span className="spec-label text-steel-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <SpecLabel tone="brass" className="mt-1">
                  {s.specNote}
                </SpecLabel>
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-ink-900">{s.name}</h2>
                <p className="mt-2 max-w-3xl leading-relaxed text-steel-700">
                  {s.tagline}
                </p>
              </div>
              <span
                aria-hidden="true"
                className="hidden text-2xl text-steel-300 transition-all group-hover:translate-x-1 group-hover:text-brass-500 md:block"
              >
                →
              </span>
            </Link>
          ))}
        </div>

        {/* DPP pointer — lives under Products */}
        <div className="mt-12 border-l-4 border-signal-500 bg-signal-100 p-8">
          <SectionHeading
            spec="Also from Crest — under Products"
            title="Sustainability — Digital Product Passport"
            tone="signal"
            intro={dpp.tagline}
          />
          <Link
            href="/products/digital-product-passport"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-signal-700 hover:text-signal-500"
          >
            DPP advisory & implementation <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <CTASection
        title="Not sure which practice you need?"
        body="Most engagements touch more than one — a train IT product needs embedded engineering and a 62443 evidence pack; a data platform needs cloud engineering and OT boundary discipline. Describe the problem; we'll shape the engagement."
      />
    </>
  );
}
