import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export function Skills() {
  const backendSkills = [
    "Node.js",
    "Nest.js",
    "Express.js",
    "REST APIs",
    "API Design",
    "Microservices Architecture",
    "API Gateway Pattern",
    "NestJS Microservices",
    "TypeORM",
    "Zod validation",
    "Authentication/Authorization flows",
    "Pino (Structured Logging)",
    "Distributed Tracing",
    "Multi-tenancy/Workspace Isolation",
  ];

  const databaseSkills = ["PostgreSQL", "MySQL", "MongoDB", "Redis"];

  const identitySecuritySkills = [
    "Keycloak",
    "OAuth2/OIDC",
    "JWT/JWKS",
    "PKCE",
    "RBAC",
    "CSP",
    "Audit Logging",
    "OWASP Secure Coding",
  ];

  const frontendSkills = [
    "React",
    "Next.js",
    "Redux Toolkit",
    "React Query",
    "TanStack Router",
    "TypeScript",
    "Storybook",
    "Vite",
    "Webpack",
    "TailwindCSS",
    "CSS/SCSS",
    "A11y",
    "i18n",
    "UI Architecture",
    "Scalable Component Systems (Atomic Design)",
  ];

  const cloudDevOpsSkills = [
    "AWS: EC2, S3, IAM, VPC, RDS, CloudFront",
    "Azure: Azure DevOps, AKS, ACR",
    "Docker",
    "Docker Compose",
    "Kubernetes",
    "NGINX Ingress",
    "CI/CD: Azure DevOps, GitHub Actions",
    "Observability: Elasticsearch, Fluentd, Kibana, Prometheus, Grafana",
    "Monorepo: Nx, pnpm Workspace",
    "Code Quality: SonarQube",
    "GitOps",
  ];

  const testingSkills = [
    "Jest",
    "React Testing Library",
    "MSW",
    "TDD",
    "Shift-left Testing",
    "Code Reviews",
    "Secure Engineering Practices",
  ];

  return (
    <section id="skills" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
            Senior Full Stack Engineer with 9+ years building scalable backend
            services and high-performance frontend applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Backend & API Development */}
          <Card className="border border-border shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-foreground">
                Backend & API Development
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-xs px-3 py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Databases */}
          <Card className="border border-border shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-foreground">
                Databases
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {databaseSkills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-xs px-3 py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Identity & Security */}
          <Card className="border border-border shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-foreground">
                Identity & Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {identitySecuritySkills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-xs px-3 py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Frontend Technologies */}
          <Card className="border border-border shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-foreground">
                Frontend Technologies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-xs px-3 py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Cloud & DevOps */}
          <Card className="border border-border shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-foreground">
                Cloud & DevOps
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {cloudDevOpsSkills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-xs px-3 py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Testing */}
          <Card className="border border-border shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-foreground">
                Testing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {testingSkills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-xs px-3 py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
