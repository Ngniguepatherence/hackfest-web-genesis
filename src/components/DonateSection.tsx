
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Users, Lightbulb, BookOpen, School, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

const DonateSection = () => {
  const [donationAmount, setDonationAmount] = useState<string>("");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [activeTab, setActiveTab] = useState<string>("one-time");
  
  const predefinedAmounts = ["25", "50", "100", "250"];

  const handleDonationAmountClick = (amount: string) => {
    setDonationAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setDonationAmount("custom");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = donationAmount === "custom" ? customAmount : donationAmount;
    
    if (!amount) {
      toast.error("Please select or enter a donation amount.");
      return;
    }
    
    toast.success(`Thank you for your ${activeTab} donation of $${amount}! You're making a difference.`);
    setDonationAmount("");
    setCustomAmount("");
  };

  const initiatives = [
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: "Educational Resources",
      description: "Creating free, high-quality cybersecurity learning resources for students and professionals."
    },
    {
      icon: <School className="h-10 w-10 text-secondary" />,
      title: "Scholarship Program",
      description: "Helping underrepresented groups pursue careers in cybersecurity through scholarships."
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-accent" />,
      title: "Research Grants",
      description: "Supporting innovative cybersecurity research projects and open-source security tools."
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Community Workshops",
      description: "Running free workshops in underserved communities to build cybersecurity awareness."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute -top-96 -right-96 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-96 -left-96 w-[800px] h-[800px] rounded-full bg-secondary/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-medium text-primary mb-2 inline-block">
            Support Our Mission
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4">
            Donate to <span className="gradient-text">HACKFEST</span>
          </h2>
          <p className="text-foreground/80">
            Your donation helps us make cybersecurity education and resources accessible to everyone, 
            supporting the next generation of security professionals.
          </p>
        </div>

        {/* Donation Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* Form Side */}
          <div>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-bold font-orbitron text-center">Make a Donation</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid grid-cols-2 mb-8">
                    <TabsTrigger value="one-time">One-Time Donation</TabsTrigger>
                    <TabsTrigger value="monthly">Monthly Donation</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="one-time">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Select Amount</label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {predefinedAmounts.map((amount) => (
                            <Button
                              key={amount}
                              type="button"
                              variant={donationAmount === amount ? "default" : "outline"}
                              className={`${
                                donationAmount === amount
                                  ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                                  : "border-border hover:border-primary"
                              }`}
                              onClick={() => handleDonationAmountClick(amount)}
                            >
                              ${amount}
                            </Button>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="custom-amount" className="block text-sm font-medium mb-2">
                          Custom Amount
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <span className="text-foreground/60">$</span>
                          </div>
                          <Input
                            id="custom-amount"
                            type="number"
                            min="1"
                            placeholder="Enter amount"
                            value={customAmount}
                            onChange={handleCustomAmountChange}
                            className="pl-7"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="full-name" className="block text-sm font-medium mb-2">
                            Full Name
                          </label>
                          <Input id="full-name" type="text" placeholder="John Doe" required />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email Address
                          </label>
                          <Input id="email" type="email" placeholder="john@example.com" required />
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <Button
                          type="submit"
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                          size="lg"
                        >
                          <Heart className="mr-2 h-4 w-4" /> Donate Now
                        </Button>
                        <p className="text-xs text-center text-foreground/60 mt-4">
                          Your donation is securely processed. A receipt will be emailed to you.
                        </p>
                      </div>
                    </form>
                  </TabsContent>
                  
                  <TabsContent value="monthly">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Select Monthly Amount</label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {["10", "25", "50", "100"].map((amount) => (
                            <Button
                              key={amount}
                              type="button"
                              variant={donationAmount === amount ? "default" : "outline"}
                              className={`${
                                donationAmount === amount
                                  ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                                  : "border-border hover:border-primary"
                              }`}
                              onClick={() => handleDonationAmountClick(amount)}
                            >
                              ${amount}/mo
                            </Button>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="custom-amount-monthly" className="block text-sm font-medium mb-2">
                          Custom Monthly Amount
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <span className="text-foreground/60">$</span>
                          </div>
                          <Input
                            id="custom-amount-monthly"
                            type="number"
                            min="1"
                            placeholder="Enter amount per month"
                            value={customAmount}
                            onChange={handleCustomAmountChange}
                            className="pl-7"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="full-name-monthly" className="block text-sm font-medium mb-2">
                            Full Name
                          </label>
                          <Input id="full-name-monthly" type="text" placeholder="John Doe" required />
                        </div>
                        <div>
                          <label htmlFor="email-monthly" className="block text-sm font-medium mb-2">
                            Email Address
                          </label>
                          <Input id="email-monthly" type="email" placeholder="john@example.com" required />
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <Button
                          type="submit"
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                          size="lg"
                        >
                          <Heart className="mr-2 h-4 w-4" /> Subscribe Monthly
                        </Button>
                        <p className="text-xs text-center text-foreground/60 mt-4">
                          You can cancel your monthly donation at any time. A receipt will be emailed each month.
                        </p>
                      </div>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
          
          {/* Impact Side */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold font-orbitron mb-4">Your Impact</h3>
              <p className="text-foreground/80 mb-6">
                Your generous donation makes a meaningful difference in our mission to make cybersecurity education accessible to all.
                Here's how your contribution helps:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border">
                  <div className="h-12 w-12 flex-shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="font-bold">$25</span>
                  </div>
                  <div>Provides learning materials for one student in our cybersecurity workshops</div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border">
                  <div className="h-12 w-12 flex-shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="font-bold">$50</span>
                  </div>
                  <div>Sponsors one participant in our capture-the-flag competitions</div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border">
                  <div className="h-12 w-12 flex-shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="font-bold">$100</span>
                  </div>
                  <div>Funds a half-day workshop in an underserved community</div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border">
                  <div className="h-12 w-12 flex-shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="font-bold">$250</span>
                  </div>
                  <div>Provides equipment for our educational labs and training environments</div>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="h-6 w-6 text-primary" />
                <h4 className="font-bold text-lg">Our Commitment</h4>
              </div>
              <p className="text-foreground/80 mb-4">
                We are committed to transparency and responsible use of all donations. 
                As a registered non-profit organization, we ensure that:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-primary mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>85% of all donations go directly to our programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-primary mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>All donors receive a detailed annual impact report</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-primary mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Our financial statements are publicly available</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Current Initiatives */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl font-bold font-orbitron mb-4">Current Initiatives</h3>
            <p className="text-foreground/80">
              Your donations support these important cybersecurity education and community initiatives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1">{initiative.icon}</div>
                    <div>
                      <h4 className="text-xl font-bold font-orbitron mb-2">{initiative.title}</h4>
                      <p className="text-foreground/70">{initiative.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl font-bold font-orbitron mb-4">Donation Impact Stories</h3>
            <p className="text-foreground/80">
              Hear from people who have benefited from your generous donations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg border border-border relative">
              <div className="absolute top-6 left-6 text-5xl text-primary opacity-20">"</div>
              <div className="relative z-10">
                <p className="text-foreground/80 mb-6 italic">
                  "The Hackfest scholarship changed my life. As a first-generation college student, I wouldn't have been 
                  able to pursue cybersecurity without this support. Now I'm working at a leading security firm."
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-primary/20"></div>
                  <div>
                    <div className="font-bold">Michaela J.</div>
                    <div className="text-sm text-foreground/60">Scholarship Recipient</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border relative">
              <div className="absolute top-6 left-6 text-5xl text-primary opacity-20">"</div>
              <div className="relative z-10">
                <p className="text-foreground/80 mb-6 italic">
                  "The community workshop organized by Hackfest in our underserved neighborhood introduced dozens of young 
                  people to cybersecurity. It opened doors many didn't know existed."
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-secondary/20"></div>
                  <div>
                    <div className="font-bold">Robert T.</div>
                    <div className="text-sm text-foreground/60">Community Center Director</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border relative">
              <div className="absolute top-6 left-6 text-5xl text-primary opacity-20">"</div>
              <div className="relative z-10">
                <p className="text-foreground/80 mb-6 italic">
                  "The research grant from Hackfest allowed us to develop an open-source security tool that's now used by 
                  thousands of organizations to improve their security posture."
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-accent/20"></div>
                  <div>
                    <div className="font-bold">Dr. Alicia M.</div>
                    <div className="text-sm text-foreground/60">Research Grant Recipient</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-xl p-8 md:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold font-orbitron mb-4">Join Our Donor Community</h3>
            <p className="text-foreground/80 mb-8">
              Together, we can build a more secure digital world through education, innovation, and community building.
              Your support makes all the difference.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Heart className="mr-2 h-4 w-4" /> Make a Donation
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Learn More About Our Programs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
