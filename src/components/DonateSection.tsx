
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { Heart, CreditCard, Info, ChevronUp, ChevronDown } from "lucide-react";

const DonateSection = () => {
  const [activeTab, setActiveTab] = useState("oneTime");
  const [donationAmount, setDonationAmount] = useState<string>("50000");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [expanded, setExpanded] = useState<boolean>(false);
  
  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = customAmount || donationAmount;
    
    toast.success(`Thank you for your ${amount} XAF donation to support 237HackFest!`);
    
    // Reset form
    setCustomAmount("");
  };
  
  const impactItems = [
    {
      amount: "10000",
      title: "Support a Student",
      description: "Help sponsor a student's participation in the hackathon.",
    },
    {
      amount: "25000",
      title: "Workshop Materials",
      description: "Provide materials for a hands-on cybersecurity workshop.",
    },
    {
      amount: "50000",
      title: "Educational Resources",
      description: "Fund educational resources for participants to take home.",
    },
    {
      amount: "100000",
      title: "Enable Competition",
      description: "Support the technical infrastructure of our competitions.",
    },
    {
      amount: "250000",
      title: "Major Sponsorship",
      description: "Become a major sponsor with special recognition at the event.",
    },
  ];

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="absolute -top-96 -right-96 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-96 -left-96 w-[800px] h-[800px] rounded-full bg-secondary/5 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-medium text-primary mb-2 inline-block">
            Support Our Mission
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4">
            Donate to <span className="gradient-text">237HackFest</span>
          </h2>
          <p className="text-foreground/80">
            Your contribution helps us foster the development of cybersecurity talent in Cameroon.
            Every donation makes a difference in building a safer digital future.
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
          {/* Left Column - Why Donate */}
          <div className="w-full lg:w-1/2">
            <Card className="bg-background/50 backdrop-blur-sm border-border">
              <CardHeader>
                <h3 className="text-2xl font-bold font-orbitron">Why Donate?</h3>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-foreground/80">
                  Your donation directly supports our mission to strengthen cybersecurity in Cameroon by:
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                      <Heart className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Supporting Young Talent</h4>
                      <p className="text-sm text-foreground/70">
                        Enabling students and young professionals to participate who otherwise couldn't afford to.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 flex-shrink-0 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Heart className="h-4 w-4 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Improving Educational Resources</h4>
                      <p className="text-sm text-foreground/70">
                        Funding high-quality workshops, tutorials, and training materials for participants.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 flex-shrink-0 rounded-full bg-accent/10 flex items-center justify-center">
                      <Heart className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Building Community</h4>
                      <p className="text-sm text-foreground/70">
                        Creating networking opportunities and lasting connections in the tech community.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                      <Heart className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Enhancing National Security</h4>
                      <p className="text-sm text-foreground/70">
                        Contributing to a more secure digital ecosystem in Cameroon through education and awareness.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <button 
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium mt-4"
                    onClick={() => setExpanded(!expanded)}
                  >
                    {expanded ? "Show Less" : "Learn More About Your Impact"}
                    {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  
                  {expanded && (
                    <div className="mt-4 text-foreground/80 space-y-4 animate-fade-in">
                      <p>
                        237HackFest is more than just an event—it's a movement to shape the future of cybersecurity in Cameroon. 
                        Your donations help us create a sustainable platform for ongoing education, awareness, and skill development.
                      </p>
                      
                      <h4 className="font-bold text-lg">Our Goals</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Train 1,000+ youth in cybersecurity best practices</li>
                        <li>Establish ongoing mentorship programs</li>
                        <li>Create educational resources in local languages</li>
                        <li>Build a nationwide network of cybersecurity professionals</li>
                        <li>Foster connections between Cameroonian and international experts</li>
                      </ul>
                      
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <div className="flex items-start gap-2">
                          <Info className="h-4 w-4 text-primary mt-1" />
                          <p className="text-sm">
                            All donations are managed with complete transparency, and a detailed report on how funds are 
                            used will be published after the event.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-8">
              <h4 className="text-xl font-bold font-orbitron mb-6">How Your Donation Makes an Impact</h4>
              
              <div className="space-y-4">
                {impactItems.map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-background/50 backdrop-blur-sm border border-border rounded-lg p-4 flex gap-4 items-center hover:border-primary/50 transition-colors"
                  >
                    <div className="text-xl font-bold text-primary font-orbitron">{parseInt(item.amount).toLocaleString()} XAF</div>
                    <div>
                      <h5 className="font-bold">{item.title}</h5>
                      <p className="text-sm text-foreground/70">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column - Donation Form */}
          <div className="w-full lg:w-1/2">
            <Card className="bg-background/50 backdrop-blur-sm border-border">
              <CardHeader>
                <h3 className="text-2xl font-bold font-orbitron">Make a Donation</h3>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleDonationSubmit} className="space-y-6">
                  {/* Donation Type Tabs */}
                  <Tabs defaultValue="oneTime" className="w-full" onValueChange={setActiveTab}>
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="oneTime">One-time Donation</TabsTrigger>
                      <TabsTrigger value="monthly">Monthly Support</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="oneTime" className="space-y-6 pt-4">
                      <div>
                        <Label className="mb-2 block">Select Amount (XAF)</Label>
                        <RadioGroup 
                          value={donationAmount} 
                          onValueChange={(val) => {
                            setDonationAmount(val);
                            setCustomAmount("");
                          }}
                          className="grid grid-cols-2 md:grid-cols-3 gap-4"
                        >
                          {["10000", "25000", "50000", "100000", "250000"].map((amount) => (
                            <div key={amount} className="relative">
                              <RadioGroupItem 
                                value={amount} 
                                id={`amount-${amount}`} 
                                className="sr-only"
                              />
                              <Label
                                htmlFor={`amount-${amount}`}
                                className={`flex h-14 items-center justify-center rounded-lg border border-border p-2 text-center font-medium transition-all hover:border-primary ${
                                  donationAmount === amount ? "border-2 border-primary bg-primary/10" : ""
                                }`}
                              >
                                {parseInt(amount).toLocaleString()} XAF
                              </Label>
                            </div>
                          ))}
                          
                          <div className="relative col-span-2 md:col-span-3">
                            <Label htmlFor="customAmount" className="mb-1 block">Custom Amount</Label>
                            <div className="relative">
                              <Input 
                                id="customAmount"
                                type="number"
                                placeholder="Enter amount in XAF"
                                value={customAmount}
                                onChange={(e) => {
                                  setCustomAmount(e.target.value);
                                  setDonationAmount("");
                                }}
                                className={`bg-background/50 border-border ${
                                  customAmount ? "border-2 border-primary" : ""
                                }`}
                              />
                              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/60 text-sm">XAF</span>
                            </div>
                          </div>
                        </RadioGroup>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="monthly" className="space-y-6 pt-4">
                      <div>
                        <Label className="mb-2 block">Monthly Amount (XAF)</Label>
                        <RadioGroup 
                          value={donationAmount} 
                          onValueChange={(val) => {
                            setDonationAmount(val);
                            setCustomAmount("");
                          }}
                          className="grid grid-cols-2 md:grid-cols-3 gap-4"
                        >
                          {["5000", "10000", "25000", "50000", "100000"].map((amount) => (
                            <div key={amount} className="relative">
                              <RadioGroupItem 
                                value={amount} 
                                id={`monthly-${amount}`} 
                                className="sr-only"
                              />
                              <Label
                                htmlFor={`monthly-${amount}`}
                                className={`flex h-14 items-center justify-center rounded-lg border border-border p-2 text-center font-medium transition-all hover:border-primary ${
                                  donationAmount === amount ? "border-2 border-primary bg-primary/10" : ""
                                }`}
                              >
                                {parseInt(amount).toLocaleString()} XAF
                              </Label>
                            </div>
                          ))}
                          
                          <div className="relative col-span-2 md:col-span-3">
                            <Label htmlFor="customMonthlyAmount" className="mb-1 block">Custom Monthly Amount</Label>
                            <div className="relative">
                              <Input 
                                id="customMonthlyAmount"
                                type="number"
                                placeholder="Enter monthly amount in XAF"
                                value={customAmount}
                                onChange={(e) => {
                                  setCustomAmount(e.target.value);
                                  setDonationAmount("");
                                }}
                                className={`bg-background/50 border-border ${
                                  customAmount ? "border-2 border-primary" : ""
                                }`}
                              />
                              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/60 text-sm">XAF</span>
                            </div>
                          </div>
                        </RadioGroup>
                      </div>
                    </TabsContent>
                  </Tabs>
                  
                  <div className="space-y-6 border-t border-border pt-6">
                    <h4 className="font-bold">Personal Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input 
                          id="fullName" 
                          placeholder="Your name" 
                          className="bg-background/50 border-border"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="Your email" 
                          className="bg-background/50 border-border"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone (Optional)</Label>
                      <Input 
                        id="phone" 
                        placeholder="Your phone number" 
                        className="bg-background/50 border-border"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-6 border-t border-border pt-6">
                    <h4 className="font-bold">Payment Information</h4>
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <div className="relative">
                        <Input 
                          id="cardNumber" 
                          placeholder="1234 5678 9012 3456" 
                          className="bg-background/50 border-border pl-10"
                        />
                        <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/60" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input 
                          id="expiry" 
                          placeholder="MM/YY" 
                          className="bg-background/50 border-border"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input 
                          id="cvv" 
                          placeholder="123" 
                          className="bg-background/50 border-border"
                        />
                      </div>
                    </div>

                    <div className="bg-muted/30 p-4 rounded-lg">
                      <div className="flex items-center gap-2 text-sm">
                        <Info className="h-4 w-4 text-primary flex-shrink-0" />
                        <p>Your payment information is secure and encrypted. We never store your full card details.</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    size="lg"
                  >
                    {activeTab === "oneTime" ? "Donate Now" : "Start Monthly Donation"}
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="border-t border-border pt-6 text-sm text-foreground/60 text-center">
                <p>
                  By donating, you agree to our terms and privacy policy. 
                  237HackFest is committed to using your donation responsibly.
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="mt-24 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold font-orbitron mb-8 text-center">
            Words from Our Supporters
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl border border-border p-6 backdrop-blur-sm">
              <div className="text-primary text-4xl font-serif">"</div>
              <p className="italic text-foreground/80 mb-4">
                Supporting 237HackFest was one of the best decisions our company made. The talent we discovered and the connections we built have been invaluable to our cybersecurity initiatives.
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="font-bold">JD</span>
                </div>
                <div>
                  <h4 className="font-bold">Jean Dupont</h4>
                  <p className="text-sm text-foreground/60">CEO, TechSecure</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl border border-border p-6 backdrop-blur-sm">
              <div className="text-primary text-4xl font-serif">"</div>
              <p className="italic text-foreground/80 mb-4">
                As a past donor, I've seen firsthand how my contribution helped create opportunities for young Cameroonians eager to learn about cybersecurity. The impact is real and lasting.
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-secondary/20 rounded-full flex items-center justify-center">
                  <span className="font-bold">MN</span>
                </div>
                <div>
                  <h4 className="font-bold">Marie Ndong</h4>
                  <p className="text-sm text-foreground/60">Individual Supporter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
