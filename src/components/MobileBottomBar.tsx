import React from "react";
import { Button } from "./ui/button";
import { Mail, Download } from "lucide-react";

export function MobileBottomBar() {
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      <div className="bg-surface/90 backdrop-blur-md border-t border-border px-4 py-3">
        <div className="flex gap-3 max-w-sm mx-auto">
          <Button
            variant="outline"
            onClick={handleContactClick}
            className="flex-1 gap-2 py-3"
          >
            <Mail className="w-4 h-4" />
            Contact
          </Button>
          <Button
            asChild
            className="flex-1 gap-2 py-3 [&_a]:text-primary-foreground dark:[&_a]:text-primary-foreground [&_a_svg]:text-primary-foreground dark:[&_a_svg]:text-primary-foreground"
          >
            <a
              href={"/resume.pdf"}
              download={`pradeepkumar-senior-full-stack-engineer.pdf`}
              aria-label="Download resume as PDF"
              className="flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
