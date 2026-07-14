/**
 * Private Equity page content — deal-lifecycle framing, three offers.
 */

export const peIntro = {
  tagline:
    "Technical and cybersecurity diligence on engineering-heavy targets — and the delivery bench to act on what we find.",
  summary:
    "Most tech-DD providers can read a SaaS codebase. Far fewer can assess an embedded product line, an industrial control estate, or an IEC 62443 exposure — and put a remediation number against it that survives contact with the deal model. Crest works engineering-heavy and OT-heavy deals across the lifecycle: pre-LOI screens, confirmatory diligence, first-100-days execution, hold-period value creation and exit preparation.",
};

/** The deal lifecycle strip — stages map to real engagement types, not decoration. */
export const dealLifecycle = [
  {
    stage: "Pre-LOI",
    what: "Red-flag technical screen from data-room material and management sessions — days, not weeks.",
  },
  {
    stage: "Diligence",
    what: "Full technical and cybersecurity DD: architecture, code, team, IEC 62443/OT exposure, remediation costs.",
  },
  {
    stage: "First 100 days",
    what: "Remediation of deal-breaker findings, security quick wins, engineering-organisation stabilisation.",
  },
  {
    stage: "Hold period",
    what: "Modernisation roadmaps, cloud and data cost-out, compliance uplift, GCC/BOT capability build.",
  },
  {
    stage: "Exit",
    what: "Vendor DD preparation: clean compliance posture and a defensible technology story for buyers.",
  },
] as const;

export type PEOffer = {
  id: string;
  name: string;
  tagline: string;
  body: string[];
  deliverables: string[];
  differentiator: string;
};

export const peOffers: PEOffer[] = [
  {
    id: "due-diligence",
    name: "Technical & Cybersecurity Due Diligence",
    tagline: "Deal-speed assessment of targets most DD providers can't read.",
    body: [
      "When the target builds embedded products, runs industrial control systems, or sells into standards-governed markets, generalist tech DD misses the risks that matter: firmware supply chains, OT network exposure, certification obligations baked into customer contracts, and engineering teams whose knowledge lives in three heads.",
      "Crest runs confirmatory diligence with practising engineers — architecture and code-quality review, IEC 62443/IACS cybersecurity gap assessment, engineering team and process maturity, and technical-debt quantification. Findings arrive as risk flags with remediation-cost estimates that plug straight into the model: what it costs to fix, how long it takes, and whether it changes the thesis.",
    ],
    deliverables: [
      "Red-flag report within the deal window — findings ranked by thesis impact",
      "Architecture, code-quality and technical-debt assessment with remediation cost ranges",
      "IEC 62443 / OT cybersecurity exposure assessment, including contractual compliance obligations",
      "Engineering organisation review: key-person risk, process maturity, hiring reality",
      "A first-100-days remediation plan you can hand to the operating team",
    ],
    differentiator:
      "We assess embedded and industrial control systems with the same depth generalists bring to web stacks — because building and certifying those systems is our core business.",
  },
  {
    id: "value-creation",
    name: "Post-Acquisition Value Creation",
    tagline: "The findings memo, executed — during the hold period.",
    body: [
      "Diligence findings only matter if someone fixes them. Crest packages its digital engineering, cloud & data and compliance capabilities for the hold period: modernisation roadmaps sequenced by valuation impact, cost-out through cloud migration and data-platform consolidation, and compliance uplift — ISO 9001, IEC 62443 — that removes discount factors before exit.",
      "The through-line is valuation: every workstream is framed as protecting or expanding multiple at exit, with progress reported in terms an IC recognises — run-rate savings, risk retired, certifications achieved, engineering velocity.",
    ],
    deliverables: [
      "A modernisation roadmap sequenced by cost, risk and exit-story impact",
      "Cloud and data cost-out programmes with measured run-rate savings",
      "ISO 9001 / IEC 62443 compliance uplift to certification, not just to policy documents",
      "Engineering-productivity improvements: DevSecOps, release cadence, quality gates",
      "Quarterly value-creation reporting aligned to the exit thesis",
    ],
    differentiator:
      "The same firm that flagged the risk carries the fix — no translation loss between the diligence report and the delivery team.",
  },
  {
    id: "gcc-bot",
    name: "GCC / BOT Setup for Portfolio Companies",
    tagline: "Stand up a Bengaluru engineering capability inside a portfolio company — using the model Crest itself runs.",
    body: [
      "For portfolio companies where engineering cost or capacity is the value-creation lever, Crest builds an India Global Capability Centre using its own UK–Bengaluru delivery model as the template: entity setup, leadership hiring, talent acquisition in the Bengaluru market, quality and security processes, and governance back to the portfolio company's HQ.",
      "Under a Build-Operate-Transfer structure, Crest carries the execution risk: we build the centre, operate it to agreed SLAs and quality gates, and transfer entity, team and processes at a pre-agreed trigger — headcount, tenure or performance milestones. The portfolio company gets the capability; the fund gets a de-risked path to a structurally lower cost base that survives the exit story.",
    ],
    deliverables: [
      "GCC business case: cost model, talent-market analysis, operating-model design",
      "Entity setup, infrastructure and compliance foundations in Bengaluru",
      "Leadership hiring and team build with Crest-run quality and security processes",
      "Operate phase run to SLAs, with transparent KPI reporting to the board",
      "Structured transfer of entity, people and processes at the agreed trigger point",
    ],
    differentiator:
      "This is not advisory theory — it is the delivery model Crest runs for its own clients, offered as a build-out service. Few PE-facing tech advisors have it in-house.",
  },
];
