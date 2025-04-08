
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const RegisterSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    ticketType: "",
    dietaryRequirements: "",
    newsletter: true,
  });

  const ticketOptions = [
    { name: "Standard Pass", price: "$199", features: ["All talks", "Workshop access", "Networking events", "Lunch included"] },
    { name: "Premium Pass", price: "$299", features: ["All Standard Pass benefits", "VIP lounge access", "Exclusive workshop", "Event swag bag"] },
    { name: "Student Pass", price: "$99", features: ["All talks", "Workshop access", "Networking events", "Valid student ID required"] }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name, checked) => {
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Registration submitted! Check your email for confirmation details.");
    setFormData({
      name: "",
      email: "",
      organization: "",
      ticketType: "",
      dietaryRequirements: "",
      newsletter: true,
    });
  };

  return (
    <section id="register" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute -top-96 -right-96 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-96 -left-96 w-[800px] h-[800px] rounded-full bg-secondary/5 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-medium text-primary mb-2 inline-block">
            Join Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4">
            Register for <span className="gradient-text">HACKFEST</span>
          </h2>
          <p className="text-foreground/80">
            Secure your spot at the most exciting cybersecurity event of the year.
            Early bird pricing available for a limited time.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-xs font-medium text-foreground/70">
                Only 150 spots remaining
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Ticket Options */}
          <div className="w-full lg:w-1/3">
            <h3 className="text-2xl font-bold font-orbitron mb-6">Ticket Options</h3>
            
            <div className="space-y-6">
              {ticketOptions.map((ticket, index) => (
                <div 
                  key={index} 
                  className={`border rounded-lg p-6 transition-all hover:shadow-md cursor-pointer ${
                    formData.ticketType === ticket.name 
                      ? "border-primary bg-primary/5" 
                      : "border-border hover:border-primary/50"
                  }`}
                  onClick={() => handleSelectChange("ticketType", ticket.name)}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-lg font-bold font-orbitron">{ticket.name}</h4>
                    <span className="text-xl font-bold text-primary">{ticket.price}</span>
                  </div>
                  <ul className="space-y-2">
                    {ticket.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <div className="h-5 w-5 text-primary mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={formData.ticketType === ticket.name ? "default" : "outline"}
                    size="sm"
                    className={`w-full mt-4 ${
                      formData.ticketType === ticket.name 
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground" 
                        : "border-primary text-primary hover:bg-primary/10"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSelectChange("ticketType", ticket.name);
                    }}
                  >
                    {formData.ticketType === ticket.name ? "Selected" : "Select"}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Registration Form */}
          <div className="w-full lg:w-2/3">
            <h3 className="text-2xl font-bold font-orbitron mb-6">Personal Details</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-background/50 border-border focus-visible:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="bg-background/50 border-border focus-visible:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="organization">Organization / Company</Label>
                  <Input
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="bg-background/50 border-border focus-visible:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ticketType">Ticket Type</Label>
                  <Select 
                    value={formData.ticketType} 
                    onValueChange={(value) => handleSelectChange("ticketType", value)}
                  >
                    <SelectTrigger id="ticketType" className="bg-background/50 border-border focus:ring-primary">
                      <SelectValue placeholder="Select ticket type" />
                    </SelectTrigger>
                    <SelectContent>
                      {ticketOptions.map((ticket, index) => (
                        <SelectItem key={index} value={ticket.name}>
                          {ticket.name} - {ticket.price}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dietaryRequirements">Dietary Requirements</Label>
                <Input
                  id="dietaryRequirements"
                  name="dietaryRequirements"
                  value={formData.dietaryRequirements}
                  onChange={handleChange}
                  placeholder="Any special dietary needs"
                  className="bg-background/50 border-border focus-visible:ring-primary"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="newsletter"
                  checked={formData.newsletter}
                  onCheckedChange={(checked) => 
                    handleCheckboxChange("newsletter", checked)
                  }
                />
                <Label htmlFor="newsletter" className="text-sm font-normal text-foreground/70">
                  Keep me updated with news and announcements about HACKFEST events
                </Label>
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                >
                  Register Now
                </Button>
                <p className="text-xs text-center text-foreground/60 mt-4">
                  By registering you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-24 max-w-4xl mx-auto bg-muted/30 backdrop-blur-sm rounded-lg p-8 border border-border">
          <h3 className="text-xl font-bold font-orbitron mb-4 text-center">
            Need help with registration?
          </h3>
          <p className="text-center text-foreground/80 mb-6">
            Contact our support team for assistance with registration, group bookings, or any questions about the event.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Email Support
            </Button>
            <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
              Live Chat
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
