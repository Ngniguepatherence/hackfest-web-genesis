
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, Clock, Flag, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [countdownDays, setCountdownDays] = useState("00");
  const [countdownHours, setCountdownHours] = useState("00");
  const [countdownMinutes, setCountdownMinutes] = useState("00");
  const [countdownSeconds, setCountdownSeconds] = useState("00");

  // Set your event date here - May 2nd, 2025
  const eventDate = new Date("2025-05-02T09:00:00");

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
        const colors = ["hsla(0, 100%, 50%, 0.3)", "hsla(90, 100%, 50%, 0.3)", "hsla(60, 100%, 50%, 0.3)"];
        this.color = colors[Math.floor(Math.random() * colors.length)];
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
            ctx.strokeStyle = `hsla(90, 100%, 50%, ${opacity * 0.2})`;
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
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <img 
              src="/lovable-uploads/386d8a98-1998-44da-a800-755052562fa9.png" 
              alt="237HackFest Logo" 
              className="w-full max-w-md mx-auto"
            />
            <p className="font-orbitron text-lg mt-2">Hack. Innovate. Secure</p>
          </div>
          
          <div className="mb-4 inline-block">
            <span className="px-4 py-1 bg-muted rounded-full text-xs uppercase tracking-wider font-medium text-primary">
              May 2nd-3rd, 2025 • Douala, Cameroon
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-orbitron">
            Revolutionizing <span className="gradient-text">Cybersecurity</span> in Cameroon
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Join the 237HackFest CTF/Hackathon Event of the Year! With HACKTHEBOX Cameroon.
            Are you ready to witness or be part of a cybersecurity showdown like no other?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link to="/register">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Register Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/agenda">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                View Agenda
              </Button>
            </Link>
          </div>
          
          {/* Event features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 mt-8 max-w-3xl mx-auto">
            <div className="bg-card/50 backdrop-blur-lg p-6 rounded-lg border border-border flex items-start gap-3">
              <Flag className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div className="text-left">
                <h3 className="font-bold text-lg mb-1">CTF Challenge</h3>
                <p className="text-sm text-foreground/70">
                  Crack the code, capture the flag, and outsmart your opponents!
                </p>
              </div>
            </div>
            
            <div className="bg-card/50 backdrop-blur-lg p-6 rounded-lg border border-border flex items-start gap-3">
              <Shield className="h-6 w-6 text-secondary shrink-0 mt-1" />
              <div className="text-left">
                <h3 className="font-bold text-lg mb-1">Battle Ground Challenge</h3>
                <p className="text-sm text-foreground/70">
                  Attack, defend, and dominate in this ultimate tug-of-war for system control.
                </p>
              </div>
            </div>
          </div>
          
          {/* Event details */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 mt-4">
            <div className="flex items-center gap-2 text-foreground/80">
              <Calendar className="h-5 w-5 text-primary" />
              <span>May 2-3, 2025</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/80">
              <MapPin className="h-5 w-5 text-secondary" />
              <span>Douala, Cameroon</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/80">
              <Clock className="h-5 w-5 text-accent" />
              <span>48-hour Event</span>
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
          
          {/* Prizes section */}
          <div className="mt-16">
            <h3 className="text-xl font-bold font-orbitron mb-4">Compete for Amazing Prizes</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-secondary flex flex-col items-center">
                <div className="text-secondary font-bold">2nd Place</div>
                <div className="font-orbitron font-bold text-xl">150,000 XAF</div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-primary flex flex-col items-center transform scale-110">
                <div className="text-primary font-bold">1st Place</div>
                <div className="font-orbitron font-bold text-xl">300,000 XAF</div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-accent flex flex-col items-center">
                <div className="text-accent font-bold">3rd Place</div>
                <div className="font-orbitron font-bold text-xl">100,000 XAF</div>
              </div>
            </div>
            <p className="text-sm text-foreground/70 mt-2">
              Plus incredible gifts from sponsors, including HackTheBox vouchers!
            </p>
          </div>
          
          {/* Contact info */}
          <div className="mt-8 text-sm text-foreground/70">
            <p>For inquiries: <a href="mailto:kamlewa.technologies@gmail.com" className="text-primary">kamlewa.technologies@gmail.com</a> | +237 653906594</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
