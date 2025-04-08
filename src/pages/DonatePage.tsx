
import React from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import DonateSection from "@/components/DonateSection";

const DonatePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-24">
        <DonateSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default DonatePage;
