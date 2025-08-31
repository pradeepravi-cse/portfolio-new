import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Linkedin, Download, Calendar } from "lucide-react";

export function Contact() {
  const handleEmailClick = () => {
    window.location.href = "mailto:pradeepravi.cse@gmail.com";
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/pradeepkumarcse/", "_blank");
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
            Ready to discuss your next frontend project or explore collaboration
            opportunities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border border-border shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-foreground text-center">
                Get in Touch
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Email */}
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Email
                    </h3>
                    <Button
                      variant="ghost"
                      onClick={handleEmailClick}
                      className="text-foreground-secondary hover:text-accent p-0 h-auto font-normal"
                    >
                      pradeepravi.cse@gmail.com
                    </Button>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <Linkedin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      LinkedIn
                    </h3>
                    <Button
                      variant="ghost"
                      onClick={handleLinkedInClick}
                      className="text-foreground-secondary hover:text-accent p-0 h-auto font-normal"
                    >
                      linkedin.com/in/pradeepkumarcse
                    </Button>
                  </div>
                </div>

                {/* Resume */}
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <Download className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Resume
                    </h3>
                    <Button
                      variant="ghost"
                      className="text-foreground-secondary hover:text-accent p-0 h-auto font-normal"
                    >
                      <a
                        href={"/resume.pdf"}
                        download={`pradeepkumar-lead-engineer.pdf`}
                        aria-label="Download resume as PDF"
                        className="flex gap-1"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Additional note */}
              <div className="mt-12 text-center">
                <div className="flex items-center justify-center gap-2 text-foreground-secondary">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">
                    Prefer email? Light calendar for quick intro calls.
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
