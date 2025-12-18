import React from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const skills = [
    "Node.js/Nest.js/TypeScript",
    "React/Next.js/Redux",
    "PostgreSQL/MySQL/MongoDB",
    "AWS/Azure/Cloud-Native",
    "Docker/Kubernetes/CI/CD",
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-16 pb-8 sm:pb-16">
      {/* Enhanced background with better mobile separation */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-accent-rose/5 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-surface/50 via-transparent to-transparent pointer-events-none" />

      {/* Mobile-specific top border for visual separation */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-amber to-accent-rose sm:hidden" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Eyebrow with better mobile styling */}
            <div className="inline-flex items-center justify-center lg:justify-start">
              <div className="text-eyebrow bg-surface-secondary/80 backdrop-blur px-4 py-2 rounded-full border border-border/50">
                Senior Full-Stack Engineer • Node.js • TypeScript • React
              </div>
            </div>

            {/* Headline with better mobile hierarchy */}
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-foreground leading-[1.1] sm:leading-tight">
                I architect &amp; build{" "}
                <span className="gradient-text">fast, reliable</span> end-to-end
                solutions with strong tests and safer releases.
              </h1>

              {/* Supporting copy with mobile-optimized spacing */}
              <p className="text-base sm:text-lg md:text-xl text-foreground-secondary max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Senior Full Stack Engineer with 9+ years of experience building scalable backend services and high-performance frontend applications using TypeScript, Node.js, and React. Strong background in designing secure APIs, containerized workloads, and cloud-native architectures across Azure and AWS environments.
                <br className="hidden sm:inline" />
                <span className="block sm:inline mt-2 sm:mt-0">
                  Based in Kuala Lumpur, Malaysia.
                </span>
              </p>
            </div>

            {/* Enhanced CTAs with better mobile design */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => scrollToSection("case-study")}
                className="text-base px-8 py-6 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full sm:w-auto"
              >
                View Case Studies
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="text-base px-8 py-6 w-full sm:w-auto border-2"
              >
                Get in touch
              </Button>
            </div>

            {/* Skills chips with improved mobile layout */}
            <div className="pt-4">
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-xs px-3 py-2 bg-surface border border-border/50 hover:bg-surface-secondary transition-colors duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced visual element with better mobile integration */}
          <div className="flex justify-center lg:justify-end order-first lg:order-last mb-8 lg:mb-0">
            <div className="relative">
              {/* Main avatar tile with enhanced mobile sizing */}
              <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 overflow-hidden rounded-2xl sm:rounded-3xl gradient-bg flex items-center justify-center shadow-2xl border-4 border-surface/20">
                <img src="/pradeep.png" alt="Pradeepkumar R - Senior Full-Stack Engineer" />
              </div>

              {/* Enhanced glow effects */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl gradient-bg blur-2xl opacity-30 -z-10 scale-110 animate-pulse" />
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-accent-amber/20 to-accent-rose/20 blur-3xl -z-20 scale-125" />

              {/* Mobile-specific accent elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent-rose rounded-full animate-pulse sm:hidden" />
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-accent-amber rounded-full animate-pulse sm:hidden" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section separator with gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-surface to-transparent pointer-events-none" />
    </section>
  );
}
