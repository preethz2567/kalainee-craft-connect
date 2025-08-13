import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Globe, 
  Video, 
  Calendar, 
  Users, 
  Upload, 
  MessageSquare,
  Award,
  Camera,
  BookOpen,
  Mic
} from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Content in all major Indian languages with AI-powered translation for better accessibility.",
    color: "text-primary"
  },
  {
    icon: Upload,
    title: "Rich Content Upload",
    description: "Share videos, images, stories, and tutorials in any format. Our AI helps organize everything.",
    color: "text-accent-foreground"
  },
  {
    icon: Video,
    title: "Live Workshops",
    description: "Host and attend real-time workshops with screen sharing and interactive tools.",
    color: "text-secondary"
  },
  {
    icon: Users,
    title: "Community Building",
    description: "Follow artisans, join groups, and build meaningful connections with like-minded people.",
    color: "text-primary"
  },
  {
    icon: Calendar,
    title: "Event Organization",
    description: "Discover and organize cultural events, exhibitions, and craft fairs in your area.",
    color: "text-accent-foreground"
  },
  {
    icon: MessageSquare,
    title: "AI-Powered Chat",
    description: "Get help in your preferred language with our intelligent assistant that understands crafts.",
    color: "text-secondary"
  },
  {
    icon: Award,
    title: "Recognition System",
    description: "Earn badges and certificates for your contributions to heritage preservation.",
    color: "text-primary"
  },
  {
    icon: Camera,
    title: "AR Craft Scanner",
    description: "Use your camera to identify traditional crafts and learn about their origins and techniques.",
    color: "text-accent-foreground"
  },
  {
    icon: BookOpen,
    title: "Heritage Library",
    description: "Access a vast collection of documented traditional techniques and cultural stories.",
    color: "text-secondary"
  },
  {
    icon: Mic,
    title: "Voice Storytelling",
    description: "Share and listen to oral traditions and stories in local dialects and languages.",
    color: "text-primary"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 pattern-paisley">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Powerful Features for
            <span className="bg-gradient-heritage bg-clip-text text-transparent block">
              Cultural Preservation
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to connect, learn, and preserve India's rich artistic heritage
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto p-3 bg-muted/50 rounded-full group-hover:animate-glow transition-all">
                    <Icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-lg font-cultural">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-center text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* AI Features Highlight */}
        <div className="mt-16">
          <Card className="bg-gradient-heritage text-white p-8 border-none shadow-cultural">
            <div className="text-center">
              <h3 className="text-2xl font-display font-bold mb-4">
                Powered by Generative AI
              </h3>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="space-y-2">
                  <h4 className="font-semibold">Smart Content Organization</h4>
                  <p className="text-sm text-white/80">
                    AI automatically tags and categorizes your uploads by craft type, region, and technique
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Language Translation</h4>
                  <p className="text-sm text-white/80">
                    Real-time translation between all Indian languages for seamless communication
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Personalized Recommendations</h4>
                  <p className="text-sm text-white/80">
                    Discover new artists and crafts based on your interests and cultural background
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;