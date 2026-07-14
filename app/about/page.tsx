import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import { ArrowLink, SectionHeading, SpecLabel } from "@/components/ui";
import { certifications, leadership, whyWeExist } from "@/content/company";

export const metadata: Metadata = {
  title: "About — Leadership, Certifications & Standards",
  description:
    "About Crest Technologies: leadership across the UK, Germany and Bengaluru, and formal certifications — ISO 9001:2015, IEC 62443-4-1 alignment, and accredited external certification partnerships.",
};

function initials(name: string) {
  const parts = name.replace(/[[\]]/g, "").trim().split(/\s+/);
  return parts
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SpecLabel tone="light">About Crest</SpecLabel>
          <h1 className="font-display mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl">
            A specialist firm, built for sectors where evidence beats promises
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-steel-300">
            {whyWeExist}
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          spec="Leadership"
          title="The people accountable for delivery"
          intro="Leadership sits where the responsibility sits: client engagement and compliance in the UK and Germany, engineering delivery in Bengaluru."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {leadership.map((person) => (
            <article
              key={person.name + person.role}
              className="flex flex-col border border-steel-200 p-7"
            >
              {person.photo ? (
                <Image
                  src={person.photo}
                  alt={person.name}
                  width={80}
                  height={80}
                  className="h-20 w-20 object-cover"
                />
              ) : (
                <span
                  aria-hidden="true"
                  className="font-display flex h-20 w-20 items-center justify-center bg-ink-900 text-2xl font-bold text-brass-300"
                >
                  {initials(person.name)}
                </span>
              )}
              <h3 className="font-display mt-5 text-xl font-bold text-ink-900">
                {person.name}
              </h3>
              <p className="mt-1 text-sm font-semibold text-brass-600">{person.role}</p>
              <p className="spec-label mt-1 text-steel-400">{person.location}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-steel-700">
                {person.bio}
              </p>
              {person.stats && (
                <dl className="mt-5 grid grid-cols-3 gap-px border border-steel-200 bg-steel-200">
                  {person.stats.map((stat) => (
                    <div key={stat.label} className="bg-steel-50 p-3">
                      <dd className="font-display text-lg font-bold text-ink-900">
                        {stat.value}
                      </dd>
                      <dt className="mt-1 text-[0.7rem] leading-snug text-steel-500">
                        {stat.label}
                      </dt>
                    </div>
                  ))}
                </dl>
              )}
              {person.linkedin && (
                <ArrowLink href={person.linkedin} external className="mt-4">
                  LinkedIn
                </ArrowLink>
              )}
            </article>
          ))}
        </div>
        <div className="mt-8">
          <ArrowLink href="/team">Meet the wider team</ArrowLink>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="bg-steel-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            spec="Certifications & standards"
            title="Formally held, externally verified"
            intro="Credibility in safety- and security-critical sectors is documentary. These are the certifications and partnerships behind every Crest engagement — not aspirations on a roadmap."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {certifications.map((cert) => (
              <article key={cert.name} className="border border-steel-200 bg-white p-7">
                <span
                  aria-hidden="true"
                  className="font-display inline-flex h-16 min-w-16 items-center justify-center border-2 border-brass-500 px-3 text-sm font-bold tracking-wide text-ink-900"
                >
                  {cert.badge}
                </span>
                <h3 className="font-display mt-5 text-xl font-bold text-ink-900">
                  {cert.name}
                </h3>
                <p className="spec-label mt-1 text-brass-600">{cert.scope}</p>
                <p className="mt-4 text-sm leading-relaxed text-steel-700">{cert.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want the certificates, not the claims?"
        body="We share certification scope documents and audit summaries under NDA as a standard part of supplier onboarding. Ask."
      />
    </>
  );
}
