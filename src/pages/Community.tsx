import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Users, 
  MessageCircle, 
  Calendar, 
  MapPin, 
  Heart, 
  Share2,
  Plus,
  Search,
  Filter,
  Globe,
  Award,
  Camera,
  BookOpen,
  Star,
  Clock,
  UserPlus
} from "lucide-react";

const Community = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const communityGroups = [
    {
      id: 1,
      name: "Madhubani Artists Circle",
      description: "A community for traditional Madhubani painting enthusiasts and practitioners",
      members: 1248,
      posts: 567,
      category: "Art Form",
      isActive: true,
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Heritage Preservation Society",
      description: "Dedicated to preserving and promoting traditional Indian crafts",
      members: 2156,
      posts: 892,
      category: "General",
      isActive: true,
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Textile Traders Network",
      description: "Connect with fellow textile artisans and buyers across India",
      members: 987,
      posts: 234,
      category: "Business",
      isActive: false,
      image: "/placeholder.svg"
    }
  ];

  const recentDiscussions = [
    {
      id: 1,
      title: "Best practices for natural dye preparation",
      author: "Priya Sharma",
      group: "Textile Traders Network",
      replies: 23,
      likes: 45,
      lastActive: "2 hours ago",
      isHot: true
    },
    {
      id: 2,
      title: "Seeking guidance for first pottery wheel purchase",
      author: "Rajesh Kumar",
      group: "Pottery Enthusiasts",
      replies: 15,
      likes: 32,
      lastActive: "4 hours ago",
      isHot: false
    },
    {
      id: 3,
      title: "Traditional vs modern marketing approaches",
      author: "Meera Devi",
      group: "Heritage Preservation Society",
      replies: 38,
      likes: 67,
      lastActive: "1 day ago",
      isHot: true
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Virtual Craft Fair 2024",
      organizer: "KalaiNee Community",
      date: "March 15-17, 2024",
      time: "10:00 AM onwards",
      location: "Online",
      attendees: 234,
      type: "Virtual"
    },
    {
      id: 2,
      title: "Traditional Pottery Workshop",
      organizer: "Delhi Craft Center",
      date: "March 20, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Connaught Place, Delhi",
      attendees: 45,
      type: "In-Person"
    },
    {
      id: 3,
      title: "Heritage Walk & Documentation",
      organizer: "Heritage Preservation Society",
      date: "March 25, 2024",
      time: "9:00 AM - 12:00 PM",
      location: "Old Delhi",
      attendees: 78,
      type: "In-Person"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Join Our Community
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Connect with fellow artisans, craft enthusiasts, and heritage preservationists from across India
            </p>
          </div>
          
          {/* Community Stats */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">12,847</div>
              <div className="text-white/80">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">2,345</div>
              <div className="text-white/80">Discussion Posts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">156</div>
              <div className="text-white/80">Community Groups</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">89</div>
              <div className="text-white/80">Monthly Events</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="groups" className="space-y-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <TabsList className="grid w-full sm:w-auto grid-cols-3">
                <TabsTrigger value="groups">Groups</TabsTrigger>
                <TabsTrigger value="discussions">Discussions</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
              </TabsList>
              
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search community..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>
                <Button variant="outline">
                  <Filter className="h-4 w-4" />
                </Button>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Create
                </Button>
              </div>
            </div>

            <TabsContent value="groups" className="space-y-6">
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-display font-bold">Community Groups</h2>
                    <Button variant="outline">
                      <UserPlus className="h-4 w-4 mr-2" />
                      Join Group
                    </Button>
                  </div>

                  {communityGroups.map((group) => (
                    <Card key={group.id} className="hover:shadow-cultural transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 bg-gradient-heritage rounded-lg flex items-center justify-center">
                              <Users className="h-8 w-8 text-white" />
                            </div>
                            <div>
                              <CardTitle className="flex items-center space-x-2">
                                <span>{group.name}</span>
                                {group.isActive && (
                                  <Badge variant="outline" className="bg-green-100 text-green-700 border-green-300">
                                    Active
                                  </Badge>
                                )}
                              </CardTitle>
                              <CardDescription>{group.description}</CardDescription>
                              <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                                <span className="flex items-center">
                                  <Users className="h-3 w-3 mr-1" />
                                  {group.members} members
                                </span>
                                <span className="flex items-center">
                                  <MessageCircle className="h-3 w-3 mr-1" />
                                  {group.posts} posts
                                </span>
                                <Badge variant="secondary" className="text-xs">
                                  {group.category}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          <Button variant="outline">
                            Join
                          </Button>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Star className="h-5 w-5 mr-2 text-primary" />
                        Featured Groups
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="p-3 border rounded-lg">
                        <h4 className="font-semibold text-sm">Artisan Mentorship</h4>
                        <p className="text-xs text-muted-foreground">1,234 members</p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <h4 className="font-semibold text-sm">Young Craft Innovators</h4>
                        <p className="text-xs text-muted-foreground">987 members</p>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        View All
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-primary text-white">
                    <CardContent className="p-6 text-center">
                      <Globe className="h-12 w-12 mx-auto mb-4 opacity-90" />
                      <h3 className="text-xl font-bold mb-2">Global Reach</h3>
                      <p className="opacity-90 text-sm mb-4">
                        Connect with artisans worldwide and showcase Indian heritage globally
                      </p>
                      <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="discussions" className="space-y-6">
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-display font-bold">Recent Discussions</h2>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Start Discussion
                    </Button>
                  </div>

                  {recentDiscussions.map((discussion) => (
                    <Card key={discussion.id} className="hover:shadow-warm transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="flex items-center space-x-2">
                              <span>{discussion.title}</span>
                              {discussion.isHot && (
                                <Badge variant="destructive" className="text-xs">
                                  Hot
                                </Badge>
                              )}
                            </CardTitle>
                            <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                              <span>by {discussion.author}</span>
                              <span>in {discussion.group}</span>
                              <span className="flex items-center">
                                <Clock className="h-3 w-3 mr-1" />
                                {discussion.lastActive}
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span className="flex items-center">
                              <MessageCircle className="h-3 w-3 mr-1" />
                              {discussion.replies} replies
                            </span>
                            <span className="flex items-center">
                              <Heart className="h-3 w-3 mr-1" />
                              {discussion.likes} likes
                            </span>
                          </div>
                          <Button variant="outline" size="sm">
                            Join Discussion
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <MessageCircle className="h-5 w-5 mr-2 text-secondary" />
                        Discussion Guidelines
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                      <p>• Be respectful and supportive</p>
                      <p>• Share authentic experiences</p>
                      <p>• Credit original sources</p>
                      <p>• Use appropriate language</p>
                      <p>• Help preserve cultural heritage</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Award className="h-5 w-5 mr-2 text-accent" />
                        Top Contributors
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {["Meera Devi", "Rajesh Kumar", "Priya Sharma"].map((name, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="font-medium">{name}</span>
                          <Badge variant="outline">#{index + 1}</Badge>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="events" className="space-y-6">
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-display font-bold">Upcoming Events</h2>
                    <Button>
                      <Calendar className="h-4 w-4 mr-2" />
                      Create Event
                    </Button>
                  </div>

                  {upcomingEvents.map((event) => (
                    <Card key={event.id} className="hover:shadow-elegant transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="flex items-center space-x-2">
                              <span>{event.title}</span>
                              <Badge variant={event.type === "Virtual" ? "secondary" : "outline"}>
                                {event.type}
                              </Badge>
                            </CardTitle>
                            <CardDescription>Organized by {event.organizer}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                              <span>{event.location}</span>
                            </div>
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                              <span>{event.attendees} attending</span>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Heart className="h-4 w-4 mr-1" />
                              Interested
                            </Button>
                            <Button variant="outline" size="sm">
                              <Share2 className="h-4 w-4 mr-1" />
                              Share
                            </Button>
                            <Button size="sm">
                              Attend
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-primary" />
                        Event Categories
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {["Workshops", "Exhibitions", "Cultural Festivals", "Online Sessions", "Market Fairs"].map((category, index) => (
                        <div key={index} className="p-2 rounded hover:bg-muted cursor-pointer">
                          <span className="font-medium">{category}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-heritage text-white">
                    <CardContent className="p-6 text-center">
                      <Calendar className="h-12 w-12 mx-auto mb-4 opacity-90" />
                      <h3 className="text-xl font-bold mb-2">Monthly Events</h3>
                      <p className="opacity-90 text-sm mb-4">
                        Join our regular community gatherings and skill-sharing sessions
                      </p>
                      <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                        View Calendar
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Community;