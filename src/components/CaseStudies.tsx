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
      id: "full-stack-architecture",
      eyebrow: "System Architecture & Presales",
      title: "Full-stack microservices architecture",
      description:
        "Led the architecture of a scalable microservices platform, improving system performance by 50% and helping to secure 5+ new client projects.",
      bullets: [
        "Node.js backend with PostgreSQL/MongoDB",
        "React frontend with robust API integration",
        "Azure, Docker, and Kubernetes for CI/CD",
      ],
      tags: [
        "Microservices",
        "Node.js",
        "React",
        "Azure",
        "Kubernetes",
        "DDD",
        "Presales",
      ],
      link: "#",
    },
    {
      id: "shift-left-testing",
      eyebrow: "Quality & Security",
      title: "Shift-left testing (90%+) & security gates",
      description:
        "Championed TDD and integrated automated security scans into the CI/CD pipeline, cutting production bugs by 25%.",
      bullets: [
        "Achieved and sustained 90%+ unit test coverage",
        "SonarQube quality gates + Fortify and Nexus scans",
        "Reduced escaped defects to production by 25%",
      ],
      tags: [
        "Jest",
        "React Testing Library",
        "OWASP",
        "SonarQube",
        "Fortify",
        "CI/CD",
      ],
      link: "#",
    },
    {
      id: "keycloak-sso",
      eyebrow: "Identity & Access Management",
      title: "Organization-wide SSO with Keycloak",
      description:
        "Engineered a centralized identity solution using Keycloak to unify login, roles, and security policies across all applications.",
      bullets: [
        "Single sign-on with OIDC/PKCE flow for SPAs",
        "Enhanced security with MFA and RBAC",
        "Built reusable React components for auth logic",
      ],
      tags: ["Keycloak", "OIDC", "PKCE", "SSO", "RBAC", "MFA", "Security"],
      link: "#",
    },
    {
      id: "frontend-starter-kit",
      eyebrow: "Developer Experience",
      title: "Full-stack starter kit (day-one → hour-one)",
      description:
        "Built a reusable starter kit for full-stack applications, reducing new project bootstrap time from days to under an hour.",
      bullets: [
        "React/Next.js frontend templates",
        "Node.js API route templates with Zod validation",
        "Pre-configured CI/CD, testing, and security jobs",
      ],
      tags: [
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "React Query",
        "Storybook",
        "Zod",
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
        "Our release cycle was slowed by late-stage regressions and ad-hoc security findings. I was tasked with building a proactive quality and security framework.",
      solution: [
        "Led the adoption of Test-Driven Development (TDD) for both frontend (React) and backend (Node.js) services.",
        "Enforced 90%+ test coverage as a mandatory CI gate using Jest and React Testing Library.",
        "Integrated SonarQube (quality gate), Fortify SAST, and Nexus OSS scans into Azure DevOps pipelines.",
        "Established a clear test pyramid strategy and implemented pre-commit hooks to catch issues locally.",
      ],
      results: [
        {
          metric: "Test Coverage",
          value: "90%+",
          description: "Sustained unit coverage across critical code",
        },
        {
          metric: "Escaped Defects",
          value: "25%",
          description: "Reduction in post-deployment production bugs",
        },
        {
          metric: "Security Issues",
          value: "Pre-merge",
          description: "Flagged automatically before deployment",
        },
      ],
      challenges: [
        "Implementing TDD practices across teams with varying experience levels",
        "Balancing comprehensive testing with development velocity",
        "Integrating multiple security scanning tools without slowing the CI pipeline",
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
          items: ["Fortify SAST", "Nexus OSS", "OWASP Standards"],
        },
        {
          category: "CI/CD",
          items: ["Azure DevOps", "GitHub/GitLab CI", "Branch Protection"],
        },
      ],
      timeline: "Ongoing",
      teamSize: "15+ engineers",
      role: "Lead Full-Stack Engineer",
      bullets: [
        "Established comprehensive testing strategy with a test pyramid approach.",
        "Integrated automated security scanning with SonarQube, Fortify, and Nexus.",
        "Achieved and sustained 90%+ test coverage across all critical paths.",
        "Reduced escaped defects to production by approximately 25%.",
      ],
      tags: ["Jest", "TDD", "OWASP", "SonarQube", "Fortify", "Nexus", "CI/CD"],
      link: "#",
    },
    {
      id: "full-stack-architecture",
      eyebrow: "System Architecture & Presales",
      title: "Full-stack microservices architecture",
      description:
        "Designed and led the development of a scalable, resilient microservices platform from concept to production.",
      problem:
        "The existing monolithic application could not scale to meet performance demands and slowed down the development of new features.",
      solution: [
        "Architected a new microservices-based system using Domain Driven Design (DDD) principles.",
        "Led the development of backend services using Node.js and designed RESTful APIs for communication.",
        "Designed and managed database schemas for both PostgreSQL and MongoDB.",
        "Served as the technical SME in presales, designing solutions that translated client needs into viable technical blueprints.",
        "Containerized all services using Docker and orchestrated them with Kubernetes (AKS) on Azure.",
      ],
      results: [
        {
          metric: "System Scalability",
          value: "50%",
          description: "Improvement in overall system performance",
        },
        {
          metric: "New Business",
          value: "5+",
          description: "Contributed directly to winning new client projects",
        },
        {
          metric: "Deployment Time",
          value: "30%",
          description: "Reduction via automated CI/CD pipelines",
        },
      ],
      challenges: [
        "Decomposing a complex monolith into logical, domain-driven microservices.",
        "Ensuring data consistency and reliable communication between services.",
        "Establishing a robust CI/CD pipeline for independent service deployment.",
      ],
      technologies: [
        {
          category: "Architecture",
          items: ["Microservices", "Domain Driven Design (DDD)", "REST"],
        },
        {
          category: "Backend",
          items: ["Node.js", "Express.js", "Zod"],
        },
        {
          category: "Databases",
          items: ["PostgreSQL", "MongoDB", "Redis"],
        },
        {
          category: "Cloud & DevOps",
          items: ["Azure", "Docker", "Kubernetes (AKS)", "NGINX"],
        },
      ],
      timeline: "18 months",
      teamSize: "15+ engineers",
      role: "Lead Full-Stack Engineer & SME",
      bullets: [
        "Led the architecture of a full-stack microservices platform, improving scalability by 50%.",
        "Containerized applications with Docker and orchestrated them using Kubernetes on Azure.",
        "Automated deployment pipelines, reducing deployment times by 30%.",
        "Served as technical SME in presales, helping to secure 5+ new client projects.",
      ],
      tags: [
        "Microservices",
        "Node.js",
        "React",
        "Azure",
        "Kubernetes",
        "DDD",
        "Presales",
      ],
      link: "#",
    },
    {
      id: "keycloak-sso",
      eyebrow: "Identity & Access Management",
      title: "Organization-wide SSO with Keycloak",
      description:
        "Centralized identity using Keycloak (OIDC/PKCE) to unify login, roles/claims, and user lifecycle.",
      problem:
        "Our applications had separate user stores, creating a poor user experience and a security risk. I led the initiative to centralize our identity management.",
      solution: [
        "Engineered the adoption of Keycloak as the central Identity Provider (IdP) for the organization.",
        "Implemented a secure OIDC/PKCE flow for single-page applications (SPAs).",
        "Built and documented reusable React components and hooks for handling login, logout, and token refresh logic.",
        "Designed a comprehensive Role-Based Access Control (RBAC) system with composite roles and claims.",
        "Configured MFA/OTP and strict password policies to enhance security.",
      ],
      results: [
        {
          metric: "Centralized Access",
          value: "100%",
          description:
            "Unified user identity across all integrated applications",
        },
        {
          metric: "Security Posture",
          value: "Enhanced",
          description: "Strengthened security with MFA and RBAC",
        },
        {
          metric: "User Experience",
          value: "Seamless",
          description: "Enabled Single Sign-On and Single Logout (SLO)",
        },
      ],
      challenges: [
        "Migrating legacy applications with existing authentication systems.",
        "Designing a role hierarchy flexible enough for diverse application needs.",
        "Managing token lifetimes and refresh strategies for optimal security and UX.",
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
          category: "Frontend",
          items: ["React", "Route Guards", "Token Management"],
        },
      ],
      timeline: "6 months",
      teamSize: "5 engineers",
      role: "Lead Full-Stack Engineer",
      bullets: [
        "Architected and implemented an organization-wide SSO solution using Keycloak.",
        "Implemented PKCE flow for secure SPA authentication.",
        "Designed a comprehensive RBAC system with composite roles and claims.",
        "Enabled MFA/OTP and configured advanced security policies.",
      ],
      tags: ["Keycloak", "OIDC", "PKCE", "SSO", "RBAC", "MFA", "Security"],
      link: "#",
    },
    {
      id: "frontend-starter-kit",
      eyebrow: "Developer Experience",
      title: "Full-stack starter kit (day-one → hour-one)",
      description:
        "Reusable starter kit that standardizes the entire stack—so teams ship new full-stack apps in minutes, not days.",
      problem:
        "Each new project recreated boilerplate for both frontend and backend; tooling drift and inconsistent quality slowed delivery.",
      solution: [
        "Built variants for React (Vite) and Next.js with pre-configured app shells, error boundaries, and state management (RTK).",
        "Included templates for backend API routes in Next.js with Zod for validation.",
        "Pre-configured secure Keycloak authentication wiring (provider, route guards, token refresh).",
        "Embedded quality defaults: ESLint/Prettier, TypeScript strict mode, Jest/RTL, and Husky pre-commit hooks.",
        "Standardized CI/CD templates with build, test, and security scan jobs for SonarQube and Fortify.",
      ],
      results: [
        {
          metric: "Bootstrap Time",
          value: "< 60 min",
          description: "Reduced new project setup from days to under an hour",
        },
        {
          metric: "Code Consistency",
          value: "100%",
          description:
            "Standardized tooling and patterns across all new projects",
        },
        {
          metric: "Setup Issues",
          value: "85%",
          description: "Reduction in configuration-related bugs",
        },
      ],
      challenges: [
        "Creating templates flexible enough for different project requirements.",
        "Maintaining up-to-date dependencies and tooling configurations.",
        "Training and encouraging adoption across all development teams.",
      ],
      technologies: [
        {
          category: "Frontend",
          items: ["React", "Next.js", "Vite", "Redux Toolkit", "React Query"],
        },
        {
          category: "Backend",
          items: ["Next.js API Routes", "Zod"],
        },
        {
          category: "Development Tools",
          items: ["Storybook", "ESLint", "Prettier", "Husky"],
        },
        {
          category: "Authentication",
          items: ["Keycloak", "OIDC", "JWT", "Route Guards"],
        },
      ],
      timeline: "3 months",
      teamSize: "Core team of 3",
      role: "Lead Full-Stack Engineer",
      bullets: [
        "Created comprehensive starter kits for React (Vite) and Next.js applications.",
        "Integrated authentication patterns with Keycloak and automated route protection.",
        "Established CI/CD templates with automated testing and security scanning.",
        "Reduced new project bootstrap time from over 2 days to under 60 minutes.",
      ],
      tags: [
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "React Query",
        "Storybook",
        "Zod",
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
