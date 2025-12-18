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
      role: "Associate Solution Designer & Senior Software Engineer",
      company: "Mindgraph Solutions Sdn Bhd",
      period: "09/2021 - Present",
      location: "Kuala Lumpur, Malaysia",
      bullets: [
        "Designed and implemented scalable backend APIs using Node.js, Nest.js, and TypeScript, enabling secure, reliable, and maintainable service architecture across enterprise applications.",
        "Built and maintained frontend applications using React and TypeScript, focusing on clean component architecture, performance, and user experience.",
        "Designed and supported cloud-native service architectures using containerization and core AWS and Azure services, focusing on scalability, security, and operational reliability.",
        "Applied AWS networking, compute, and storage patterns to support backend service design and deployment workflows.",
        "Refactored legacy frontends into modular, reusable component libraries using React, React Query, Context API, and TailwindCSS — reducing UI defects by 25% and improving development velocity.",
        "Contributed to API contract design, data modeling, and service integration to ensure seamless backend-frontend communication.",
        "Improved performance through caching strategies, bundle optimization, database query tuning, and code-splitting techniques across the stack.",
        "Integrated Node.js services with PostgreSQL, MySQL, and MongoDB, implementing secure data flows, structured validation, and predictable behavior under load.",
        "Supported DevOps efforts, including Docker containerization, CI/CD pipelines, Azure DevOps, GitHub Actions, and environment-based deployment workflows.",
        "Integrated products with a robust logging mechanism using Elasticsearch, Beats, and Kibana.",
        "Integrated products with OpenTelemetry for active monitoring using Prometheus and Grafana.",
        "Led cross-functional technical discussions with product managers, designers, and backend engineers to deliver complete end-to-end features.",
        "Conducted code reviews, mentored engineers, and introduced testing and architectural best practices across teams.",
        "Experimented with modern frontend tooling and patterns to enhance UI performance and maintainability (React Query, modular service layers, utility-first CSS).",
        "Drove adoption of AI-driven engineering workflows, including automated PR reviews and test generation, reducing manual effort and improving team efficiency.",
      ],
    },
    {
      role: "Consultant - Technology",
      company: "Virtusa Consulting Services Pvt Ltd",
      period: "04/2020 - 07/2021",
      location: "Chennai, India",
      bullets: [
        "Developed backend services using Node.js and contributed to full-stack functionality in enterprise banking applications.",
        "Built responsive frontend modules using React and TypeScript, improving UI consistency and system performance across financial dashboards.",
        "Worked closely with backend teams to integrate REST APIs, refine data flows, and enhance application reliability.",
        "Participated in API specification design and implementation across full-stack components.",
        "Ensured code quality through testing with Jest, code reviews, and CI-based validation.",
        "Collaborated with design and product teams to deliver scalable features aligned with business and compliance requirements.",
      ],
    },
    {
      role: "Frontend & Web Design Roles",
      company: "Multiple Companies",
      period: "07/2016 - 04/2020",
      location: "Chennai, India",
      bullets: [
        "Built responsive web interfaces and reusable UI components using HTML, CSS, JavaScript, and early React patterns.",
        "Contributed to full-stack features with backend API integrations, laying the foundation for modern full-stack development.",
        "Improved performance and UX across multiple client websites in Telecom, Media, and Digital Services.",
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
            Building reliable, tested, and secure full-stack solutions across
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
