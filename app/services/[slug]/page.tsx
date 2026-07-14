import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageBody } from "@/components/ServicePageBody";
import { getService, services } from "@/content/services";

/** DPP renders under /products/digital-product-passport instead. */
const slugsHere = services
  .filter((s) => s.slug !== "digital-product-passport")
  .map((s) => s.slug);

export const dynamicParams = false;

export function generateStaticParams() {
  return slugsHere.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.summary,
    openGraph: { title: service.name, description: service.tagline },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!slugsHere.includes(slug)) notFound();
  const service = getService(slug)!;
  return <ServicePageBody service={service} />;
}
