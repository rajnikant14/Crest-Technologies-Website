/**
 * Industry page content — one entry per page under /industries/[slug].
 * `group` clusters industries on the index page and in navigation:
 * Rail, Aerospace, Industrial and Automotive sit under Manufacturing.
 */

export type Industry = {
  slug: string;
  name: string;
  group: "Manufacturing" | "More industries";
  tagline: string;
  summary: string;
  specNote: string;
  /** The sector's specific regulatory and operational pressures. */
  pressures: { title: string; description: string }[];
  /** What Crest does about them — mapped to service slugs. */
  applications: { serviceSlug: string; serviceName: string; how: string }[];
  standards: string[];
};

export const industries: Industry[] = [
  {
    slug: "rail",
    name: "Rail",
    group: "Manufacturing",
    tagline:
      "Engineering and cybersecurity for rolling stock and rail infrastructure — where TS 50701 is now a procurement requirement, not a discussion.",
    summary:
      "Rail is Crest's home ground: on-board train IT systems, safety-adjacent electronics and the cybersecurity case that now accompanies them. Operators and suppliers face TS 50701 in tenders, 30-year asset lives, and a growing gap between IT security practice and what a train actually needs.",
    specNote: "TS 50701 / EN 50155",
    pressures: [
      {
        title: "TS 50701 in procurement",
        description:
          "Cybersecurity requirements derived from IEC 62443 now appear directly in rolling-stock and signalling tenders. Suppliers must present a cybersecurity case alongside the safety case — and evidence of a secure development lifecycle behind it.",
      },
      {
        title: "Safety-critical train IT with long lives",
        description:
          "On-board systems are procured for 30–40 year vehicle lives but built from components with 5-year availability. Obsolescence, patchability and configuration control have to be engineered in at design time.",
      },
      {
        title: "Legacy fleets meeting modern threats",
        description:
          "Fleets designed before connectivity are being retrofitted with passenger Wi-Fi, condition monitoring and remote diagnostics — each retrofit changes the security context of systems that were never threat-modelled.",
      },
      {
        title: "Fragmented supplier evidence",
        description:
          "Operators inherit a patchwork of supplier security claims with no common baseline. Consolidating this into a coherent zone-and-conduit model and a maintainable CMP is a discipline problem before it is a technology problem.",
      },
    ],
    applications: [
      {
        serviceSlug: "embedded-systems",
        serviceName: "Embedded Systems Engineering",
        how: "On-board equipment engineering — passenger information, gateways, condition monitoring — designed against EN 50155 constraints with an SDL aligned to IEC 62443-4-1.",
      },
      {
        serviceSlug: "cybersecurity-iec-62443",
        serviceName: "Cybersecurity & IEC 62443",
        how: "TS 50701 cybersecurity cases, zone and conduit modelling for on-board and trackside architectures, gap assessments and certification readiness.",
      },
      {
        serviceSlug: "mechanical-engineering",
        serviceName: "Mechanical Engineering",
        how: "Locomotive and rolling-stock mechanical design: sustaining engineering for decades-old fleets, reverse engineering of parts with no surviving drawings, FEA validation.",
      },
      {
        serviceSlug: "iot",
        serviceName: "IoT Engineering",
        how: "Fleet condition monitoring and asset telemetry — retrofit sensing on rolling stock and infrastructure with an OT-safe path to the cloud.",
      },
      {
        serviceSlug: "cloud-data",
        serviceName: "Cloud & Data",
        how: "Fleet data platforms turning telemetry into maintenance decisions, built with the segmentation discipline rail operators' security teams require.",
      },
    ],
    standards: ["TS 50701", "EN 50155", "IEC 62443", "EN 50126/8/9 (context)"],
  },
  {
    slug: "aerospace",
    name: "Aerospace",
    group: "Manufacturing",
    tagline:
      "Supplier-grade engineering discipline for an industry that audits everything and forgets nothing.",
    summary:
      "Aerospace suppliers live with the longest product lifecycles in industry, the most demanding customer audits, and compliance obligations that flow down the supply chain in full. Through Crest Aerospace GmbH in Hamburg, we support suppliers with disciplined embedded, mechanical and software engineering, compliance capability, and delivery capacity that survives an audit.",
    specNote: "SUPPLY-CHAIN COMPLIANCE",
    pressures: [
      {
        title: "Flow-down compliance",
        description:
          "Primes flow quality and cybersecurity requirements down the supply chain contractually. Tier-2 and tier-3 suppliers must demonstrate process maturity — QMS, configuration management, secure development — at a depth that used to be asked only of primes.",
      },
      {
        title: "Product lifecycles measured in decades",
        description:
          "A part certified today will be supported for 30+ years. Design decisions, toolchains and documentation must survive multiple generations of engineers — traceability is not optional overhead, it is the product.",
      },
      {
        title: "Capacity without compromising audit posture",
        description:
          "Ramp-ups demand engineering capacity fast, but every added supplier or site is an audit surface. Extending capacity through a partner whose QMS and SDL are already certified changes that calculus.",
      },
      {
        title: "Digitalisation of engineering and MRO",
        description:
          "Test data, fleet reliability data and maintenance records sit in ageing systems. Making them usable — without breaking export-control or configuration-control rules — is a systems-integration problem with compliance constraints attached.",
      },
    ],
    applications: [
      {
        serviceSlug: "embedded-systems",
        serviceName: "Embedded Systems Engineering",
        how: "Embedded development capacity under a certified QMS and IEC 62443-4-1-aligned SDL — engineering documentation prepared for customer and authority audit.",
      },
      {
        serviceSlug: "mechanical-engineering",
        serviceName: "Mechanical Engineering",
        how: "Sustaining engineering, drafting backlogs, GD&T validation and CAD legacy migration for parts supported across 30-year lifecycles.",
      },
      {
        serviceSlug: "software-services",
        serviceName: "Software Services",
        how: "Engineering-toolchain integration, test-data systems and MRO digitalisation with the traceability aerospace configuration control demands.",
      },
      {
        serviceSlug: "cybersecurity-iec-62443",
        serviceName: "Cybersecurity & IEC 62443",
        how: "Cybersecurity process maturity for suppliers facing flow-down requirements — CSMS, CMPs and audit-ready evidence.",
      },
      {
        serviceSlug: "cloud-data",
        serviceName: "Cloud & Data",
        how: "Engineering data platforms and cloud migration designed around export-control boundaries and long-retention obligations.",
      },
    ],
    standards: ["ISO 9001:2015", "EN 9100 (context)", "IEC 62443", "Export-control-aware delivery"],
  },
  {
    slug: "industrial-manufacturing",
    name: "Industrial Manufacturing",
    group: "Manufacturing",
    tagline:
      "OT and IACS engineering for manufacturers whose plants were networked long after they were built.",
    summary:
      "Industrial operators run production estates where 20-year-old PLCs share networks with cloud-connected analytics. IEC 62443 gives the sector a common language for securing this — Crest provides the engineering to apply it: from IACS gap assessments to secure retrofits, data platforms and, from 2027, Digital Product Passport obligations.",
    specNote: "OT / IACS",
    pressures: [
      {
        title: "OT exposure without OT security teams",
        description:
          "Connectivity reached the plant floor faster than security capability did. Most manufacturers have IT security functions; few have engineers who can threat-model a production line without stopping it.",
      },
      {
        title: "IEC 62443 arriving via customers and insurers",
        description:
          "IACS security requirements now arrive from three directions — customer audits, insurance conditions and regulation such as NIS2. Ad-hoc responses to each are more expensive than one coherent CSMS.",
      },
      {
        title: "Data locked in the production layer",
        description:
          "OEE, energy and quality data exists but is trapped in historians and isolated SCADA islands. Extracting it without creating a path back into the control layer is the core industrial-data engineering problem.",
      },
      {
        title: "Sustainability compliance moving from reporting to product",
        description:
          "The EU Digital Product Passport shifts sustainability from annual reports to per-product data obligations — batteries, electronics and textiles first, phasing in from 2027. Product data pipelines become compliance infrastructure.",
      },
    ],
    applications: [
      {
        serviceSlug: "cybersecurity-iec-62443",
        serviceName: "Cybersecurity & IEC 62443",
        how: "IACS gap assessments, zone and conduit architecture, CSMS build and certification readiness — sequenced so production keeps running.",
      },
      {
        serviceSlug: "iot",
        serviceName: "IoT Engineering",
        how: "Condition monitoring and energy metering retrofitted to existing equipment, bridging legacy PLCs into modern platforms without touching the control loop.",
      },
      {
        serviceSlug: "cloud-data",
        serviceName: "Cloud & Data",
        how: "Industrial data platforms — historian integration, time-series pipelines, analytics — engineered with one-way data paths out of the OT zone.",
      },
      {
        serviceSlug: "digital-product-passport",
        serviceName: "Digital Product Passport",
        how: "ESPR/DPP readiness: obligation mapping, product data models and traceability pipelines ahead of the 2027 phase-in.",
      },
    ],
    standards: ["IEC 62443", "NIS2 (context)", "EU ESPR / DPP", "ISO 9001:2015"],
  },
  {
    slug: "automotive",
    name: "Automotive",
    group: "Manufacturing",
    tagline:
      "Design, CAE and embedded engineering for an industry rebuilding itself around software, electrification and cost.",
    summary:
      "Automotive programmes now carry three simultaneous transformations: software-defined vehicle architectures, electrification with its packaging and lightweighting demands, and relentless cost-out on mature platforms. Crest supports OEMs and tier-1s across that spread — Class A surfacing, FEA and GD&T on the mechanical side, ECU firmware on the embedded side, and the sustaining engineering that keeps legacy platforms profitable.",
    specNote: "SDV / EV / CLASS A",
    pressures: [
      {
        title: "Software-defined vehicles",
        description:
          "ECU consolidation, domain and zonal architectures, and over-the-air update obligations are pulling automotive suppliers into software lifecycle disciplines — including cybersecurity engineering under ISO/SAE 21434 and UNECE R155 — that traditional automotive processes weren't built for.",
      },
      {
        title: "Electrification changes the mechanical problem",
        description:
          "Battery packaging, thermal management and lightweighting rewrite structural requirements platform by platform. Simulation-led design — FEA before tooling — is the difference between iterating in CAD and iterating in prototype tools.",
      },
      {
        title: "Legacy platforms still pay the bills",
        description:
          "Mature vehicle lines need sustaining engineering, drawing updates and cost-out redesigns for years after launch — high-volume engineering work that competes for the same senior staff needed on new programmes.",
      },
      {
        title: "CAD/PLM estates decades in the making",
        description:
          "2D archives, mixed CAD environments and part libraries that predate parametric modelling slow every new programme. Structured migration to 3D parametric models is an enabler, not housekeeping.",
      },
    ],
    applications: [
      {
        serviceSlug: "mechanical-engineering",
        serviceName: "Mechanical Engineering",
        how: "Class A surface building, FEA and GD&T validation, sustaining engineering and 2D-to-3D CAD migration — onsite at your technical centre or offshore from Bengaluru.",
      },
      {
        serviceSlug: "embedded-systems",
        serviceName: "Embedded Systems Engineering",
        how: "ECU and controller firmware developed under a secure development lifecycle, aligned to the cybersecurity expectations of ISO/SAE 21434 programmes.",
      },
      {
        serviceSlug: "software-services",
        serviceName: "Software Services",
        how: "Connected-vehicle services, dealer and aftersales platforms, and the integration layer between vehicle data and enterprise systems.",
      },
      {
        serviceSlug: "iot",
        serviceName: "IoT Engineering",
        how: "Telematics and fleet-data platforms: device management, OTA infrastructure and analytics at vehicle-fleet scale.",
      },
      {
        serviceSlug: "recruitment-resource-augmentation",
        serviceName: "Recruitment & Resourcing",
        how: "Contract design and CAE engineers deployed onsite or offshore against programme ramps — Hire-Train-Deploy for sustained capacity.",
      },
    ],
    standards: ["ISO/SAE 21434 (context)", "UNECE R155/R156 (context)", "ASME Y14.5", "ISO 9001:2015"],
  },
  {
    slug: "government-public-sector",
    name: "Government & Public Sector",
    group: "More industries",
    tagline:
      "Citizen-facing digital services and secure infrastructure — delivered with the documentation discipline public accountability demands.",
    summary:
      "Public-sector organisations are modernising citizen services on top of legacy estates, under procurement rules, security requirements and public scrutiny that commercial projects rarely face. Crest brings software engineering, cloud migration and security capability with an audit trail built in — and the delivery capacity to make modernisation programmes actually finish.",
    specNote: "DIGITAL GOVERNMENT",
    pressures: [
      {
        title: "Citizen expectations vs legacy estates",
        description:
          "Citizens expect services that work like consumer apps; departments run them on systems built decades ago. Modernisation has to happen without service interruption and without a big-bang rewrite that history says will fail.",
      },
      {
        title: "Security and data sovereignty",
        description:
          "Public systems carry citizen data and critical-infrastructure exposure. Architecture decisions — where data lives, who operates it, how access is controlled — are policy decisions, and they need to be documented as such.",
      },
      {
        title: "Procurement and delivery capacity",
        description:
          "Frameworks and tendering rules constrain how capability is bought, while in-house engineering teams are hard to recruit and retain. Departments need partners who deliver inside those constraints, not around them.",
      },
      {
        title: "Accountability and audit",
        description:
          "Every public programme answers to auditors — value for money, security posture, delivery against plan. Documentation and traceability are not overheads; they are how public trust is maintained.",
      },
    ],
    applications: [
      {
        serviceSlug: "software-services",
        serviceName: "Software Services",
        how: "Citizen-facing digital services and case-management systems — built incrementally, with legacy integration and characterisation testing rather than big-bang replacement.",
      },
      {
        serviceSlug: "cloud-data",
        serviceName: "Cloud & Data",
        how: "Cloud migration with data-sovereignty and segmentation requirements designed in; data platforms that make cross-departmental reporting possible without duplicating citizen data.",
      },
      {
        serviceSlug: "cybersecurity-iec-62443",
        serviceName: "Cybersecurity",
        how: "Security assessments and hardening for operational and critical-infrastructure systems — the OT estates behind utilities, transport and public infrastructure.",
      },
      {
        serviceSlug: "recruitment-resource-augmentation",
        serviceName: "Recruitment & Resourcing",
        how: "Cleared, assessed engineering capacity on contract — filling capability gaps that public-sector pay scales can't recruit for directly.",
      },
    ],
    standards: ["Cyber Essentials (context)", "ISO 9001:2015", "Data-sovereignty-aware architecture"],
  },
  {
    slug: "banking-retail",
    name: "Banking & Retail",
    group: "More industries",
    tagline:
      "Core platforms, omnichannel systems and the modernisation programmes that keep both running while they change.",
    summary:
      "Banks and retailers share the same underlying problem: revenue-critical platforms built over decades, customer expectations set by the best digital experiences anywhere, and regulators or margins that punish downtime. Crest's software, cloud and data teams modernise these estates incrementally — core banking and insurance platforms, omnichannel commerce, payments — with the testing depth and reconciliation evidence that revenue-critical systems demand.",
    specNote: "BFSI / OMNICHANNEL",
    pressures: [
      {
        title: "Core systems that cannot stop",
        description:
          "Core banking, policy administration and order-management platforms process the business itself. Modernisation must run alongside daily operations — strangler patterns, parallel runs and reconciliation, not rewrite-and-pray.",
      },
      {
        title: "Operational resilience as regulation",
        description:
          "Regulators now treat outages, third-party risk and recovery capability as compliance matters. Architecture, testing evidence and exit plans have to be demonstrable, not asserted.",
      },
      {
        title: "Omnichannel is now table stakes",
        description:
          "Customers move between store, web, mobile and service channels and expect one coherent state — inventory, orders, identity. The integration layer behind that expectation is where most retail platforms creak.",
      },
      {
        title: "Cost-income pressure on technology estates",
        description:
          "Every platform decision competes with margin. Cloud cost-out, license rationalisation and engineering productivity are permanent programmes, not one-off projects.",
      },
    ],
    applications: [
      {
        serviceSlug: "software-services",
        serviceName: "Software Services",
        how: "Core banking and insurance platform engineering, omnichannel retail systems, payments integration and legacy modernisation with reconciliation evidence.",
      },
      {
        serviceSlug: "cloud-data",
        serviceName: "Cloud & Data",
        how: "Cloud migration and data-platform consolidation with demonstrated rollback — plus the FinOps cadence that keeps run-costs inside the business case.",
      },
      {
        serviceSlug: "gcc-bot",
        serviceName: "GCC & BOT",
        how: "Owned India engineering capability for institutions scaling technology headcount — built and operated by Crest, transferred to you.",
      },
      {
        serviceSlug: "recruitment-resource-augmentation",
        serviceName: "Recruitment & Resourcing",
        how: "Contract engineering capacity across Java, .NET, cloud and QA — screened against your bar, deployed across India, the USA and the UAE.",
      },
    ],
    standards: ["Operational resilience (DORA context)", "PCI DSS (context)", "ISO 9001:2015"],
  },
  {
    slug: "oil-gas",
    name: "Oil & Gas",
    group: "More industries",
    tagline:
      "Engineering for assets that operate for decades in environments that forgive nothing — and OT estates that attackers have noticed.",
    summary:
      "Oil & gas operators and equipment manufacturers run some of the world's most exposed OT estates on some of its longest-lived assets. Crest brings IACS cybersecurity under IEC 62443, mechanical engineering for harsh-environment equipment, and the data engineering that turns field telemetry into integrity and production decisions.",
    specNote: "UPSTREAM → DOWNSTREAM",
    pressures: [
      {
        title: "OT/IACS exposure across the value chain",
        description:
          "From wellhead control to refinery DCS to terminal automation, converged IT/OT networks have made process control an attack surface. IEC 62443 zone-and-conduit discipline is now an operational necessity and, increasingly, an insurance condition.",
      },
      {
        title: "Ageing assets, integrity obligations",
        description:
          "Platforms, pipelines and rotating equipment run decades past original design life. Asset-integrity decisions need engineering analysis — FEA, fatigue assessment, reverse-engineered documentation for equipment whose OEMs no longer exist.",
      },
      {
        title: "Harsh-environment equipment engineering",
        description:
          "Equipment specified for offshore, desert and arctic service carries certification and material requirements that generalist design shops mishandle — and mistakes surface years later, in the field.",
      },
      {
        title: "Digital oilfield without new attack paths",
        description:
          "Production optimisation and predictive maintenance need field data in analytics platforms — but every new telemetry path is a potential route back into process control unless engineered one-way from the start.",
      },
    ],
    applications: [
      {
        serviceSlug: "cybersecurity-iec-62443",
        serviceName: "Cybersecurity & IEC 62443",
        how: "IACS gap assessments, zone and conduit architecture and CSMS build for production-critical OT estates — sequenced around operations, not against them.",
      },
      {
        serviceSlug: "mechanical-engineering",
        serviceName: "Mechanical Engineering",
        how: "Design, FEA and reverse engineering for harsh-environment equipment; sustaining engineering and documentation recovery for long-lived assets.",
      },
      {
        serviceSlug: "iot",
        serviceName: "IoT Engineering",
        how: "Field telemetry, condition monitoring and asset tracking engineered with one-way data paths out of the process-control zone.",
      },
      {
        serviceSlug: "cloud-data",
        serviceName: "Cloud & Data",
        how: "Production and integrity data platforms — historian integration, time-series pipelines and analytics for engineering and operations teams.",
      },
    ],
    standards: ["IEC 62443", "API / ASME (context)", "ATEX / IECEx (context)", "ISO 9001:2015"],
  },
];

export const industrySlugs = industries.map((i) => i.slug);

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
