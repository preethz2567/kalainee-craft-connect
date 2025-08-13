import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PortalSelect = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-subtle pattern-paisley">
      {/* Header */}
      <div className="pt-8 pb-4 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center animate-glow">
              <span className="text-xl font-bold text-primary-foreground">कला</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-display bg-gradient-primary bg-clip-text text-transparent">
              KalaiNee
            </h1>
          </div>
        </div>
      </div>

      {/* Youth Message Banner */}
      <div className="px-4 mb-8">
        <div className="max-w-4xl mx-auto">
          <Card className="p-6 md:p-8 bg-gradient-heritage text-white border-none shadow-cultural">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-display mb-4">
                🎨 युवाओं के लिए विशेष संदेश
              </h2>
              <p className="text-lg md:text-xl mb-4 font-cultural">
                Help share the voice of the unseen and unheard artisans near you
              </p>
              <p className="text-base md:text-lg opacity-90">
                अपने आसपास के छुपे हुए कलाकारों की आवाज़ बनें | 
                Bring back the lost artisans of your family & community
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  #SaveHeritage
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  #ReviveArts
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  #YouthForCulture
                </Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Portal Selection */}
      <div className="px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display text-center mb-8 text-foreground">
            Choose Your Journey | अपना मार्ग चुनें
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Artist Portal */}
            <Card className="group p-6 md:p-8 hover:shadow-warm transition-all duration-500 hover:scale-105 cursor-pointer bg-card/80 backdrop-blur-sm border-border/50"
                  onClick={() => navigate('/artist-portal')}>
              <div className="text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center group-hover:animate-glow">
                  <span className="text-3xl md:text-4xl">🎨</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-display mb-4 text-foreground group-hover:bg-gradient-primary group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  Artist Portal
                </h3>
                <p className="text-lg font-cultural text-primary mb-2">
                  कलाकार पोर्टल
                </p>
                
                <div className="space-y-3 mb-6 text-left">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-muted-foreground">Showcase your traditional art & crafts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    <span className="text-muted-foreground">Connect with art lovers & collectors</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    <span className="text-muted-foreground">Organize workshops & cultural events</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-accent-warm rounded-full"></span>
                    <span className="text-muted-foreground">Upload videos, photos & stories</span>
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-primary hover:shadow-elegant transition-all group-hover:scale-105 font-cultural">
                  Join as Artist | कलाकार बनें
                </Button>
              </div>
            </Card>

            {/* Admirer Portal */}
            <Card className="group p-6 md:p-8 hover:shadow-cultural transition-all duration-500 hover:scale-105 cursor-pointer bg-card/80 backdrop-blur-sm border-border/50"
                  onClick={() => navigate('/admirer-portal')}>
              <div className="text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 bg-gradient-heritage rounded-full flex items-center justify-center group-hover:animate-glow">
                  <span className="text-3xl md:text-4xl">❤️</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-display mb-4 text-foreground group-hover:bg-gradient-heritage group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  Admirer Portal
                </h3>
                <p className="text-lg font-cultural text-secondary mb-2">
                  कला प्रेमी पोर्टल
                </p>
                
                <div className="space-y-3 mb-6 text-left">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    <span className="text-muted-foreground">Discover authentic Indian crafts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-muted-foreground">Follow your favorite artisans</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    <span className="text-muted-foreground">Attend workshops & cultural events</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-accent-warm rounded-full"></span>
                    <span className="text-muted-foreground">Share experiences & reviews</span>
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-heritage hover:shadow-elegant transition-all group-hover:scale-105 font-cultural">
                  Join as Admirer | प्रेमी बनें
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Cultural Footer */}
      <div className="px-4 pb-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 text-muted-foreground">
            <span className="w-16 h-px bg-gradient-primary"></span>
            <span className="font-cultural text-sm md:text-base">भारतीय संस्कृति को जीवित रखें</span>
            <span className="w-16 h-px bg-gradient-primary"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortalSelect;