import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full py-6 px-4 relative z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src="/assets/crop.png"
            alt="Snipify AI Logo"
            className="h-12 w-auto filter drop-shadow-lg"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#signup" className="text-muted-foreground hover:text-foreground transition-colors">
            Early Access
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:inline-flex">
            Sign In
          </Button>
          <Button variant="default" className="bg-gradient-primary hover:bg-primary-hover shadow-glow">
            Get Notified
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;