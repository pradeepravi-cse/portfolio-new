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

  const handleDownloadResume = () => {
    // In a real app, this would download the actual resume PDF
    console.log("Downloading resume...");
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
          <Button asChild className="flex-1 gap-2 py-3">
            <a
              href={"/resume.pdf"}
              download={`pradeepkumar-lead-engineer.pdf`}
              aria-label="Download resume as PDF"
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
