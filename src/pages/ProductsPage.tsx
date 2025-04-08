
import React from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import ProductsSection from "@/components/ProductsSection";

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-24">
        <ProductsSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default ProductsPage;
