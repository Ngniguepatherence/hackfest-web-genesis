
import React from "react";
import { Shield, Code, Trophy, Users, Terminal, Database, Cpu, Network, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const objectives = [
    {
      title: "Empower Innovation",
      description: "Encourage participants to develop secure, reliable tech solutions."
    },
    {
      title: "Enhance Cybersecurity Awareness",
      description: "Offer educational sessions on topics such as cloud security, secure software development, blockchain security, content creation security, AI and legal aspects of technology."
    },
    {
      title: "Foster Community Engagement",
      description: "Create networking opportunities among students, professionals, sponsors, and community partners."
    },
    {
      title: "Promote National Security",
      description: "Contribute to a resilient digital ecosystem in Cameroon by highlighting cybersecurity best practices."
    },
  ];

  const activities = [
    {
      icon: <Terminal className="h-8 w-8 text-primary" />,
      title: "AI Sessions",
      description: "Sessions will explore the convergence of artificial intelligence and cybersecurity, discussing how AI can both enhance security measures and introduce new vulnerabilities.",
    },
    {
      icon: <Code className="h-8 w-8 text-secondary" />,
      title: "Secure Software Development",
      description: "Workshops will emphasize the importance of integrating security into the software development lifecycle, teaching methodologies to identify and mitigate potential threats early in the development process.",
    },
    {
      icon: <Database className="h-8 w-8 text-accent" />,
      title: "Blockchain Security",
      description: "Seminars will delve into the unique security challenges and solutions associated with blockchain technology, highlighting its applications and potential risks.",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Digital Citizenship",
      description: "Experts will discuss the legal implications of cybersecurity, including data protection laws, compliance requirements, and the ethical considerations of technology use.",
    },
  ];

  const audiences = [
    "Tech enthusiasts and students",
    "Cybersecurity professionals and practitioners",
    "Industry experts and thought leaders",
    "Content Creators and Media personals",
    "Government, academic, and private sector stakeholders"
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-5 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4">
            About <span className="gradient-text">237HACKFEST</span>
          </h2>
          <p className="text-foreground/80">
            237HackFest is a 48-hour cybersecurity event, scheduled for May 2nd & 3rd, 2025. This
            transformative event aims to bring together the brightest minds in technology and
            cybersecurity to compete in dynamic challenges (e.g., Capture The Flag and Battle Ground)
            while engaging in a series of workshops and seminars.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/70 transition-colors">
            <h3 className="text-xl font-bold font-orbitron mb-4">Our Mission</h3>
            <p className="text-foreground/80">
              Our goal is to foster the development of problem solvers who integrate cutting-edge security and 
              risk management practices into innovative technological solutions. We believe that the best tech 
              solutions come from those who think beyond the obvious, integrating robust security 
              and risk management into every innovation.
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-8 hover:border-secondary/70 transition-colors">
            <h3 className="text-xl font-bold font-orbitron mb-4">The Big Picture</h3>
            <p className="text-foreground/80">
              This high-stakes, adrenaline-fueled competition is designed to uncover the finest security talents, 
              groom future experts, and create massive awareness about the evolving world of cyber threats. 
              With rising cyber threats, Cameroon needs exceptional security talents more than ever.
            </p>
          </div>
        </div>

        {/* Objectives */}
        <div className="mb-24">
          <h3 className="text-2xl md:text-3xl font-bold font-orbitron text-center mb-12">
            Our <span className="text-primary">Objectives</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-primary/50 transition-all hover:-translate-y-1 duration-300"
              >
                <div className="bg-muted/50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-lg font-bold font-orbitron mb-2">{objective.title}</h4>
                <p className="text-sm text-foreground/70">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Target Audience */}
        <div className="mb-24">
          <h3 className="text-2xl md:text-3xl font-bold font-orbitron text-center mb-6">
            Who is it <span className="text-primary">for?</span>
          </h3>
          
          <p className="text-center text-foreground/80 mb-8">
            We're expecting to unite 1,000 participants from various backgrounds
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {audiences.map((audience, index) => (
              <div key={index} className="bg-muted/30 rounded-lg p-4 text-center flex items-center justify-center min-h-24">
                <p className="font-medium">{audience}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div className="mt-24">
          <h3 className="text-2xl md:text-3xl font-bold font-orbitron text-center mb-12">
            Security <span className="text-primary">Workshops & Seminars</span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all hover:-translate-y-1 duration-300"
              >
                <CardContent className="p-6">
                  <div className="bg-muted/50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    {activity.icon}
                  </div>
                  <h4 className="text-lg font-bold font-orbitron mb-2">{activity.title}</h4>
                  <p className="text-sm text-foreground/70">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Exhibitions & Demos */}
        <div className="mt-16">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold font-orbitron mb-4 text-center">Exhibitions & Demos</h3>
            <p className="text-foreground/80 text-center">
              Exhibitions and Demos segment will focus on showcasing pre-existing cybersecurity solutions and innovations. 
              Participants are invited to present their prior work, including research findings, security tools, 
              and case studies, providing a platform for knowledge exchange and professional networking. 
              Additionally, sponsors and industry partners will have the opportunity to demonstrate their 
              latest cybersecurity products and services, offering attendees insights into current 
              advancements and practical applications in the field.
            </p>
          </div>
        </div>
        
        {/* Challenges */}
        <div className="mt-24">
          <h3 className="text-2xl md:text-3xl font-bold font-orbitron text-center mb-12">
            The <span className="text-primary">Challenges</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/70 transition-colors relative overflow-hidden">
              <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
              <div className="absolute top-4 right-4 bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded">Challenge #1</div>
              <h4 className="text-xl font-bold font-orbitron mb-4">Capture The Flag (CTF)</h4>
              <p className="text-foreground/80">
                The Capture The Flag (CTF) challenge is a cybersecurity competition where participants solve puzzles, 
                exploit vulnerabilities, and complete security tasks to capture digital "flags." 
                It tests skills in areas like cryptography, penetration testing, and reverse engineering 
                in a fun, competitive format.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 hover:border-secondary/70 transition-colors relative overflow-hidden">
              <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-secondary/5 blur-3xl"></div>
              <div className="absolute top-4 right-4 bg-secondary/20 text-secondary text-xs font-bold px-2 py-1 rounded">Challenge #2</div>
              <h4 className="text-xl font-bold font-orbitron mb-4">Battle Ground Challenge</h4>
              <p className="text-foreground/80">
                The Battle Ground Challenge simulates a realistic enterprise environment by putting teams against each other 
                in a controlled environment where one group defends while the other attacks. This format sharpens both 
                offensive and defensive skills such as network security, penetration testing, and incident response—while 
                emphasizing real-time decision-making, strategic planning, and teamwork, all essential for 
                tackling real-world cyber threats.
              </p>
            </div>
          </div>
        </div>
        
        {/* Structure */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl md:text-3xl font-bold font-orbitron mb-6">
            Event <span className="text-primary">Structure</span>
          </h3>
          
          <div className="inline-flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-lg mb-8">
            <Users className="h-5 w-5 text-primary" />
            <span className="font-medium">100 elite participants in 20 handpicked teams of 5</span>
          </div>
          
          <p className="max-w-2xl mx-auto text-foreground/80">
            Teams will battle it out in both competitions, pushing their skills to the limit.
            The winners will receive amazing prizes and recognition from the cybersecurity community.
          </p>
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
