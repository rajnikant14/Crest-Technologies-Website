import type { Metadata } from "next";
import { SectionHeading, SpecLabel } from "@/components/ui";
import { careersIntro } from "@/content/company";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers — Engineering Roles in Bengaluru, UK & Germany",
  description:
    "Careers at Crest Technologies: embedded, software, cloud and IACS cybersecurity engineering roles in Bengaluru, plus senior client-facing roles in the UK and Germany.",
};

const applySubject = (role: string) =>
  `mailto:${site.email}?subject=${encodeURIComponent(`Application: ${role}`)}`;

export default function CareersPage() {
  return (
    <>
      <section className="bg-ink-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SpecLabel tone="light">Careers</SpecLabel>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            {careersIntro.tagline}
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-steel-300">
            {careersIntro.body}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          spec="Open roles"
          title="Current openings"
          intro="Apply by email with a CV and a short note on the most constrained system you've worked on. Every application gets a reply from an engineer, not an automated rejection."
        />
        <div className="mt-10">
          {careersIntro.openRoles.map((role) => (
            <div
              key={role.title}
              className="grid gap-4 border-t border-steel-200 py-6 last:border-b sm:grid-cols-[1fr_10rem_8rem_auto] sm:items-center"
            >
              <h3 className="font-display text-lg font-bold text-ink-900">{role.title}</h3>
              <p className="spec-label text-steel-500">{role.location}</p>
              <p className="spec-label text-steel-500">{role.type}</p>
              <a
                href={applySubject(role.title)}
                className="inline-flex w-fit items-center gap-2 bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-ink-700"
              >
                Apply now <span aria-hidden="true">→</span>
              </a>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-steel-700">
          Applications go to{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-ink-900 underline decoration-brass-400 underline-offset-2">
            {site.email}
          </a>
          . If nothing above fits but the work described on this site does, send
          a speculative application — the bench grows around good people.
        </p>
      </section>
    </>
  );
}
