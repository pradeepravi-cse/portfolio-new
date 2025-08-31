import React, { useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { CaseStudyModal } from "./CaseStudyModal";

interface CaseStudyData {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  tags: string[];
  link: string;
}

interface DetailedCaseStudy {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  problem: string;
  solution: string[];
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  challenges: string[];
  technologies: {
    category: string;
    items: string[];
  }[];
  timeline: string;
  teamSize: string;
  role: string;
  bullets: string[];
  tags: string[];
  images?: string[];
  link: string;
}

export function CaseStudies() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedCaseStudy, setSelectedCaseStudy] =
    useState<DetailedCaseStudy | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const caseStudies: CaseStudyData[] = [
    {
      id: "shift-left-testing",
      eyebrow: "Quality & Security",
      title: "Shift-left testing (90%+) & security gates",
      description:
        "TDD and automated quality/security checks built into CI/CD—raising confidence and catching issues before merge.",
      bullets: [
        "Test pyramid with unit, integration, and E2E smokes",
        "SonarQube quality gates + Fortify and Nexus scans",
        "~25% reduction in escaped defects to production",
      ],
      tags: [
        "Jest",
        "React Testing Library",
        "OWASP",
        "SonarQube",
        "Fortify",
        "Nexus",
        "CI/CD",
      ],
      link: "#",
    },
    {
      id: "keycloak-sso",
      eyebrow: "Identity & Access Management",
      title: "Organization-wide SSO with Keycloak",
      description:
        "Centralized identity using Keycloak (OIDC/PKCE) to unify login, roles/claims, and user lifecycle—single source of truth across apps.",
      bullets: [
        "Single sign-on across products with branded login and single logout (SLO)",
        "Faster onboarding/offboarding; fewer access-related tickets",
        "Unified roles/claims for cleaner authorization and audits",
      ],
      tags: ["Keycloak", "OIDC", "PKCE", "SSO", "RBAC", "MFA", "SLO"],
      link: "#",
    },
    {
      id: "code-quality-standards",
      eyebrow: "Engineering Governance",
      title: "Code quality & standardization",
      description:
        "Organization-wide standards that keep code readable, maintainable, and safe—backed by disciplined reviews and releases.",
      bullets: [
        'Unified ESLint/Prettier + TypeScript-strict configs and a "Dos & Don\'ts" playbook',
        "Git strategy (trunk/GitFlow), PR templates, mandatory reviewers, CI gates",
        "Semantic versioning, changelogs, and release trains for predictable delivery",
      ],
      tags: [
        "ESLint",
        "Prettier",
        "TypeScript",
        "PR templates",
        "Conventional Commits",
        "Release Train",
      ],
      link: "#",
    },
    {
      id: "presales-kits",
      eyebrow: "Presales Acceleration",
      title: "Reusable presales kits (tech + commercial)",
      description:
        "A modular library of tender assets that turns bid rush into repeatable execution—technical blueprints and commercial calculators that teams can trust.",
      bullets: [
        "Technical packs: architecture/solution design templates; NFR, security, compliance matrices",
        "Commercial packs: people-cost model, licenses/platform pricing, CR & margin calculators",
        "Versioned single source of truth for quick, consistent proposal assembly",
      ],
      tags: [
        "Architecture",
        "Solution Design",
        "Pricing",
        "ROI",
        "Change Request",
        "Templates",
      ],
      link: "#",
    },
    {
      id: "frontend-starter-kit",
      eyebrow: "Developer Experience",
      title: "Frontend starter kit (day-one → hour-one)",
      description:
        "Reusable starter kit that standardizes routing, state, data, testing, CI, a11y, and security—so teams ship new apps in minutes, not days.",
      bullets: [
        "Bootstrap time cut from 2-3 days to < 60 minutes",
        "Consistent linting, tests, CI templates, and env validation",
        "Storybook + design tokens enable rapid, accessible UI builds",
      ],
      tags: [
        "React",
        "Next.js",
        "Vite",
        "TypeScript",
        "Redux Toolkit",
        "React Query",
        "Storybook",
        "ESLint/Prettier",
        "Zod",
        "Husky",
      ],
      link: "#",
    },
  ];

  const detailedCaseStudies: DetailedCaseStudy[] = [
    {
      id: "shift-left-testing",
      eyebrow: "Quality & Security",
      title: "Shift-left testing (90%+) & security gates",
      description:
        "TDD and automated quality/security checks built into CI/CD—raising confidence and catching issues before merge.",
      problem:
        "Regressions and late security findings slowed releases; tests were inconsistent and scans were ad-hoc.",
      solution: [
        "Defined testing pyramid; introduced TDD for high-risk areas",
        "Wrote fast, deterministic tests with shared utilities/data builders",
        "Enforced 90%+ coverage in CI; PR checklist and branch protections",
        "Integrated SonarQube (quality gate), Fortify SAST, and Nexus OSS scans",
        "Added pre-commit hooks (lint, typecheck, unit tests)",
      ],
      results: [
        {
          metric: "Test Coverage",
          value: "90%+",
          description: "Sustained unit coverage",
        },
        {
          metric: "Escaped Defects",
          value: "25%",
          description: "Reduction in production issues",
        },
        {
          metric: "Security Issues",
          value: "Pre-merge",
          description: "Flagged before deployment",
        },
      ],
      challenges: [
        "Implementing TDD practices across teams with varying experience levels",
        "Balancing comprehensive testing with development velocity",
        "Integrating multiple security scanning tools without slowing CI pipeline",
      ],
      technologies: [
        {
          category: "Testing Framework",
          items: ["Jest", "React Testing Library", "MSW"],
        },
        {
          category: "Quality Gates",
          items: ["SonarQube", "ESLint", "Prettier", "Husky"],
        },
        {
          category: "Security",
          items: ["Fortify SAST", "Nexus OSS", "OWASP"],
        },
        {
          category: "CI/CD",
          items: [
            "GitHub Actions",
            "Azure DevOps",
            "Gitlab CI",
            "Branch Protection",
            "PR Templates",
          ],
        },
      ],
      timeline: "12 weeks",
      teamSize: "8 engineers + 2 QA specialists",
      role: "Quality Champion & Technical Lead",
      bullets: [
        "Established comprehensive testing strategy with test pyramid approach",
        "Integrated automated security scanning with SonarQube, Fortify, and Nexus",
        "Achieved sustained 90%+ test coverage across all critical paths",
        "Implemented quality gates preventing low-quality code deployment",
        "Reduced escaped defects to production by approximately 25%",
      ],
      tags: [
        "Jest",
        "React Testing Library",
        "OWASP",
        "SonarQube",
        "Fortify",
        "Nexus",
        "CI/CD",
      ],
      link: "#",
    },
    {
      id: "frontend-starter-kit",
      eyebrow: "Developer Experience",
      title: "Frontend starter kit (day-one → hour-one)",
      description:
        "Reusable starter kit that standardizes routing, state, data, testing, CI, a11y, and security—so teams ship new apps in minutes, not days.",
      problem:
        "Each project re-created boilerplate; tooling drift and inconsistent quality slowed delivery.",
      solution: [
        "Built React (Vite) and Next.js variants with app shell, error boundaries, suspense",
        "State (RTK) + data (React Query) presets with retry/backoff and cache keys",
        "Keycloak auth wiring (provider, route guards, token refresh helpers)",
        "Quality defaults: ESLint/Prettier, TS strict, Jest/RTL",
        "CI templates (build/test/scan), SonarQube/Fortify/Nexus jobs, env schema validation (Zod)",
      ],
      results: [
        {
          metric: "Bootstrap Time",
          value: "< 60 min",
          description: "From days to under an hour",
        },
        {
          metric: "Consistency",
          value: "100%",
          description: "Standardized across teams",
        },
        {
          metric: "Setup Issues",
          value: "85%",
          description: "Reduction in configuration bugs",
        },
      ],
      challenges: [
        "Creating templates flexible enough for different project requirements",
        "Maintaining up-to-date dependencies and tooling configurations",
        "Training teams on the standardized patterns and conventions",
      ],
      technologies: [
        {
          category: "Frontend Frameworks",
          items: ["React", "Next.js", "Vite", "TypeScript"],
        },
        {
          category: "State & Data",
          items: ["Redux Toolkit", "React Query", "Axios"],
        },
        {
          category: "Development Tools",
          items: ["Storybook", "ESLint", "Prettier", "Husky", "Zod"],
        },
        {
          category: "Authentication",
          items: ["Keycloak", "OIDC", "JWT", "Route Guards"],
        },
      ],
      timeline: "16 weeks",
      teamSize: "6 engineers + 1 DevOps specialist",
      role: "Technical Lead & Architecture",
      bullets: [
        "Created comprehensive starter kits for React (Vite) and Next.js applications",
        "Integrated authentication patterns with Keycloak and route protection",
        "Established CI/CD templates with automated testing and security scanning",
        "Built CLI tool for rapid project scaffolding with organization standards",
        "Reduced new project bootstrap time from 2-3 days to under 60 minutes",
      ],
      tags: [
        "React",
        "Next.js",
        "Vite",
        "TypeScript",
        "Redux Toolkit",
        "React Query",
        "Storybook",
        "ESLint/Prettier",
        "Zod",
        "Husky",
      ],
      link: "#",
    },
    {
      id: "keycloak-sso",
      eyebrow: "Identity & Access Management",
      title: "Organization-wide SSO with Keycloak",
      description:
        "Centralized identity using Keycloak (OIDC/PKCE) to unify login, roles/claims, and user lifecycle—single source of truth across apps.",
      problem:
        "Multiple apps with separate user stores; inconsistent auth flows; slow access changes; no true SSO.",
      solution: [
        "Led adoption of Keycloak as IdP; realm strategy and per-app client model",
        "Configured PKCE for SPAs; standardized redirect URIs/CORS",
        "Defined roles/groups/claims (composite roles) for RBAC; brand-themed login",
        "Enabled MFA/OTP, password policies; tuned token lifetimes and refresh",
        "Implemented SLO; built admin workflows (provisioning, bulk import, service accounts)",
        "Progressive migration of existing apps; docs and training for squads",
      ],
      results: [
        {
          metric: "SSO Coverage",
          value: "100%",
          description: "Across integrated applications",
        },
        {
          metric: "Onboarding Time",
          value: "75%",
          description: "Faster user provisioning",
        },
        {
          metric: "Support Tickets",
          value: "60%",
          description: "Reduction in access-related issues",
        },
      ],
      challenges: [
        "Migrating legacy applications with existing authentication systems",
        "Designing role hierarchy that works across diverse application needs",
        "Managing token lifetimes and refresh strategies for optimal security and UX",
      ],
      technologies: [
        {
          category: "Identity Provider",
          items: ["Keycloak", "OIDC", "PKCE", "OAuth 2.0"],
        },
        {
          category: "Authentication",
          items: ["JWT", "MFA", "OTP", "RBAC"],
        },
        {
          category: "Integration",
          items: ["CORS", "SLO", "LDAP"],
        },
        {
          category: "Management",
          items: [
            "Admin Console",
            "Bulk Import",
            "Service Accounts",
            "Audit Logs",
          ],
        },
      ],
      timeline: "20 weeks",
      teamSize: "4 engineers + 1 security specialist",
      role: "Identity Architecture Lead",
      bullets: [
        "Architected organization-wide SSO solution using Keycloak as central IdP",
        "Implemented PKCE flow for secure SPA authentication with proper CORS configuration",
        "Designed comprehensive RBAC system with composite roles and claims",
        "Enabled MFA/OTP and configured security policies for password and token management",
        "Built administrative workflows for user provisioning and bulk operations",
      ],
      tags: ["Keycloak", "OIDC", "PKCE", "SSO", "RBAC", "MFA", "SLO"],
      link: "#",
    },
    {
      id: "code-quality-standards",
      eyebrow: "Engineering Governance",
      title: "Code quality & standardization",
      description:
        "Organization-wide standards that keep code readable, maintainable, and safe—backed by disciplined reviews and releases.",
      problem:
        "Inconsistent styles, fragile reviews, unpredictable releases across teams.",
      solution: [
        'Authored a code style guide and "Dos & Don\'ts" with examples',
        "Central ESLint/Prettier packages, TS strict mode, shared tsconfig",
        "PR template + checklist; CODEOWNERS; branch protections; required checks",
        "Git strategy (trunk/GitFlow) with clear naming; conventional commits",
        "Semantic-release, automated changelogs; scheduled release trains",
      ],
      results: [
        {
          metric: "Review Time",
          value: "40%",
          description: "Faster code reviews",
        },
        {
          metric: "Style Issues",
          value: "90%",
          description: "Reduction in formatting disputes",
        },
        {
          metric: "Release Predictability",
          value: "95%",
          description: "On-time delivery rate",
        },
      ],
      challenges: [
        "Getting buy-in from teams accustomed to different coding standards",
        "Balancing strict enforcement with development flexibility",
        "Coordinating release schedules across multiple teams and dependencies",
      ],
      technologies: [
        {
          category: "Code Quality",
          items: ["ESLint", "Prettier", "TypeScript", "SonarQube"],
        },
        {
          category: "Git Workflow",
          items: ["GitHub", "CODEOWNERS", "Branch Protection", "PR Templates"],
        },
        {
          category: "Release Management",
          items: [
            "Semantic Release",
            "Conventional Commits",
            "Changelog",
            "SemVer",
          ],
        },
        {
          category: "Documentation",
          items: ["Style Guide", "Playbooks", "Decision Records", "Templates"],
        },
      ],
      timeline: "14 weeks",
      teamSize: "3 engineers + management stakeholders",
      role: "Engineering Standards Lead",
      bullets: [
        'Authored comprehensive code style guide with "Dos & Don\'ts" examples',
        "Implemented organization-wide ESLint/Prettier configurations and TypeScript strict mode",
        "Established Git workflow with branch protections, CODEOWNERS, and PR templates",
        "Introduced conventional commits and semantic versioning with automated changelogs",
        "Created release train schedule for predictable and coordinated deployments",
      ],
      tags: [
        "ESLint",
        "Prettier",
        "TypeScript",
        "PR templates",
        "Conventional Commits",
        "SemVer",
        "Release Train",
      ],
      link: "#",
    },
    {
      id: "presales-kits",
      eyebrow: "Presales Acceleration",
      title: "Reusable presales kits (tech + commercial)",
      description:
        "A modular library of tender assets that turns bid rush into repeatable execution—technical blueprints and commercial calculators that teams can trust.",
      problem:
        "Bid timelines were tight; each team rebuilt designs, pricing, and documents from scratch.",
      solution: [
        'Created versioned "tender kits": slide master, reusable diagrams, solution narratives',
        "Delivery plan, RACI, assumptions & risks, compliance checklist (security/regulatory)",
        "Excel/Sheets models: team sizing, license tiers, platform costs, CR & profit optimization, ROI",
        "Red-line clause library and response snippets for common requirements",
        "Contributor guide and review workflow for keeping kits current",
      ],
      results: [
        {
          metric: "Proposal Time",
          value: "Hours",
          description: "From days to hours turnaround",
        },
        {
          metric: "Pricing Consistency",
          value: "95%",
          description: "Standardized across proposals",
        },
        {
          metric: "Win Rate",
          value: "30%",
          description: "Improvement in bid success",
        },
      ],
      challenges: [
        "Creating flexible templates that work across diverse client requirements",
        "Maintaining accuracy of pricing models as costs and market rates change",
        "Ensuring all teams adopt and maintain the standardized approach",
      ],
      technologies: [
        {
          category: "Documentation",
          items: ["PowerPoint", "Visio", "Confluence", "SharePoint"],
        },
        {
          category: "Modeling",
          items: ["Excel", "Google Sheets"],
        },
        {
          category: "Collaboration",
          items: ["Teams", "Slack", "Version Control", "Review Workflows"],
        },
        {
          category: "Templates",
          items: [
            "Architecture Diagrams",
            "Solution Narratives",
            "RACI Matrix",
            "Risk Register",
          ],
        },
      ],
      timeline: "10 weeks",
      teamSize: "5 specialists (technical + commercial)",
      role: "Presales Excellence Lead",
      bullets: [
        "Developed comprehensive library of reusable technical and commercial tender assets",
        "Created standardized pricing models with team sizing and ROI calculators",
        "Built compliance matrices and risk registers for common regulatory requirements",
        "Established version control and review workflows for maintaining kit currency",
        "Reduced proposal preparation time from days to hours with higher consistency",
      ],
      tags: [
        "Architecture",
        "Solution Design",
        "Pricing",
        "ROI",
        "Change Request",
        "Templates",
        "Playbooks",
      ],
      link: "#",
    },
  ];

  const handleViewDetails = (caseStudyId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    const detailedStudy = detailedCaseStudies.find(
      (study) => study.id === caseStudyId
    );
    if (detailedStudy) {
      setSelectedCaseStudy(detailedStudy);
      setIsModalOpen(true);
    }
  };

  const handleCardClick = (caseStudyId: string) => {
    const detailedStudy = detailedCaseStudies.find(
      (study) => study.id === caseStudyId
    );
    if (detailedStudy) {
      setSelectedCaseStudy(detailedStudy);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCaseStudy(null);
  };

  return (
    <section id="case-study" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Case Studies
          </h2>
          <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
            Problem → What I did → Results.
          </p>
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className="md:hidden">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {caseStudies.map((study, index) => (
              <Card
                key={index}
                className="flex-none w-[85%] snap-start border border-border shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => handleCardClick(study.id)}
              >
                <CardHeader>
                  <div className="text-eyebrow mb-2">{study.eyebrow}</div>
                  <CardTitle className="text-xl font-semibold text-foreground leading-tight">
                    {study.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground-secondary">
                    {study.description}
                  </p>

                  <ul className="space-y-2">
                    {study.bullets.map((bullet, bulletIndex) => (
                      <li
                        key={bulletIndex}
                        className="flex items-start gap-2 text-sm text-foreground-secondary"
                      >
                        <ChevronRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    variant="ghost"
                    className="p-0 h-auto font-medium text-accent hover:text-accent/80 gap-1"
                    onClick={(e) => handleViewDetails(study.id, e)}
                  >
                    View details
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="border border-border shadow-sm cursor-pointer hover:shadow-md transition-shadow h-full"
              onClick={() => handleCardClick(study.id)}
            >
              <CardHeader>
                <div className="text-eyebrow mb-2">{study.eyebrow}</div>
                <CardTitle className="text-xl font-semibold text-foreground leading-tight">
                  {study.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <p className="text-foreground-secondary">{study.description}</p>

                <ul className="space-y-2 flex-1">
                  {study.bullets.map((bullet, bulletIndex) => (
                    <li
                      key={bulletIndex}
                      className="flex items-start gap-2 text-sm text-foreground-secondary"
                    >
                      <ChevronRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    variant="ghost"
                    className="p-0 h-auto font-medium text-accent hover:text-accent/80 gap-1"
                    onClick={(e) => handleViewDetails(study.id, e)}
                  >
                    View details
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        isOpen={isModalOpen}
        onClose={closeModal}
        caseStudy={selectedCaseStudy}
      />
    </section>
  );
}
