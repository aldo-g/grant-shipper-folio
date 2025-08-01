import { useState, useRef } from "react";
import { SocialLinks } from "@/components/SocialLinks";
import { ProjectsTab } from "@/components/ProjectsTab";
import { ExperienceTab } from "@/components/ExperienceTab";
import { LiquidTabBar } from "@/components/LiquidTabBar";
import { ChatButton } from "@/components/ChatButton";
import { ChatOverlay } from "@/components/ChatOverlay";

const tabs = [
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" }
];

const Index = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  
  // Touch/swipe handling
  const touchStartX = useRef(0);
  const isDragging = useRef(false);
  
  // FEATURE FLAG: Set to true to enable chat, false to disable
  const CHAT_ENABLED = false;

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
    if (isFirstVisit) {
      setIsFirstVisit(false);
    }
  };

  // Touch event handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    isDragging.current = true;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const swipeDistance = touchStartX.current - touchEndX;
    const minSwipeDistance = 75;
    
    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0 && activeTab === "projects") {
        // Swiped left - go to experience tab
        setActiveTab("experience");
      } else if (swipeDistance < 0 && activeTab === "experience") {
        // Swiped right - go to projects tab
        setActiveTab("projects");
      }
    }
    
    isDragging.current = false;
  };

  // Mouse event handlers for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    touchStartX.current = e.clientX;
    isDragging.current = true;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    
    const mouseEndX = e.clientX;
    const swipeDistance = touchStartX.current - mouseEndX;
    const minSwipeDistance = 75;
    
    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0 && activeTab === "projects") {
        setActiveTab("experience");
      } else if (swipeDistance < 0 && activeTab === "experience") {
        setActiveTab("projects");
      }
    }
    
    isDragging.current = false;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16 max-w-6xl">
        {/* Main Container - wraps all content in hero-style container with dynamic height */}
        <div className="relative">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10 rounded-3xl" />
          
          <div className="relative backdrop-blur-sm bg-card/30 border border-border/30 rounded-3xl p-12 shadow-2xl min-h-0 flex flex-col">
            {/* Hero Section */}
            <div className="mb-20">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Profile Section */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl scale-110" />
                    <img
                      src="/assets/profile-photo.jpg"
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
                        DevOps Engineer
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      DevOps Engineer specializing in GenAI integration at Rabobank's Gen!Lab. I build production-ready AI products through reusable, compliant infrastructure as code and robust ETL pipelines.
                    </p>
                    
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Currently freelancing as a GenAI and web developer with expertise in <strong>Python</strong>, <strong>TypeScript</strong>, and <strong>React</strong>. I combine technical depth with a passion for creating scalable AI solutions.
                    </p>
                    
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Seeking opportunities to apply technology for meaningful impact in international development and public good initiatives.
                    </p>
                  </div>
                </div>

                {/* Social Links - Vertical on the right */}
                <div className="flex lg:flex-col gap-4 lg:gap-6 flex-shrink-0">
                  <SocialLinks />
                </div>
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
            {activeTab === "projects" ? (
              <div 
                className="select-none touch-pan-y"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
              >
                <ProjectsTab />
              </div>
            ) : (
              <div 
                className="select-none touch-pan-y"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
              >
                <ExperienceTab />
              </div>
            )}

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
            
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-accent/10 rounded-full blur-xl" />
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-accent/5 rounded-full blur-lg" />
          </div>
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