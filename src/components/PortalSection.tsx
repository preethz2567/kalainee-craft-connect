import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Palette, 
  Heart, 
  Upload, 
  Video, 
  Users, 
  Calendar,
  Award,
  Camera,
  MessageCircle,
  Star
} from "lucide-react";

const PortalSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Choose Your <span className="bg-gradient-primary bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're a master artisan or someone who appreciates traditional crafts, 
            KalaiNee has the perfect space for you to connect and grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Artist Portal */}
          <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-warm group">
            <CardHeader className="pb-6">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-primary/10 rounded-full group-hover:animate-glow">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <Badge variant="secondary" className="bg-primary/20 text-primary">Artist Portal</Badge>
              </div>
              <CardTitle className="text-2xl font-display">For Artisans & Craftspeople</CardTitle>
              <CardDescription className="text-base">
                Showcase your traditional skills, connect with enthusiasts, and preserve your heritage craft for future generations.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Upload className="h-4 w-4 text-primary" />
                  <span className="text-sm">Upload Artwork</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Video className="h-4 w-4 text-primary" />
                  <span className="text-sm">Share Process</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-sm">Host Workshops</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4 text-primary" />
                  <span className="text-sm">Earn Recognition</span>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <h4 className="font-medium mb-3">Special Features:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Multi-language content support</li>
                  <li>• Revenue from workshops & sales</li>
                  <li>• Connect with heritage foundations</li>
                  <li>• Document traditional techniques</li>
                </ul>
              </div>

              <Button variant="artist" className="w-full" size="lg" asChild>
                <a href="/explore/artist">
                  Join as Artist
                  <Palette className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Admirer Portal */}
          <Card className="relative overflow-hidden border-2 hover:border-secondary/50 transition-all duration-300 hover:shadow-cultural group">
            <CardHeader className="pb-6">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-secondary/10 rounded-full group-hover:animate-glow">
                  <Heart className="h-6 w-6 text-secondary" />
                </div>
                <Badge variant="outline" className="bg-secondary/20 text-secondary border-secondary/30">Admirer Portal</Badge>
              </div>
              <CardTitle className="text-2xl font-display">For Art Enthusiasts</CardTitle>
              <CardDescription className="text-base">
                Discover authentic traditional crafts, learn from master artisans, and support the preservation of cultural heritage.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Camera className="h-4 w-4 text-secondary" />
                  <span className="text-sm">Discover Arts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-secondary" />
                  <span className="text-sm">Follow Artists</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-secondary" />
                  <span className="text-sm">Attend Events</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4 text-secondary" />
                  <span className="text-sm">Community Chat</span>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <h4 className="font-medium mb-3">Special Features:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Learn traditional techniques online</li>
                  <li>• Purchase authentic handmade items</li>
                  <li>• Support artisan communities</li>
                  <li>• Cultural heritage education</li>
                </ul>
              </div>

              <Button variant="admirer" className="w-full" size="lg" asChild>
                <a href="/explore/admirer">
                  Join as Admirer
                  <Heart className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Youth Outreach Section */}
        <div className="mt-16">
          <Card className="relative overflow-hidden bg-gradient-warm p-8 text-center shadow-cultural border-none">
            <div className="absolute inset-0 pattern-mandala opacity-20"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center p-4 bg-white/20 rounded-full mb-6">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                Calling All Young Heritage Champions!
              </h3>
              <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
                Do you know talented artisans in your family or community whose skills are waiting to be discovered? 
                Help us bring them into the spotlight and preserve our cultural treasures together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                  Nominate an Artisan
                </Button>
                <Button variant="outline" size="lg" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                  Share Their Story
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PortalSection;