
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Check, Award, BarChart, Globe, Users, Zap, Star, ExternalLink } from "lucide-react";

const SponsorSection = () => {
  const tiers = [
    {
      name: "Platinum",
      price: "50,000 XAF",
      color: "from-accent to-primary",
      description: "Basic visibility with essential promotional opportunities",
      benefits: [
        "Logo on select advertising materials",
        "A 10-minute speaking slot to highlight your company",
        "A 1-day virtual employee cybersecurity training",
        "Social media mentions and promotions"
      ]
    },
    {
      name: "Silver",
      price: "100,000 XAF",
      color: "from-gray-400 to-gray-200",
      description: "Enhanced visibility with broader audience reach",
      benefits: [
        "Logo on all advertising materials",
        "A presentation slot to showcase your company",
        "A 1-day employee cybersecurity training (onsite in Douala or virtual)",
        "Social media posts promoting your brand"
      ]
    },
    {
      name: "Gold",
      price: "200,000 XAF",
      color: "from-yellow-500 to-yellow-300",
      featured: true,
      description: "Premium positioning with significant brand exposure",
      benefits: [
        "Exclusive exhibition stand",
        "Logo on ALL advertising materials",
        "A 30-minute speaking slot to promote your company during the event",
        "A 1-day employee cybersecurity training (onsite in Douala or virtual)",
        "Featured social media posts showcasing your services",
        "Complimentary event passes and reserved seating"
      ]
    },
    {
      name: "Custom",
      price: "Flexible",
      color: "from-primary to-secondary",
      description: "Tailored partnership opportunities for your needs",
      benefits: [
        "Technical support or equipment donations",
        "Provision of refreshments (coffee, snacks, breakfast)",
        "Venue or logistics support",
        "Additional prizes for contestants",
        "Other in-kind contributions"
      ]
    }
  ];

  const previousSponsors = [
    "HackTheBox", "Microsoft", "Google", "Amazon Web Services", "Cisco", 
    "IBM", "Oracle", "Cloudflare", "Palo Alto Networks",
    "CrowdStrike", "Splunk", "Fortinet", "MTN", "Orange", "CAMTEL"
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute -top-96 -right-96 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-96 -left-96 w-[800px] h-[800px] rounded-full bg-secondary/5 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-medium text-primary mb-2 inline-block">
            Become a Sponsor
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4">
            Partner with <span className="gradient-text">237HACKFEST</span>
          </h2>
          <p className="text-foreground/80">
            Join leading organizations in supporting the premier cybersecurity event in Cameroon. 
            Gain valuable exposure to security professionals, researchers, and industry leaders.
          </p>
        </div>

        {/* Why Sponsor Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center">
          <div>
            <h3 className="text-2xl font-bold font-orbitron mb-6">Why Sponsor 237HackFest?</h3>
            <p className="text-foreground/80 mb-8">
              Partnering with 237HackFest provides your organization with a unique opportunity to connect with cybersecurity professionals, demonstrate thought leadership, and position your brand at the forefront of the security industry in Cameroon.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 flex-shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Boost Brand Visibility</h4>
                  <p className="text-foreground/70">Engage with a highly targeted audience of tech innovators and cybersecurity professionals.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 flex-shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Enhance Community Engagement</h4>
                  <p className="text-foreground/70">Demonstrate your commitment to supporting digital innovation and cybersecurity awareness.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 flex-shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Showcase Industry Leadership</h4>
                  <p className="text-foreground/70">Position your brand as a forward-thinking leader in the technology space.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 flex-shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Network with Future Talent</h4>
                  <p className="text-foreground/70">Gain access to emerging tech talent and future industry leaders in Cameroon.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-xl border border-border p-8 backdrop-blur-sm relative">
            <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-primary/10 blur-2xl"></div>
            
            <h3 className="text-2xl font-bold font-orbitron mb-6">Event Stats</h3>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-background/40 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-primary mb-1">1,000+</div>
                <div className="text-sm text-foreground/70">Youth Target</div>
              </div>
              
              <div className="bg-background/40 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-secondary mb-1">100</div>
                <div className="text-sm text-foreground/70">Elite Participants</div>
              </div>
              
              <div className="bg-background/40 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-accent mb-1">20</div>
                <div className="text-sm text-foreground/70">Teams Competing</div>
              </div>
              
              <div className="bg-background/40 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-primary mb-1">48</div>
                <div className="text-sm text-foreground/70">Hour Challenge</div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Limited sponsorship slots available</span>
              </div>
              <div className="mt-2 w-full bg-background/50 rounded-full h-2.5 overflow-hidden">
                <div className="bg-primary h-2.5 rounded-full" style={{ width: "65%" }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Sponsorship Tiers */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl font-bold font-orbitron mb-4">Sponsorship Packages</h3>
            <p className="text-foreground/80">
              Choose the sponsorship tier that best aligns with your goals and budget. Custom packages are also available.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tiers.map((tier, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden border-border ${
                  tier.featured ? 'ring-2 ring-primary shadow-lg' : ''
                }`}
              >
                {tier.featured && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                      RECOMMENDED
                    </div>
                  </div>
                )}
                
                <CardHeader className="pb-0">
                  <div className={`text-center mb-4`}>
                    <div className={`inline-block p-3 rounded-full bg-gradient-to-br ${tier.color} text-white`}>
                      <Star className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="text-center text-xl font-bold font-orbitron">{tier.name}</h3>
                  <div className="text-center mt-2">
                    <span className="text-3xl font-bold">{tier.price}</span>
                  </div>
                  <p className="text-center text-sm text-foreground/70 mt-2">{tier.description}</p>
                </CardHeader>
                
                <CardContent className="pt-6">
                  <ul className="space-y-2">
                    {tier.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter>
                  <Button 
                    className={`w-full ${
                      tier.featured 
                        ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                        : 'bg-card hover:bg-muted border border-primary text-foreground'
                    }`}
                  >
                    Select {tier.name}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-foreground/80 mb-4">
              Need a custom sponsorship package? Contact our sponsorship team to discuss options.
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Contact for Custom Options
            </Button>
          </div>
        </div>

        {/* Previous Sponsors */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl font-bold font-orbitron mb-4">Our Sponsors & Partners</h3>
            <p className="text-foreground/80">
              Join these leading organizations that have partnered with 237HackFest.
            </p>
          </div>
          
          <div className="bg-card rounded-xl border border-border p-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
              {previousSponsors.map((sponsor, index) => (
                <div 
                  key={index} 
                  className="h-16 flex items-center justify-center text-foreground/60 hover:text-primary transition-colors"
                >
                  <span className="font-bold text-center">{sponsor}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sponsorship Process */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl font-bold font-orbitron mb-4">Sponsorship Process</h3>
            <p className="text-foreground/80">
              Getting started as a sponsor is easy. Follow these simple steps to secure your place.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl border border-border p-8 relative">
              <div className="absolute top-4 left-4 h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                1
              </div>
              <div className="pt-8">
                <h4 className="text-xl font-bold font-orbitron mb-4">Choose Your Package</h4>
                <p className="text-foreground/70">
                  Select the sponsorship tier that best aligns with your goals and budget, or request a custom package.
                </p>
              </div>
            </div>
            
            <div className="bg-card rounded-xl border border-border p-8 relative">
              <div className="absolute top-4 left-4 h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                2
              </div>
              <div className="pt-8">
                <h4 className="text-xl font-bold font-orbitron mb-4">Submit Application</h4>
                <p className="text-foreground/70">
                  Fill out our sponsorship application form with your company details and preferred package.
                </p>
              </div>
            </div>
            
            <div className="bg-card rounded-xl border border-border p-8 relative">
              <div className="absolute top-4 left-4 h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                3
              </div>
              <div className="pt-8">
                <h4 className="text-xl font-bold font-orbitron mb-4">Finalize Details</h4>
                <p className="text-foreground/70">
                  Our sponsorship team will contact you to finalize details, answer questions, and prepare your benefits.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-xl p-8 md:p-12 relative overflow-hidden backdrop-blur-sm border border-white/10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold font-orbitron mb-4">Ready to Become a Sponsor?</h3>
              <p className="text-foreground/80 mb-6">
                Don't miss this opportunity to connect with the cybersecurity community and showcase your brand at 237HackFest.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="https://forms.gle/HdtJd5Q85sgjsED3A" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Apply Now <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Download Prospectus
                </Button>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-bold text-lg mb-4">Contact Sponsorship Team</h4>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full rounded-md border border-border bg-background/50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-md border border-border bg-background/50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <select
                    className="w-full rounded-md border border-border bg-background/50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select Sponsorship Interest</option>
                    <option value="gold">Gold Package (200,000 XAF)</option>
                    <option value="silver">Silver Package (100,000 XAF)</option>
                    <option value="platinum">Platinum Package (50,000 XAF)</option>
                    <option value="custom">Custom Package</option>
                  </select>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Submit Inquiry
                </Button>
              </form>
              <p className="text-xs text-center mt-4 text-foreground/60">
                For further inquiries: <a href="mailto:kamlewa.technologies@gmail.com" className="text-primary">kamlewa.technologies@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;
