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
  Upload,
  BookOpen,
  Award,
  Filter,
  Heart,
  Share2
} from "lucide-react";

const ArtistExplore = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const samplePosts = [
    {
      id: 1,
      artist: "Meera Devi",
      location: "Rajasthan",
      craft: "Madhubani Painting",
      image: "/placeholder.svg",
      title: "Traditional Madhubani on Canvas",
      description: "A beautiful representation of nature and mythology in vibrant colors",
      likes: 234,
      shares: 45,
      date: "2 days ago"
    },
    {
      id: 2,
      artist: "Ramesh Kumar",
      location: "Gujarat",
      craft: "Block Printing",
      image: "/placeholder.svg",
      title: "Hand-carved Wooden Blocks",
      description: "Traditional Ajrakh printing process demonstration",
      likes: 187,
      shares: 32,
      date: "1 week ago"
    },
    {
      id: 3,
      artist: "Priya Sharma",
      location: "Tamil Nadu",
      craft: "Bronze Sculpture",
      image: "/placeholder.svg",
      title: "Lost Wax Casting Technique",
      description: "Ancient bronze casting method passed down through generations",
      likes: 156,
      shares: 28,
      date: "3 days ago"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-heritage">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Explore Artists & Crafts
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Discover master artisans, learn traditional techniques, and connect with India's rich heritage
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="Search for artists, crafts, or locations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-6 text-lg bg-white/95 backdrop-blur border-white/20"
            />
            <Button variant="default" className="absolute right-2 top-1/2 transform -translate-y-1/2">
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                <Filter className="h-3 w-3 mr-1" />
                All Crafts
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                Pottery
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                Textiles
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                Paintings
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                Sculptures
              </Badge>
            </div>
            <Button variant="outline" size="sm">
              <MapPin className="h-4 w-4 mr-2" />
              Near Me
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Feed */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-display font-bold">Latest from Artists</h2>
                <Button variant="outline">
                  <Upload className="h-4 w-4 mr-2" />
                  Share Your Work
                </Button>
              </div>

              {samplePosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-warm transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                          <Award className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{post.artist}</h3>
                          <p className="text-sm text-muted-foreground flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {post.location} • {post.craft}
                          </p>
                        </div>
                      </div>
                      <Badge variant="secondary">{post.date}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{post.title}</h4>
                      <p className="text-muted-foreground">{post.description}</p>
                    </div>
                    
                    <div className="aspect-video bg-gradient-subtle rounded-lg flex items-center justify-center">
                      <BookOpen className="h-16 w-16 text-muted-foreground" />
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="sm">
                          <Heart className="h-4 w-4 mr-1" />
                          {post.likes}
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Share2 className="h-4 w-4 mr-1" />
                          {post.shares}
                        </Button>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Trending Crafts */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Star className="h-5 w-5 mr-2 text-primary" />
                    Trending Crafts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {["Pottery", "Madhubani Art", "Block Printing", "Brass Work", "Embroidery"].map((craft, index) => (
                    <div key={index} className="flex items-center justify-between p-2 rounded hover:bg-muted cursor-pointer">
                      <span className="font-medium">{craft}</span>
                      <Badge variant="outline" className="text-xs">#{index + 1}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Upcoming Events */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-secondary" />
                    Upcoming Workshops
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-gradient-subtle rounded-lg">
                    <h4 className="font-semibold text-sm">Pottery Basics</h4>
                    <p className="text-xs text-muted-foreground">Tomorrow, 10 AM</p>
                    <p className="text-xs">Online Workshop</p>
                  </div>
                  <div className="p-3 bg-gradient-subtle rounded-lg">
                    <h4 className="font-semibold text-sm">Madhubani Painting</h4>
                    <p className="text-xs text-muted-foreground">March 15, 2 PM</p>
                    <p className="text-xs">Delhi Community Center</p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    View All Events
                  </Button>
                </CardContent>
              </Card>

              {/* Community Stats */}
              <Card className="bg-gradient-warm text-white">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 mx-auto mb-4 opacity-90" />
                  <h3 className="text-2xl font-bold mb-2">2,847</h3>
                  <p className="opacity-90">Active Artists</p>
                  <Button variant="outline" className="mt-4 bg-white/20 border-white/30 text-white hover:bg-white/30">
                    Join Community
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

export default ArtistExplore;