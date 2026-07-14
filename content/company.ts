/**
 * About-page content: leadership, team, certifications, careers.
 *
 * Leadership and team are plain arrays — add, edit or delete entries and the
 * pages update automatically. Set `photo` to a path under /public when real
 * photos are available; the pages show initials until then.
 */

export type Leader = {
  name: string;
  role: string;
  location: string;
  bio: string;
  /** Optional headline numbers shown on the profile card. */
  stats?: { value: string; label: string }[];
  photo?: string;
  linkedin?: string;
};

export const leadership: Leader[] = [
  {
    name: "Rajni Kant",
    role: "CEO",
    location: "Reading, UK",
    bio: "30+ years of global leadership experience in Technology and Product Engineering across Europe, the United States, and emerging markets. Rajni has built service and platform businesses from the ground up, and advises founders and investors on capital allocation, scaling strategy, and governance.",
    stats: [
      { value: "30+", label: "Years Global Leadership" },
      { value: "2,000+", label: "Team Members Led" },
      { value: "$350M", label: "P&L Managed" },
    ],
  },
  {
    name: "Prabha Kant",
    role: "Board Member",
    location: "Reading, UK",
    bio: "20+ years of global leadership experience in Technology and Product Engineering across Europe, the United States, and emerging markets. Having built the company from the ground up, she brings a unique blend of entrepreneurial vision and disciplined program leadership to every initiative she leads. Prabha specialises in aligning cross-functional teams around large-scale transformation programs, translating business strategy into structured execution plans, and ensuring that organisational change delivers measurable, sustainable outcomes.",
  },
  {
    name: "Ashwini Kumar",
    role: "Board Member",
    location: "Bengaluru, India",
    bio: "Ashwini brings a strong professional foundation across the Banking and Real Estate sectors, where he developed deep expertise in financial management, operational planning, and regulatory compliance. His cross-industry background has given him a well-rounded perspective on managing complex financial operations while maintaining the agility needed in fast-paced business environments. Known for his detail-oriented and pragmatic approach, he plays a key role in supporting the organisation's financial health and operational stability as it scales.",
  },
];

/**
 * Meet the Team — placeholder profiles for /team.
 * Duplicate an entry to add a person; delete to remove.
 */
export type TeamMember = {
  name: string;
  role: string;
  location: string;
  bio: string;
  photo?: string;
  linkedin?: string;
};

export const team: TeamMember[] = [
  {
    name: "Prajwal Kulkarni",
    role: "Technology Lead — Embedded Products",
    location: "Hamburg, Germany",
    bio: "Prajwal leads the technology strategy and innovation for embedded hardware and software products. He oversees system architecture, product development, and technology selection while ensuring performance, reliability, security, and scalability. Prajwal also guides engineering teams, aligns technical decisions with business goals, and drives the adoption of emerging embedded technologies such as IoT, AI at the edge, and real-time systems.",
  },
  {
    name: "Vishal Bhandary",
    role: "Engineering Manager — Embedded Systems",
    location: "Bengaluru, India",
    bio: "Vishal is responsible for leading the design, development, and delivery of embedded hardware and software solutions. He manages a team of engineers and oversees system architecture, code quality, and integration, while ensuring projects are completed on time and meet performance, reliability, and safety standards. He drives technical excellence throughout the product development lifecycle.",
  },
  {
    name: "Jayanth Kumar Singh",
    role: "Embedded Cybersecurity Expert",
    location: "Bengaluru, India",
    bio: "Jayanth is an embedded cybersecurity expert, responsible for designing and implementing security solutions that protect embedded systems from cyber threats. Jayanth ensures secure boot, firmware integrity, encryption, authentication, and compliance with industry standards such as ISO 21434 and IEC 62443. He identifies vulnerabilities, performs security testing, and collaborates with development teams to build secure, resilient, and reliable embedded products.",
  },
  {
    name: "Gundappa Chatla",
    role: "Software Development Lead",
    location: "Bengaluru, India",
    bio: "Gundappa leads the software development practice, guiding engineers in designing, developing, and delivering robust, scalable, and high-performance software solutions. He works with the team to define technical architecture, ensuring adherence to coding standards and best practices, mentoring team members, and coordinating with cross-functional stakeholders.",
  },
  {
    name: "Mayur Raju Shah",
    role: "Quality & Compliance Lead",
    location: "Bengaluru, India",
    bio: "Mayur ensures that systems are developed to the highest standards of quality, reliability, and compliance. Mayur leads the team that defines quality processes, plans and executes tests, manages defects, ensures compliance with industry standards, and drives continuous improvement throughout the product development lifecycle.",
  },
];

export type Certification = {
  name: string;
  scope: string;
  detail: string;
  /** Short code rendered inside the badge. */
  badge: string;
};

export const certifications: Certification[] = [
  {
    name: "ISO 9001:2015",
    badge: "ISO 9001",
    scope: "Quality Management System",
    detail:
      "Certified quality management across engineering delivery in the UK and Bengaluru — the process backbone for requirements traceability, review discipline and configuration control on every engagement.",
  },
  {
    name: "IEC 62443-4-1",
    badge: "62443-4-1",
    scope: "Secure Product Development Lifecycle",
    detail:
      "Development processes aligned to IEC 62443-4-1 secure development lifecycle practices — threat modelling, secure coding, verification and vulnerability handling built into how products are engineered.",
  },
  {
    name: "External Certification Partnership",
    badge: "3RD PARTY",
    scope: "Accredited Independent Certification",
    detail:
      "Certification-readiness engagements are run with accredited external certification bodies as the independent certifier. Crest prepares the evidence and manages the programme; an accredited third party certifies the result.",
  },
];

export const whyWeExist =
  "Safety- and security-critical industries are asked to digitalise by firms that have never sat through a certification audit. Crest exists to close that gap: a specialist engineering firm where compliance capability — IEC 62443, ISO 9001, the documentation discipline behind both — is part of how software and hardware get built, not a report written afterwards. We serve rail, aerospace, automotive and industrial operators because those are the sectors where that discipline decides whether a product ships.";

export const careersIntro = {
  tagline: "Engineers who want their work to survive an audit.",
  body: "Crest hires embedded, mechanical, software, cloud and cybersecurity engineers into the Bengaluru delivery centre, and senior client-facing engineering and compliance roles in the UK and Germany. The work is rail, aerospace, automotive and industrial systems — products with long lives, real constraints and certification evidence attached. If that sounds like engineering as it should be practised, we'd like to hear from you.",
  openRoles: [
    {
      title: "Senior Embedded Engineer (Rail / Industrial)",
      location: "Bengaluru",
      type: "Full-time",
    },
    {
      title: "IACS Cybersecurity Consultant (IEC 62443)",
      location: "UK / Germany, hybrid",
      type: "Full-time",
    },
    {
      title: "Mechanical Design Engineer (CATIA / Creo)",
      location: "Bengaluru / Onsite EU",
      type: "Full-time",
    },
    {
      title: "Cloud & Data Engineer",
      location: "Bengaluru",
      type: "Full-time",
    },
    {
      title: "Speculative applications",
      location: "Any office",
      type: "Open",
    },
  ],
};
