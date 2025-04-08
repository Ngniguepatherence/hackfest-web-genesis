
import React from "react";
import { Github, Twitter, Linkedin, Instagram, Facebook } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-background pt-24 pb-8 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="absolute inset-0 bg-grid opacity-5 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <a href="#" className="inline-block mb-6">
              <span className="text-2xl font-bold font-orbitron gradient-text">
                HACKFEST
              </span>
            </a>
            <p className="text-foreground/70 mb-6">
              The premier cybersecurity and ethical hacking event, bringing together the brightest minds in the industry.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold font-orbitron mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">About Us</a>
              </li>
              <li>
                <a href="#speakers" className="text-foreground/70 hover:text-primary transition-colors">Speakers</a>
              </li>
              <li>
                <a href="#schedule" className="text-foreground/70 hover:text-primary transition-colors">Schedule</a>
              </li>
              <li>
                <a href="#register" className="text-foreground/70 hover:text-primary transition-colors">Registration</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">Sponsors</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">Code of Conduct</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold font-orbitron mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">Call for Papers</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">Become a Speaker</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">Become a Sponsor</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">Media Kit</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">Previous Events</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold font-orbitron mb-6">Contact Us</h3>
            <address className="not-italic text-foreground/70 space-y-3">
              <p>Tech Hub Convention Center</p>
              <p>123 Innovation Street</p>
              <p>Cyber City, CY 12345</p>
              <p className="pt-2"><a href="mailto:info@hackfest.com" className="hover:text-primary transition-colors">info@hackfest.com</a></p>
              <p><a href="tel:+11234567890" className="hover:text-primary transition-colors">+1 (123) 456-7890</a></p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-foreground/60">
            &copy; {new Date().getFullYear()} HACKFEST. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="text-xs text-foreground/60 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-foreground/60 hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-foreground/60 hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
