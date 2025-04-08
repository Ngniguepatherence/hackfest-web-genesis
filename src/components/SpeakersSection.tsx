
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin, Globe, ArrowRight } from "lucide-react";

// Create placeholder speaker data 
const speakers = [
  {
    name: "Dr. Jane Smith",
    role: "Chief Security Officer",
    company: "CyberDefend Corp",
    bio: "Expert in network security with over 15 years of experience protecting Fortune 500 companies.",
    topic: "Advanced Threat Detection",
    image: "/placeholder.svg",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Alex Rodriguez",
    role: "Security Researcher",
    company: "NexusSec",
    bio: "Specializes in finding zero-day vulnerabilities and developing proof-of-concept exploits.",
    topic: "Zero-Day Hunting",
    image: "/placeholder.svg",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Sarah Lee",
    role: "Penetration Tester",
    company: "EthicalHack Inc",
    bio: "Red team leader with expertise in social engineering and physical security assessments.",
    topic: "Social Engineering Tactics",
    image: "/placeholder.svg",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Michael Chen",
    role: "Cryptography Expert",
    company: "SecureBlock",
    bio: "Researcher focused on post-quantum cryptography and blockchain security.",
    topic: "Future of Encryption",
    image: "/placeholder.svg",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Olivia Johnson",
    role: "CISO",
    company: "TechGiant",
    bio: "Leads security strategy for a Fortune 100 tech company with global operations.",
    topic: "Enterprise Security",
    image: "/placeholder.svg",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "David Kumar",
    role: "Security Engineer",
    company: "DefenseAI",
    bio: "Pioneeringji.j ML-based security solutions for automated vulnerability detection.",
    topic: "AI in Cybersecurity",
    image: "/placeholder.svg",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
];

const SpeakersSection = () => {
  const [activeTab, setActiveTab] = useState("speakers");

  return (
    <section id="speakers" className="py-24 bg-gradient-to-b from-background to-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-medium text-primary mb-2 inline-block">
            Meet Our Experts
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4">
            Industry-Leading <span className="gradient-text">Speakers</span>
          </h2>
          <p className="text-foreground/80">
            Learn from the best minds in cybersecurity as they share insights, 
            experiences, and cutting-edge research that's shaping the future of the field.
          </p>
        </div>

        {/* Tab navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-muted/30 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab("speakers")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === "speakers"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              Speakers
            </button>
            <button
              onClick={() => setActiveTab("panelists")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === "panelists"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              Panelists
            </button>
            <button
              onClick={() => setActiveTab("workshop")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === "workshop"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              Workshop Leaders
            </button>
          </div>
        </div>

        {/* Speakers grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg overflow-hidden group hover:border-primary/50 transition-all duration-300"
            >
              <div className="h-64 bg-muted relative overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                  {speaker.social.twitter && (
                    <a
                      href={speaker.social.twitter}
                      className="bg-card/80 backdrop-blur-sm p-2 rounded-full hover:bg-primary/80 transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  )}
                  {speaker.social.linkedin && (
                    <a
                      href={speaker.social.linkedin}
                      className="bg-card/80 backdrop-blur-sm p-2 rounded-full hover:bg-primary/80 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  {speaker.social.github && (
                    <a
                      href={speaker.social.github}
                      className="bg-card/80 backdrop-blur-sm p-2 rounded-full hover:bg-primary/80 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full mb-3 inline-block">
                  {speaker.topic}
                </span>
                <h3 className="text-xl font-bold font-orbitron mb-1">{speaker.name}</h3>
                <p className="text-sm text-foreground/70 mb-3">
                  {speaker.role} at {speaker.company}
                </p>
                <p className="text-sm text-foreground/80">{speaker.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
            View All Speakers <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Call for speakers */}
        <div className="mt-24 max-w-3xl mx-auto bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8">
          <h3 className="text-2xl font-bold font-orbitron mb-4 text-center">
            Become a <span className="text-primary">Speaker</span>
          </h3>
          <p className="text-center text-foreground/80 mb-6">
            Share your expertise and insights with our community of cybersecurity professionals and enthusiasts.
            We're looking for speakers on a wide range of topics.
          </p>
          <div className="flex justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Submit Your Proposal
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
