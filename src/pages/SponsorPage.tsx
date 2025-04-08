
import React from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import SponsorSection from "@/components/SponsorSection";

const SponsorPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-24">
        <SponsorSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default SponsorPage;
