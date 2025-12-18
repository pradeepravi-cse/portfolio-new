import React, { useState, useEffect } from "react";
import { Menu, X, Download, Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "./ThemeProvider";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleDownloadResume = () => {
    // In a real app, this would download the actual resume PDF
    console.log("Downloading resume...");
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center">
                <span className="text-sm font-bold text-white">
                  <svg
                    width="calc(var(--spacing) * 8"
                    height="calc(var(--spacing) * 8"
                    viewBox="0 0 73 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 0V59.8851H11.3793V11.8391H26.5517L16.7816 20.1149V35.6322L54.8276 0H0Z"
                      fill="url(#paint0_linear_2600_6)"
                    />
                    <path
                      d="M18.8506 36.8966V51.6093L72.7586 0.804688H57.4713L18.8506 36.8966Z"
                      fill="url(#paint1_linear_2600_6)"
                    />
                    <path
                      d="M40.8045 34.4827L32.1838 42.6436L51.4941 59.9999H66.6666L40.8045 34.4827Z"
                      fill="url(#paint2_linear_2600_6)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_2600_6"
                        x1="3.80777e-07"
                        y1="3.99235"
                        x2="61.2944"
                        y2="33.9748"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#F59E0B" />
                        <stop offset="1" stop-color="#F43F5E" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_2600_6"
                        x1="18.8506"
                        y1="4.19167"
                        x2="75.3717"
                        y2="36.2342"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#F59E0B" />
                        <stop offset="1" stop-color="#F43F5E" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_2600_6"
                        x1="32.1838"
                        y1="36.1838"
                        x2="63.5876"
                        y2="58.8572"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#F59E0B" />
                        <stop offset="1" stop-color="#F43F5E" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </div>
              <span className="font-semibold text-foreground">
                Pradeepkumar
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("case-study")}
                className="text-sm font-medium text-foreground-secondary hover:text-foreground transition-colors"
              >
                Case Studies
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-sm font-medium text-foreground-secondary hover:text-foreground transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-sm font-medium text-foreground-secondary hover:text-foreground transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium text-foreground-secondary hover:text-foreground transition-colors"
              >
                Contact
              </button>
              <Button
                onClick={toggleTheme}
                variant="ghost"
                size="sm"
                className="p-2"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="gap-2"
                href="/resume.pdf"
                asChild
              >
                <a
                  href={"/resume.pdf"}
                  download={`pradeepkumar-senior-full-stack-engineer.pdf`}
                  aria-label="Download resume as PDF"
                >
                  <Download className="w-4 h-4" />
                  Resume
                </a>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed top-16 left-0 right-0 bg-surface border-b border-border shadow-lg">
            <nav className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection("case-study")}
                className="block w-full text-left py-2 text-base font-medium text-foreground"
              >
                Case Studies
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="block w-full text-left py-2 text-base font-medium text-foreground"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="block w-full text-left py-2 text-base font-medium text-foreground"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left py-2 text-base font-medium text-foreground"
              >
                Contact
              </button>
              <div className="pt-4 space-y-3">
                <Button
                  onClick={toggleTheme}
                  variant="outline"
                  className="w-full gap-2"
                >
                  {theme === "dark" ? (
                    <>
                      <Sun className="w-4 h-4" />
                      Light Mode
                    </>
                  ) : (
                    <>
                      <Moon className="w-4 h-4" />
                      Dark Mode
                    </>
                  )}
                </Button>
                <Button asChild className="w-full gap-2">
                  <a
                    href={"/resume.pdf"}
                    download={`pradeepkumar-senior-full-stack-engineer.pdf`}
                    aria-label="Download resume as PDF"
                  >
                    <Download className="w-4 h-4" />
                    Resume
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
