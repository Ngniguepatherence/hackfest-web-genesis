
import React from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import RegisterSection from "@/components/RegisterSection";

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-24">
        <RegisterSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default RegisterPage;
