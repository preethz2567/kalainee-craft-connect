import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Palette, Calendar, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center pattern-paisley">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight">
                Preserving
                <span className="bg-gradient-primary bg-clip-text text-transparent block">
                  Indian Heritage
                </span>
                One Craft at a Time
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg font-cultural">
                Connect with master artisans, learn traditional crafts, and help preserve India's rich cultural heritage for future generations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group" asChild>
                <a href="/explore/artist">
                  Explore as Artist
                  <Palette className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                </a>
              </Button>
              <Button variant="cultural" size="xl" className="group" asChild>
                <a href="/explore/admirer">
                  Join as Admirer
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Artisans</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Craft Forms</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Works</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">Languages</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-cultural animate-float">
              <img 
                src={heroImage} 
                alt="Traditional Indian artisans creating beautiful crafts" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <Card className="absolute -bottom-4 -left-4 p-4 bg-card/95 backdrop-blur shadow-elegant animate-glow">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Users className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">Active Community</p>
                  <p className="text-xs text-muted-foreground">Join 2,000+ members</p>
                </div>
              </div>
            </Card>

            <Card className="absolute -top-4 -right-4 p-4 bg-card/95 backdrop-blur shadow-elegant">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-accent/20 rounded-full">
                  <Calendar className="h-4 w-4 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-medium text-sm">Live Workshop</p>
                  <p className="text-xs text-muted-foreground">Pottery - Today 3 PM</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;