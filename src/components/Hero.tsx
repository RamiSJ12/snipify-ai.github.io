import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 bg-gradient-bg overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Coming Soon Badge */}
        <div className="mb-8 animate-fade-up">
          <Badge variant="secondary" className="text-primary bg-accent border-primary/20 px-6 py-2 text-sm font-medium">
            <Sparkles className="w-4 h-4 mr-2" />
            Coming Soon 🚀
          </Badge>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            Automate, Repurpose
          </span>
          <br />
          <span className="text-foreground">& Amplify Your Content</span>
        </h1>
        
        {/* Subheading */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-up max-w-4xl mx-auto" style={{ animationDelay: '0.2s' }}>
          Turn your videos, podcasts, and livestreams into multiple social media posts in seconds—powered by AI.
        </p>
        
        {/* Tagline */}
        <p className="text-lg md:text-xl font-medium text-primary mb-12 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          Create Once. Share Everywhere. Effortlessly.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:bg-primary-hover shadow-elegant text-lg px-8 py-6 h-auto group"
          >
            Notify Me When It's Ready
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary/30 text-primary hover:bg-accent text-lg px-8 py-6 h-auto group"
          >
            <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            Watch Demo
          </Button>
        </div>
        
        {/* Stats/Social Proof placeholder */}
        <div className="mt-16 pt-8 border-t border-border/50 animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <p className="text-sm text-muted-foreground mb-4">Join the waitlist</p>
          <div className="flex justify-center items-center space-x-8 text-sm text-muted-foreground">
            <span>🎬 Video Content</span>
            <span>🎙️ Podcasts</span>
            <span>📱 Social Media</span>
            <span>🤖 AI-Powered</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;