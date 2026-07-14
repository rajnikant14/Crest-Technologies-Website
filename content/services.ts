/**
 * Service page content.
 *
 * Each entry drives one page under /services/[slug] (the Digital Product
 * Passport entry renders under /products/digital-product-passport).
 * Edit copy here — the page templates read everything from this file.
 */

export type Service = {
  slug: string;
  name: string;
  navLabel: string;
  /** One-line claim used on cards and page hero. */
  tagline: string;
  /** 2–3 sentence summary for the services index and home cards. */
  summary: string;
  /** Small monospace annotation shown on the card, e.g. a standard reference. */
  specNote: string;
  /** Headline stats shown in the page hero (optional). */
  stats?: { value: string; label: string }[];
  /** Capability chips shown under the overview (optional). */
  capabilities?: string[];
  /** What the service covers. */
  covers: { title: string; description: string }[];
  /** Who it's for. */
  audience: string[];
  /** How Crest delivers it — real engagement stages, not decorative numbers. */
  delivery: { title: string; description: string }[];
  deliveryHeading: string;
  /** What a client walks away with. */
  outcomes: string[];
  /** Standards and frameworks referenced on the page. */
  standards: string[];
  /** 'brass' default; 'signal' for the sustainability context. */
  accent: "brass" | "signal";
};

export const services: Service[] = [
  {
    slug: "embedded-systems",
    name: "Embedded Systems Engineering",
    navLabel: "Embedded Systems",
    tagline:
      "Firmware and hardware co-design for train IT and industrial control systems, engineered under a secure development lifecycle.",
    summary:
      "Product engineering for the embedded layer of safety- and security-critical systems: on-board rail equipment, industrial controllers, and connected devices. Development runs under a secure development lifecycle aligned to IEC 62443-4-1, so security evidence is produced as the product is built — not reconstructed afterwards.",
    specNote: "SDL / IEC 62443-4-1",
    covers: [
      {
        title: "Firmware & hardware co-design",
        description:
          "Board bring-up, BSP and driver development, RTOS and embedded Linux platforms, and hardware/software partitioning decided jointly with your hardware team rather than handed over a wall.",
      },
      {
        title: "Train IT & on-board systems",
        description:
          "Product engineering for passenger information, condition monitoring, gateways and on-board compute — designed against rail environmental, EMC and cybersecurity requirements including EN 50155 constraints and TS 50701 context.",
      },
      {
        title: "Industrial control systems",
        description:
          "Control and supervisory components for industrial automation: PLC-adjacent firmware, protocol stacks (OPC UA, Modbus, MQTT), and the secure integration of legacy serial equipment into modern architectures.",
      },
      {
        title: "Secure development lifecycle",
        description:
          "Threat modelling, secure coding standards, static analysis gates, software composition analysis and security verification planned into the development process per IEC 62443-4-1 practices — with the documentation trail a certification audit expects to see.",
      },
      {
        title: "Verification & long-term maintenance",
        description:
          "Requirements-traced test benches, HIL rigs where the programme justifies them, and sustained engineering for products with 15–30 year service lives, including obsolescence and patch management.",
      },
    ],
    audience: [
      "Rail rolling-stock OEMs and tier-1 suppliers building or refreshing on-board equipment",
      "Industrial automation vendors whose products now face IEC 62443 procurement requirements",
      "Aerospace and defence suppliers needing disciplined embedded delivery capacity",
      "Product companies that need an embedded team with compliance evidence built in",
    ],
    deliveryHeading: "How an embedded engagement runs",
    delivery: [
      {
        title: "Requirements & architecture baseline",
        description:
          "We start from your system requirements and constraints — environmental, safety, security level targets — and produce an agreed architecture and interface baseline before writing production code.",
      },
      {
        title: "Security context & threat model",
        description:
          "Zones, conduits and the product's security context are defined up front. The threat model drives the security requirements that development is then verified against.",
      },
      {
        title: "Iterative development under SDL gates",
        description:
          "Sprint-based delivery from Bengaluru with UK/Germany architectural oversight. Every increment passes static analysis, code review and unit verification gates; security-relevant changes trigger threat model review.",
      },
      {
        title: "Verification & evidence pack",
        description:
          "Requirements-traced verification, security testing against the defined context, and assembly of the design, test and SDL evidence into a pack usable for certification or customer audit.",
      },
      {
        title: "Handover or sustained engineering",
        description:
          "Clean handover with documentation your team can maintain — or a sustained engineering arrangement covering patches, vulnerability response and obsolescence over the product's service life.",
      },
    ],
    outcomes: [
      "Production firmware and hardware designs with requirements traceability end to end",
      "An IEC 62443-4-1-aligned evidence trail: threat model, secure coding records, verification results",
      "A defined vulnerability-handling and patch process for the product's service life",
      "Documentation a certification auditor or customer can actually work with",
    ],
    standards: ["IEC 62443-4-1", "IEC 62443-4-2", "EN 50155", "TS 50701", "ISO 9001:2015"],
    accent: "brass",
  },
  {
    slug: "mechanical-engineering",
    name: "Mechanical Engineering",
    navLabel: "Mechanical Engineering",
    tagline:
      "Full-lifecycle mechanical engineering — concept through Class A surfacing and sustaining engineering — delivered onsite at your facility or offshore from Bengaluru.",
    summary:
      "Crest works across the full product lifecycle: from concept and new product design through sustaining engineering, drafting, 3D modelling, FEA simulation, GD&T validation, reverse engineering and Class A surface building. Teams deploy onsite at client facilities or operate offshore, serving automotive, aerospace, oil & gas and locomotive sectors — every engagement run by engineers with domain expertise aligned to your industry's standards.",
    specNote: "CAD / CAE / GD&T",
    stats: [
      { value: "5M+", label: "engineering man-hours delivered onsite & offshore" },
      { value: "4 sectors", label: "automotive, aerospace, oil & gas, locomotive" },
      { value: "2D → 3D", label: "CAD legacy migration to full parametric models" },
    ],
    capabilities: [
      "New product design",
      "Sustaining engineering",
      "FEA & GD&T",
      "Reverse engineering",
      "Class A surface building",
      "CATIA / SolidWorks / Creo / ANSYS",
      "CAD legacy migration",
      "Onsite & offshore delivery",
      "Drafting & 3D modeling",
    ],
    covers: [
      {
        title: "New product design",
        description:
          "Concept development through detailed design: packaging studies, material selection, design-for-manufacture and design-for-assembly reviews, and release-quality drawings — taken from a napkin sketch or a requirements spec to a manufacturable product.",
      },
      {
        title: "Sustaining engineering, drafting & 3D modelling",
        description:
          "Engineering change management, drawing updates, BOM maintenance and production support for products already in the field — the steady, high-volume work that keeps manufacturing lines and service organisations moving.",
      },
      {
        title: "FEA simulation & GD&T validation",
        description:
          "Structural, thermal and fatigue analysis in ANSYS to validate designs before tooling commitments, and GD&T application and validation to ASME Y14.5 — tolerance stacks that hold up on the shop floor, not just in the model.",
      },
      {
        title: "Reverse engineering",
        description:
          "Scan-to-CAD reconstruction of legacy parts with no surviving drawings: point-cloud processing, parametric remodelling, and re-established design intent with documented assumptions — essential for obsolescence and long-life fleet support.",
      },
      {
        title: "Class A surface building",
        description:
          "Production-quality Class A surfacing for visible automotive and industrial-design geometry — curvature-continuous surfaces built in CATIA to styling intent, validated with highlight and reflection analysis.",
      },
      {
        title: "CAD legacy migration",
        description:
          "Structured migration programmes from 2D drawing archives to full 3D parametric models — batch conversion with modelling standards, checking gates and traceability, so the migrated library is usable engineering data rather than geometry dumps.",
      },
    ],
    audience: [
      "Automotive OEMs and tier-1 suppliers needing design and CAE capacity",
      "Aerospace suppliers with sustaining engineering and drawing backlogs",
      "Oil & gas equipment manufacturers validating designs for harsh environments",
      "Locomotive and rolling-stock builders supporting decades-old fleets",
    ],
    deliveryHeading: "How a mechanical engagement runs",
    delivery: [
      {
        title: "Scope & standards alignment",
        description:
          "We align on your CAD environment, drawing standards, checking rules and release process before any production work — the discipline that makes offshore delivery indistinguishable from your own team's output.",
      },
      {
        title: "Pilot work package",
        description:
          "A bounded first package — a part family, a drawing backlog tranche, one FEA study — delivered end to end to calibrate quality expectations and cycle times on both sides.",
      },
      {
        title: "Ramp-up, onsite and offshore",
        description:
          "Team scales against an agreed capacity plan: onsite engineers at your facility where daily interaction with design owners matters, offshore pods in Bengaluru for volume work — one workflow, one quality system.",
      },
      {
        title: "Steady-state delivery under quality gates",
        description:
          "Work packages flow through defined checking and release gates with measured first-time-right rates and turnaround times reported monthly — engineering throughput you can plan production around.",
      },
      {
        title: "Sustaining ownership",
        description:
          "Long-run arrangements where Crest owns a product family's sustaining engineering — changes, drawings, supplier queries — freeing your senior engineers for new development.",
      },
    ],
    outcomes: [
      "Release-quality CAD, drawings and analysis in your environment, to your standards",
      "Validated designs — FEA reports and GD&T stacks that survive tooling and production",
      "A migrated, usable 3D parametric library where there were 2D archives",
      "Measured throughput: first-time-right rates and turnaround times you can plan against",
    ],
    standards: ["ASME Y14.5 (GD&T)", "ISO 9001:2015", "CATIA · SolidWorks · Creo", "ANSYS · AutoCAD"],
    accent: "brass",
  },
  {
    slug: "software-services",
    name: "Software Services",
    navLabel: "Software Services",
    tagline:
      "End-to-end product engineering — we build, modernise and scale software platforms with one accountable partner from inception to production.",
    summary:
      "Crest builds, modernises and scales software products for enterprises across banking and financial services, retail and healthcare — from core banking and insurance platforms to omnichannel retail systems and clinical applications. Cross-functional teams cover the full delivery spectrum: new product builds, platform modernisation, and migration of legacy systems into scalable, cloud-ready architectures — one accountable partner across the whole software lifecycle.",
    specNote: "PRODUCT ENGINEERING",
    capabilities: [
      "Product engineering & modernization",
      "Core banking & insurance platforms",
      "Java / Python / .NET / React",
      "Cloud & DevOps",
      "Mobile applications",
      "QA & testing",
      "Legacy system modernization",
    ],
    covers: [
      {
        title: "New product builds",
        description:
          "Greenfield platforms taken from inception to production: architecture, build, launch and operation — web, backend and mobile — with the engineering decisions documented as they're made.",
      },
      {
        title: "Core banking & insurance platforms",
        description:
          "Engineering for BFSI systems where downtime is a regulator conversation: core banking integrations, policy administration, payments flows and the testing depth financial platforms demand.",
      },
      {
        title: "Omnichannel retail & commerce",
        description:
          "Retail systems that hold together across store, web and mobile: commerce platforms, order management, inventory visibility and the integration layer between them.",
      },
      {
        title: "Healthcare & clinical applications",
        description:
          "Patient-facing and clinical workflow applications built with the data-protection and validation discipline health information requires.",
      },
      {
        title: "Legacy modernisation & cloud migration",
        description:
          "Incremental replacement of ageing systems that cannot simply be switched off — strangler-pattern migrations, characterisation testing, and re-platforming onto scalable, cloud-ready architectures with reconciliation evidence.",
      },
      {
        title: "QA, testing & DevSecOps",
        description:
          "Test engineering as a first-class discipline — automation frameworks, performance and security testing — running on CI/CD pipelines with security gates your auditors can inspect.",
      },
    ],
    audience: [
      "Banks, insurers and fintechs modernising core platforms",
      "Retailers unifying store, web and mobile channels",
      "Healthcare providers and health-tech companies building clinical applications",
      "Enterprises needing one accountable partner from inception to production",
    ],
    deliveryHeading: "How we deliver software",
    delivery: [
      {
        title: "Discovery & architecture",
        description:
          "Short, senior-led discovery producing an architecture decision record, a delivery plan and an honest estimate — including what we recommend you not build.",
      },
      {
        title: "Foundation sprint",
        description:
          "Pipeline, environments, security gates and a walking skeleton in production-like infrastructure before feature development starts. This is where DevSecOps is established, not retrofitted.",
      },
      {
        title: "Iterative delivery",
        description:
          "Two-week increments from the Bengaluru team with UK/Germany architectural ownership. Working software every sprint, demoed against acceptance criteria you defined.",
      },
      {
        title: "Hardening & transition",
        description:
          "Performance, security and failure-mode testing; operational runbooks; and structured handover to your team or into a Crest sustained-engineering arrangement.",
      },
    ],
    outcomes: [
      "Working software in production, with the pipeline and infrastructure-as-code that built it",
      "Architecture and decision records your own engineers can pick up",
      "Legacy systems retired on a plan — with data migrated and reconciled, not abandoned",
      "A measured, honest view of technical debt and what it costs to carry",
    ],
    standards: ["ISO 9001:2015", "IEC 62443-4-1 (SDL)", "OWASP ASVS"],
    accent: "brass",
  },
  {
    slug: "cybersecurity-iec-62443",
    name: "Cybersecurity & IEC 62443 Compliance",
    navLabel: "Cybersecurity & IEC 62443",
    tagline:
      "IACS cybersecurity delivered as an engineering discipline — gap assessment through certification readiness with accredited external certification bodies.",
    summary:
      "Industrial automation and control system (IACS) cybersecurity for asset owners, system integrators and product suppliers. We run gap assessments against the relevant IEC 62443 part, build the Cybersecurity Management System and Configuration Management Plans, and take you to certification readiness — with an accredited, independent certification body issuing the certificate.",
    specNote: "IEC 62443 · SL/ML",
    covers: [
      {
        title: "Gap assessment against IEC 62443",
        description:
          "Structured assessment of your product, system or organisation against the applicable standard part — 62443-4-1/4-2 for product suppliers, 62443-2-4/3-3 for integrators and systems — with findings mapped to specific requirements and security levels (SL) or maturity levels (ML), not generic observations.",
      },
      {
        title: "Cybersecurity Management System (CSMS)",
        description:
          "Design and implementation of the policies, secure development lifecycle processes and organisational controls that IEC 62443 requires — sized for your organisation rather than copied from a template.",
      },
      {
        title: "Configuration Management Plans (CMP)",
        description:
          "CMPs that hold up under audit: baseline definition, change control, patch and vulnerability management for IACS components, and the linkage between configuration state and security posture.",
      },
      {
        title: "Certification readiness",
        description:
          "We prepare the evidence, run internal audits, and manage the certification engagement with an accredited external certification body — Crest prepares you; an independent third party certifies you.",
      },
      {
        title: "Rail cybersecurity (TS 50701 / EN 50701)",
        description:
          "Application of IEC 62443 in the railway context: security context definition for on-board and trackside systems, zone and conduit modelling, and cybersecurity cases aligned to TS 50701.",
      },
    ],
    audience: [
      "Product suppliers facing IEC 62443-4-1/4-2 requirements in tenders",
      "System integrators needing 62443-2-4 capability certification",
      "Rail operators and rolling-stock suppliers working under TS 50701",
      "Asset owners and OT operators establishing an IACS security programme",
    ],
    deliveryHeading: "The path to certification",
    delivery: [
      {
        title: "Scoping & applicability",
        description:
          "Which parts of IEC 62443 apply, to what product or system boundary, at what target SL/ML. Getting this wrong is the most expensive mistake in a certification programme, so it comes first.",
      },
      {
        title: "Gap assessment",
        description:
          "Requirement-by-requirement assessment producing a findings register with severity, effort estimates and an ordered remediation plan — a document you can budget from.",
      },
      {
        title: "Remediation & CSMS build",
        description:
          "We close the gaps with you: SDL processes, CMPs, vulnerability handling, supplier security requirements. Where engineering changes are needed, our embedded and software teams do the work rather than leaving you a recommendations deck.",
      },
      {
        title: "Internal audit & evidence assembly",
        description:
          "Dry-run audit against the certification criteria, evidence pack assembly, and correction of anything that would surface as a nonconformity.",
      },
      {
        title: "Certification & surveillance",
        description:
          "We manage the engagement with the accredited certification body through stage audits to certificate issue, and set up the surveillance-audit cadence so the certificate survives year two.",
      },
    ],
    outcomes: [
      "A findings register and remediation plan mapped to specific IEC 62443 requirements",
      "An operating CSMS with CMPs, SDL and vulnerability-handling processes your teams follow",
      "Certification by an accredited third party — not a self-declaration",
      "In rail contexts: a cybersecurity case aligned to TS 50701 that plugs into your safety case",
    ],
    standards: ["IEC 62443-4-1", "IEC 62443-4-2", "IEC 62443-2-4", "IEC 62443-3-3", "TS 50701", "ISO 27001 (interface)"],
    accent: "brass",
  },
  {
    slug: "cloud-data",
    name: "Cloud & Data",
    navLabel: "Cloud & Data",
    tagline:
      "Cloud architecture, migration and data engineering for enterprise and industrial estates — workloads that cannot tolerate casual migration.",
    summary:
      "Cloud and data engineering grounded in operational reality: estates with OT boundaries, data with export-control and safety implications, and workloads where a failed cutover stops production. We design the architecture, run the migration and build the data platforms — on AWS and Azure — with rollback demonstrated, not assumed.",
    specNote: "CLOUD / DATA",
    covers: [
      {
        title: "Cloud architecture & migration",
        description:
          "Landing zones, network segmentation respecting IT/OT boundaries, and migration of engineering and enterprise workloads with rollback plans — on AWS and Azure. Lift-and-shift where it is honest, re-architecture where it pays back.",
      },
      {
        title: "Data engineering & analytics",
        description:
          "Pipelines from operational sources — fleet telemetry, test benches, transaction systems — into governed platforms; data models that survive contact with real data; and analytics that operations and engineering teams actually use.",
      },
      {
        title: "Industrial data platforms",
        description:
          "Historian integration, time-series architectures, and the OT-to-cloud data path designed with the same zone-and-conduit discipline as our IEC 62443 work — telemetry out, no uncontrolled path back in.",
      },
      {
        title: "FinOps & run-cost honesty",
        description:
          "Cost architecture from day one: workload right-sizing, commitment planning and monthly engineering-led cost reviews — because a migration that doubles run-cost is a failure regardless of how smoothly it cut over.",
      },
    ],
    audience: [
      "Engineering and industrial firms moving workloads to cloud without breaching OT boundaries",
      "Banks, retailers and enterprises consolidating data platforms",
      "Organisations turning operational data into maintenance and fleet decisions",
      "PE portfolio companies executing cloud cost-out programmes",
    ],
    deliveryHeading: "How a cloud engagement runs",
    delivery: [
      {
        title: "Assessment & target architecture",
        description:
          "Estate assessment, dependency mapping and a target architecture with a costed migration sequence — including which workloads should not move.",
      },
      {
        title: "Foundation & first workloads",
        description:
          "Landing zone, identity, network segmentation and guardrails established; first workload migrated as the pattern-setter with rollback demonstrated, not assumed.",
      },
      {
        title: "Migration & data platform build",
        description:
          "Wave-based migration and pipeline construction with cutover rehearsals, reconciliation checks and hypercare.",
      },
      {
        title: "Operate & optimise",
        description:
          "Cost and performance optimisation with a monthly engineering-led review — run by the team that built the estate, not a separate managed-service silo.",
      },
    ],
    outcomes: [
      "A cloud estate with documented architecture, guardrails and honest run-cost projections",
      "Data pipelines with defined ownership, quality checks and OT-safe ingestion paths",
      "Demonstrated rollback and reconciliation evidence for every migrated workload",
      "A run-cost baseline and optimisation cadence your CFO can hold you to",
    ],
    standards: ["ISO 9001:2015", "IEC 62443-3-3 (zones & conduits)", "Well-Architected frameworks"],
    accent: "brass",
  },
  {
    slug: "iot",
    name: "IoT Engineering",
    navLabel: "IoT Engineering",
    tagline:
      "Connected products from silicon to cloud — device, connectivity, platform and analytics engineered as one system.",
    summary:
      "End-to-end IoT engineering for industrial and commercial products: device hardware and firmware, connectivity design, device management at fleet scale, and the cloud platform that turns telemetry into decisions. One accountable team from sensor to dashboard, with security engineered in from the silicon up.",
    specNote: "DEVICE → CLOUD",
    covers: [
      {
        title: "Connected device engineering",
        description:
          "Sensor selection, low-power hardware design, and firmware for constrained devices — battery budgets measured in years, not marketing claims. Secure boot, encrypted storage and hardware root of trust where the threat model requires it.",
      },
      {
        title: "Connectivity & protocol design",
        description:
          "The right transport for the deployment, chosen on physics and economics: BLE, LoRaWAN, NB-IoT/LTE-M, Wi-Fi, wired industrial buses. Gateway design for brownfield sites where the equipment predates the internet.",
      },
      {
        title: "Device management & OTA",
        description:
          "Fleet provisioning, certificate lifecycle, remote diagnostics and staged over-the-air updates with rollback — the operational machinery that separates a connected product from a support liability.",
      },
      {
        title: "IoT cloud platform & analytics",
        description:
          "Ingestion, digital-twin state, alerting and analytics on AWS or Azure IoT stacks — built for the data volumes a real fleet produces, with dashboards for operations teams and APIs for your product.",
      },
      {
        title: "Industrial IoT & retrofit",
        description:
          "Condition monitoring and asset tracking retrofitted onto existing industrial equipment — energy metering, vibration, temperature — bridging legacy PLCs and serial protocols into modern platforms without disturbing the control layer.",
      },
    ],
    audience: [
      "Equipment manufacturers adding connectivity and services to existing product lines",
      "Operators retrofitting condition monitoring onto industrial or rail assets",
      "Product companies taking a connected device from prototype to certified production",
      "Enterprises whose IoT pilot worked but whose fleet economics don't",
    ],
    deliveryHeading: "From pilot to fleet",
    delivery: [
      {
        title: "Feasibility & architecture",
        description:
          "Use-case economics, connectivity trade study, power budget and security context — an architecture you can cost before committing to tooling and certification spend.",
      },
      {
        title: "Prototype & field trial",
        description:
          "Working hardware and a thin platform slice deployed with real users on real assets. Field data — connectivity dropouts, battery drain, enclosure failures — feeds the production design.",
      },
      {
        title: "Productisation",
        description:
          "Design for manufacture, regulatory certification (CE/UKCA, radio type approval), device management at scale, and platform hardening for production data volumes.",
      },
      {
        title: "Fleet operations",
        description:
          "Staged rollout, OTA cadence, monitoring and a defined vulnerability-response process — either handed to your team or run as sustained engineering by Crest.",
      },
    ],
    outcomes: [
      "A certified, manufacturable connected device with a costed bill of materials",
      "A device-management capability: provisioning, OTA updates, certificate lifecycle",
      "A telemetry platform with dashboards and APIs your product roadmap builds on",
      "Fleet unit economics you can defend in front of a CFO",
    ],
    standards: ["IEC 62443-4-2", "ETSI EN 303 645", "CE / UKCA", "ISO 9001:2015"],
    accent: "brass",
  },
  {
    slug: "gcc-bot",
    name: "GCC & Build-Operate-Transfer",
    navLabel: "GCC & BOT",
    tagline:
      "Stand up your own India engineering capability — from GCC strategy to a full Build-Operate-Transfer — modelled on the centre Crest runs itself.",
    summary:
      "End-to-end Global Capability Centre consulting and Build-Operate-Transfer execution for European and US organisations that want an owned India engineering capability rather than a vendor relationship. Crest advises from its own operating experience — entity strategy, Bengaluru talent-market reality, governance that works across time zones — and under BOT carries the execution risk until the centre is yours.",
    specNote: "GCC / BOT",
    capabilities: [
      "GCC strategy & business case",
      "Entity setup & compliance",
      "Leadership & talent acquisition",
      "Operating model & governance",
      "Build-Operate-Transfer execution",
      "Quality & security processes",
      "Structured transfer & handover",
    ],
    covers: [
      {
        title: "GCC strategy & business case",
        description:
          "Cost modelling against vendor and hybrid alternatives, location analysis within India, talent-market mapping for your specific engineering stack, and a board-ready case with honest ramp timelines.",
      },
      {
        title: "Entity & operations setup",
        description:
          "Legal entity, tax and regulatory registrations, premises, IT and security infrastructure — sequenced so hiring can start while paperwork completes.",
      },
      {
        title: "Leadership & talent build",
        description:
          "Centre-head and engineering-leadership hiring first; then team build in pods with Bengaluru-market hiring pipelines, calibrated interviews and retention design.",
      },
      {
        title: "Operating model & governance",
        description:
          "The HQ-to-centre interface: ways of working, quality gates, security controls, KPI reporting — the part that determines whether a GCC compounds or disappoints.",
      },
      {
        title: "Build-Operate-Transfer",
        description:
          "Crest builds the team and infrastructure, operates the centre to agreed SLAs and quality gates, then transfers entity, people and processes to you at a pre-agreed trigger — headcount, tenure or performance milestones.",
      },
    ],
    audience: [
      "European and US enterprises evaluating an owned India engineering centre",
      "PE portfolio companies where engineering cost or capacity is the value-creation lever",
      "Scale-ups outgrowing vendor relationships but wary of setup risk",
      "Organisations that tried a captive before and want it to work this time",
    ],
    deliveryHeading: "The BOT arc — four stages, each with a decision gate",
    delivery: [
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
          "At the pre-agreed trigger, entity, employment contracts, processes and vendor relationships transfer to you in a structured handover. The capability is yours — not a dependency on us.",
      },
    ],
    outcomes: [
      "A board-ready GCC business case with real Bengaluru numbers, not consulting averages",
      "A functioning engineering centre with leadership, processes and security installed",
      "Transparent Operate-phase KPIs: delivery output, attrition, cost per engineer",
      "At transfer: an owned India capability with no residual dependency on Crest",
    ],
    standards: ["ISO 9001:2015", "India entity, tax & labour compliance", "IEC 62443-aligned security controls"],
    accent: "brass",
  },
  {
    slug: "recruitment-resource-augmentation",
    name: "Recruitment & Resource Augmentation",
    navLabel: "Recruitment & Resourcing",
    tagline:
      "Contract staffing and staff augmentation built for precision hiring — engineers sourced, trained and deployed to your team, not CVs forwarded at volume.",
    summary:
      "Crest is a dedicated workforce solutions partner specialising in contract staffing and staff augmentation — purpose-built for precision hiring rather than broad-based placement. Our Hire-Train-Deploy model sources, trains and deploys engineers on contract directly into your team, cutting time-to-hire without cutting the quality bar. We also run the full secondment cycle — cross-geography payroll, compliance and employer-of-record services across India, the USA and the UAE — under ISO 9001:2015-certified delivery, so the hiring process is predictable and audit-ready.",
    specNote: "HIRE-TRAIN-DEPLOY",
    capabilities: [
      "Contract Staffing",
      "Hire-Train-Deploy",
      "Campus Hiring",
      "Staff augmentation",
      "Secondment model",
      "Payroll & EOR",
      "Cross-geography deployment",
    ],
    covers: [
      {
        title: "Contract staffing",
        description:
          "Engineers on contract for defined programmes — screened against your actual technical bar by practising engineers, not keyword-matched by recruiters, and productive from week one because the role profile was engineered before sourcing started.",
      },
      {
        title: "Hire-Train-Deploy",
        description:
          "We source candidates with the right fundamentals, run them through a structured training programme built around your stack and standards, and deploy them on contract to your team — pre-invested capability instead of a hiring lottery.",
      },
      {
        title: "Staff augmentation",
        description:
          "Named engineers embedded in your teams under your direction — with Crest handling performance management, replacement risk and continuity, so augmentation doesn't become your management overhead.",
      },
      {
        title: "Campus hiring",
        description:
          "Graduate intake programmes run against engineering campuses in India: assessment design, selection at scale, and structured onboarding that converts fresh graduates into deployable engineers within a defined ramp.",
      },
      {
        title: "Secondment, payroll & employer-of-record",
        description:
          "The full secondment cycle across India, the USA and the UAE: cross-geography payroll, statutory compliance, visas and employer-of-record services — one partner accountable for the legal and administrative machinery of deploying people across borders.",
      },
    ],
    audience: [
      "Engineering organisations that need capacity faster than their own hiring can deliver",
      "Enterprises deploying teams across India, the USA and the UAE without local entities",
      "GCC operators scaling headcount against a ramp plan",
      "Companies whose sector demands an audit-ready, documented hiring process",
    ],
    deliveryHeading: "How the engagement runs",
    delivery: [
      {
        title: "Demand profiling",
        description:
          "Role profiles engineered with your technical leads — the actual skills, standards and tools the work requires — before any sourcing starts. Precision here is what separates this from broad-based placement.",
      },
      {
        title: "Source & assess",
        description:
          "Sourcing across experienced-hire and campus channels, with technical assessment run by practising engineers against the agreed bar. You see a shortlist, not a pipeline dump.",
      },
      {
        title: "Train",
        description:
          "For Hire-Train-Deploy cohorts: a structured programme on your stack, standards and ways of working — completion criteria agreed with you, so 'trained' means something measurable.",
      },
      {
        title: "Deploy & manage",
        description:
          "Contract deployment into your teams with payroll, compliance and EOR handled across geographies; performance checkpoints and replacement guarantees keep quality accountable to Crest, not just to you.",
      },
      {
        title: "Convert or rotate",
        description:
          "At the end of the contract term: conversion to your payroll on pre-agreed terms, extension, or managed rotation with handover — no cliff edges in team continuity.",
      },
    ],
    outcomes: [
      "Deployed engineers screened and trained against your actual technical bar",
      "Reduced time-to-hire with a quality bar that doesn't move",
      "Cross-geography payroll, compliance and EOR handled by one accountable partner",
      "An ISO 9001:2015-certified, audit-ready hiring and deployment process",
    ],
    standards: ["ISO 9001:2015", "EOR: India · USA · UAE", "Statutory & visa compliance"],
    accent: "brass",
  },
  {
    slug: "digital-product-passport",
    name: "Sustainability — Digital Product Passport",
    navLabel: "Digital Product Passport",
    tagline:
      "EU Digital Product Passport readiness for batteries, electronics and textiles — the same compliance-documentation discipline, applied to circularity data.",
    summary:
      "Advisory and implementation for the EU Digital Product Passport under ESPR, with requirements phasing in from 2027 for the EU's initial priority sectors — batteries, electronics and textiles. DPP is a data-traceability and compliance-documentation problem, which is precisely the discipline Crest already applies in CMP and QMS work. Delivered with our sustainability venture GreenX.",
    specNote: "ESPR / DPP 2027",
    covers: [
      {
        title: "DPP readiness assessment",
        description:
          "Which of your products fall in scope, under which delegated acts, on what timeline — and a gap analysis of your current product data against the data points a passport will require.",
      },
      {
        title: "Data model & identifier design",
        description:
          "Product data models covering composition, substances of concern, repairability and recycled content; unique identifier and data-carrier strategy (QR, RFID) aligned to emerging EU technical specifications and GS1 standards.",
      },
      {
        title: "Traceability architecture",
        description:
          "Mapping the supply-chain data flows that feed a passport — supplier declarations, batch and serial-level genealogy, factory systems — and the integration architecture that keeps passport data synchronised with production reality.",
      },
      {
        title: "Compliance documentation",
        description:
          "The evidence layer behind the passport: substantiating environmental claims, managing supplier attestations, and version-controlling passport data with the same rigour as a configuration management plan — because regulators will treat it that way.",
      },
      {
        title: "Implementation with GreenX",
        description:
          "Platform selection or build, systems integration with PLM/ERP, and pilot-to-rollout delivery in partnership with GreenX, Crest's sustainability venture focused on DPP.",
      },
    ],
    audience: [
      "Battery and electronics manufacturers in scope for the first delegated acts",
      "Textile brands and manufacturers selling into the EU",
      "Component suppliers whose customers will demand passport data upstream",
      "Compliance and quality leaders asked to own DPP without a defined budget yet",
    ],
    deliveryHeading: "The road to a compliant passport",
    delivery: [
      {
        title: "Scope & regulatory mapping",
        description:
          "Product portfolio screened against ESPR delegated acts and timelines; obligations mapped per product family so investment lands where enforcement starts.",
      },
      {
        title: "Data gap analysis",
        description:
          "Required passport data points versus what your PLM, ERP and supplier records actually hold today — producing a costed data-acquisition plan.",
      },
      {
        title: "Data model & pilot",
        description:
          "Passport data model and identifier scheme designed, then proven on one product family end to end — from supplier declaration to scannable passport.",
      },
      {
        title: "Rollout & operating process",
        description:
          "Extension across the portfolio with the update, audit and supplier-onboarding processes that keep passports accurate after launch day — compliance as an operating routine, not a one-off project.",
      },
    ],
    outcomes: [
      "A per-product-family obligation map with dates you can plan investment against",
      "A passport data model and identifier strategy aligned to EU technical specifications",
      "A working pilot passport with the traceability pipeline behind it",
      "An operating process — ownership, updates, supplier onboarding — that survives audits",
    ],
    standards: ["EU ESPR", "DPP delegated acts (from 2027)", "EU Battery Regulation", "GS1 identifiers", "ISO 9001:2015"],
    accent: "signal",
  },
];

export const serviceSlugs = services.map((s) => s.slug);

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
