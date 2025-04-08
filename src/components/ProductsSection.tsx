
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShoppingBag, Shield, Code, Cpu, Globe, Server, Lock, Zap } from "lucide-react";

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      title: "Hackfest Advanced Toolkit",
      description: "Complete penetration testing toolkit with 50+ premium tools for security professionals.",
      price: "$299",
      icon: <Shield className="h-12 w-12 text-primary mb-4" />,
      features: ["50+ Premium Tools", "Professional UI", "Regular Updates", "Cloud Sync", "Premium Support"]
    },
    {
      id: 2,
      title: "Cybersecurity Masterclass",
      description: "Premium video course including 40+ hours of cybersecurity training materials.",
      price: "$199",
      icon: <Code className="h-12 w-12 text-secondary mb-4" />,
      features: ["40+ Hours Content", "Hands-on Labs", "Certification Prep", "Instructor Support", "Lifetime Access"]
    },
    {
      id: 3,
      title: "Enterprise Security Suite",
      description: "Complete enterprise-grade security solution with advanced threat detection.",
      price: "$499",
      icon: <Server className="h-12 w-12 text-accent mb-4" />,
      features: ["Threat Intelligence", "Compliance Reports", "API Access", "Multi-team Support", "Priority Support"]
    },
    {
      id: 4,
      title: "Network Analysis Pro",
      description: "Advanced network monitoring and analysis toolkit for security professionals.",
      price: "$249",
      icon: <Globe className="h-12 w-12 text-primary mb-4" />,
      features: ["Real-time Monitoring", "Packet Analysis", "Threat Detection", "Performance Metrics", "Cloud Integration"]
    },
    {
      id: 5,
      title: "Hackfest Security Book",
      description: "The definitive guide to modern cybersecurity practices and techniques.",
      price: "$59",
      icon: <Lock className="h-12 w-12 text-secondary mb-4" />,
      features: ["500+ Pages", "Digital + Physical", "Case Studies", "Expert Contributors", "Code Examples"]
    },
    {
      id: 6,
      title: "CTF Training Platform",
      description: "Complete platform for Capture The Flag training with 100+ challenges.",
      price: "$149",
      icon: <Zap className="h-12 w-12 text-accent mb-4" />,
      features: ["100+ Challenges", "Leaderboards", "Team Competitions", "Detailed Solutions", "Progressive Difficulty"]
    }
  ];

  return (
    <section id="products" className="py-24 relative overflow-hidden">
      <div className="absolute -top-96 -right-96 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-96 -left-96 w-[800px] h-[800px] rounded-full bg-secondary/5 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-medium text-primary mb-2 inline-block">
            Official Products
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4">
            Hackfest <span className="gradient-text">Products</span>
          </h2>
          <p className="text-foreground/80">
            Explore our range of premium cybersecurity products, tools, and educational resources designed to enhance your security skills and capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <Card key={product.id} className="bg-card hover:shadow-lg transition-shadow border-border hover:border-primary/50">
              <CardHeader className="pb-4">
                <div className="flex justify-center">
                  {product.icon}
                </div>
                <CardTitle className="text-xl font-bold font-orbitron text-center">
                  {product.title}
                </CardTitle>
                <CardDescription className="text-center text-foreground/70">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="text-3xl font-bold text-center text-primary mb-4">
                  {product.price}
                </div>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2 text-sm">
                      <svg className="h-5 w-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Purchase Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-foreground/70 mb-6">
            Need a custom solution for your organization? Contact our sales team for enterprise pricing and tailored packages.
          </p>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
