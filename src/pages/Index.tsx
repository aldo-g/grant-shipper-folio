import { useState } from "react";
import { SocialLinks } from "@/components/SocialLinks";
import { ProjectsTab } from "@/components/ProjectsTab";
import { ExperienceTab } from "@/components/ExperienceTab";
import { LiquidTabBar } from "@/components/LiquidTabBar";
import { ChatButton } from "@/components/ChatButton";
import { ChatOverlay } from "@/components/ChatOverlay";
import profilePhoto from "@/assets/profile-photo.jpg";

const tabs = [
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" }
];

const Index = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  
  // FEATURE FLAG: Set to true to enable chat, false to disable
  const CHAT_ENABLED = false;

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
    if (isFirstVisit) {
      setIsFirstVisit(false);
    }
  };

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

        {/* Liquid Tab Bar */}
        <div className="flex justify-center mb-8">
          <LiquidTabBar 
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            className="w-full max-w-md"
          />
        </div>

        {/* Tab Content */}
        <div className="space-y-8">
          {activeTab === "projects" && <ProjectsTab />}
          {activeTab === "experience" && <ExperienceTab />}
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-sm">
            Built with React, TypeScript, and Tailwind CSS
            {CHAT_ENABLED && (
              <span className="block mt-2 text-xs opacity-70">
                💬 Chat assistant available
              </span>
            )}
          </p>
        </div>
      </div>

      {/* Chat Components - Only render if feature is enabled */}
      {CHAT_ENABLED && (
        <>
          <ChatButton 
            onClick={handleChatToggle} 
            isOpen={isChatOpen}
          />
          <ChatOverlay 
            isOpen={isChatOpen} 
            onClose={() => setIsChatOpen(false)}
            isFirstTime={isFirstVisit}
          />
        </>
      )}
    </div>
  );
};

export default Index;