import React from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border py-8 pb-20 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-foreground-secondary text-center mx-auto">
            © {currentYear} Pradeepkumar. Built with AI and Smartness
          </div>
        </div>
      </div>
    </footer>
  );
}
