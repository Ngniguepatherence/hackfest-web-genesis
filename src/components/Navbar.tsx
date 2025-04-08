
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

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
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold font-orbitron gradient-text">
                HACKFEST
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              About
            </Link>
            <Link
              to="/products"
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Products
            </Link>
            <Link
              to="/speakers"
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Speakers
            </Link>
            <Link
              to="/schedule"
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Schedule
            </Link>
            <Link
              to="/workshops"
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Workshops
            </Link>
            <Link
              to="/donate"
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Donate
            </Link>
            <Link
              to="/sponsor"
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Become a Sponsor
            </Link>
            <Link to="/register">
              <Button
                variant="default"
                className="bg-primary hover:bg-primary/80 text-primary-foreground font-medium ml-2"
              >
                Register Now
              </Button>
            </Link>
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
              ? "max-h-[500px] opacity-100 py-4"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col gap-4 pt-2">
            <Link
              to="/"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/products"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/speakers"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Speakers
            </Link>
            <Link
              to="/schedule"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Schedule
            </Link>
            <Link
              to="/workshops"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Workshops
            </Link>
            <Link
              to="/donate"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Donate
            </Link>
            <Link
              to="/sponsor"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Become a Sponsor
            </Link>
            <Link
              to="/register"
              className="w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button
                variant="default"
                className="bg-primary hover:bg-primary/80 text-primary-foreground font-medium w-full mt-2"
              >
                Register Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
