import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scissors, Share2, Palette, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Scissors,
      title: "AI-Powered Content Snipping",
      description: "Automatically identify the best moments in your videos and podcasts with advanced AI algorithms.",
      badge: "Smart AI"
    },
    {
      icon: Share2,
      title: "Multi-Platform Repurposing",
      description: "Seamlessly share clips across YouTube, TikTok, Instagram, LinkedIn, and more with optimized formats.",
      badge: "Cross-Platform"
    },
    {
      icon: Palette,
      title: "Custom Templates & Branding",
      description: "Make every snippet look professional and on-brand with customizable templates and styling options.",
      badge: "Brand-Ready"
    },
    {
      icon: Zap,
      title: "Smart Automation",
      description: "Set up workflows to save time on content repurposing and focus on creating amazing content.",
      badge: "Automated"
    }
  ];

  return (
    <section id="features" className="py-24 px-4 bg-gradient-bg">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="text-primary bg-accent border-primary/20 mb-4">
            Features Preview
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful Features
            <span className="bg-gradient-hero bg-clip-text text-transparent block">
              Coming Soon
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get a sneak peek at the amazing features that will transform how you create and share content.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur-sm"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animation: 'fade-up 0.6s ease-out both'
              }}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      <Badge variant="secondary" className="text-xs text-primary bg-accent">
                        {feature.badge}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;