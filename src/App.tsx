import React from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { CaseStudies } from './components/CaseStudies';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <Header />
        
        {/* Main Content */}
        <main className="relative">
          {/* Hero Section */}
          <Hero />
          
          {/* Skills Section */}
          <Skills />
          
          {/* Case Studies Section */}
          <CaseStudies />
          
          {/* Experience Section */}
          <Experience />
          
          {/* Contact Section */}
          <Contact />
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* Mobile Bottom Bar - only visible on mobile */}
        <MobileBottomBar />
      </div>
    </ThemeProvider>
  );
}