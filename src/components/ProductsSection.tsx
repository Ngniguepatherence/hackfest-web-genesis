
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Code, Flag, Hexagon, BookOpen, GraduationCap, Lock, Package } from "lucide-react";

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      title: "CTF Training Platform",
      description: "A comprehensive online platform with various cybersecurity challenges and CTF-style exercises to prepare for the main event.",
      category: "Training",
      price: "25000 XAF",
      features: [
        "100+ security challenges",
        "Different difficulty levels",
        "Real-world scenarios",
        "Score tracking and leaderboard",
        "Solution explanations"
      ],
      icon: <Flag />
    },
    {
      id: 2,
      title: "Cyber Defense Toolkit",
      description: "Essential tools and resources for defensive security operations, packaged for both beginners and professionals.",
      category: "Security Tools",
      price: "35000 XAF",
      features: [
        "Network monitoring tools",
        "Vulnerability scanners",
        "Incident response guides",
        "Security configuration templates",
        "1-month technical support"
      ],
      icon: <Shield />
    },
    {
      id: 3,
      title: "Ethical Hacking Course",
      description: "A structured learning path to master ethical hacking skills with practical exercises and expert guidance.",
      category: "Education",
      price: "45000 XAF",
      features: [
        "40+ hours of video content",
        "Hands-on practical labs",
        "Certification preparation",
        "1-on-1 mentoring session",
        "Career guidance"
      ],
      icon: <Code />
    },
    {
      id: 4,
      title: "HackTheBox Vouchers",
      description: "Premium account vouchers for HackTheBox platform with exclusive access to advanced cybersecurity challenges.",
      category: "Access Pass",
      price: "30000 XAF",
      features: [
        "3-month premium access",
        "Advanced machines and challenges",
        "Retired machines access",
        "Dedicated support",
        "Certification preparation tracks"
      ],
      icon: <Hexagon />
    },
    {
      id: 5,
      title: "Cybersecurity Fundamentals Book",
      description: "Comprehensive guide covering essential cybersecurity concepts, written by Cameroon's leading security experts.",
      category: "Publication",
      price: "15000 XAF",
      features: [
        "Digital and print versions",
        "Cameroon-specific case studies",
        "Practical exercises",
        "Industry insights",
        "Regular digital updates"
      ],
      icon: <BookOpen />
    },
    {
      id: 6,
      title: "Security Certification Bootcamp",
      description: "Intensive training program designed to help you earn recognized cybersecurity certifications.",
      category: "Education",
      price: "75000 XAF",
      features: [
        "CompTIA Security+ preparation",
        "CEH exam materials",
        "Practice tests",
        "Study group access",
        "Certification exam voucher"
      ],
      icon: <GraduationCap />
    },
    {
      id: 7,
      title: "Enterprise Security Assessment",
      description: "Professional security assessment service for businesses, conducted by certified security professionals.",
      category: "Service",
      price: "Custom",
      features: [
        "Vulnerability scanning",
        "Penetration testing",
        "Security policy review",
        "Detailed reporting",
        "Remediation guidance"
      ],
      icon: <Lock />
    },
    {
      id: 8,
      title: "Event Merchandise Bundle",
      description: "Official 237HackFest merchandise bundle including t-shirts, stickers, notebook, and more branded items.",
      category: "Merchandise",
      price: "20000 XAF",
      features: [
        "Custom designed t-shirt",
        "Sticker pack",
        "Notebook and pen",
        "USB drive with resources",
        "Event certificate"
      ],
      icon: <Package />
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute -top-96 -right-96 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-96 -left-96 w-[800px] h-[800px] rounded-full bg-secondary/5 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-medium text-primary mb-2 inline-block">
            Our Offerings
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4">
            <span className="gradient-text">237HackFest</span> Products
          </h2>
          <p className="text-foreground/80">
            Explore our range of cybersecurity products, resources, and services designed to enhance your skills and secure your digital environment.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
            All Products
          </Button>
          <Button variant="ghost">Training</Button>
          <Button variant="ghost">Education</Button>
          <Button variant="ghost">Security Tools</Button>
          <Button variant="ghost">Services</Button>
          <Button variant="ghost">Merchandise</Button>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="bg-card border-border overflow-hidden hover:shadow-lg hover:shadow-primary/5 transition-all">
              <div className="h-2 bg-gradient-to-r from-primary to-secondary"></div>
              <CardHeader className="pb-2">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  {product.icon}
                </div>
                <Badge variant="outline" className="mb-2 font-normal">
                  {product.category}
                </Badge>
                <h3 className="text-xl font-bold font-orbitron">{product.title}</h3>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="text-sm text-foreground/70 mb-4">
                  {product.description}
                </p>
                
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm gap-2">
                      <div className="h-4 w-4 text-primary mt-0.5 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex justify-between items-center border-t border-border pt-4">
                <div>
                  <span className="text-lg font-bold">{product.price}</span>
                </div>
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Purchase
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* Custom Solutions */}
        <div className="mt-24 max-w-4xl mx-auto bg-card rounded-xl border border-border p-8 backdrop-blur-sm">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold font-orbitron mb-2">Need Custom Solutions?</h3>
            <p className="text-foreground/80">
              We offer tailored cybersecurity solutions for your specific needs.
              Contact our team to discuss your requirements.
            </p>
          </div>
          
          <div className="flex justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
