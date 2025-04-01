import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { websiteService } from '@/services/websiteService';
import { WebsiteSettings } from '@/types/website';
import { Loader2 } from "lucide-react";

const AdminSettings = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [settings, setSettings] = useState<WebsiteSettings>({
    id: 'default',
    header: {
      logo: "",
      menuItems: [],
      showSearch: true,
      showCart: true
    },
    footer: {
      logo: "",
      description: "",
      socialLinks: [],
      menuSections: [],
      copyright: ""
    },
    homepage: {
      hero: {
        title: "Zos Honey - Pure & Natural",
        subtitle: "From the Mountains of Pakistan",
        image: "",
        ctaText: "Shop Now",
        ctaLink: "/shop"
      },
      featuredCategories: [],
      showTestimonials: true,
      showNewsletter: true
    }
  });

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      setIsLoading(true);
      const data = await websiteService.getSettings();
      setSettings(data);
    } catch (error) {
      toast.error("Failed to load settings");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      setIsLoading(true);
      await websiteService.updateSettings(settings);
      toast.success("Settings saved successfully!");
    } catch (error) {
      toast.error("Failed to save settings");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="p-6 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Website Settings</h1>
      
      <Tabs defaultValue="header">
        <TabsList className="mb-4">
          <TabsTrigger value="header">Header</TabsTrigger>
          <TabsTrigger value="footer">Footer</TabsTrigger>
          <TabsTrigger value="homepage">Homepage</TabsTrigger>
          <TabsTrigger value="menu">Menu</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
        </TabsList>

        <TabsContent value="header">
          <Card>
            <CardHeader>
              <CardTitle>Header Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Logo</label>
                <Input 
                  type="text"
                  value={settings.header.logo}
                  onChange={(e) => 
                    setSettings({
                      ...settings,
                      header: { ...settings.header, logo: e.target.value }
                    })
                  }
                  placeholder="Enter logo URL"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Switch 
                  checked={settings.header.showSearch}
                  onCheckedChange={(checked) => 
                    setSettings({
                      ...settings,
                      header: { ...settings.header, showSearch: checked }
                    })
                  }
                />
                <label>Show Search Bar</label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch 
                  checked={settings.header.showCart}
                  onCheckedChange={(checked) => 
                    setSettings({
                      ...settings,
                      header: { ...settings.header, showCart: checked }
                    })
                  }
                />
                <label>Show Cart Icon</label>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="footer">
          <Card>
            <CardHeader>
              <CardTitle>Footer Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Footer Description</label>
                <Textarea 
                  value={settings.footer.description}
                  onChange={(e) => 
                    setSettings({
                      ...settings,
                      footer: { ...settings.footer, description: e.target.value }
                    })
                  }
                  placeholder="Enter footer description..."
                />
              </div>
              <div>
                <label className="text-sm font-medium">Copyright Text</label>
                <Input 
                  value={settings.footer.copyright}
                  onChange={(e) => 
                    setSettings({
                      ...settings,
                      footer: { ...settings.footer, copyright: e.target.value }
                    })
                  }
                  placeholder="© 2024 Zos Honey. All rights reserved."
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="homepage">
          <Card>
            <CardHeader>
              <CardTitle>Homepage Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Hero Title</label>
                <Input 
                  value={settings.homepage.hero.title}
                  onChange={(e) => 
                    setSettings({
                      ...settings,
                      homepage: { 
                        ...settings.homepage,
                        hero: { ...settings.homepage.hero, title: e.target.value }
                      }
                    })
                  }
                />
              </div>
              <div>
                <label className="text-sm font-medium">Hero Image</label>
                <Input 
                  type="text"
                  value={settings.homepage.hero.image}
                  onChange={(e) => 
                    setSettings({
                      ...settings,
                      homepage: { 
                        ...settings.homepage,
                        hero: { ...settings.homepage.hero, image: e.target.value }
                      }
                    })
                  }
                  placeholder="Enter hero image URL"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Hero Subtitle</label>
                <Input 
                  value={settings.homepage.hero.subtitle}
                  onChange={(e) => 
                    setSettings({
                      ...settings,
                      homepage: { 
                        ...settings.homepage,
                        hero: { ...settings.homepage.hero, subtitle: e.target.value }
                      }
                    })
                  }
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-6">
        <Button 
          className="bg-primary-gold hover:bg-primary-gold/90"
          onClick={handleSave}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : (
            'Save Changes'
          )}
        </Button>
      </div>
    </div>
  );
};

export default AdminSettings; 