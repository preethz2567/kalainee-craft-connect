import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AdmirerPortal = () => {
  const [activeTab, setActiveTab] = useState("discover");

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-heritage rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-white">❤️</span>
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-display bg-gradient-heritage bg-clip-text text-transparent">
                  KalaiNee
                </h1>
                <p className="text-xs text-muted-foreground">Admirer Portal</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 md:gap-4">
              <Button variant="outline" size="sm" className="text-xs md:text-sm">
                🔔 Updates
              </Button>
              <div className="w-8 h-8 bg-gradient-heritage rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-white">A</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-card/50 border-b border-border/30">
        <div className="max-w-7xl mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full grid grid-cols-2 md:grid-cols-5 h-auto p-1 bg-transparent">
              <TabsTrigger value="discover" className="data-[state=active]:bg-secondary/10 data-[state=active]:text-secondary py-3 text-xs md:text-sm">
                🔍 Discover
              </TabsTrigger>
              <TabsTrigger value="following" className="data-[state=active]:bg-secondary/10 data-[state=active]:text-secondary py-3 text-xs md:text-sm">
                👥 Following
              </TabsTrigger>
              <TabsTrigger value="events" className="data-[state=active]:bg-secondary/10 data-[state=active]:text-secondary py-3 text-xs md:text-sm">
                📅 Events
              </TabsTrigger>
              <TabsTrigger value="map" className="data-[state=active]:bg-secondary/10 data-[state=active]:text-secondary py-3 text-xs md:text-sm">
                🗺️ Craft Map
              </TabsTrigger>
              <TabsTrigger value="profile" className="data-[state=active]:bg-secondary/10 data-[state=active]:text-secondary py-3 text-xs md:text-sm">
                👤 Profile
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <Tabs value={activeTab} className="w-full">
          {/* Discover Tab */}
          <TabsContent value="discover" className="space-y-6">
            {/* Youth Message */}
            <Card className="p-4 md:p-6 bg-gradient-heritage text-white border-none">
              <h2 className="text-lg md:text-xl font-display mb-2">
                🌟 Help share the voice of unseen artisans near you
              </h2>
              <p className="text-sm md:text-base opacity-90">
                Discover authentic Indian crafts, support local artisans, and preserve our cultural heritage
              </p>
            </Card>

            {/* Search Bar */}
            <Card className="p-4">
              <div className="flex gap-3">
                <Input placeholder="Search for crafts, artists, or locations..." className="flex-1" />
                <Button className="bg-gradient-heritage">
                  🔍 Search
                </Button>
              </div>
            </Card>

            {/* Featured Artists */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="overflow-hidden group hover:shadow-cultural transition-all duration-300">
                <div className="h-48 bg-gradient-primary/20 flex items-center justify-center">
                  <span className="text-4xl">🏺</span>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">RS</span>
                    </div>
                    <div>
                      <h3 className="font-cultural">Ravi Sharma</h3>
                      <p className="text-sm text-muted-foreground">Pottery Master • Delhi</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Traditional pottery techniques passed down through generations
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="text-xs">#Pottery</Badge>
                    <Badge variant="secondary" className="text-xs">#Traditional</Badge>
                  </div>
                  <Button size="sm" className="w-full bg-gradient-primary">
                    Follow Artist
                  </Button>
                </div>
              </Card>

              <Card className="overflow-hidden group hover:shadow-cultural transition-all duration-300">
                <div className="h-48 bg-gradient-heritage/20 flex items-center justify-center">
                  <span className="text-4xl">🧵</span>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-heritage rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">MK</span>
                    </div>
                    <div>
                      <h3 className="font-cultural">Maya Krishnan</h3>
                      <p className="text-sm text-muted-foreground">Textile Artist • Chennai</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Handwoven sarees with traditional South Indian patterns
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="text-xs">#Textiles</Badge>
                    <Badge variant="secondary" className="text-xs">#Handwoven</Badge>
                  </div>
                  <Button size="sm" className="w-full bg-gradient-heritage">
                    Follow Artist
                  </Button>
                </div>
              </Card>

              <Card className="overflow-hidden group hover:shadow-cultural transition-all duration-300">
                <div className="h-48 bg-gradient-warm/20 flex items-center justify-center">
                  <span className="text-4xl">🎨</span>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-warm rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">AP</span>
                    </div>
                    <div>
                      <h3 className="font-cultural">Arjun Patel</h3>
                      <p className="text-sm text-muted-foreground">Painter • Rajasthan</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Miniature paintings depicting Rajasthani folk tales
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="text-xs">#Painting</Badge>
                    <Badge variant="secondary" className="text-xs">#Miniature</Badge>
                  </div>
                  <Button size="sm" className="w-full bg-gradient-warm">
                    Follow Artist
                  </Button>
                </div>
              </Card>
            </div>

            {/* Interest Categories */}
            <Card className="p-6">
              <h3 className="font-display text-lg mb-4">Explore by Interest</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {[
                  { emoji: "🏺", name: "Pottery" },
                  { emoji: "🧵", name: "Textiles" },
                  { emoji: "🎨", name: "Painting" },
                  { emoji: "💎", name: "Jewelry" },
                  { emoji: "🪵", name: "Woodwork" },
                  { emoji: "🏮", name: "Crafts" }
                ].map((interest) => (
                  <Button
                    key={interest.name}
                    variant="outline"
                    className="flex flex-col gap-2 h-auto p-4 hover:bg-primary/10"
                  >
                    <span className="text-2xl">{interest.emoji}</span>
                    <span className="text-xs">{interest.name}</span>
                  </Button>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* Following Tab */}
          <TabsContent value="following">
            <Card className="p-6 text-center">
              <h2 className="text-xl font-display mb-4">Following</h2>
              <p className="text-muted-foreground mb-4">Stay updated with your favorite artists</p>
              <Button className="bg-gradient-heritage">Discover Artists</Button>
            </Card>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events">
            <Card className="p-6 text-center">
              <h2 className="text-xl font-display mb-4">Cultural Events</h2>
              <p className="text-muted-foreground mb-4">Attend workshops and cultural gatherings</p>
              <Button className="bg-gradient-heritage">Browse Events</Button>
            </Card>
          </TabsContent>

          {/* Craft Map Tab */}
          <TabsContent value="map">
            <Card className="p-6">
              <h2 className="text-xl font-display mb-4">🗺️ Craft Spots Map</h2>
              <div className="h-96 bg-muted/20 rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
                <div className="text-center">
                  <span className="text-4xl mb-4 block">🗺️</span>
                  <p className="text-muted-foreground">Interactive map showing craft spots</p>
                  <p className="text-sm text-muted-foreground mt-2">Pin famous craft locations and art studios</p>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <Button size="sm" variant="outline">📍 Add Location</Button>
                <Button size="sm" variant="outline">🔍 Search Area</Button>
              </div>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <Card className="p-6 text-center">
              <h2 className="text-xl font-display mb-4">Your Profile</h2>
              <p className="text-muted-foreground mb-4">Manage your interests and preferences</p>
              <Button className="bg-gradient-heritage">Edit Profile</Button>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdmirerPortal;