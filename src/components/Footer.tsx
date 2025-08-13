import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Palette, 
  Heart, 
  Mail, 
  MapPin, 
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Youtube
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Palette className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-display font-bold">KalaiNee</h3>
            </div>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed">
              Preserving India's rich cultural heritage by connecting traditional artisans 
              with art enthusiasts worldwide.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="text-secondary-foreground/60 hover:text-primary">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-secondary-foreground/60 hover:text-primary">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-secondary-foreground/60 hover:text-primary">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-secondary-foreground/60 hover:text-primary">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#discover" className="text-secondary-foreground/80 hover:text-primary transition-colors">Discover Crafts</a></li>
              <li><a href="#artists" className="text-secondary-foreground/80 hover:text-primary transition-colors">Meet Artists</a></li>
              <li><a href="#workshops" className="text-secondary-foreground/80 hover:text-primary transition-colors">Workshops</a></li>
              <li><a href="#events" className="text-secondary-foreground/80 hover:text-primary transition-colors">Cultural Events</a></li>
              <li><a href="#heritage" className="text-secondary-foreground/80 hover:text-primary transition-colors">Heritage Library</a></li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Community</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#join" className="text-secondary-foreground/80 hover:text-primary transition-colors">Join as Artist</a></li>
              <li><a href="#admirer" className="text-secondary-foreground/80 hover:text-primary transition-colors">Become Admirer</a></li>
              <li><a href="#youth" className="text-secondary-foreground/80 hover:text-primary transition-colors">Youth Program</a></li>
              <li><a href="#support" className="text-secondary-foreground/80 hover:text-primary transition-colors">Support Artisans</a></li>
              <li><a href="#volunteer" className="text-secondary-foreground/80 hover:text-primary transition-colors">Volunteer</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Connect With Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-secondary-foreground/80">hello@kalainee.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-secondary-foreground/80">+91 9876543210</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-secondary-foreground/80">
                  Cultural Heritage Center<br />
                  New Delhi, India
                </span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-secondary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-secondary-foreground/60">
            © 2024 KalaiNee. Preserving Heritage, Empowering Artisans.
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <a href="#privacy" className="text-secondary-foreground/60 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-secondary-foreground/60 hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#accessibility" className="text-secondary-foreground/60 hover:text-primary transition-colors">
              Accessibility
            </a>
          </div>
        </div>

        {/* Cultural Quote */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 text-sm text-secondary-foreground/70 italic">
            <Heart className="h-4 w-4 text-primary" />
            <span>"कला में संस्कृति का वास है" - Culture resides in art</span>
            <Heart className="h-4 w-4 text-primary" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;