import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { SectionHeading, SpecLabel } from "@/components/ui";
import { getIndustry, industrySlugs } from "@/content/industries";

export const dynamicParams = false;

export function generateStaticParams() {
  return industrySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return {
    title: `${industry.name} — Industry Expertise`,
    description: industry.summary,
  };
}

function serviceHref(slug: string) {
  return slug === "digital-product-passport"
    ? "/products/digital-product-passport"
    : `/services/${slug}`;
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  return (
    <>
      <section className="bg-ink-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SpecLabel tone="light">Industry · {industry.specNote}</SpecLabel>
          <h1 className="font-display mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl">
            {industry.name}
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-steel-300">
            {industry.tagline}
          </p>
          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Relevant standards">
            {industry.standards.map((s) => (
              <li key={s} className="spec-label border border-ink-600 px-3 py-2 text-steel-300">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="max-w-3xl text-lg leading-relaxed text-steel-900">{industry.summary}</p>
      </section>

      <section className="bg-steel-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            spec="Sector pressures"
            title="What this sector is actually up against"
          />
          <div className="mt-10 grid gap-px border border-steel-200 bg-steel-200 md:grid-cols-2">
            {industry.pressures.map((p) => (
              <div key={p.title} className="bg-white p-7">
                <h3 className="font-display text-lg font-bold text-ink-900">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-steel-700">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          spec="How Crest applies"
          title="Services mapped to the pressure"
        />
        <div className="mt-10 space-y-0">
          {industry.applications.map((a) => (
            <Link
              key={a.serviceSlug}
              href={serviceHref(a.serviceSlug)}
              className="group grid gap-3 border-t border-steel-200 py-7 last:border-b sm:grid-cols-[18rem_1fr_auto] sm:items-center"
            >
              <h3 className="font-display text-lg font-bold text-ink-900 group-hover:text-brass-600">
                {a.serviceName}
              </h3>
              <p className="max-w-2xl text-sm leading-relaxed text-steel-700">{a.how}</p>
              <span
                aria-hidden="true"
                className="hidden text-xl text-steel-300 transition-all group-hover:translate-x-1 group-hover:text-brass-500 sm:block"
              >
                →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CTASection
        title={`Discuss a ${industry.name.toLowerCase()} engagement`}
        body="Bring us the tender clause, the audit finding or the architecture question — we'll respond with a specific, costed view."
      />
    </>
  );
}
