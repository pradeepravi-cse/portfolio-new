import React from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ChevronRight } from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  companies?: string[];
}

export function Experience() {
  const experiences: ExperienceItem[] = [
    {
      role: "Associate Solution Designer",
      company: "Mindgraph",
      period: "Jul 2024 - Present",
      location: "Kuala Lumpur",
      bullets: [
        "Led React/Next.js architecture decisions with RTK + React Query",
        "Achieved 90%+ test coverage using TDD methodology",
        "Implemented OWASP/SonarQube/Fortify governance reducing defects by ~25%",
        "Optimized CI/CD pipeline via Azure DevOps + Helm (~30% faster deployments)",
        "Mentored 15+ engineers on frontend best practices and testing strategies",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "Mindgraph",
      period: "Sep 2021 - Jul 2024",
      location: "Kuala Lumpur",
      bullets: [
        "Built micro-frontend architecture with shared component libraries",
        "Refactored data layer with React Query for normalized caching and retries",
        "Implemented secure authentication with Keycloak (OIDC/PKCE flows)",
        "Established quality dashboards and weekly code review processes",
      ],
    },
    {
      role: "UI Engineer / Earlier Roles",
      company: "Various Companies",
      period: "2016 - 2021",
      location: "Chennai → KL",
      bullets: [
        "Developed product UIs and design systems across multiple projects",
        "Collaborated with QA and Security teams on testing and compliance",
        "Focused on performance optimization and accessibility improvements",
      ],
      companies: [
        "Consultant - Technology • Virtuas Service Pvt. Ltd. • Apr 2020 - Jul 2021",
        "Web Developer • Capsule8 (India) Pvt. Ltd. • Aug 2019 - Apr 2020",
        "UIUX Designer • BlueAlly Infotech (India) Pvt. Ltd. •  May 2018 - Jul 2019",
        "Jr. Web Designer • BlueAlly Infotech (India) Pvt. Ltd. • Nov 2017 - May 2018",
        "Web Designer • Easton Media Pvt. Ltd. • Jul 2016 - Nov 2017",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
            Building reliable, tested, and secure frontend solutions across
            diverse teams and projects.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline container */}
          <div className="relative">
            {/* Central timeline line */}

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot and connector */}
                  <div className="relative flex-shrink-0">
                    {/* Connecting line to card */}
                    <div className="absolute top-4 sm:top-6 left-8 sm:left-12 w-8 sm:w-12 h-0.5 bg-gradient-to-r from-accent-amber/50 to-transparent"></div>
                  </div>

                  {/* Content card */}
                  <div className="flex-1">
                    <Card className="border border-border shadow-md hover:shadow-lg transition-shadow duration-300 relative">
                      {/* Timeline period badge */}
                      <div className="absolute -top-3 left-6">
                        <Badge
                          variant="primary"
                          className="text-xs font-medium px-3 py-1 bg-surface border border-border shadow-sm"
                        >
                          {experience.period}
                        </Badge>
                      </div>

                      <CardContent className="p-6 pt-8">
                        <div className="space-y-5">
                          {/* Header */}
                          <div className="space-y-3">
                            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                              {experience.role}
                            </h3>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                              <span className="font-semibold text-accent text-lg">
                                {experience.company}
                              </span>
                              <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full"></div>
                              <span className="text-muted-foreground">
                                {experience.location}
                              </span>
                            </div>
                          </div>

                          {/* Bullets */}
                          <ul className="space-y-4">
                            {experience.bullets.map((bullet, bulletIndex) => (
                              <li
                                key={bulletIndex}
                                className="flex items-start gap-3"
                              >
                                <div className="w-2 h-2 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                                <span className="text-foreground-secondary leading-relaxed">
                                  {bullet}
                                </span>
                              </li>
                            ))}
                          </ul>
                          {experience.companies && (
                            <div className="flex flex-wrap gap-2">
                              {experience.companies.map((skill, index) => (
                                <Badge
                                  key={index}
                                  variant="secondary"
                                  className="text-xs px-3 py-1 flex flex-wrap break-word whitespace-normal"
                                >
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
