
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SpeakersSection from "@/components/SpeakersSection";
import ScheduleSection from "@/components/ScheduleSection";
import RegisterSection from "@/components/RegisterSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SpeakersSection />
        <ScheduleSection />
        <RegisterSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
