
import React from "react";
import Navbar from "@/components/Navbar";
import SpeakersSection from "@/components/SpeakersSection";
import FooterSection from "@/components/FooterSection";

const SpeakersPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />
      <div className="pt-24">
        <SpeakersSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default SpeakersPage;
