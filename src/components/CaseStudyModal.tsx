import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogPortal,
  DialogOverlay,
} from "./ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import {
  X,
  ExternalLink,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Shield,
  Zap,
} from "lucide-react";
import { cn } from "./ui/utils";

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

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  caseStudy: DetailedCaseStudy | null;
}

export function CaseStudyModal({
  isOpen,
  onClose,
  caseStudy,
}: CaseStudyModalProps) {
  if (!caseStudy) return null;

  const getIconForCategory = (category: string) => {
    switch (category.toLowerCase()) {
      case "performance":
        return <Zap className="w-5 h-5 text-accent-amber" />;
      case "security":
        return <Shield className="w-5 h-5 text-accent-rose" />;
      case "quality":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      default:
        return <TrendingUp className="w-5 h-5 text-accent" />;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogPortal>
        <DialogOverlay />
        <DialogPrimitive.Content
          className={cn(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 w-[90%] h-dvh max-w-none max-h-none m-0 p-0 gap-0 rounded-none border-0 flex flex-col duration-200"
          )}
        >
          {/* Header */}
          <DialogHeader className="p-4 sm:p-6 pb-4 border-b border-border flex-shrink-0">
            <div className="flex items-start justify-between">
              <div className="space-y-3 flex-1">
                <div className="text-eyebrow">{caseStudy.eyebrow}</div>
                <DialogTitle className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground leading-tight pr-8">
                  {caseStudy.title}
                </DialogTitle>
                <p className="text-foreground-secondary max-w-3xl text-sm sm:text-base">
                  {caseStudy.description}
                </p>

                {/* Meta info */}
                <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-muted-foreground">
                  <span>
                    <strong>Timeline:</strong> {caseStudy.timeline}
                  </span>
                  <span>
                    <strong>Team:</strong> {caseStudy.teamSize}
                  </span>
                  <span>
                    <strong>Role:</strong> {caseStudy.role}
                  </span>
                </div>
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="flex-shrink-0"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </DialogHeader>

          {/* Content - Scrollable */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-4 sm:p-6 space-y-6 sm:space-y-8">
              {/* Problem & Solution */}
              <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                {/* Problem */}
                <Card className="border border-border">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                      {getIconForCategory("problem")}
                      The Challenge
                    </h3>
                    <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed">
                      {caseStudy.problem}
                    </p>
                  </CardContent>
                </Card>

                {/* Solution Overview */}
                <Card className="border border-border">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      My Approach
                    </h3>
                    <ul className="space-y-2 sm:space-y-3">
                      {caseStudy.solution.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                          <span className="text-sm sm:text-base text-foreground-secondary">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Key Results */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-6 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  Key Results
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                  {caseStudy.results.map((result, index) => (
                    <Card key={index} className="border border-border">
                      <CardContent className="p-4 sm:p-6 text-center">
                        <div className="text-xl sm:text-2xl lg:text-3xl font-black gradient-text mb-2">
                          {result.value}
                        </div>
                        <div className="text-sm sm:text-base font-semibold text-foreground mb-2">
                          {result.metric}
                        </div>
                        <div className="text-xs sm:text-sm text-foreground-secondary">
                          {result.description}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-6">
                  Technologies & Tools
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  {caseStudy.technologies.map((techGroup, index) => (
                    <div key={index}>
                      <h4 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2 sm:mb-3">
                        {techGroup.category}
                      </h4>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {techGroup.items.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="text-xs px-2 sm:px-3 py-1"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Implementation Details */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-6">
                  Implementation Highlights
                </h3>
                <div className="grid gap-3 sm:gap-4">
                  {caseStudy.bullets.map((bullet, index) => (
                    <Card key={index} className="border border-border">
                      <CardContent className="p-3 sm:p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-accent-amber to-accent-rose rounded-full mt-2.5 flex-shrink-0"></div>
                          <span className="text-sm sm:text-base text-foreground-secondary">
                            {bullet}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Challenges Overcome */}
              {caseStudy.challenges.length > 0 && (
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-6">
                    Challenges Overcome
                  </h3>
                  <div className="space-y-3 sm:space-y-4">
                    {caseStudy.challenges.map((challenge, index) => (
                      <Card key={index} className="border border-border">
                        <CardContent className="p-3 sm:p-4">
                          <div className="flex items-start gap-3">
                            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-accent-rose mt-1 sm:mt-0.5 flex-shrink-0" />
                            <span className="text-sm sm:text-base text-foreground-secondary">
                              {challenge}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 sm:p-6 pt-4 border-t border-border bg-surface/50 flex-shrink-0">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              <div className="flex flex-wrap gap-2">
                {caseStudy.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={onClose}
                  className="text-xs sm:text-sm"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Back to Case Studies</span>
                  <span className="sm:hidden">Back</span>
                </Button>
                {caseStudy.link !== "#" && (
                  <Button className="text-xs sm:text-sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <span className="hidden sm:inline">View Live Project</span>
                    <span className="sm:hidden">View Live</span>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}
