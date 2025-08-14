import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  Bookmark,
  MoreHorizontal,
  MapPin,
  Clock,
  Play,
  Camera,
  Upload,
  TrendingUp,
  Filter,
  Globe,
  Award,
  Users,
  Star
} from "lucide-react";

const Feed = () => {
  const [filter, setFilter] = useState("all");

  const samplePosts = [
    {
      id: 1,
      author: {
        name: "Meera Devi",
        avatar: "/placeholder.svg",
        location: "Madhubani, Bihar",
        verified: true,
        craft: "Madhubani Artist"
      },
      content: {
        type: "image",
        text: "Just completed this intricate Madhubani painting depicting the tree of life. Each stroke carries the essence of our ancient traditions. This piece took me 3 weeks to complete, using natural pigments and traditional brushes passed down from my grandmother.",
        media: "/placeholder.svg",
        tags: ["#MadhubaniArt", "#TraditionalPainting", "#BiharHeritage"]
      },
      engagement: {
        likes: 1247,
        comments: 89,
        shares: 156,
        bookmarks: 234,
        isLiked: false,
        isBookmarked: true
      },
      metadata: {
        timestamp: "2 hours ago",
        trending: true
      }
    },
    {
      id: 2,
      author: {
        name: "Ravi Kansara",
        avatar: "/placeholder.svg",
        location: "Jaipur, Rajasthan",
        verified: true,
        craft: "Blue Pottery Master"
      },
      content: {
        type: "video",
        text: "Watch how I shape this traditional blue pottery vase using techniques that are over 400 years old. The clay preparation alone takes 2 days, but the result is this beautiful piece that captures the essence of Rajasthani craftsmanship.",
        media: "/placeholder.svg",
        tags: ["#BluePottery", "#Rajasthan", "#CeramicArt", "#Traditional"]
      },
      engagement: {
        likes: 892,
        comments: 67,
        shares: 98,
        bookmarks: 178,
        isLiked: true,
        isBookmarked: false
      },
      metadata: {
        timestamp: "5 hours ago",
        trending: false
      }
    },
    {
      id: 3,
      author: {
        name: "Priya Sharma",
        avatar: "/placeholder.svg",
        location: "Kanchipuram, Tamil Nadu",
        verified: false,
        craft: "Silk Weaver"
      },
      content: {
        type: "image",
        text: "The intricate zari work on this Kanchipuram silk saree represents months of dedicated craftsmanship. Each golden thread is hand-woven with patterns that tell stories of our cultural heritage. Supporting traditional weavers means preserving these timeless arts.",
        media: "/placeholder.svg",
        tags: ["#KanchipuramSilk", "#Handloom", "#ZariWork", "#TextileHeritage"]
      },
      engagement: {
        likes: 567,
        comments: 43,
        shares: 72,
        bookmarks: 145,
        isLiked: false,
        isBookmarked: false
      },
      metadata: {
        timestamp: "1 day ago",
        trending: false
      }
    }
  ];

  const trendingTopics = [
    "#MadhubaniArt",
    "#HandloomIndia", 
    "#PotteryTradition",
    "#SustainableCrafts",
    "#HeritagePreservation"
  ];

  const suggestedArtisans = [
    {
      name: "Lakshmi Devi",
      craft: "Warli Painting",
      location: "Maharashtra",
      followers: "2.3K"
    },
    {
      name: "Deepak Roy",
      craft: "Wood Carving",
      location: "West Bengal",
      followers: "1.8K"
    },
    {
      name: "Anita Kumari",
      craft: "Phulkari Embroidery",
      location: "Punjab",
      followers: "1.5K"
    }
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      
      {/* Youth Message Banner */}
      <section className="py-8 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
              Share the Voice of the Unseen and Unheard
            </h2>
            <p className="text-white/90 max-w-3xl mx-auto">
              Help us discover and celebrate the talented artisans in your neighborhood. 
              Every share, every story brings us closer to preserving our cultural heritage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                <Camera className="h-4 w-4 mr-2" />
                Share an Artist's Story
              </Button>
              <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                <MapPin className="h-4 w-4 mr-2" />
                Find Local Artisans
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Feed */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Left Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                    Trending
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {trendingTopics.map((topic, index) => (
                    <div key={index} className="p-2 rounded hover:bg-muted cursor-pointer">
                      <span className="text-primary font-medium">{topic}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Users className="h-5 w-5 mr-2 text-secondary" />
                    Suggested Artisans
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {suggestedArtisans.map((artisan, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg" />
                          <AvatarFallback>{artisan.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-sm">{artisan.name}</p>
                          <p className="text-xs text-muted-foreground">{artisan.craft}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Follow
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Main Feed */}
            <div className="lg:col-span-2 space-y-6">
              {/* Create Post */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback>YU</AvatarFallback>
                    </Avatar>
                    <Input placeholder="Share your craft story or discover an artisan..." className="flex-1" />
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Camera className="h-4 w-4 mr-1" />
                        Photo
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Play className="h-4 w-4 mr-1" />
                        Video
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MapPin className="h-4 w-4 mr-1" />
                        Location
                      </Button>
                    </div>
                    <Button>
                      <Upload className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Filter Options */}
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <Button 
                        variant={filter === "all" ? "default" : "ghost"} 
                        size="sm"
                        onClick={() => setFilter("all")}
                      >
                        All Posts
                      </Button>
                      <Button 
                        variant={filter === "following" ? "default" : "ghost"} 
                        size="sm"
                        onClick={() => setFilter("following")}
                      >
                        Following
                      </Button>
                      <Button 
                        variant={filter === "trending" ? "default" : "ghost"} 
                        size="sm"
                        onClick={() => setFilter("trending")}
                      >
                        Trending
                      </Button>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Filter className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Posts */}
              {samplePosts.map((post) => (
                <Card key={post.id} className="overflow-hidden">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarImage src={post.author.avatar} />
                          <AvatarFallback>
                            {post.author.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold">{post.author.name}</h3>
                            {post.author.verified && (
                              <Badge variant="secondary" className="text-xs">
                                <Award className="h-3 w-3 mr-1" />
                                Verified
                              </Badge>
                            )}
                            {post.metadata.trending && (
                              <Badge variant="destructive" className="text-xs">
                                <TrendingUp className="h-3 w-3 mr-1" />
                                Trending
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {post.author.craft} • {post.author.location}
                          </p>
                          <div className="flex items-center text-xs text-muted-foreground mt-1">
                            <Clock className="h-3 w-3 mr-1" />
                            {post.metadata.timestamp}
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-foreground leading-relaxed">
                      {post.content.text}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {post.content.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-primary cursor-pointer hover:bg-primary hover:text-primary-foreground">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Media Content */}
                    <div className="relative">
                      {post.content.type === "video" ? (
                        <div className="aspect-video bg-gradient-subtle rounded-lg flex items-center justify-center relative">
                          <Play className="h-16 w-16 text-white bg-black/50 rounded-full p-4 cursor-pointer hover:bg-black/70 transition-colors" />
                          <Badge className="absolute top-2 left-2">Video</Badge>
                        </div>
                      ) : (
                        <div className="aspect-video bg-gradient-heritage rounded-lg flex items-center justify-center">
                          <Camera className="h-16 w-16 text-white opacity-80" />
                        </div>
                      )}
                    </div>

                    <Separator />

                    {/* Engagement */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className={`space-x-2 ${post.engagement.isLiked ? 'text-red-500' : ''}`}
                        >
                          <Heart className={`h-4 w-4 ${post.engagement.isLiked ? 'fill-current' : ''}`} />
                          <span>{post.engagement.likes}</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="space-x-2">
                          <MessageCircle className="h-4 w-4" />
                          <span>{post.engagement.comments}</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="space-x-2">
                          <Share2 className="h-4 w-4" />
                          <span>{post.engagement.shares}</span>
                        </Button>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className={post.engagement.isBookmarked ? 'text-primary' : ''}
                      >
                        <Bookmark className={`h-4 w-4 ${post.engagement.isBookmarked ? 'fill-current' : ''}`} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="bg-gradient-warm text-white">
                <CardContent className="p-6 text-center">
                  <Globe className="h-12 w-12 mx-auto mb-4 opacity-90" />
                  <h3 className="text-lg font-bold mb-2">Heritage Impact</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Your posts have reached 12,847 people this month, helping preserve traditional crafts
                  </p>
                  <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30" size="sm">
                    View Analytics
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Star className="h-5 w-5 mr-2 text-accent" />
                    Featured Craft
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-square bg-gradient-heritage rounded-lg mb-4 flex items-center justify-center">
                    <Award className="h-12 w-12 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">Dhokra Metal Casting</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    An ancient art form from tribal communities, using lost-wax casting techniques
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Artwork
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Users className="h-4 w-4 mr-2" />
                    Find Artisans
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <MapPin className="h-4 w-4 mr-2" />
                    Explore Nearby
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

export default Feed;