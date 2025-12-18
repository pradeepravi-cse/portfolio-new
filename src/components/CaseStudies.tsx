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
  status?: "in-progress" | "completed";
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
  status?: "in-progress" | "completed";
}

export function CaseStudies() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedCaseStudy, setSelectedCaseStudy] =
    useState<DetailedCaseStudy | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const caseStudies: CaseStudyData[] = [
    {
      id: "fundriax-aws",
      eyebrow: "Cloud Architecture & Infrastructure",
      title: "Fundriax: Multi-bank financial platform on AWS",
      description:
        "Architected and deployed a cloud-native personal financial management platform on AWS, supporting multi-bank, multi-currency tracking with workspace isolation and enterprise-grade security.",
      bullets: [
        "AWS EC2, RDS PostgreSQL, S3, VPC, and IAM for secure, scalable infrastructure",
        "NestJS monorepo backend with TypeORM, Keycloak authentication, and audit logging",
        "React frontend with Vite, Redux Toolkit, React Query, and CloudFront CDN",
      ],
      tags: [
        "AWS",
        "EC2",
        "RDS",
        "S3",
        "VPC",
        "IAM",
        "CloudFront",
        "NestJS",
        "React",
        "PostgreSQL",
        "Keycloak",
        "TypeORM",
      ],
      link: "#",
      status: "in-progress",
    },
    {
      id: "slamint-microservices",
      eyebrow: "Microservices & Monorepo Architecture",
      title: "SLA Mint: Open-source ticketing platform",
      description:
        "Architected and built an enterprise-grade open-source IT ticketing and helpdesk solution using NestJS microservices, Nx monorepo, and Docker containerization with Keycloak authentication.",
      bullets: [
        "Nx monorepo with NestJS microservices (API Gateway, Account Management, Ticketing)",
        "Shared libraries (@slamint/core, @slamint/auth) for reusable patterns and OIDC/JWT authentication",
        "Docker containerization with automated CI/CD pipelines and SonarQube quality gates",
      ],
      tags: [
        "NestJS",
        "Microservices",
        "Nx",
        "Docker",
        "Keycloak",
        "PostgreSQL",
        "Redis",
        "React",
        "TypeScript",
        "SonarQube",
      ],
      link: "#",
      status: "in-progress",
    },
    {
      id: "full-stack-architecture",
      eyebrow: "System Architecture & Presales",
      title: "Full-stack microservices architecture",
      description:
        "Led the architecture of a scalable microservices platform, improving system performance by 50% and helping to secure 5+ new client projects.",
      bullets: [
        "Nest.js backend with PostgreSQL/MongoDB",
        "React frontend with robust API integration",
        "Azure, Docker, and Kubernetes for CI/CD",
      ],
      tags: [
        "Microservices",
        "NestJs",
        "Express",
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
      id: "fundriax-aws",
      eyebrow: "Cloud Architecture & Infrastructure",
      title: "Fundriax: Multi-bank financial platform on AWS",
      description:
        "Designed and implemented a production-ready personal financial management platform leveraging AWS cloud services, supporting multi-bank, multi-currency financial tracking with workspace-based isolation and enterprise security.",
      problem:
        "Fundriax required a scalable, secure platform to manage personal finances across multiple banks and currencies. The system needed to handle sensitive financial data with strict security requirements, support workspace-based multi-tenancy, provide real-time transaction tracking, and scale efficiently while maintaining cost-effectiveness.",
      solution: [
        "Architected a multi-tier AWS infrastructure using VPC with public and private subnets, isolating backend services from public access and securing database connections.",
        "Deployed NestJS monorepo backend on EC2 instances behind an Application Load Balancer (ALB) with auto-scaling groups, supporting the pnpm workspace structure with separate API and documentation services.",
        "Implemented PostgreSQL database on RDS with Multi-AZ deployment for high availability, automated backups, and point-in-time recovery for financial data integrity.",
        "Configured S3 buckets for static asset storage and CloudFront CDN for global content delivery of the React frontend, reducing latency and improving user experience.",
        "Integrated Keycloak authentication on EC2 with OIDC/PKCE flows, enabling secure JWT-based authentication and workspace-scoped RBAC for multi-tenant data isolation.",
        "Established IAM roles and policies following least-privilege principles, securing access to AWS resources including RDS, S3, and EC2 instances.",
        "Implemented structured logging with Pino and CloudWatch integration, enabling comprehensive audit trails for all financial operations as required for compliance.",
        "Set up TypeORM migrations pipeline with automated database schema management, ensuring consistent deployments across environments.",
        "Configured workspace-based data isolation at the application layer, ensuring secure multi-tenant architecture with proper access controls.",
      ],
      results: [
        {
          metric: "Data Security",
          value: "100%",
          description: "Workspace isolation and audit logging for all financial operations",
        },
        {
          metric: "Multi-Currency",
          value: "Unlimited",
          description: "Support for multiple currencies and financial institutions",
        },
        {
          metric: "Cost Efficiency",
          value: "40%",
          description: "Optimized infrastructure costs through right-sizing and reserved instances",
        },
        {
          metric: "Uptime",
          value: "99.9%",
          description: "High availability with Multi-AZ RDS and auto-scaling groups",
        },
      ],
      challenges: [
        "Designing a secure multi-tenant architecture with workspace isolation while maintaining query performance.",
        "Implementing comprehensive audit logging for financial compliance without impacting application performance.",
        "Managing database migrations safely in production for a financial application with zero downtime requirements.",
        "Ensuring encryption at rest and in transit for sensitive financial data including account numbers and transaction details.",
        "Optimizing costs while maintaining high availability and supporting multiple currencies and institutions.",
      ],
      technologies: [
        {
          category: "Cloud Infrastructure",
          items: [
            "AWS EC2",
            "AWS RDS (PostgreSQL Multi-AZ)",
            "AWS S3",
            "AWS VPC",
            "AWS IAM",
            "CloudFront CDN",
            "ElastiCache (Redis)",
          ],
        },
        {
          category: "Backend",
          items: [
            "NestJS",
            "Node.js",
            "TypeScript",
            "TypeORM",
            "Zod",
            "Pino (Structured Logging)",
          ],
        },
        {
          category: "Frontend",
          items: [
            "React",
            "Vite",
            "TypeScript",
            "Redux Toolkit",
            "React Query",
            "TanStack Router",
            "TailwindCSS",
          ],
        },
        {
          category: "Database & ORM",
          items: ["PostgreSQL", "TypeORM", "Database Migrations"],
        },
        {
          category: "Authentication & Security",
          items: [
            "Keycloak",
            "OIDC/PKCE",
            "JWT",
            "RBAC",
            "Workspace Isolation",
            "Audit Logging",
          ],
        },
        {
          category: "DevOps & Monitoring",
          items: [
            "CloudWatch",
            "AWS Systems Manager",
            "GitHub Actions",
            "Docker",
            "pnpm Workspace",
          ],
        },
        {
          category: "Security & Compliance",
          items: [
            "IAM Roles & Policies",
            "VPC Security Groups",
            "Network ACLs",
            "Encryption at Rest & Transit",
            "Audit Trail",
            "Data Masking",
          ],
        },
      ],
      timeline: "6 months",
      teamSize: "Solo + contributors",
      role: "Senior Full-Stack Engineer & Cloud Architect",
      bullets: [
        "Architected and deployed a secure AWS infrastructure using VPC, EC2, RDS PostgreSQL, and S3 for a monorepo financial management platform.",
        "Implemented workspace-based multi-tenant architecture with Keycloak authentication, ensuring complete data isolation between workspaces.",
        "Built comprehensive audit logging system using Pino and CloudWatch, tracking all financial operations for compliance and security.",
        "Designed database schema with TypeORM migrations supporting multi-bank, multi-currency transactions with soft deletes and referential integrity.",
        "Configured React frontend with Vite, Redux Toolkit, and React Query, deployed via CloudFront CDN for optimal global performance.",
        "Established IAM policies and VPC security groups following AWS security best practices, ensuring encrypted data at rest and in transit.",
        "Optimized infrastructure costs by 40% through right-sizing EC2 instances, RDS reserved instances, and efficient S3 storage classes.",
        "Achieved 99.9% uptime with Multi-AZ RDS deployment, automated backups, and auto-scaling groups for high availability.",
      ],
      tags: [
        "AWS",
        "EC2",
        "RDS",
        "S3",
        "VPC",
        "IAM",
        "CloudFront",
        "NestJS",
        "React",
        "PostgreSQL",
        "TypeORM",
        "Keycloak",
        "CloudWatch",
      ],
      link: "#",
      status: "in-progress",
    },
    {
      id: "slamint-microservices",
      eyebrow: "Microservices & Monorepo Architecture",
      title: "SLA Mint: Open-source ticketing platform",
      description:
        "Designed and implemented an enterprise-grade open-source IT ticketing and helpdesk solution, providing organizations with a cost-effective alternative to proprietary service desk platforms with SLA management, role-based access control, and comprehensive audit logging.",
      problem:
        "Organizations needed an affordable, flexible IT ticketing solution without vendor lock-in. Existing commercial platforms were expensive, lacked customization, and fragmented support operations across emails and spreadsheets. The solution required enterprise-grade features including SLA enforcement, multi-tenant support, role-based access control, and comprehensive audit trails.",
      solution: [
        "Architected a microservices-based system using NestJS with an API Gateway pattern, separating concerns into dedicated services (API Gateway, Account Management, Ticketing) for scalability and maintainability.",
        "Implemented an Nx monorepo with pnpm workspace, enabling code sharing through reusable libraries (@slamint/core for config, logging, auditing, and @slamint/auth for OIDC/JWT authentication).",
        "Built a shared authentication library with Keycloak integration, providing OIDC discovery, JWT validation via JWKS, and decorator-based route protection (@Public, @Authenticated, @Roles).",
        "Created standardized API envelopes and interceptors for consistent request/response handling, structured logging with Pino, and comprehensive audit logging for compliance.",
        "Containerized all services with Docker and orchestrated using Docker Compose, enabling easy local development and production deployments with PostgreSQL, Redis, and Keycloak.",
        "Implemented microservices communication patterns using NestJS TCP clients, enabling service-to-service communication between the API Gateway and backend services.",
        "Set up automated CI/CD pipelines with GitHub Actions for Docker image building and publishing to GHCR, with semantic versioning and automated tagging.",
        "Integrated SonarQube for code quality monitoring, ensuring maintainability, security, and adherence to coding standards across the monorepo.",
        "Built a React frontend with Redux Toolkit, React Query, and TanStack Router, providing a modern user interface for ticket management, SLA monitoring, and analytics.",
      ],
      results: [
        {
          metric: "Code Reusability",
          value: "60%",
          description: "Reduced code duplication through shared libraries and monorepo structure",
        },
        {
          metric: "Development Velocity",
          value: "40%",
          description: "Faster feature delivery with standardized patterns and shared components",
        },
        {
          metric: "Code Quality",
          value: "A Rating",
          description: "Maintained SonarQube security and maintainability ratings",
        },
        {
          metric: "Deployment Time",
          value: "50%",
          description: "Reduced deployment time with containerized services and automated pipelines",
        },
      ],
      challenges: [
        "Designing a scalable microservices architecture that maintains consistency across services while allowing independent deployment.",
        "Creating reusable authentication patterns that work seamlessly across multiple services with different requirements.",
        "Managing shared library dependencies in a monorepo while ensuring proper versioning and avoiding circular dependencies.",
        "Implementing comprehensive audit logging without impacting application performance or creating excessive database load.",
        "Balancing code reusability with service independence in a monorepo structure.",
      ],
      technologies: [
        {
          category: "Backend Framework",
          items: ["NestJS", "Node.js", "TypeScript", "Express"],
        },
        {
          category: "Monorepo & Build",
          items: ["Nx", "pnpm Workspace", "Webpack", "TypeScript"],
        },
        {
          category: "Microservices",
          items: [
            "API Gateway Pattern",
            "NestJS Microservices",
            "TCP Communication",
            "Service Discovery",
          ],
        },
        {
          category: "Authentication & Security",
          items: [
            "Keycloak",
            "OIDC",
            "JWT/JWKS",
            "Passport.js",
            "RBAC",
            "Route Guards",
          ],
        },
        {
          category: "Database & Caching",
          items: ["PostgreSQL", "TypeORM", "Redis", "Cache Manager"],
        },
        {
          category: "Frontend",
          items: [
            "React",
            "Redux Toolkit",
            "React Query",
            "TanStack Router",
            "TailwindCSS",
          ],
        },
        {
          category: "DevOps & Infrastructure",
          items: [
            "Docker",
            "Docker Compose",
            "GitHub Actions",
            "GHCR",
            "Semantic Versioning",
          ],
        },
        {
          category: "Observability & Quality",
          items: [
            "Pino (Structured Logging)",
            "Audit Logging",
            "SonarQube",
            "Request Tracing",
            "AsyncLocalStorage Context",
          ],
        },
      ],
      timeline: "8 months",
      teamSize: "Solo + open-source contributors",
      role: "Senior Full-Stack Engineer & Architect",
      bullets: [
        "Architected and implemented a microservices-based ticketing platform using NestJS with API Gateway pattern, enabling scalable and maintainable service architecture.",
        "Built an Nx monorepo with shared libraries (@slamint/core, @slamint/auth), reducing code duplication by 60% and improving development velocity by 40%.",
        "Created a reusable authentication library with Keycloak OIDC integration, providing JWT validation, role-based access control, and decorator-based route protection across all services.",
        "Implemented standardized API patterns with response interceptors, exception filters, and audit logging, ensuring consistent behavior and comprehensive compliance tracking.",
        "Containerized all services with Docker and orchestrated using Docker Compose, enabling seamless local development and production deployments with PostgreSQL, Redis, and Keycloak.",
        "Set up automated CI/CD pipelines with GitHub Actions for Docker image building and publishing, with semantic versioning and automated tagging to GHCR.",
        "Integrated SonarQube for continuous code quality monitoring, maintaining A ratings for security and maintainability across the entire codebase.",
        "Built a modern React frontend with Redux Toolkit and React Query, providing an intuitive interface for ticket management, SLA monitoring, and performance analytics.",
      ],
      tags: [
        "NestJS",
        "Microservices",
        "Nx",
        "Docker",
        "Keycloak",
        "PostgreSQL",
        "Redis",
        "React",
        "TypeScript",
        "SonarQube",
        "GitHub Actions",
        "Monorepo",
      ],
      link: "#",
      status: "in-progress",
    },
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
          items: ["NestJs", "Express.js", "Zod"],
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
        "NestJs",
        "Express",
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
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-eyebrow">{study.eyebrow}</div>
                    {study.status === "in-progress" && (
                      <Badge
                        variant="secondary"
                        className="text-xs px-2 py-1 bg-accent-amber/10 text-accent-amber border-accent-amber/20"
                      >
                        In Progress
                      </Badge>
                    )}
                  </div>
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
                    className="p-0 h-auto font-medium text-accent hover:bg-accent/10 hover:text-accent dark:hover:bg-accent/20 dark:hover:text-accent gap-1"
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
                <div className="flex items-center justify-between mb-2">
                  <div className="text-eyebrow">{study.eyebrow}</div>
                  {study.status === "in-progress" && (
                    <Badge
                      variant="secondary"
                      className="text-xs px-2 py-1 bg-accent-amber/10 text-accent-amber border-accent-amber/20"
                    >
                      In Progress
                    </Badge>
                  )}
                </div>
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
                    className="p-0 h-auto font-medium text-accent hover:bg-accent/10 hover:text-accent dark:hover:bg-accent/20 dark:hover:text-accent gap-1"
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
