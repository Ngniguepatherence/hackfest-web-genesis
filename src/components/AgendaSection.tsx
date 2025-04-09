
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, Users, Zap, Award, Shield, Flag } from "lucide-react";

const AgendaSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute -top-96 -right-96 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-96 -left-96 w-[800px] h-[800px] rounded-full bg-secondary/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-medium text-primary mb-2 inline-block">
            Event Schedule
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4">
            Event <span className="gradient-text">Agenda</span>
          </h2>
          <p className="text-foreground/80">
            Join us for two days of intense cybersecurity challenges, workshops, and networking opportunities.
            Mark your calendars for May 2nd & 3rd, 2025!
          </p>
        </div>
        
        <Tabs defaultValue="day1" className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-card/50 backdrop-blur-sm">
              <TabsTrigger value="day1" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Day 1 (May 2nd)
              </TabsTrigger>
              <TabsTrigger value="day2" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Day 2 (May 3rd)
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="day1" className="mt-0">
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-6">
                <div className="space-y-8">
                  <div className="relative">
                    <div className="absolute top-0 left-6 h-full w-px bg-border"></div>
                    
                    <div className="relative pl-16 pb-8">
                      <div className="absolute left-0 top-1 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center mb-2">
                          <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded font-medium">9:00 AM - 1:30 PM</span>
                        </div>
                        <h3 className="text-xl font-bold font-orbitron mb-2">Opening Ceremony & Keynote Speeches</h3>
                        <p className="text-foreground/70">
                          The event begins with welcome addresses from organizers, followed by industry experts delivering
                          inspiring keynote speeches on the latest cybersecurity trends and challenges.
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative pl-16 pb-8">
                      <div className="absolute left-0 top-1 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <Flag className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center mb-2">
                          <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded font-medium">2:00 PM - 5:00 PM</span>
                        </div>
                        <h3 className="text-xl font-bold font-orbitron mb-2">Competition Kickoff</h3>
                        <p className="text-foreground/70">
                          The CTF and Battle Ground challenges officially begin! Teams will receive their first set of challenges
                          and begin their quest to showcase their cybersecurity skills.
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative pl-16 pb-8">
                      <div className="absolute left-0 top-1 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center mb-2">
                          <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded font-medium">2:00 PM - 5:00 PM</span>
                        </div>
                        <h3 className="text-xl font-bold font-orbitron mb-2">Concurrent Workshops & Seminars</h3>
                        <p className="text-foreground/70">
                          While the competitions are ongoing, attendees can participate in workshops covering AI in cybersecurity,
                          secure software development practices, blockchain security, and digital citizenship.
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative pl-16">
                      <div className="absolute left-0 top-1 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <Zap className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center mb-2">
                          <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded font-medium">4:00 PM - 6:00 PM</span>
                        </div>
                        <h3 className="text-xl font-bold font-orbitron mb-2">Evening Networking Session</h3>
                        <p className="text-foreground/70">
                          Connect with fellow participants, sponsors, and cybersecurity professionals in this casual networking
                          event. Share ideas, discuss challenges, and form valuable connections.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="day2" className="mt-0">
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-6">
                <div className="space-y-8">
                  <div className="relative">
                    <div className="absolute top-0 left-6 h-full w-px bg-border"></div>
                    
                    <div className="relative pl-16 pb-8">
                      <div className="absolute left-0 top-1 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center mb-2">
                          <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded font-medium">9:00 AM - 1:00 PM</span>
                        </div>
                        <h3 className="text-xl font-bold font-orbitron mb-2">Workshops & Demos on Advanced Topics</h3>
                        <p className="text-foreground/70">
                          Dive deeper into advanced cybersecurity topics with hands-on workshops and demonstrations led by industry experts.
                          Topics include penetration testing, incident response, and emerging threats.
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative pl-16 pb-8">
                      <div className="absolute left-0 top-1 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <Flag className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center mb-2">
                          <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded font-medium">Until 2:00 PM</span>
                        </div>
                        <h3 className="text-xl font-bold font-orbitron mb-2">Competition Conclusion</h3>
                        <p className="text-foreground/70">
                          The final hours of the CTF and Battle Ground challenges. Teams race against the clock to complete
                          their tasks and secure their positions on the leaderboard.
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative pl-16">
                      <div className="absolute left-0 top-1 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center mb-2">
                          <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded font-medium">2:00 PM - 5:00 PM</span>
                        </div>
                        <h3 className="text-xl font-bold font-orbitron mb-2">Closing Ceremony & Award Presentations</h3>
                        <p className="text-foreground/70">
                          The event concludes with the announcement of winners, prize distributions, and closing remarks.
                          Celebrate the achievements of all participants and reflect on the lessons learned.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        {/* Event Highlights */}
        <div className="mt-24">
          <h3 className="text-2xl md:text-3xl font-bold font-orbitron text-center mb-12">
            Event <span className="text-primary">Highlights</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Flag className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-orbitron mb-2">CTF Challenge</h4>
                    <p className="text-foreground/70">
                      The Capture The Flag (CTF) challenge is a cybersecurity competition where participants solve puzzles, 
                      exploit vulnerabilities, and complete security tasks to capture digital "flags." 
                      It tests skills in areas like cryptography, penetration testing, and reverse engineering 
                      in a fun, competitive format.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-orbitron mb-2">Battle Ground Challenge</h4>
                    <p className="text-foreground/70">
                      The Battle Ground Challenge simulates a realistic enterprise environment by pitting teams against 
                      each other in a controlled environment where one group defends while the other attacks. 
                      This format sharpens both offensive and defensive skills such as network security, 
                      penetration testing, and incident response.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Prizes */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold font-orbitron text-center mb-6">
            Prizes & <span className="text-primary">Rewards</span>
          </h3>
          
          <p className="text-center text-foreground/80 mb-8">
            Compete for glory and amazing prizes! The top teams will receive:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Card className="bg-card/50 backdrop-blur-sm border-border relative overflow-hidden">
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/30 rounded-full blur-xl"></div>
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold mb-2 text-secondary">2nd Place</div>
                <div className="text-3xl font-bold font-orbitron mb-4">150,000 XAF</div>
                <p className="text-sm text-foreground/70">Plus additional gifts from sponsors</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-primary/50 relative overflow-hidden shadow-lg transform -translate-y-4">
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/30 rounded-full blur-xl"></div>
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-b-lg font-bold">
                TOP PRIZE
              </div>
              <CardContent className="p-6 text-center pt-8">
                <div className="text-2xl font-bold mb-2 text-primary">1st Place</div>
                <div className="text-4xl font-bold font-orbitron mb-4">300,000 XAF</div>
                <p className="text-sm text-foreground/70">Plus HackTheBox vouchers</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-border relative overflow-hidden">
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/30 rounded-full blur-xl"></div>
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold mb-2 text-accent">3rd Place</div>
                <div className="text-3xl font-bold font-orbitron mb-4">100,000 XAF</div>
                <p className="text-sm text-foreground/70">Plus additional gifts from sponsors</p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-24 text-center">
          <h4 className="text-xl font-bold font-orbitron mb-4">Ready to join the competition?</h4>
          <a href="/register" className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-bold transition-colors">
            Register Your Team Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;
