import { Twitter, Linkedin, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-4 bg-card border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8">
            <img
              src="/assets/crop.png"
              alt="Snipify AI Logo"
              className="h-16 w-auto mx-auto mb-4 filter drop-shadow-lg"
            />
            <p className="text-muted-foreground italic">
              Your content, smarter, faster, everywhere.
            </p>
          </div>
          
          {/* Social Links */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-6">
              <a 
                href="#" 
                className="w-12 h-12 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-colors group"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-colors group"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                Features
              </a>
              <a href="#signup" className="text-muted-foreground hover:text-primary transition-colors">
                Early Access
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              © 2025 Snipify AI. All rights reserved. Coming soon to revolutionize your content workflow.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
