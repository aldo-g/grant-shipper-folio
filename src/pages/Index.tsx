import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SocialLinks } from "@/components/SocialLinks";
import { ProjectsTab } from "@/components/ProjectsTab";
import { ExperienceTab } from "@/components/ExperienceTab";
import profilePhoto from "@/assets/profile-photo.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16 max-w-6xl">
        {/* Hero Section - stays at the top */}
        <div className="text-center space-y-8 mb-16">
          <div className="relative inline-block">
            <img
              src={profilePhoto}
              alt="Alastair Grant"
              className="w-32 h-32 rounded-full object-cover mx-auto hero-glow border-2 border-accent/20"
            />
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-foreground">
              Alastair Grant
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              GenAI Developer exploring the frontiers of artificial intelligence, 
              database systems, and modern web technologies. Building tools that 
              bridge the gap between complex AI and practical applications.
            </p>
          </div>

          <SocialLinks />
        </div>

        {/* Tabbed Content */}
        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-card/50 border border-border/50">
            <TabsTrigger 
              value="projects" 
              className="text-base py-3 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
            >
              Projects
            </TabsTrigger>
            <TabsTrigger 
              value="experience"
              className="text-base py-3 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
            >
              Experience
            </TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="space-y-8">
            <ProjectsTab />
          </TabsContent>

          <TabsContent value="experience" className="space-y-8">
            <ExperienceTab />
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-sm">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;