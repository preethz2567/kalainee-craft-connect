import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Search, 
  MapPin, 
  Star, 
  Calendar, 
  Users, 
  Heart,
  BookOpen,
  Camera,
  Filter,
  ShoppingBag,
  Play,
  MessageCircle,
  Trophy
} from "lucide-react";

const AdmirerExplore = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const sampleCollections = [
    {
      id: 1,
      title: "Traditional Pottery of India",
      description: "Explore the rich heritage of Indian pottery across different regions",
      items: 24,
      followers: 1250,
      image: "/placeholder.svg",
      curator: "Heritage Foundation"
    },
    {
      id: 2,
      title: "Textile Treasures",
      description: "Handwoven fabrics and intricate embroidery from master craftspeople",
      items: 18,
      followers: 890,
      image: "/placeholder.svg",
      curator: "Craft Collective"
    },
    {
      id: 3,
      title: "Metal Craft Mastery",
      description: "Bronze, brass, and silver work showcasing ancient techniques",
      items: 15,
      followers: 567,
      image: "/placeholder.svg",
      curator: "Artisan Network"
    }
  ];

  const featuredArtisans = [
    {
      id: 1,
      name: "Lakshmi Devi",
      craft: "Warli Painting",
      location: "Maharashtra",
      followers: 2340,
      works: 45,
      rating: 4.9
    },
    {
      id: 2,
      name: "Ravi Kansara",
      craft: "Blue Pottery",
      location: "Rajasthan",
      followers: 1890,
      works: 38,
      rating: 4.8
    },
    {
      id: 3,
      name: "Deepika Rao",
      craft: "Kalamkari",
      location: "Andhra Pradesh",
      followers: 1567,
      works: 52,
      rating: 4.9
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Discover & Connect
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Immerse yourself in India's living heritage. Learn, collect, and support authentic traditional crafts
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="Search collections, artists, or craft types..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-6 text-lg bg-white/95 backdrop-blur border-white/20"
            />
            <Button variant="secondary" className="absolute right-2 top-1/2 transform -translate-y-1/2">
              Explore
            </Button>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="cursor-pointer hover:bg-secondary hover:text-secondary-foreground">
                <Filter className="h-3 w-3 mr-1" />
                All Categories
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-secondary hover:text-secondary-foreground">
                Collections
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-secondary hover:text-secondary-foreground">
                Workshops
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-secondary hover:text-secondary-foreground">
                Marketplace
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-secondary hover:text-secondary-foreground">
                Stories
              </Badge>
            </div>
            <Button variant="outline" size="sm">
              <Heart className="h-4 w-4 mr-2" />
              My Favorites
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-8">
              {/* Featured Collections */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-display font-bold">Curated Collections</h2>
                  <Button variant="outline">
                    <Camera className="h-4 w-4 mr-2" />
                    Create Collection
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {sampleCollections.map((collection) => (
                    <Card key={collection.id} className="overflow-hidden hover:shadow-cultural transition-all duration-300 group">
                      <div className="aspect-video bg-gradient-heritage flex items-center justify-center">
                        <BookOpen className="h-16 w-16 text-white opacity-80" />
                      </div>
                      <CardHeader>
                        <CardTitle className="group-hover:text-primary transition-colors">
                          {collection.title}
                        </CardTitle>
                        <CardDescription>{collection.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                          <span>{collection.items} items</span>
                          <span className="flex items-center">
                            <Users className="h-3 w-3 mr-1" />
                            {collection.followers} followers
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">by {collection.curator}</span>
                          <Button size="sm" variant="outline">
                            Explore
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Featured Artisans */}
              <div>
                <h2 className="text-2xl font-display font-bold mb-6">Featured Artisans</h2>
                <div className="space-y-4">
                  {featuredArtisans.map((artisan) => (
                    <Card key={artisan.id} className="hover:shadow-warm transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                              <Trophy className="h-8 w-8 text-white" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg">{artisan.name}</h3>
                              <p className="text-muted-foreground flex items-center">
                                <MapPin className="h-3 w-3 mr-1" />
                                {artisan.location} • {artisan.craft}
                              </p>
                              <div className="flex items-center space-x-4 mt-1 text-sm text-muted-foreground">
                                <span>{artisan.followers} followers</span>
                                <span>{artisan.works} works</span>
                                <span className="flex items-center">
                                  <Star className="h-3 w-3 mr-1 fill-current text-yellow-500" />
                                  {artisan.rating}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Heart className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <MessageCircle className="h-4 w-4" />
                            </Button>
                            <Button size="sm">
                              Follow
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Learning Center */}
              <Card className="bg-gradient-subtle">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Play className="h-5 w-5 mr-2 text-primary" />
                    Learning Center
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    <h4 className="font-semibold text-sm">Pottery Basics Course</h4>
                    <p className="text-xs text-muted-foreground">Free • 12 lessons</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    <h4 className="font-semibold text-sm">Understanding Madhubani</h4>
                    <p className="text-xs text-muted-foreground">Free • 8 lessons</p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Browse All Courses
                  </Button>
                </CardContent>
              </Card>

              {/* Marketplace */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ShoppingBag className="h-5 w-5 mr-2 text-secondary" />
                    Authentic Marketplace
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-semibold text-sm">Handwoven Saree</h4>
                    <p className="text-xs text-muted-foreground">₹4,500 • Authentic</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-semibold text-sm">Blue Pottery Vase</h4>
                    <p className="text-xs text-muted-foreground">₹1,200 • Certified</p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Explore Marketplace
                  </Button>
                </CardContent>
              </Card>

              {/* Upcoming Events */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-accent" />
                    Nearby Events
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-gradient-warm text-white rounded-lg">
                    <h4 className="font-semibold text-sm">Craft Fair Delhi</h4>
                    <p className="text-xs opacity-90">This Weekend</p>
                    <p className="text-xs opacity-90">India Gate Lawns</p>
                  </div>
                  <div className="p-3 bg-gradient-heritage text-white rounded-lg">
                    <h4 className="font-semibold text-sm">Heritage Walk</h4>
                    <p className="text-xs opacity-90">March 20</p>
                    <p className="text-xs opacity-90">Old Delhi</p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    View All Events
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdmirerExplore;