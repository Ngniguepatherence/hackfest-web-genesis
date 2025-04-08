
import React from "react";
import { Shield, Code, Trophy, Users, Terminal, Database, Cpu, Network } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Cybersecurity",
      description: "Learn about the latest security threats and defenses from industry experts.",
    },
    {
      icon: <Code className="h-8 w-8 text-secondary" />,
      title: "Coding Challenges",
      description: "Test your skills with exciting coding challenges and competitions.",
    },
    {
      icon: <Trophy className="h-8 w-8 text-accent" />,
      title: "Competitions",
      description: "Participate in CTF and other competitions with amazing prizes.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Networking",
      description: "Connect with like-minded individuals and industry professionals.",
    },
    {
      icon: <Terminal className="h-8 w-8 text-secondary" />,
      title: "Workshops",
      description: "Hands-on workshops to enhance your technical skills.",
    },
    {
      icon: <Database className="h-8 w-8 text-accent" />,
      title: "Data Security",
      description: "Learn about protecting sensitive data and privacy measures.",
    },
    {
      icon: <Cpu className="h-8 w-8 text-primary" />,
      title: "Hardware Hacking",
      description: "Explore hardware vulnerabilities and physical security.",
    },
    {
      icon: <Network className="h-8 w-8 text-secondary" />,
      title: "Network Security",
      description: "Deep dive into network protocols and security practices.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-5 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4">
            About <span className="gradient-text">HACKFEST</span>
          </h2>
          <p className="text-foreground/80">
            HACKFEST is a premier ethical hacking and cybersecurity event that brings together
            the brightest minds in the industry for three days of learning, competition,
            and collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/70 transition-colors">
            <h3 className="text-xl font-bold font-orbitron mb-4">Our Mission</h3>
            <p className="text-foreground/80">
              To foster innovation and knowledge sharing in the field of cybersecurity,
              creating a community of ethical hackers committed to making the digital world
              safer for everyone.
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-8 hover:border-secondary/70 transition-colors">
            <h3 className="text-xl font-bold font-orbitron mb-4">The Experience</h3>
            <p className="text-foreground/80">
              Immerse yourself in a vibrant atmosphere of learning and competition.
              From beginner-friendly workshops to advanced technical challenges,
              there's something for everyone at HACKFEST.
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-8 hover:border-accent/70 transition-colors">
            <h3 className="text-xl font-bold font-orbitron mb-4">Why Attend</h3>
            <p className="text-foreground/80">
              Whether you're a seasoned professional or just starting your cybersecurity journey,
              HACKFEST offers unparalleled opportunities to learn, connect, and grow
              your skills in a supportive environment.
            </p>
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-2xl md:text-3xl font-bold font-orbitron text-center mb-12">
            What to <span className="text-primary">Expect</span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-primary/50 transition-all hover:-translate-y-1 duration-300"
              >
                <div className="bg-muted/50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold font-orbitron mb-2">{feature.title}</h4>
                <p className="text-sm text-foreground/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-24 text-center">
          <div className="inline-block relative">
            <div className="bg-muted px-6 py-3 rounded-lg">
              <div className="flex items-center justify-center gap-2">
                <span className="h-3 w-3 rounded-full bg-primary animate-pulse"></span>
                <span className="text-sm font-medium">Limited spots available - Register today!</span>
              </div>
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 rotate-45 bg-muted"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
