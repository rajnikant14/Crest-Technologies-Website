import Link from "next/link";
import { Logo } from "./Logo";
import { site } from "@/lib/site";

const footerColumns = [
  {
    heading: "Services",
    links: [
      { label: "Embedded Systems", href: "/services/embedded-systems" },
      { label: "Mechanical Engineering", href: "/services/mechanical-engineering" },
      { label: "Software Services", href: "/services/software-services" },
      { label: "Cybersecurity & IEC 62443", href: "/services/cybersecurity-iec-62443" },
      { label: "Cloud & Data", href: "/services/cloud-data" },
      { label: "IoT Engineering", href: "/services/iot" },
      { label: "GCC & Build-Operate-Transfer", href: "/services/gcc-bot" },
      { label: "Recruitment & Resourcing", href: "/services/recruitment-resource-augmentation" },
    ],
  },
  {
    heading: "Industries",
    links: [
      { label: "Rail", href: "/industries/rail" },
      { label: "Aerospace", href: "/industries/aerospace" },
      { label: "Industrial Manufacturing", href: "/industries/industrial-manufacturing" },
      { label: "Automotive", href: "/industries/automotive" },
      { label: "Government & Public Sector", href: "/industries/government-public-sector" },
      { label: "Banking & Retail", href: "/industries/banking-retail" },
      { label: "Oil & Gas", href: "/industries/oil-gas" },
      { label: "Private Equity", href: "/private-equity" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Delivery Model", href: "/delivery-model" },
      { label: "About", href: "/about" },
      { label: "Meet the Team", href: "/team" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Ventures",
    links: [
      { label: "TMUA.AI — EdTech", href: site.ventures.tmua.url, external: true },
      { label: "GreenX — Digital Product Passport", href: site.ventures.greenx.url, external: true },
      { label: "DPP Advisory at Crest", href: "/products/digital-product-passport" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink-950 text-steel-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo dark />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-steel-400">
              Embedded systems, mechanical and software engineering, and IEC
              62443 IACS cybersecurity compliance for rail, aerospace,
              automotive and industrial OT. UK and Germany engagement,
              Bengaluru delivery.
            </p>
            <p className="spec-label mt-6 text-brass-300">
              ISO 9001:2015 · IEC 62443-4-1
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerColumns.map((col) => (
              <div key={col.heading}>
                <h2 className="spec-label text-steel-400">{col.heading}</h2>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        {...("external" in link && link.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="text-sm text-steel-300 hover:text-white"
                      >
                        {link.label}
                        {"external" in link && link.external && (
                          <span aria-hidden="true" className="ml-1 text-brass-400">
                            ↗
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-8 border-t border-ink-700 pt-10 sm:grid-cols-3">
          {site.offices.map((office) => (
            <div key={office.country}>
              <h2 className="spec-label text-brass-300">{office.country}</h2>
              <p className="mt-3 text-sm font-semibold text-white">{office.entity}</p>
              <p className="mt-1 text-sm leading-relaxed text-steel-400">
                {office.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-ink-700 pt-8 text-xs text-steel-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalNameUK} · {site.legalNameDE}. All
            rights reserved.
          </p>
          <a href={`mailto:${site.email}`} className="text-steel-400 hover:text-white">
            {site.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
