export const site = {
  name: "Crest Technologies",
  legalNameUK: "Crest Technologies Service Ltd",
  legalNameDE: "Crest Aerospace GmbH",
  url: "https://www.crest-technologies.com",
  email: "info@crest-technologies.com",
  description:
    "Engineering and digital services for safety- and security-critical industries: embedded systems, mechanical engineering, software, cloud, IoT and IEC 62443 IACS cybersecurity compliance. UK and Germany client engagement, Bengaluru delivery, plus GCC/BOT and workforce solutions.",
  offices: [
    {
      country: "United Kingdom",
      entity: "Crest Technologies Service Ltd",
      address: ["84 Shinfield Road", "Reading RG2 7DA", "United Kingdom"],
      role: "Client engagement, programme management, compliance ownership",
    },
    {
      country: "Germany",
      entity: "Crest Aerospace GmbH",
      address: ["Fangdieckstr. 64", "22547 Hamburg", "Germany"],
      role: "Aerospace client engagement and onsite support, EU region",
    },
    {
      country: "India",
      entity: "Crest Technologies Service Ltd",
      address: [
        "2nd Floor, 1138, 17th Cross Rd",
        "7th Sector, HSR Layout",
        "Bengaluru, Karnataka 560102",
        "India",
      ],
      role: "Engineering delivery centre",
    },
  ],
  ventures: {
    tmua: {
      name: "TMUA.AI",
      url: "https://tmua.ai",
      blurb:
        "AI-assisted preparation platform for the Test of Mathematics for University Admission — Crest's EdTech product venture.",
    },
    greenx: {
      name: "GreenX",
      url: "https://www.greenxcorp.com",
      blurb:
        "Digital Product Passport advisory and implementation for EU ESPR readiness — Crest's sustainability venture.",
    },
  },
} as const;

export type NavChild = {
  label: string;
  href?: string;
  external?: boolean;
  /** Renders as a non-clickable group heading inside the dropdown. */
  heading?: boolean;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const navigation: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Embedded Systems Engineering", href: "/services/embedded-systems" },
      { label: "Mechanical Engineering", href: "/services/mechanical-engineering" },
      { label: "Software Services", href: "/services/software-services" },
      { label: "Cybersecurity & IEC 62443", href: "/services/cybersecurity-iec-62443" },
      { label: "Cloud & Data", href: "/services/cloud-data" },
      { label: "IoT Engineering", href: "/services/iot" },
      { label: "GCC & Build-Operate-Transfer", href: "/services/gcc-bot" },
      { label: "Recruitment & Resource Augmentation", href: "/services/recruitment-resource-augmentation" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "EdTech — TMUA.AI", href: "https://tmua.ai", external: true },
      { label: "Sustainability — Digital Product Passport", href: "/products/digital-product-passport" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Manufacturing", heading: true },
      { label: "Rail", href: "/industries/rail" },
      { label: "Aerospace", href: "/industries/aerospace" },
      { label: "Industrial", href: "/industries/industrial-manufacturing" },
      { label: "Automotive", href: "/industries/automotive" },
      { label: "More industries", heading: true },
      { label: "Government & Public Sector", href: "/industries/government-public-sector" },
      { label: "Banking & Retail", href: "/industries/banking-retail" },
      { label: "Oil & Gas", href: "/industries/oil-gas" },
    ],
  },
  {
    label: "Private Equity",
    href: "/private-equity",
    children: [
      { label: "Technical & Cyber Due Diligence", href: "/private-equity#due-diligence" },
      { label: "Post-Acquisition Value Creation", href: "/private-equity#value-creation" },
      { label: "GCC / BOT for Portfolio Companies", href: "/private-equity#gcc-bot" },
    ],
  },
  { label: "Delivery Model", href: "/delivery-model" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Leadership", href: "/about#leadership" },
      { label: "Meet the Team", href: "/team" },
      { label: "Certifications & Standards", href: "/about#certifications" },
      { label: "Careers", href: "/careers" },
    ],
  },
  { label: "Contact", href: "/contact" },
];
