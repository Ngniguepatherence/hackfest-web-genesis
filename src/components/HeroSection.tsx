
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, Clock } from "lucide-react";

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [countdownDays, setCountdownDays] = useState("00");
  const [countdownHours, setCountdownHours] = useState("00");
  const [countdownMinutes, setCountdownMinutes] = useState("00");
  const [countdownSeconds, setCountdownSeconds] = useState("00");

  // Set your event date here
  const eventDate = new Date("2025-06-15T09:00:00");

  useEffect(() => {
    // Update countdown
    const updateCountdown = () => {
      const now = new Date();
      const diff = eventDate.getTime() - now.getTime();
      
      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        setCountdownDays(days.toString().padStart(2, "0"));
        setCountdownHours(hours.toString().padStart(2, "0"));
        setCountdownMinutes(minutes.toString().padStart(2, "0"));
        setCountdownSeconds(seconds.toString().padStart(2, "0"));
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle settings
    const particlesArray: Particle[] = [];
    const numberOfParticles = 100;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.color = `hsl(${Math.random() * 60 + 190}, 100%, 50%, ${Math.random() * 0.3 + 0.2})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    const connectParticles = () => {
      if (!ctx) return;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 80) {
            const opacity = 1 - distance/80;
            ctx.strokeStyle = `hsla(196, 100%, 50%, ${opacity * 0.2})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      connectParticles();
      requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-24">
      {/* Particles canvas for background */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />
      
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-noise opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent z-[-5]"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-[-5]"></div>
      
      {/* Main content */}
      <div className="container px-4 pt-10 mx-auto text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="mb-4 inline-block">
            <span className="px-4 py-1 bg-muted rounded-full text-xs uppercase tracking-wider font-medium text-primary">
              Coming Soon - 2025
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-orbitron">
            <span className="gradient-text">HACKFEST</span> 2025
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-xl mx-auto">
            The ultimate gathering of cyber security enthusiasts, ethical hackers, and tech innovators. Join us for workshops, competitions, and networking.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Register Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Learn More
            </Button>
          </div>
          
          {/* Event details */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 mt-4">
            <div className="flex items-center gap-2 text-foreground/80">
              <Calendar className="h-5 w-5 text-primary" />
              <span>June 15-17, 2025</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/80">
              <MapPin className="h-5 w-5 text-secondary" />
              <span>Tech Hub Convention Center</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/80">
              <Clock className="h-5 w-5 text-accent" />
              <span>09:00 AM - 18:00 PM</span>
            </div>
          </div>
          
          {/* Countdown */}
          <div className="flex justify-center">
            <div className="bg-card/50 backdrop-blur-lg p-6 rounded-lg border border-border">
              <h3 className="text-sm uppercase tracking-wider mb-4 text-foreground/70">Event Starts In</h3>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="text-2xl md:text-4xl font-bold font-orbitron text-primary">
                    {countdownDays}
                  </div>
                  <div className="text-xs uppercase text-foreground/60 mt-1">Days</div>
                </div>
                <div className="text-2xl md:text-4xl font-bold">:</div>
                <div className="flex flex-col items-center">
                  <div className="text-2xl md:text-4xl font-bold font-orbitron text-secondary">
                    {countdownHours}
                  </div>
                  <div className="text-xs uppercase text-foreground/60 mt-1">Hours</div>
                </div>
                <div className="text-2xl md:text-4xl font-bold">:</div>
                <div className="flex flex-col items-center">
                  <div className="text-2xl md:text-4xl font-bold font-orbitron text-accent">
                    {countdownMinutes}
                  </div>
                  <div className="text-xs uppercase text-foreground/60 mt-1">Minutes</div>
                </div>
                <div className="text-2xl md:text-4xl font-bold">:</div>
                <div className="flex flex-col items-center">
                  <div className="text-2xl md:text-4xl font-bold font-orbitron text-primary">
                    {countdownSeconds}
                  </div>
                  <div className="text-xs uppercase text-foreground/60 mt-1">Seconds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
