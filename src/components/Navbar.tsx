
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Track scroll position to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-2xl font-bold font-orbitron gradient-text">
                HACKFEST
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#speakers"
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Speakers
            </a>
            <a
              href="#schedule"
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Schedule
            </a>
            <a
              href="#workshops"
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Workshops
            </a>
            <Button
              variant="default"
              className="bg-primary hover:bg-primary/80 text-primary-foreground font-medium"
            >
              Register Now
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-foreground focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? "max-h-[300px] opacity-100 py-4"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col gap-4 pt-2">
            <a
              href="#about"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#speakers"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Speakers
            </a>
            <a
              href="#schedule"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Schedule
            </a>
            <a
              href="#workshops"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Workshops
            </a>
            <Button
              variant="default"
              className="bg-primary hover:bg-primary/80 text-primary-foreground font-medium w-full mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
