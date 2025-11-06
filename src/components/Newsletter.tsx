import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, Mail, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Success!",
        description: "You've been added to our early access list.",
      });
      setEmail("");
    }
  };

  return (
    <section id="signup" className="py-24 px-4 bg-gradient-bg">
      <div className="max-w-4xl mx-auto text-center">
        {/* Background decoration */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        
        <div className="relative">
          <Badge variant="secondary" className="text-primary bg-accent border-primary/20 mb-6 animate-fade-up">
            <Bell className="w-4 h-4 mr-2" />
            Early Access
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Be the <span className="bg-gradient-hero bg-clip-text text-transparent">First</span> to Know!
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 animate-fade-up max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
            Sign up to get early access and exclusive updates from Snipify AI. No spam, just the good stuff.
          </p>
          
          <Card className="max-w-2xl mx-auto shadow-elegant border-border/50 bg-card/80 backdrop-blur-sm animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 h-14 text-lg border-border/50 focus:ring-primary"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="bg-gradient-primary hover:bg-primary-hover shadow-glow h-14 px-8 text-lg group whitespace-nowrap"
                  >
                    Notify Me
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  ✨ Get exclusive early access • 🎯 Priority beta testing • 📧 Product updates
                </p>
              </form>
              
              <div className="mt-8 pt-6 border-t border-border/50">
                <div className="flex justify-center items-center space-x-8 text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    No spam
                  </span>
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Unsubscribe anytime
                  </span>
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Early access
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;