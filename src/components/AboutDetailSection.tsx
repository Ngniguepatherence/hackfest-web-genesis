
import React from "react";
import { Button } from "@/components/ui/button";
import { Globe, Shield, Code, Users, Award, Calendar, MapPin, Clock, Flag, Zap } from "lucide-react";

const AboutDetailSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute -top-96 -right-96 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-96 -left-96 w-[800px] h-[800px] rounded-full bg-secondary/5 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-medium text-primary mb-2 inline-block">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4">
            <span className="gradient-text">237HACKFEST</span> 2025
          </h2>
          <p className="text-foreground/80">
            Revolutionizing Cybersecurity in Cameroon: Join the 237HackFest CTF/Hackathon Event of the Year!
            With HACKTHEBOX Cameroon. MAY 2ND-3RD, 2025.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <img 
              src="/lovable-uploads/2b06fd43-eafd-4393-8b88-1c30d8c4bfcb.png" 
              alt="237HackFest Logo" 
              className="w-full max-w-md mx-auto mb-8 rounded-lg"
            />
            
            <div className="bg-card rounded-xl border border-border p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold font-orbitron mb-6">Event Details</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>May 2nd-3rd, 2025</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-secondary" />
                  <span>Douala, Cameroon</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-accent" />
                  <span>48-hour CTF/Hackathon event</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-primary" />
                  <span>100 elite participants in 20 teams of 5</span>
                </div>
              </div>
              
              <hr className="my-6 border-border" />
              
              <h4 className="font-bold text-lg mb-4">Prizes Worth:</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-yellow-500" />
                  <span><strong>1st Place:</strong> 300,000 XAF</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-gray-400" />
                  <span><strong>2nd Place:</strong> 150,000 XAF</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-amber-700" />
                  <span><strong>3rd Place:</strong> 100,000 XAF</span>
                </div>
                <p className="text-foreground/70 text-sm italic mt-2">
                  Plus, incredible gifts from sponsors, including HackTheBox vouchers!
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold font-orbitron mb-6">Our Vision</h3>
            <p className="text-foreground/80 mb-6">
              Our goal is to foster the development of problem solvers who integrate cutting-edge security 
              and risk management practices into innovative technological solutions. For the first time 
              in Cameroon, we're hosting a <strong>48-hour CTF/Hackathon event</strong> that will awaken the nation's 
              cybersecurity community!
            </p>
            
            <p className="text-foreground/80 mb-6">
              We believe that the best tech solutions come from those who think beyond the obvious, 
              integrating robust security and risk management into every innovation. This 
              <strong> high-stakes, adrenaline-fueled competition</strong> is designed to uncover the finest 
              security talents, groom future experts, and create massive awareness about the evolving 
              world of cyber threats.
            </p>
            
            <h3 className="text-2xl font-bold font-orbitron mt-10 mb-6">What's in Store?</h3>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 flex-shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Flag className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">CTF Challenge</h4>
                  <p className="text-foreground/70">Crack the code, capture the flag, and outsmart your opponents!</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 flex-shrink-0 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Battle Ground Challenge</h4>
                  <p className="text-foreground/70">Attack, defend, and dominate in this ultimate tug-of-war for system control. The participant who defends their system the longest wins glory!</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 flex-shrink-0 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Code className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Expert Workshops & Demos</h4>
                  <p className="text-foreground/70">Learn from Cameroon's leading experts as they showcase cutting-edge vulnerabilities, tools, and strategies to inspire and educate participants and spectators alike.</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Register Now
              </Button>
            </div>
          </div>
        </div>
        
        {/* Learning Topics */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl font-bold font-orbitron mb-4">
              Key Learning Topics
            </h3>
            <p className="text-foreground/80">
              Participants will dive into a dynamic mix of challenges and learning opportunities. While our epic CTF and Battle Ground competitions will test your skills in attack and defense, we're also dedicated to expanding your knowledge through diverse and essential topics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-xl font-bold font-orbitron mb-2">Cloud Security</h4>
              <p className="text-foreground/70">Safeguarding data in the modern, distributed landscape.</p>
            </div>
            
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-secondary" />
              </div>
              <h4 className="text-xl font-bold font-orbitron mb-2">Development Security</h4>
              <p className="text-foreground/70">Best practices for secure coding and software engineering.</p>
            </div>
            
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h4 className="text-xl font-bold font-orbitron mb-2">Security with AI</h4>
              <p className="text-foreground/70">Leveraging artificial intelligence for enhanced cybersecurity.</p>
            </div>
            
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-xl font-bold font-orbitron mb-2">Blockchain Security</h4>
              <p className="text-foreground/70">Protecting decentralized systems and digital assets.</p>
            </div>
            
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-secondary" />
              </div>
              <h4 className="text-xl font-bold font-orbitron mb-2">Content Creation Security</h4>
              <p className="text-foreground/70">Ensuring safety in digital media and online content.</p>
            </div>
            
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Flag className="h-6 w-6 text-accent" />
              </div>
              <h4 className="text-xl font-bold font-orbitron mb-2">Technology Policies & Laws</h4>
              <p className="text-foreground/70">Navigating the legal landscape, including personal data protection laws in Cameroon.</p>
            </div>
          </div>
        </div>
        
        {/* Why This Event Matters */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl font-bold font-orbitron mb-4">
              Why This Event Matters
            </h3>
            <p className="text-foreground/80">
              With rising cyber threats, Cameroon needs exceptional security talents more than ever. This event is a call to action.
            </p>
          </div>
          
          <div className="bg-card rounded-xl border border-border p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Discover Next-Gen Talent</h4>
                    <p className="text-foreground/70">Discover and elevate the next generation of cybersecurity heroes.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Promote Ethical Hacking</h4>
                    <p className="text-foreground/70">Promote ethical hacking and defensive security practices.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Educate Businesses</h4>
                    <p className="text-foreground/70">Educate businesses on the real costs of cyberattacks and how to defend against them.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Empower Innovation</h4>
                    <p className="text-foreground/70">Encourage participants to develop secure, reliable tech solutions.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Foster Community</h4>
                    <p className="text-foreground/70">Create networking opportunities among students, professionals, sponsors, and community partners.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                    <Flag className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Promote National Security</h4>
                    <p className="text-foreground/70">Contribute to a resilient digital ecosystem in Cameroon by highlighting cybersecurity best practices.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Target Audience */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl font-bold font-orbitron mb-4">
              Target Audience: UNITE 1000 YOUTHS
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="bg-card rounded-lg border border-border p-4 text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <h4 className="font-bold">Tech Enthusiasts & Students</h4>
            </div>
            
            <div className="bg-card rounded-lg border border-border p-4 text-center">
              <Shield className="h-8 w-8 text-secondary mx-auto mb-2" />
              <h4 className="font-bold">Cybersecurity Professionals</h4>
            </div>
            
            <div className="bg-card rounded-lg border border-border p-4 text-center">
              <Award className="h-8 w-8 text-accent mx-auto mb-2" />
              <h4 className="font-bold">Industry Experts</h4>
            </div>
            
            <div className="bg-card rounded-lg border border-border p-4 text-center">
              <Code className="h-8 w-8 text-primary mx-auto mb-2" />
              <h4 className="font-bold">Content Creators</h4>
            </div>
            
            <div className="bg-card rounded-lg border border-border p-4 text-center">
              <Globe className="h-8 w-8 text-secondary mx-auto mb-2" />
              <h4 className="font-bold">Government & Academic Stakeholders</h4>
            </div>
          </div>
        </div>
        
        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-xl p-8 md:p-12 relative overflow-hidden backdrop-blur-sm border border-white/10 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold font-orbitron mb-6">
              Make an Impact - Be Part of the Movement
            </h3>
            <p className="text-foreground/80 mb-8">
              Don't miss this chance to showcase your organization and contribute to building a stronger, more secure Cameroon. Together, we can make a difference.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Register Now
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDetailSection;
