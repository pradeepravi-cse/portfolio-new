import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export function Skills() {
  const coreSkills = [
    "React",
    "Next.js",
    "TypeScript",
    "Redux Toolkit",
    "React Query",
    "Jest",
    "RTL",
    "i18n",
    "A11y",
    "Design Systems",
    "Storybook",
    "Node.js",
    "MongoDB",
    "Vite",
    "Webpack",
    "MSW",
  ];

  const platformSkills = [
    "Azure DevOps",
    "Github",
    "GitLab",
    "Docker",
    "Kubernetes",
    "Helm",
    "Azure Active Directory",
    "Keycloak (OIDC/PKCE)",
    "OWASP",
    "SonarQube",
    "Fortify",
  ];

  return (
    <section id="skills" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
            Focused on frontend excellence with pragmatic DevOps and strong
            security governance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Core Frontend Card */}
          <Card className="border border-border shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground">
                Core Frontend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {coreSkills.map((skill, index) => (
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

          {/* Platform & Governance Card */}
          <Card className="border border-border shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground">
                Platform & Governance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {platformSkills.map((skill, index) => (
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
