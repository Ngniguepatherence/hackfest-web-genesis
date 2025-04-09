
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin, Globe, ArrowRight, Shield, Flag, Code, Terminal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// Updated speaker data with cybersecurity and CTF focus
const speakers = [
  {
    name: "Dr. Jane Smith",
    role: "Chief Security Officer",
    company: "CyberDefend Corp",
    bio: "Expert in network security with over 15 years of experience protecting Fortune 500 companies.",
    topic: "Advanced Threat Detection",
    image: "/images/speaker1.jpg",
    icon: <Shield className="h-5 w-5 text-primary" />,
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Alex Rodriguez",
    role: "CTF Champion",
    company: "NexusSec",
    bio: "3-time global CTF winner specializing in finding zero-day vulnerabilities and developing proof-of-concept exploits.",
    topic: "Zero-Day Hunting",
    image: "/images/speaker2.jpg",
    icon: <Flag className="h-5 w-5 text-primary" />,
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
    bio: "Red team leader with expertise in social engineering and physical security assessments for CTF competitions.",
    topic: "Social Engineering Tactics",
    image: "/images/speaker3.jpg",
    icon: <Terminal className="h-5 w-5 text-primary" />,
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
    bio: "Researcher focused on post-quantum cryptography and blockchain security challenges.",
    topic: "CTF Cryptography Challenges",
    image: "/images/speaker4.jpg",
    icon: <Code className="h-5 w-5 text-primary" />,
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
    bio: "Leads security strategy for a Fortune 100 tech company with global operations and organizes internal CTF events.",
    topic: "Enterprise Security CTFs",
    image: "/images/speaker5.jpg",
    icon: <Shield className="h-5 w-5 text-primary" />,
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
    bio: "Pioneering ML-based security solutions for automated vulnerability detection in CTF competitions.",
    topic: "AI in Cybersecurity",
    image: "/images/speaker6.jpg",
    icon: <Code className="h-5 w-5 text-primary" />,
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
];

// Workshop leaders data
const workshopLeaders = [
  {
    name: "Robert Chen",
    role: "Cloud Security Architect",
    company: "CloudSec Solutions",
    bio: "Expert in AWS and Azure security with a focus on serverless security architecture.",
    topic: "Cloud Infrastructure CTF",
    image: "/images/workshop1.jpg",
    icon: <Terminal className="h-5 w-5 text-primary" />,
  },
  {
    name: "Amira Hassan",
    role: "Malware Analyst",
    company: "DefendX",
    bio: "Specializes in reverse engineering malware and creating defensive strategies.",
    topic: "Malware Analysis Workshop",
    image: "/images/workshop2.jpg",
    icon: <Shield className="h-5 w-5 text-primary" />,
  },
  {
    name: "Marcus Johnson",
    role: "Web Security Expert",
    company: "SecureWeb",
    bio: "Focuses on modern web app vulnerabilities and OWASP Top 10 mitigation strategies.",
    topic: "Web Exploitation CTF",
    image: "/images/workshop3.jpg",
    icon: <Flag className="h-5 w-5 text-primary" />,
  },
];

// Panelists data
const panelists = [
  {
    name: "Dr. Samuel Wong",
    role: "Director",
    company: "Cameroon Cybersecurity Institute",
    bio: "Leading researcher in cybersecurity policy and governance in Africa.",
    topic: "Policy & Regulations",
    image: "/images/panel1.jpg",
    icon: <Shield className="h-5 w-5 text-primary" />,
  },
  {
    name: "Elizabeth Mbah",
    role: "Lead Developer",
    company: "HackTheBox Cameroon",
    bio: "Organizes CTF events across West Africa and advocates for cybersecurity education.",
    topic: "Community Building",
    image: "/images/panel2.jpg",
    icon: <Flag className="h-5 w-5 text-primary" />,
  },
  {
    name: "Jean-Pierre Foku",
    role: "Security Consultant",
    company: "CyberShield Africa",
    bio: "Helps businesses across Cameroon implement security best practices.",
    topic: "Business Security",
    image: "/images/panel3.jpg",
    icon: <Code className="h-5 w-5 text-primary" />,
  },
];

const SpeakersSection = () => {
  const [activeTab, setActiveTab] = useState("speakers");

  const renderSpeakersList = (speakersList) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {speakersList.map((speaker, index) => (
        <Card 
          key={index}
          className="bg-card border border-border rounded-lg overflow-hidden group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
        >
          <div className="h-64 bg-muted relative overflow-hidden">
            <img
              src={speaker.image}
              alt={speaker.name}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                e.currentTarget.src = "/placeholder.svg";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
            
            {speaker.social && (
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
            )}
          </div>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-3">
              {speaker.icon}
              <span className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full inline-block">
                {speaker.topic}
              </span>
            </div>
            <h3 className="text-xl font-bold font-orbitron mb-1">{speaker.name}</h3>
            <p className="text-sm text-foreground/70 mb-3">
              {speaker.role} at {speaker.company}
            </p>
            <p className="text-sm text-foreground/80">{speaker.bio}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <section id="speakers" className="py-24 bg-gradient-to-b from-background to-card relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      
      {/* Code Matrix Background Effect */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="code-line w-1/2 ml-10 mt-20"></div>
        <div className="code-line w-3/4 ml-20 mt-10"></div>
        <div className="code-line w-1/3 ml-32 mt-16"></div>
        <div className="code-line w-2/3 ml-48 mt-8"></div>
        <div className="code-line w-1/4 ml-64 mt-12"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-medium text-primary mb-2 inline-block">
            Meet Our Experts
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4">
            Cybersecurity <span className="gradient-text">Champions</span>
          </h2>
          <p className="text-foreground/80">
            Learn from the best minds in cybersecurity as they share insights on CTF competitions, 
            vulnerabilities, and cutting-edge techniques that will shape your security skills.
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

        {/* Dynamic content based on active tab */}
        {activeTab === "speakers" && renderSpeakersList(speakers)}
        {activeTab === "panelists" && renderSpeakersList(panelists)}
        {activeTab === "workshop" && renderSpeakersList(workshopLeaders)}

        <div className="text-center mt-12">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
            View All Speakers <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* CTF Focus Section */}
        <div className="mt-24 max-w-5xl mx-auto bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden border border-border">
                <img 
                  src="/images/ctf-competition.jpg" 
                  alt="CTF Competition" 
                  className="w-full"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold font-orbitron mb-4">
                Capture The <span className="text-primary">Flag</span>
              </h3>
              <p className="text-foreground/80 mb-6">
                Our speakers will guide you through the art of Capture The Flag competitions - 
                from beginner challenges to advanced techniques used by professional security researchers.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Flag className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Learn reverse engineering techniques</span>
                </li>
                <li className="flex items-start">
                  <Flag className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Master web application security challenges</span>
                </li>
                <li className="flex items-start">
                  <Flag className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Practice cryptography and steganography skills</span>
                </li>
              </ul>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Join CTF Workshop
              </Button>
            </div>
          </div>
        </div>

        {/* Call for speakers */}
        <div className="mt-24 max-w-3xl mx-auto bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8">
          <h3 className="text-2xl font-bold font-orbitron mb-4 text-center">
            Become a <span className="text-primary">Speaker</span>
          </h3>
          <p className="text-center text-foreground/80 mb-6">
            Share your expertise in cybersecurity, CTF competitions, or ethical hacking with our community.
            We're looking for speakers with hands-on experience in all security domains.
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
