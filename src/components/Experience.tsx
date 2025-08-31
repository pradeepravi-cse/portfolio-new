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
      company: "Mindgraph Solutions Sdn. Bhd.",
      period: "Sep 2021 - Present",
      location: "Kuala Lumpur, Malaysia",
      bullets: [
        "Led the architecture of full-stack microservices, which improved system scalability by 50% and was a key factor in securing 5+ new client projects.",
        "Championed a shift-left approach to quality, driving TDD adoption to achieve 90%+ test coverage and cutting post-deployment bugs by 25%.",
        "Automated end-to-end deployment pipelines using Azure DevOps and Kubernetes, slashing deployment times by 30%.",
        "Engineered a secure authentication system with Keycloak and embedded SonarQube/Fortify scans into the CI/CD pipeline to ensure OWASP compliance.",
        "Mentored a team of 15+ engineers, fostering a culture of high-quality code and continuous improvement.",
      ],
    },
    {
      role: "Consultant - Technology",
      company: "Virtusa Consulting Service Pvt. Ltd.",
      period: "Apr 2020 - Jul 2021",
      location: "Chennai, India",
      bullets: [
        "Developed full-stack features using React for frontend components and Node.js for backend APIs.",
        "Conducted rigorous code reviews and collaborated with cross-functional teams to align system designs with business needs.",
      ],
    },
    {
      role: "Early Career: Web Development & Design",
      company: "Capsule8, BlueAlly Infotech, Easton Media",
      period: "Jul 2016 - Apr 2020",
      location: "Chennai, India",
      bullets: [
        "Built responsive websites and UI components while contributing to backend API integrations, establishing a strong full-stack foundation early in my career.",
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
