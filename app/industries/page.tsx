import Link from "next/link";
import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { SectionHeading, SpecLabel } from "@/components/ui";
import { industries } from "@/content/industries";

export const metadata: Metadata = {
  title: "Industries — Manufacturing (Rail, Aerospace, Industrial, Automotive), Government, Banking & Retail, Oil & Gas",
  description:
    "Crest Technologies industry expertise: manufacturing — rail, aerospace, industrial and automotive — plus government & public sector, banking & retail, and oil & gas.",
};

export default function IndustriesPage() {
  const manufacturing = industries.filter((i) => i.group === "Manufacturing");
  const moreIndustries = industries.filter((i) => i.group === "More industries");

  return (
    <>
      <section className="bg-ink-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SpecLabel tone="light">Industries</SpecLabel>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Sectors understood at the standards level
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-steel-300">
            Manufacturing — rail, aerospace, industrial and automotive — is
            Crest&apos;s core. Around it sit sectors that share the same
            demands: long-lived systems, hard security requirements and buyers
            who audit what they buy. Each page names the pressure and maps the
            services that answer it.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          spec="Core sector group"
          title="Manufacturing"
          intro="Four sectors, one engineering backbone: products with decades-long lives, supply chains that flow compliance downward, and OT estates that need securing without stopping."
        />
        <div className="mt-10 space-y-6">
          {manufacturing.map((ind) => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className="group grid gap-6 border border-steel-200 p-8 transition-colors hover:border-ink-900 md:grid-cols-[10rem_1fr_auto] md:items-center"
            >
              <SpecLabel tone="brass">{ind.specNote}</SpecLabel>
              <div>
                <h3 className="font-display text-2xl font-bold text-ink-900">{ind.name}</h3>
                <p className="mt-2 max-w-3xl leading-relaxed text-steel-700">{ind.tagline}</p>
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

        <SectionHeading
          spec="More industries"
          title="Beyond manufacturing"
          intro="The same engineering and compliance discipline, applied where digital estates carry public accountability, revenue-critical platforms or exposed OT."
          className="mt-20"
        />
        <div className="mt-10 space-y-6">
          {moreIndustries.map((ind) => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className="group grid gap-6 border border-steel-200 p-8 transition-colors hover:border-ink-900 md:grid-cols-[10rem_1fr_auto] md:items-center"
            >
              <SpecLabel tone="brass">{ind.specNote}</SpecLabel>
              <div>
                <h3 className="font-display text-2xl font-bold text-ink-900">{ind.name}</h3>
                <p className="mt-2 max-w-3xl leading-relaxed text-steel-700">{ind.tagline}</p>
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
      </section>

      <CTASection
        title="In a sector we haven't listed?"
        body="The discipline transfers — if your sector has standards, auditors and long product lives, the conversation is worth having."
      />
    </>
  );
}
