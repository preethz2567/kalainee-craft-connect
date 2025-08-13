import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ArtistPortal = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-primary-foreground">कला</span>
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-display bg-gradient-primary bg-clip-text text-transparent">
                  KalaiNee
                </h1>
                <p className="text-xs text-muted-foreground">Artist Portal</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 md:gap-4">
              <Button variant="outline" size="sm" className="text-xs md:text-sm">
                🔔 Notifications
              </Button>
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">A</span>
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
              <TabsTrigger value="home" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary py-3 text-xs md:text-sm">
                🏠 Home
              </TabsTrigger>
              <TabsTrigger value="create" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary py-3 text-xs md:text-sm">
                ➕ Create
              </TabsTrigger>
              <TabsTrigger value="events" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary py-3 text-xs md:text-sm">
                📅 Events
              </TabsTrigger>
              <TabsTrigger value="community" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary py-3 text-xs md:text-sm">
                👥 Community
              </TabsTrigger>
              <TabsTrigger value="profile" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary py-3 text-xs md:text-sm">
                👤 Profile
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <Tabs value={activeTab} className="w-full">
          {/* Home Tab */}
          <TabsContent value="home" className="space-y-6">
            {/* Youth Message */}
            <Card className="p-4 md:p-6 bg-gradient-heritage text-white border-none">
              <h2 className="text-lg md:text-xl font-display mb-2">
                🌟 Help share the voice of unseen artisans near you
              </h2>
              <p className="text-sm md:text-base opacity-90">
                Connect with fellow artists, showcase your heritage crafts, and keep our traditions alive
              </p>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="p-4 text-center hover:shadow-warm transition-all cursor-pointer">
                <div className="text-2xl mb-2">📸</div>
                <p className="text-sm font-cultural">Upload Media</p>
              </Card>
              <Card className="p-4 text-center hover:shadow-warm transition-all cursor-pointer">
                <div className="text-2xl mb-2">🎭</div>
                <p className="text-sm font-cultural">Create Workshop</p>
              </Card>
              <Card className="p-4 text-center hover:shadow-warm transition-all cursor-pointer">
                <div className="text-2xl mb-2">👥</div>
                <p className="text-sm font-cultural">Find Artists</p>
              </Card>
              <Card className="p-4 text-center hover:shadow-warm transition-all cursor-pointer">
                <div className="text-2xl mb-2">📍</div>
                <p className="text-sm font-cultural">Craft Spots</p>
              </Card>
            </div>

            {/* Recommended Content */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="font-display text-lg mb-4">🎯 Recommended for You</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white">
                      🏺
                    </div>
                    <div>
                      <p className="font-cultural">Pottery Workshop - Delhi</p>
                      <p className="text-sm text-muted-foreground">Tomorrow, 2 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <div className="w-12 h-12 bg-gradient-heritage rounded-full flex items-center justify-center text-white">
                      🧵
                    </div>
                    <div>
                      <p className="font-cultural">Textile Artist - Mumbai</p>
                      <p className="text-sm text-muted-foreground">Similar skills</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-display text-lg mb-4">📍 Nearby Events</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <p className="font-cultural">Heritage Festival</p>
                      <Badge variant="secondary">5 km</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Traditional craft exhibition</p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <p className="font-cultural">Artisan Market</p>
                      <Badge variant="secondary">12 km</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Weekly craft market</p>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Create Tab */}
          <TabsContent value="create" className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-display mb-6">Create New Content</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-cultural mb-2 block">Content Type</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <Button variant="outline" className="flex flex-col gap-2 h-auto p-4">
                      <span className="text-2xl">📸</span>
                      <span className="text-xs">Photo</span>
                    </Button>
                    <Button variant="outline" className="flex flex-col gap-2 h-auto p-4">
                      <span className="text-2xl">🎥</span>
                      <span className="text-xs">Video</span>
                    </Button>
                    <Button variant="outline" className="flex flex-col gap-2 h-auto p-4">
                      <span className="text-2xl">📝</span>
                      <span className="text-xs">Story</span>
                    </Button>
                    <Button variant="outline" className="flex flex-col gap-2 h-auto p-4">
                      <span className="text-2xl">🎭</span>
                      <span className="text-xs">Workshop</span>
                    </Button>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-cultural mb-2 block">Title</label>
                  <Input placeholder="Enter content title..." className="w-full" />
                </div>

                <div>
                  <label className="text-sm font-cultural mb-2 block">Description</label>
                  <Textarea placeholder="Describe your content..." className="w-full min-h-[100px]" />
                </div>

                <div>
                  <label className="text-sm font-cultural mb-2 block">Tags</label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="secondary">#Pottery</Badge>
                    <Badge variant="secondary">#Traditional</Badge>
                    <Badge variant="secondary">#Handmade</Badge>
                  </div>
                  <Input placeholder="Add tags..." className="w-full" />
                </div>

                <Button className="w-full bg-gradient-primary">
                  Publish Content
                </Button>
              </div>
            </Card>
          </TabsContent>

          {/* Other tabs content would go here */}
          <TabsContent value="events">
            <Card className="p-6 text-center">
              <h2 className="text-xl font-display mb-4">Events & Workshops</h2>
              <p className="text-muted-foreground mb-4">Organize and discover cultural events</p>
              <Button className="bg-gradient-primary">Create New Event</Button>
            </Card>
          </TabsContent>

          <TabsContent value="community">
            <Card className="p-6 text-center">
              <h2 className="text-xl font-display mb-4">Artist Community</h2>
              <p className="text-muted-foreground mb-4">Connect with fellow artisans</p>
              <Button className="bg-gradient-primary">Find Artists</Button>
            </Card>
          </TabsContent>

          <TabsContent value="profile">
            <Card className="p-6 text-center">
              <h2 className="text-xl font-display mb-4">Artist Profile</h2>
              <p className="text-muted-foreground mb-4">Manage your profile and skills</p>
              <Button className="bg-gradient-primary">Edit Profile</Button>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default ArtistPortal;
