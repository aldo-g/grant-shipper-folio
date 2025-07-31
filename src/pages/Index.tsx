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
        {/* Hero Section - redesigned to match project aesthetic */}
        <div className="relative mb-20">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10 rounded-3xl" />
          
          <div className="relative backdrop-blur-sm bg-card/30 border border-border/30 rounded-3xl p-12 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Profile Section */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl scale-110" />
                  <img
                    src={profilePhoto}
                    alt="Alastair Grant"
                    className="relative w-40 h-40 lg:w-48 lg:h-48 rounded-full object-cover border-2 border-accent/30 shadow-xl"
                  />
                  {/* Subtle animated ring */}
                  <div className="absolute inset-0 rounded-full border border-accent/40 animate-pulse" />
                </div>
              </div>
              
              {/* Content Section */}
              <div className="flex-grow text-center lg:text-left space-y-6">
                <div className="space-y-3">
                  <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                    Alastair Grant
                  </h1>
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    <span className="px-4 py-2 bg-accent/20 text-accent border border-accent/30 rounded-full text-sm font-medium backdrop-blur-sm">
                      GenAI Developer
                    </span>
                    <span className="px-4 py-2 bg-card/50 text-muted-foreground border border-border/50 rounded-full text-sm font-medium backdrop-blur-sm">
                      AI/ML Engineer
                    </span>
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  I'm passionate about using tech to make a real difference in international development and public good. After studying development economics and international relations, I've built skills in Python, FastAPI, React, and DevOps – all with the goal of creating tools that matter.

                  At Rabobank's Gen!Lab, I work as a DevOps Engineer pioneering GenAI products. My day-to-day involves setting up infrastructure as code (IaC) and creating ETL flows that enrich our offerings with diverse datasets. I've helped boost the maturity of our backend and frontend applications by implementing tests and compliance checks, and played a key role in developing our Quart backend API and React frontend.

                  Beyond my tech work, I serve as a Trustee for the Cameron Grant Memorial Trust, where we've organized fundraisers with 200+ attendees and managed an innovation grants program that's distributed over £50,000 to various charities. This balance lets me combine technical skills with active stakeholder engagement – I'm as comfortable writing code as I am managing projects or communicating complex ideas to diverse audiences. What drives me is finding that sweet spot where technology meets
                  impact, whether I'm streamlining database operations with SQLCore or creating mental health awareness tools through Cameron's Coasters (https://www.camgrant.org.uk/coasters/).

                  I'm looking for roles where I can apply my tech background to international development challenges and build tools that empower communities. If your organization values innovation and using technology for good, let's connect!
                </p>
              </div>

              {/* Social Links - Vertical on the right */}
              <div className="flex lg:flex-col gap-4 lg:gap-6 flex-shrink-0">
                <SocialLinks />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-accent/10 rounded-full blur-xl" />
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-accent/5 rounded-full blur-lg" />
          </div>
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