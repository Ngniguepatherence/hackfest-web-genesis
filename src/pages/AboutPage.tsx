
import React from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import AboutDetailSection from "@/components/AboutDetailSection";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-24">
        <AboutDetailSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default AboutPage;
