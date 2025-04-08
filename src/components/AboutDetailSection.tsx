
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Calendar, MapPin, Award, TrendingUp, Zap, Shield, Code } from "lucide-react";

const AboutDetailSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute -top-96 -right-96 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-96 -left-96 w-[800px] h-[800px] rounded-full bg-secondary/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-medium text-primary mb-2 inline-block">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4">
            What is <span className="gradient-text">HACKFEST</span>
          </h2>
          <p className="text-foreground/80 mb-8">
            Hackfest is the premier cybersecurity conference bringing together top security researchers, ethical hackers, and industry professionals to share knowledge, skills, and the latest in cyber defense.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full">
              <Users className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">1,500+ Attendees</span>
            </div>
            <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full">
              <Calendar className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium">3-Day Event</span>
            </div>
            <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full">
              <MapPin className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">Global Venue</span>
            </div>
            <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full">
              <Award className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">50+ Speakers</span>
            </div>
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="bg-card p-8 rounded-xl border border-border relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            
            <h3 className="text-2xl font-bold font-orbitron mb-4 relative z-10">Our Mission</h3>
            <p className="text-foreground/80 mb-6 relative z-10">
              To democratize cybersecurity knowledge and build a community of security professionals committed to making the digital world safer for everyone through education, collaboration, and innovation.
            </p>
            <ul className="space-y-3 relative z-10">
              <li className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-primary mt-1" />
                <span>Advancing the state of cybersecurity through knowledge sharing</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="h-6 w-6 text-primary mt-1" />
                <span>Building an inclusive community of security professionals</span>
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp className="h-6 w-6 text-primary mt-1" />
                <span>Promoting ethical hacking and responsible disclosure</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-card p-8 rounded-xl border border-border relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <h3 className="text-2xl font-bold font-orbitron mb-4 relative z-10">Our Vision</h3>
            <p className="text-foreground/80 mb-6 relative z-10">
              To create a world where security knowledge is freely accessible, where organizations prioritize digital safety, and where ethical hackers are recognized as essential contributors to a secure digital ecosystem.
            </p>
            <ul className="space-y-3 relative z-10">
              <li className="flex items-start gap-3">
                <Zap className="h-6 w-6 text-secondary mt-1" />
                <span>Empowering the next generation of cybersecurity professionals</span>
              </li>
              <li className="flex items-start gap-3">
                <Code className="h-6 w-6 text-secondary mt-1" />
                <span>Driving innovation in security tools and methodologies</span>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="h-6 w-6 text-secondary mt-1" />
                <span>Creating a global network of security experts and resources</span>
              </li>
            </ul>
          </div>
        </div>

        {/* History and Timeline */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl font-bold font-orbitron mb-4">Our Journey</h3>
            <p className="text-foreground/80">
              From humble beginnings to becoming the world's premier hacking event, our journey has been defined by growth, community, and a relentless pursuit of excellence.
            </p>
          </div>
          
          <div className="relative border-l border-primary/30 pl-8 ml-4 space-y-12">
            <div className="relative">
              <div className="absolute -left-[41px] h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-background"></div>
              </div>
              <div>
                <span className="text-sm text-primary font-semibold">2014</span>
                <h4 className="text-xl font-bold font-orbitron mb-2">The Beginning</h4>
                <p className="text-foreground/80">
                  Hackfest started as a small gathering of 50 security enthusiasts in a university computer lab, focused on basic penetration testing techniques.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -left-[41px] h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-background"></div>
              </div>
              <div>
                <span className="text-sm text-primary font-semibold">2016</span>
                <h4 className="text-xl font-bold font-orbitron mb-2">First Major Event</h4>
                <p className="text-foreground/80">
                  With 300 attendees and our first international speakers, Hackfest expanded to include workshops, competitions, and a dedicated career fair.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -left-[41px] h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-background"></div>
              </div>
              <div>
                <span className="text-sm text-primary font-semibold">2019</span>
                <h4 className="text-xl font-bold font-orbitron mb-2">Going Global</h4>
                <p className="text-foreground/80">
                  Hackfest expanded internationally with 1,000+ attendees from 30+ countries, featuring keynotes from leading security researchers and innovators.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -left-[41px] h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-background"></div>
              </div>
              <div>
                <span className="text-sm text-primary font-semibold">2022</span>
                <h4 className="text-xl font-bold font-orbitron mb-2">Digital Transformation</h4>
                <p className="text-foreground/80">
                  We launched our first hybrid event, combining in-person and virtual experiences to reach 5,000+ participants worldwide.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -left-[41px] h-6 w-6 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center animate-pulse">
                <div className="h-2 w-2 rounded-full bg-background"></div>
              </div>
              <div>
                <span className="text-sm gradient-text font-semibold">2025</span>
                <h4 className="text-xl font-bold font-orbitron mb-2">The Future</h4>
                <p className="text-foreground/80">
                  Join us as we continue to evolve, with new tracks focused on AI security, quantum cryptography, and expanded programs for aspiring security professionals.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl font-bold font-orbitron mb-4">Meet Our Team</h3>
            <p className="text-foreground/80">
              The passionate individuals behind Hackfest who work tirelessly to create an exceptional experience for our community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Alex Morgan", role: "Founder & Director", image: "https://i.pravatar.cc/300?img=1" },
              { name: "Jamie Chen", role: "Technical Lead", image: "https://i.pravatar.cc/300?img=2" },
              { name: "Taylor Swift", role: "Community Manager", image: "https://i.pravatar.cc/300?img=3" },
              { name: "Morgan Freeman", role: "Chief Security Officer", image: "https://i.pravatar.cc/300?img=4" },
              { name: "Chris Evans", role: "CTF Coordinator", image: "https://i.pravatar.cc/300?img=5" },
              { name: "Jordan Smith", role: "Workshop Lead", image: "https://i.pravatar.cc/300?img=6" },
              { name: "Casey Jones", role: "Marketing Director", image: "https://i.pravatar.cc/300?img=7" },
              { name: "Robin Williams", role: "Sponsorship Manager", image: "https://i.pravatar.cc/300?img=8" }
            ].map((member, index) => (
              <Card key={index} className="overflow-hidden group">
                <CardContent className="p-0">
                  <div className="aspect-square relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/90 to-transparent p-4">
                      <h4 className="font-bold font-orbitron text-lg">{member.name}</h4>
                      <p className="text-sm text-primary">{member.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-card p-8 md:p-12 rounded-xl border border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold font-orbitron mb-4">Get in Touch</h3>
              <p className="text-foreground/80 mb-6">
                Have questions about Hackfest or want to get involved? Our team is ready to assist you with any inquiries.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Email Us</div>
                    <a href="mailto:info@hackfest.com" className="text-primary hover:underline">info@hackfest.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Call Us</div>
                    <a href="tel:+1234567890" className="text-primary hover:underline">+1 (234) 567-890</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Visit Us</div>
                    <address className="not-italic text-foreground/80">
                      Hackfest HQ<br />
                      123 Cyber Street<br />
                      Tech City, TC 12345
                    </address>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 mt-8">
                <a href="#" className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold font-orbitron mb-4">Send us a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full rounded-md border border-border bg-background/50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full rounded-md border border-border bg-background/50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full rounded-md border border-border bg-background/50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Message Subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full rounded-md border border-border bg-background/50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDetailSection;
