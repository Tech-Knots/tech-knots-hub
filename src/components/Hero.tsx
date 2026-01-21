import { ArrowRight, Cpu, Wifi, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-emerald-50/30">
      {/* Circuit Pattern Background */}
      <div className="absolute inset-0 circuit-pattern opacity-30" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl" />

      <div className="container-wide relative py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-primary text-sm font-medium mb-8 animate-fade-up">
            <Zap className="w-4 h-4" />
            <span>Engineering Excellence • Hardware Innovation</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-up delay-100">
            Where Hardware Meets{" "}
            <span className="text-gradient">Intelligence</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up delay-200">
            Embedded Systems • IoT Projects • DIY Electronics • Engineering Explained
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
            <Button size="lg" className="font-semibold px-8 shadow-emerald hover:shadow-xl transition-shadow">
              <Link to="/hardware-projects" className="flex items-center gap-2">
                Explore Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="font-semibold px-8">
              <Link to="/tutorials">Start Learning</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto mt-16 animate-fade-up delay-400">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-100 mx-auto mb-3">
                <Cpu className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">200+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-100 mx-auto mb-3">
                <Wifi className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">50+</div>
              <div className="text-sm text-muted-foreground">Tutorials</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-100 mx-auto mb-3">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">10K+</div>
              <div className="text-sm text-muted-foreground">Engineers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
