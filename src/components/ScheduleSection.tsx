
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Clock, 
  MapPin, 
  Coffee, 
  Presentation, 
  Users, 
  Trophy,
  Server,
  Network
} from "lucide-react";

// Mock schedule data
const scheduleData = {
  day1: [
    {
      time: "08:00 - 09:00",
      title: "Registration & Breakfast",
      location: "Main Hall",
      type: "break",
      icon: <Coffee className="h-5 w-5" />,
    },
    {
      time: "09:00 - 09:45",
      title: "Opening Ceremony",
      speaker: "Event Organizers",
      location: "Main Stage",
      type: "ceremony",
      icon: <Presentation className="h-5 w-5" />,
    },
    {
      time: "10:00 - 11:30",
      title: "Keynote: The Future of Cybersecurity",
      speaker: "Dr. Jane Smith - CyberDefend Corp",
      location: "Main Stage",
      type: "keynote",
      icon: <Presentation className="h-5 w-5" />,
    },
    {
      time: "11:45 - 12:45",
      title: "Workshop: Ethical Hacking Basics",
      speaker: "Alex Rodriguez - NexusSec",
      location: "Workshop Room A",
      type: "workshop",
      icon: <Server className="h-5 w-5" />,
    },
    {
      time: "12:45 - 14:00",
      title: "Lunch Break",
      location: "Dining Area",
      type: "break",
      icon: <Coffee className="h-5 w-5" />,
    },
    {
      time: "14:00 - 15:30",
      title: "Panel: Current Threats Landscape",
      speaker: "Industry Experts Panel",
      location: "Discussion Hall",
      type: "panel",
      icon: <Users className="h-5 w-5" />,
    },
    {
      time: "15:45 - 17:15",
      title: "CTF Competition Kickoff",
      location: "Competition Zone",
      type: "competition",
      icon: <Trophy className="h-5 w-5" />,
    },
    {
      time: "17:30 - 19:00",
      title: "Networking Reception",
      location: "Lounge Area",
      type: "networking",
      icon: <Users className="h-5 w-5" />,
    },
  ],
  day2: [
    {
      time: "09:00 - 09:30",
      title: "Morning Coffee",
      location: "Main Hall",
      type: "break",
      icon: <Coffee className="h-5 w-5" />,
    },
    {
      time: "09:30 - 11:00",
      title: "Advanced Penetration Testing",
      speaker: "Sarah Lee - EthicalHack Inc",
      location: "Workshop Room B",
      type: "workshop",
      icon: <Network className="h-5 w-5" />,
    },
    {
      time: "11:15 - 12:45",
      title: "Blockchain Security Challenges",
      speaker: "Michael Chen - SecureBlock",
      location: "Main Stage",
      type: "talk",
      icon: <Presentation className="h-5 w-5" />,
    },
    {
      time: "12:45 - 14:00",
      title: "Lunch Break",
      location: "Dining Area",
      type: "break",
      icon: <Coffee className="h-5 w-5" />,
    },
    {
      time: "14:00 - 17:00",
      title: "Hackathon Continues",
      location: "Competition Zone",
      type: "competition",
      icon: <Trophy className="h-5 w-5" />,
    },
    {
      time: "17:15 - 18:45",
      title: "Enterprise Security Strategy",
      speaker: "Olivia Johnson - TechGiant",
      location: "Main Stage",
      type: "talk",
      icon: <Presentation className="h-5 w-5" />,
    },
    {
      time: "19:00 - 21:00",
      title: "Sponsored Dinner & Networking",
      location: "Dining Area",
      type: "networking",
      icon: <Users className="h-5 w-5" />,
    },
  ],
  day3: [
    {
      time: "09:00 - 09:30",
      title: "Morning Coffee",
      location: "Main Hall",
      type: "break",
      icon: <Coffee className="h-5 w-5" />,
    },
    {
      time: "09:30 - 11:00",
      title: "AI in Cybersecurity",
      speaker: "David Kumar - DefenseAI",
      location: "Main Stage",
      type: "talk",
      icon: <Presentation className="h-5 w-5" />,
    },
    {
      time: "11:15 - 12:45",
      title: "Workshop: Incident Response",
      speaker: "Security Response Team",
      location: "Workshop Room A",
      type: "workshop",
      icon: <Server className="h-5 w-5" />,
    },
    {
      time: "12:45 - 14:00",
      title: "Lunch Break",
      location: "Dining Area",
      type: "break",
      icon: <Coffee className="h-5 w-5" />,
    },
    {
      time: "14:00 - 15:30",
      title: "CTF Winners Announcement",
      location: "Main Stage",
      type: "ceremony",
      icon: <Trophy className="h-5 w-5" />,
    },
    {
      time: "15:45 - 16:45",
      title: "Closing Keynote",
      speaker: "Featured Speaker",
      location: "Main Stage",
      type: "keynote",
      icon: <Presentation className="h-5 w-5" />,
    },
    {
      time: "17:00 - 18:00",
      title: "Closing Ceremony & Awards",
      location: "Main Stage",
      type: "ceremony",
      icon: <Trophy className="h-5 w-5" />,
    },
  ],
};

const ScheduleSection = () => {
  const [selectedDay, setSelectedDay] = useState("day1");

  const getBgColor = (type) => {
    switch (type) {
      case "keynote":
        return "bg-primary/10 border-primary/30";
      case "talk":
        return "bg-blue-500/10 border-blue-500/30";
      case "workshop":
        return "bg-secondary/10 border-secondary/30";
      case "panel":
        return "bg-accent/10 border-accent/30";
      case "competition":
        return "bg-orange-500/10 border-orange-500/30";
      case "networking":
        return "bg-green-500/10 border-green-500/30";
      case "ceremony":
        return "bg-purple-500/10 border-purple-500/30";
      case "break":
        return "bg-muted border-muted/50";
      default:
        return "bg-muted border-muted/50";
    }
  };

  const getIconColor = (type) => {
    switch (type) {
      case "keynote":
        return "text-primary";
      case "talk":
        return "text-blue-500";
      case "workshop":
        return "text-secondary";
      case "panel":
        return "text-accent";
      case "competition":
        return "text-orange-500";
      case "networking":
        return "text-green-500";
      case "ceremony":
        return "text-purple-500";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <section id="schedule" className="py-24 bg-background relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-5 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-medium text-primary mb-2 inline-block">
            Plan Your Visit
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4">
            Event <span className="gradient-text">Schedule</span>
          </h2>
          <p className="text-foreground/80">
            Three days packed with keynotes, workshops, competitions, and networking opportunities.
            Here's what's happening at HACKFEST 2025.
          </p>
        </div>

        <Tabs defaultValue="day1" className="w-full max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-muted/30">
              <TabsTrigger
                value="day1"
                onClick={() => setSelectedDay("day1")}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Day 1
              </TabsTrigger>
              <TabsTrigger
                value="day2"
                onClick={() => setSelectedDay("day2")}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Day 2
              </TabsTrigger>
              <TabsTrigger
                value="day3"
                onClick={() => setSelectedDay("day3")}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Day 3
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="day1" className="mt-0">
            <div className="space-y-6">
              {scheduleData.day1.map((item, index) => (
                <div
                  key={index}
                  className={`border rounded-lg p-4 md:p-6 flex flex-col md:flex-row gap-4 transition-all hover:shadow-md ${getBgColor(item.type)}`}
                >
                  <div className="shrink-0 md:w-1/5">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{item.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-secondary" />
                      <span className="text-xs text-foreground/70">{item.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-full ${getBgColor(item.type)} ${getIconColor(item.type)}`}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold font-orbitron">{item.title}</h3>
                        {item.speaker && <p className="text-sm text-foreground/70">{item.speaker}</p>}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="day2" className="mt-0">
            <div className="space-y-6">
              {scheduleData.day2.map((item, index) => (
                <div
                  key={index}
                  className={`border rounded-lg p-4 md:p-6 flex flex-col md:flex-row gap-4 transition-all hover:shadow-md ${getBgColor(item.type)}`}
                >
                  <div className="shrink-0 md:w-1/5">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{item.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-secondary" />
                      <span className="text-xs text-foreground/70">{item.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-full ${getBgColor(item.type)} ${getIconColor(item.type)}`}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold font-orbitron">{item.title}</h3>
                        {item.speaker && <p className="text-sm text-foreground/70">{item.speaker}</p>}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="day3" className="mt-0">
            <div className="space-y-6">
              {scheduleData.day3.map((item, index) => (
                <div
                  key={index}
                  className={`border rounded-lg p-4 md:p-6 flex flex-col md:flex-row gap-4 transition-all hover:shadow-md ${getBgColor(item.type)}`}
                >
                  <div className="shrink-0 md:w-1/5">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{item.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-secondary" />
                      <span className="text-xs text-foreground/70">{item.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-full ${getBgColor(item.type)} ${getIconColor(item.type)}`}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold font-orbitron">{item.title}</h3>
                        {item.speaker && <p className="text-sm text-foreground/70">{item.speaker}</p>}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Download Full Schedule
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
