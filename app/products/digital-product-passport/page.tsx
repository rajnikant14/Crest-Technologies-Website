import type { Metadata } from "next";
import { ServicePageBody } from "@/components/ServicePageBody";
import { SpecLabel } from "@/components/ui";
import { getService } from "@/content/services";
import { site } from "@/lib/site";

const service = getService("digital-product-passport")!;

export const metadata: Metadata = {
  title: "Digital Product Passport (EU ESPR) Advisory & Implementation",
  description: service.summary,
};

export default function DPPPage() {
  return (
    <ServicePageBody service={service}>
      {/* GreenX partnership strip */}
      <section className="border-y border-steel-200 bg-signal-100/50">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-2xl">
            <SpecLabel tone="signal">Delivered with GreenX</SpecLabel>
            <p className="mt-3 text-lg leading-relaxed text-steel-900">
              DPP engagements are delivered in partnership with{" "}
              <span className="font-semibold">GreenX</span>, Crest&apos;s
              sustainability venture focused on Digital Product Passport
              platforms and EU ESPR compliance.
            </p>
          </div>
          <a
            href={site.ventures.greenx.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 bg-signal-700 px-6 py-3 text-sm font-semibold text-white hover:bg-signal-500"
          >
            Visit greenxcorp.com <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </ServicePageBody>
  );
}
