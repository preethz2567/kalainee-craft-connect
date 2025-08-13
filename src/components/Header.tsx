import { Button } from "@/components/ui/button";
import { Heart, Palette, Globe } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <Palette className="h-8 w-8 text-primary animate-float" />
            <h1 className="text-2xl font-display font-bold bg-gradient-primary bg-clip-text text-transparent">
              KalaiNee
            </h1>
          </div>
          <div className="hidden md:flex items-center space-x-1 ml-4">
            <Globe className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Heritage Crafts Platform</span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#discover" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Discover
          </a>
          <a href="#workshops" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Workshops
          </a>
          <a href="#community" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Community
          </a>
          <a href="#events" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Events
          </a>
        </nav>

        <div className="flex items-center space-x-3">
          <Button variant="cultural" size="sm">
            <Heart className="h-4 w-4" />
            Join Community
          </Button>
          <Button variant="hero" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;