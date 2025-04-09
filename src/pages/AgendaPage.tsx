
import React from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import AgendaSection from "@/components/AgendaSection";

const AgendaPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />
      <div className="pt-24">
        <AgendaSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default AgendaPage;
