import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PadListItem, SectionHeading, SpecLabel } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Delivery Model — UK & Germany Engagement, Bengaluru Delivery, GCC & BOT",
  description:
    "Crest's dual-shore delivery model: client accountability in the UK and Germany, engineering execution in Bengaluru — plus GCC consulting and Build-Operate-Transfer for organisations building their own India capability.",
};

const onshore = [
  "Client relationship and single-point commercial accountability",
  "Programme management and delivery governance",
  "Solution and system architecture ownership",
  "Compliance ownership — QMS, IEC 62443 evidence, certification liaison",
  "Onsite support at client premises in the UK, Germany and wider Europe",
  "Requirements engineering with your domain experts, in your time zone",
];

const offshore = [
  "Embedded, software, cloud and data engineering execution",
  "Verification: test benches, automation, HIL rigs",
  "Sustained engineering — patches, vulnerability response, obsolescence",
  "DevSecOps pipeline build and operation",
  "Documentation production under the shared QMS",
  "Scalable team growth without UK/Germany hiring lead times",
];

const botStages = [
  {
    title: "Assess & design",
    description:
      "Business case, cost model and talent-market analysis; operating-model design covering governance, security, quality and the HQ-to-centre interface. Decision gate: proceed, adjust or stop — with numbers.",
  },
  {
    title: "Build",
    description:
      "Entity setup, premises and infrastructure in Bengaluru; leadership hiring first, then team build in pods; Crest's quality and security processes installed from day one rather than retrofitted.",
  },
  {
    title: "Operate",
    description:
      "Crest runs the centre to agreed SLAs and quality gates — delivery output, attrition, security posture — with transparent KPI reporting to your board. You direct the work; we carry the operational risk.",
  },
  {
    title: "Transfer",
    description:
      "At a pre-agreed trigger (headcount, tenure or performance milestones), entity, employment contracts, processes and vendor relationships transfer to you in a structured handover. The capability is yours — not a dependency on us.",
  },
];

export default function DeliveryModelPage() {
  return (
    <>
      <section className="bg-ink-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SpecLabel tone="light">Delivery model</SpecLabel>
          <h1 className="font-display mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl">
            Dual-shore by design: UK &amp; Germany accountability, Bengaluru
            engineering depth
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-steel-300">
            This is not offshoring for cost — it&apos;s a deliberate split of
            responsibilities. Accountability, architecture and compliance stay
            client-side in Europe; execution runs from a certified engineering
            centre in Bengaluru. The economics are an advantage; the model is
            the point.
          </p>
        </div>
      </section>

      {/* The split */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          spec="Division of responsibility"
          title="What stays onshore, what runs from Bengaluru"
          intro="Every engagement has one accountable owner in the UK or Germany. The Bengaluru centre works inside the same QMS, the same toolchain and the same secure development lifecycle — one process, two locations."
        />
        <div className="mt-12 grid gap-px border border-steel-200 bg-steel-200 lg:grid-cols-2">
          <div className="bg-white p-8">
            <SpecLabel tone="brass">UK · Germany</SpecLabel>
            <h3 className="font-display mt-3 text-2xl font-bold text-ink-900">
              Client-facing accountability
            </h3>
            <ul className="mt-6 space-y-3">
              {onshore.map((item) => (
                <PadListItem key={item}>{item}</PadListItem>
              ))}
            </ul>
          </div>
          <div className="bg-ink-900 p-8">
            <SpecLabel tone="light">Bengaluru</SpecLabel>
            <h3 className="font-display mt-3 text-2xl font-bold text-white">
              Engineering execution
            </h3>
            <ul className="mt-6 space-y-3">
              {offshore.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-[0.45rem] h-2 w-2 shrink-0 bg-brass-400" />
                  <span className="leading-relaxed text-steel-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Offices */}
        <div className="mt-12 grid gap-px border border-steel-200 bg-steel-200 sm:grid-cols-3">
          {site.offices.map((office) => (
            <div key={office.country} className="bg-steel-50 p-6">
              <SpecLabel tone="steel">{office.country}</SpecLabel>
              <p className="mt-3 text-sm font-semibold text-ink-900">{office.entity}</p>
              <p className="mt-1 text-sm leading-relaxed text-steel-700">
                {office.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* GCC */}
      <section id="gcc" className="bg-steel-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            spec="GCC consulting"
            title="Build your own Global Capability Centre"
            intro="For organisations that want an India engineering capability as a permanent, owned asset — not a vendor relationship — Crest provides end-to-end GCC consulting: strategy, setup and scale-up, grounded in running our own Bengaluru centre rather than in a slide deck."
          />
          <div className="mt-10 grid gap-px border border-steel-200 bg-steel-200 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Strategy & business case",
                description:
                  "Cost modelling against vendor and hybrid alternatives, location analysis within India, talent-market mapping for your specific engineering stack, and a board-ready case.",
              },
              {
                title: "Entity & operations setup",
                description:
                  "Legal entity, tax and regulatory registrations, premises, IT and security infrastructure — sequenced so hiring can start while paperwork completes.",
              },
              {
                title: "Leadership & talent",
                description:
                  "Centre-head and engineering-leadership hiring first; then team build with Bengaluru-market hiring pipelines, calibrated interviews and retention design.",
              },
              {
                title: "Operating model & governance",
                description:
                  "The HQ-to-centre interface: ways of working, quality gates, security controls, KPI reporting — the part that determines whether a GCC compounds or disappoints.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6">
                <h3 className="font-display text-lg font-bold text-ink-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-steel-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOT */}
      <section id="bot" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          spec="Build-Operate-Transfer"
          title="BOT: we carry the setup risk, you own the result"
          intro="For European and US clients who want the GCC outcome without the execution risk: Crest builds the centre, operates it to agreed SLAs, then transfers it to you at a pre-agreed trigger point. Four stages, each with a decision gate."
        />
        <ol className="mt-12">
          {botStages.map((stage, i) => (
            <li
              key={stage.title}
              className="grid gap-4 border-t border-steel-200 py-8 last:border-b sm:grid-cols-[6rem_1fr]"
            >
              <span className="spec-label text-brass-600">
                Stage {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-xl font-bold text-ink-900">{stage.title}</h3>
                <p className="mt-2 max-w-3xl leading-relaxed text-steel-700">
                  {stage.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <CTASection
        title="Evaluating a GCC or BOT move?"
        body="We'll share the real numbers from running a Bengaluru centre — cost per engineer, ramp timelines, attrition, what goes wrong — before you commit to anything."
        ctaLabel="Talk GCC / BOT"
      />
    </>
  );
}
