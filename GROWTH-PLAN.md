# Crest Technologies — Organic Growth Plan (Discovery & Audit Phase)

**Date:** 21 October 2026 · **Prepared by:** Autonomous Website Growth Agent
**Scope:** www.crest-technologies.com — organic search only, no paid spend.

Everything in this document is labelled as **[Verified]** (observed directly on
the live site or in the codebase this session), **[SERP evidence]** (observed in
live search results, October 2026), or **[Hypothesis]** (reasonable inference
requiring data to confirm). No search volumes, rankings or traffic figures are
claimed anywhere — none are measurable until Search Console access exists.

---

## A. Executive summary

The site is live on Vercel, fully indexable, fast by construction (static
generation), with clean metadata and a complete 26-URL sitemap. That is a
strong technical floor. Three verified problems cap everything else until
fixed: **(1)** canonical tags are absent in production and both domain
variations (apex and www) serve 200 without redirecting, splitting authority
across duplicate URLs; **(2)** the contact form's backend is unconfigured, so
the primary conversion path fails to a mailto fallback; **(3)** there is no
analytics and no Search Console property, so nothing is measurable.

The largest strategic gap is the absence of any editorial/insights layer: the
SERPs for Crest's highest-value commercial topics (GCC setup, BOT, IEC 62443
readiness) are won by firms publishing guide-level content, not by service
pages alone. The standout opportunity is **TS 50701 rail cybersecurity**, where
live search results are demonstrably thin (exhibitor listings, one freelancer
profile, one certification body) and Crest has genuine, verifiable expertise.

**This week, in order:** merge PR #1 (canonicals) and deploy → set www as
primary domain in Vercel → create the Search Console property and submit the
sitemap → configure Formspree → approve an analytics choice.

---

## B. Website & SEO audit

### B1. Verified strengths

| Item | Evidence |
|---|---|
| Live and indexable | Both domains return 200; `robots.txt` allows all and names the sitemap **[Verified]** |
| Sitemap | `/sitemap.xml` live, 26 URLs, auto-generated from content data **[Verified]** |
| Metadata | Unique title + meta description on every page via per-page `Metadata` exports **[Verified]** |
| Semantic structure | One `h1` per page, logical heading hierarchy, skip-link, visible focus states **[Verified]** |
| Performance posture | All 26 pages statically generated; no client JS beyond header/form; strong Core Web Vitals expected but **unmeasured** **[Verified build / Hypothesis on CWV]** |
| Mobile | Responsive layouts verified during build at phone/tablet/desktop widths **[Verified]** |
| OpenGraph | OG tags + generated OG image on all pages **[Verified]** |
| Internal linking (downward) | Industry pages map to service pages via data-driven links; footer links all key pages; no orphan pages found **[Verified]** |

### B2. Verified defects and gaps

| # | Issue | Evidence | Severity | Fix | Effort | Validation |
|---|---|---|---|---|---|---|
| 1 | **Canonical tags absent in production** | `curl` of live homepage: no `<link rel="canonical">`; fix exists in unmerged PR #1 | **P0** | Merge PR #1, deploy | <1h | View source on live pages |
| 2 | **Apex and www both serve 200, no redirect** | Both URLs fetched directly, both 200, no `Location` header | **P0** | Vercel → Settings → Domains → set www as primary | <1h | `curl -I https://crest-technologies.com` returns 301/308 → www |
| 3 | **Contact form backend unconfigured** | `REPLACE_WITH_FORM_ID` found in live JS bundle; submissions hit the error fallback | **P0** | Create Formspree form, set ID in `components/ContactForm.tsx`, deploy | <1h | Test submission arrives |
| 4 | **No Search Console property** | No verification tag in live HTML; no DNS evidence; no access provided | **P0** | Domain property + DNS TXT, submit sitemap (steps in SEO.md) | <1h + DNS propagation | GSC shows "Success" on sitemap |
| 5 | **No analytics of any kind** | Live HTML/JS contains no gtag/GTM/Plausible/Vercel Analytics | **P1** (Tier B: tracking/privacy) | Decide tool (see §G), install, annotate baseline | 2–4h | Pageviews visible; enquiry event fires |
| 6 | **No structured data** | No JSON-LD anywhere in codebase or live pages | P1 | Add `Organization` + `WebSite` (layout), `Service` + `BreadcrumbList` (service pages), `JobPosting` (careers) | 4–6h | Rich Results Test passes |
| 7 | **No editorial/insights section** | Site has zero non-commercial pages; SERP evidence shows guides win the GCC/BOT queries | P1 | Build `/insights` hub + first articles (§F) | ongoing | Pages indexed; impressions appear in GSC |
| 8 | **Several titles exceed ~60 chars** | e.g. services index title is 95+ chars before the brand suffix | P2 | Shorten the worst offenders; keep keyword-first order | 1–2h | Titles render untruncated in SERPs |
| 9 | **No upward/lateral internal links** | Service pages don't link to related services or industries (industries→services exists; reverse doesn't) | P2 | Add a data-driven "Related industries / services" module to service pages | 3–4h | Crawl shows bidirectional links |
| 10 | **GCC/BOT intent split across three URLs** | `/services/gcc-bot`, `/delivery-model`, `/private-equity#gcc-bot` all cover BOT | P2 (watch) | Keep `/services/gcc-bot` as the canonical commercial target; ensure the other two link to it with descriptive anchors; monitor GSC for cannibalisation | 1h | One URL consistently ranks for GCC/BOT queries |
| 11 | **No case studies / client evidence** | No client names, projects or quantified results anywhere on site | P2 (Tier B: requires verified client facts) | Collect 2–3 approved case studies; do not invent | client-dependent | Pages live with approved facts |
| 12 | **Core Web Vitals unmeasured** | No field data (no GSC/CrUX access) | P3 | Re-check in GSC after 28 days of data | — | CWV report green |

**Not tested (no access):** Search Console query data, crawl stats, index
coverage, any historical traffic. These are blockers recorded in §G, not
assumed problems.

---

## C. Keyword & page-mapping plan

Search volumes are **unknown** (no paid tool connected; none fabricated).
Prioritisation below rests on SERP composition observed directly (October
2026) and commercial relevance. One cluster maps to one primary URL — no two
pages target the same intent.

| Cluster (primary + supporting intents) | Primary URL | Intent | Evidence & competitive read |
|---|---|---|---|
| **TS 50701 rail cybersecurity** — "TS 50701", "TS 50701 compliance", "rail cybersecurity case" | `/industries/rail` + dedicated insight article | Commercial / informational | **[SERP evidence]** Thin SERP: exhibitor listings, TÜV SÜD, one freelancer. Most winnable high-relevance cluster on this list. |
| **IEC 62443 consultancy / readiness (UK)** — "IEC 62443 consultancy UK", "IEC 62443 gap assessment", "62443-4-1 certification readiness" | `/services/cybersecurity-iec-62443` | Commercial | **[SERP evidence]** Certification bodies (Bureau Veritas, TÜV SÜD, UL) dominate; few boutique consultancies rank. Readiness-intent content differentiates from cert-body pages. HSE's CAF shift toward IEC 62443 is a live UK content hook. |
| **GCC setup India** — "GCC setup India", "global capability centre consulting", "how to set up a GCC in India" | `/services/gcc-bot` + flagship guide | Commercial / informational | **[SERP evidence]** Provider guides (ANSR, The Scalers, ALP) own the SERP with long-form how-to content. A service page alone will not rank; the guide carries the cluster. |
| **Build-Operate-Transfer India** — "build operate transfer India", "BOT model engineering", "BOT vs captive" | `/services/gcc-bot` + comparison article | Commercial / informational | **[SERP evidence]** Same providers; ANSR already targets a UK-specific angle. UK/EU-buyer angle is only lightly covered — Crest's natural ground. |
| **Embedded systems engineering (rail)** — "embedded systems engineering services", "train IT systems development", "EN 50155 development" | `/services/embedded-systems` | Commercial | **[Hypothesis]** Large ESO players (Tata Elxsi, LTTS, Cyient) hold head terms; rail-qualified long-tail is the realistic entry. |
| **Mechanical engineering outsourcing** — "mechanical engineering services outsourcing", "CAD migration 2D to 3D", "Class A surfacing services" | `/services/mechanical-engineering` | Commercial | **[Hypothesis]** Head term crowded; tool-and-task long-tail ("2D to 3D CAD migration", "GD&T validation services") likely winnable. |
| **PE technical due diligence (OT/embedded)** — "technical due diligence embedded systems", "OT cybersecurity due diligence private equity" | `/private-equity` | Commercial | **[Hypothesis]** Generalist tech-DD firms (Crosslake, Endava) rank for broad terms; the OT/embedded qualifier is Crest's defensible niche. |
| **Digital Product Passport readiness** — "digital product passport consultancy", "ESPR compliance 2027", "DPP electronics" | `/products/digital-product-passport` | Commercial / informational | **[Hypothesis]** Pre-2027 regulatory ramp; demand should grow into enforcement. Early content compounds. |
| **Engineering staff augmentation / HTD** — "hire train deploy model", "engineering staff augmentation India" | `/services/recruitment-resource-augmentation` | Commercial | **[Hypothesis]** Crowded generic SERP; HTD-specific and EOR-cross-border angles are narrower and closer to Crest's actual offer. |

**Geography:** UK first (entity, address, buyer base), Germany second
(aerospace entity; English pages initially), US for GCC/BOT and PE clusters
only. No hreflang work until a German-language page set is actually planned.

---

## D. Competitor & content-gap analysis

**Who actually competes in the SERPs** (observed, not assumed):

| Arena | Who ranks | What they rank with | Crest's gap / angle |
|---|---|---|---|
| IEC 62443 UK | Bureau Veritas, TÜV SÜD, UL (cert bodies) **[SERP evidence]** | Service/needs pages under high-authority domains | Cert bodies audit; they don't do the engineering remediation. "Readiness + remediation by practising engineers" is a position none of them occupy. |
| TS 50701 | CS-Consulting/CyberShield (DE boutique), TÜV SÜD, freelancers **[SERP evidence]** | Exhibitor listings, course pages | Weakest SERP found. 2–3 substantive TS 50701 articles + the rail page could own this niche within months. |
| GCC/BOT India | ANSR, The Scalers, ALP Consulting, MetaDesign, wisemonk **[SERP evidence]** | Long-form guides, listicles, comparison posts | All are India-anchored providers selling setup services. None run their own UK/Germany engineering delivery on the model they sell. "We run the model we build for you" is a verifiable differentiator; UK/EU-buyer-specific guides are underserved. |
| Embedded/ESO | Tata Elxsi, LTTS, Cyient, HCLTech **[Hypothesis]** | Domain authority + scale | Unwinnable head-on. Win on qualified long-tail: standards-specific (EN 50155, 62443-4-1 SDL), sector-specific pages Crest already has. |
| PE tech DD | Crosslake, Endava and similar **[Hypothesis]** | Deal-lifecycle service pages, partner-level POV content | They rarely cover OT/IACS/embedded targets in depth — exactly the niche `/private-equity` already claims. Needs supporting proof content. |

**Content gaps this implies (all map to §F):** no UK/EU-angled GCC guide from
a firm that operates its own centre; no practitioner-written TS 50701 material
beyond vendor courses; no "what the auditor actually asks" IEC 62443-4-1
content; no OT-specific DD content for deal teams.

---

## E. Prioritised 30-day backlog

Scoring: Business relevance /30 · Search opportunity /25 · Expected value /20
· Evidence confidence /15 · Efficiency /10. Tier = execution permission per
the operating policy (A = pre-authorised routine, B = needs approval).

| # | Task | Score | Priority | Tier | Effort | Depends on | Acceptance criteria |
|---|---|---|---|---|---|---|---|
| 1 | Merge PR #1 + deploy (canonicals, GSC verification support) | 92 | **P0** | **B** (deploy) | <1h | — | Live pages emit per-page canonical |
| 2 | Set www as primary domain in Vercel (301 apex→www) | 90 | **P0** | **B** (redirect) | <1h | — | Apex answers 301/308 with `Location: https://www.…` |
| 3 | Create GSC Domain property, verify via DNS, submit sitemap | 88 | **P0** | **B** (DNS) | <1h + propagation | — | Sitemap status "Success", ~26 URLs discovered |
| 4 | Configure Formspree form ID + test submission | 87 | **P0** | **B** (core page change) | <1h | — | Test enquiry received at info@ |
| 5 | Choose + install analytics (recommend: Plausible or Vercel Analytics for consent-free simplicity; GA4 if GA ecosystem wanted) | 76 | **P1** | **B** (tracking/privacy) | 2–4h | decision | Pageviews + a form-submit event recorded; baseline date annotated |
| 6 | Structured data: `Organization`+`WebSite` in layout; `Service`+`BreadcrumbList` on service pages; `JobPosting` on careers | 72 | P1 | A (prepare) → B (deploy) | 4–6h | #1 | All pages pass Rich Results Test |
| 7 | Scaffold `/insights` hub (listing page + article template, data-driven like the rest of the site) | 70 | P1 | A (build) → B (publish) | 4–6h | — | Hub + template render; added to sitemap automatically |
| 8 | Write + publish Article 1: TS 50701 practical guide (§F) | 74 | P1 | A (draft) → B (publish) | 1–2d | #7 | Live, interlinked with `/industries/rail` + cyber service page |
| 9 | Write + publish Article 2: GCC-in-India guide for UK/EU buyers | 71 | P1 | A (draft) → B (publish) | 1–2d | #7 | Live, interlinked with `/services/gcc-bot` |
| 10 | Title-tag tune-up on the 5 longest titles | 58 | P2 | A → B (metadata-only deploy) | 1–2h | — | Affected titles ≤ ~60 chars pre-suffix |
| 11 | "Related services / industries" cross-link module on service pages | 56 | P2 | A → B | 3–4h | — | Every service page links ≥2 industries + 2 services |
| 12 | Bing Webmaster Tools import from GSC | 50 | P2 | B (account) | <1h | #3 | Property + sitemap live in Bing |
| 13 | GCC/BOT cannibalisation guard: descriptive anchors from `/delivery-model` and PE page into `/services/gcc-bot` | 48 | P2 | A → B | 1h | — | Links live; GSC watched from day 28 |
| 14 | Case-study collection brief to leadership (facts, approvals needed — nothing invented) | 46 | P2 | A (brief only) | 2h | client approvals | Brief delivered; 2–3 candidates identified |
| 15 | CWV + index-coverage review | 40 | P3 | A | 1h | #3 + 28 days | First GSC data review recorded |

**Explicitly deferred:** paid tools, link acquisition campaigns, German-language
pages, URL restructuring (none needed), any template-wide changes.

---

## F. 90-day editorial calendar

Cadence: ~1 substantial piece/fortnight — 7 pieces in 90 days, quality over
volume. Every piece: named audience, one primary intent, UK/EU angle, internal
links to its money page, honest claims only, review checklist before publish.
Social derivative (LinkedIn post) drafted per piece for approved distribution.

| Wk | Piece | Cluster → money page | Audience / intent |
|---|---|---|---|
| 2 | **TS 50701 in practice: building a rail cybersecurity case that survives tender review** | TS 50701 → `/industries/rail`, cyber service | Rolling-stock & signalling suppliers facing TS 50701 clauses |
| 4 | **Establishing an engineering GCC in India: a practical guide for UK & European companies** | GCC → `/services/gcc-bot` | Engineering/ops directors evaluating an India centre |
| 6 | **GCC vs BOT vs conventional outsourcing: an honest comparison** | BOT → `/services/gcc-bot` | Board-level evaluators; comparison intent |
| 8 | **IEC 62443-4-1 audits: the evidence assessors actually ask for** | IEC 62443 → cyber service page | Product suppliers preparing for certification |
| 10 | **A board checklist for approving an India engineering centre** (gated-free, genuinely useful) | GCC → `/services/gcc-bot` | CFO/board; late-stage decision support |
| 12 | **Technical due diligence on embedded & OT targets: red flags that change the thesis** | PE DD → `/private-equity` | PE deal teams; pre-LOI/diligence intent |
| 13 | **DPP 2027: a readiness timeline for electronics manufacturers** | DPP → DPP page | Compliance leads in electronics; regulatory-deadline intent |

Quarter 2 candidates (validate against first GSC data before committing):
BOT transition planning framework · CMP for IACS guide · 2D→3D CAD migration
business case · embedded obsolescence management for 30-year fleets ·
Hire-Train-Deploy economics.

---

## G. Required integrations & permissions

| Integration | Purpose | Status | Who/what is needed |
|---|---|---|---|
| **Vercel dashboard** | Merge-deploys, primary-domain redirect, env vars | Not available to agent | Owner performs #1–#2, or grants access |
| **Google Search Console** | The only free source of query/impression truth | **Missing — blocks all measurement** | DNS TXT record (registrar access) or `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` env var |
| **Formspree** | Working enquiry form | **Missing — conversion path broken** | Free account; paste form ID |
| **Analytics** (Plausible / Vercel Analytics / GA4) | Engagement + conversion events | Missing — needs a decision (privacy posture differs) | Approval + account |
| **GitHub** | Publishing workflow for site changes | Working (PR #1 open) | Merge approval remains with owner |
| **LinkedIn company page** | Distribution of each article | Unknown | Posting access, if distribution is approved |
| **Bing Webmaster** | Secondary engine; Edge corporate traffic | Missing | One-click GSC import after #3 |
| Ahrefs / Similarweb connectors | Optional: real keyword/competitor data (replaces "volume unknown") | Available in this workspace but **unauthorised** | Authorise via `/mcp` if the subscription exists — no new spend without approval |

## H. KPI baseline & reporting template

**Baseline:** effectively zero/unknown — no analytics or GSC history exists.
The baseline period starts the day GSC verification completes; the first
meaningful comparison is possible ~28 days later. Every deploy and article
publish gets dated in the change log below for annotation.

Weekly report template (per the operating brief):

```
WEEK OF: ____
A. Executive summary (3 bullets max)
B. Organic performance vs baseline
   clicks / impressions / avg CTR / indexed pages (GSC, 28d vs prior 28d)
   enquiries: form submissions + mailto clicks (analytics)
C. Keyword & landing-page movers (top gains/losses, queries per money page)
D. Technical issues found / resolved (with URLs + evidence)
E. Content shipped (URL, cluster, distribution status)
F. Awaiting approval (Tier B queue)
G. Blocked (missing access/data)
H. Next week's top 3 (task, effort, expected outcome)
I. Caveats (seasonality, data limits, annotations)
```

**Change log** (annotate every entry in analytics when available):

| Date | Change | Expected effect |
|---|---|---|
| 2026-10-21 | Discovery audit completed; plan created | — |
| _pending_ | PR #1 merged (canonicals) | Variation consolidation |
| _pending_ | www set primary; apex 301s | Variation consolidation |
| _pending_ | GSC verified; sitemap submitted | Measurement begins |
| _pending_ | Formspree live | Conversion path works |

---

### Immediate decisions needed from you (everything else proceeds without input)

1. **Merge PR #1** and deploy (or grant deploy access).
2. **Vercel domains:** set `www` as primary.
3. **DNS TXT** record for Search Console (I'll supply the exact record once you open the property, or do it yourself per SEO.md §3.1).
4. **Formspree** account + form ID.
5. **Analytics choice:** Plausible (paid, consent-free), Vercel Analytics (simplest, already on Vercel), or GA4 (free, consent banner implications).
6. **Publishing authority:** may I build the `/insights` hub and submit articles as PRs for your approval? (Drafting is within scope; publishing stays gated on your merge.)
