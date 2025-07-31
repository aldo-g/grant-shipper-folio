import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface Tab {
  id: string;
  label: string;
}

interface LiquidTabBarProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
}

export const LiquidTabBar: React.FC<LiquidTabBarProps> = ({
  tabs,
  activeTab,
  onTabChange,
  className
}) => {
  const [indicatorStyle, setIndicatorStyle] = useState<{
    width: number;
    left: number;
  }>({ width: 0, left: 0 });
  
  const [isInitialized, setIsInitialized] = useState(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateIndicatorPosition = () => {
    const activeIndex = tabs.findIndex(tab => tab.id === activeTab);
    const activeTabElement = tabRefs.current[activeIndex];
    
    if (activeTabElement && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const tabRect = activeTabElement.getBoundingClientRect();
      
      setIndicatorStyle({
        width: tabRect.width,
        left: tabRect.left - containerRect.left
      });
      
      if (!isInitialized) {
        setIsInitialized(true);
      }
    }
  };

  useEffect(() => {
    // Initial position calculation with multiple attempts for Safari
    const calculatePosition = () => {
      updateIndicatorPosition();
    };

    // Immediate calculation
    calculatePosition();

    // Delayed calculations for Safari compatibility
    const timeouts = [
      setTimeout(calculatePosition, 0),
      setTimeout(calculatePosition, 10),
      setTimeout(calculatePosition, 50),
      setTimeout(calculatePosition, 100)
    ];

    // Cleanup timeouts
    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [activeTab, tabs, isInitialized]);

  // Recalculate on window resize
  useEffect(() => {
    const handleResize = () => {
      updateIndicatorPosition();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeTab, tabs]);

  // Safari-specific: Recalculate after fonts load
  useEffect(() => {
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        setTimeout(updateIndicatorPosition, 10);
      });
    }
  }, [activeTab, tabs]);

  return (
    <div className={cn("relative", className)}>
      {/* Container with Neutral Background */}
      <div 
        ref={containerRef}
        className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-full p-1 flex w-fit mx-auto shadow-lg overflow-hidden"
      >
        {/* Hidden Gradient Layer (only visible through indicator) */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: `linear-gradient(90deg, 
              #1e3a8a 0%, 
              #1d4ed8 25%, 
              #7c3aed 75%, 
              #581c87 100%
            )`,
            opacity: 0
          }}
        />
        
        {/* Sliding Glass Indicator with Gradient Pickup */}
        <div
          className={cn(
            "absolute top-1 bottom-1 rounded-full transition-all ease-out",
            isInitialized ? "duration-700" : "duration-0" // No animation on initial load
          )}
          style={{
            width: `${indicatorStyle.width}px`,
            left: `${indicatorStyle.left}px`,
            transform: 'translateZ(0)',
            background: `
              linear-gradient(90deg, 
                #1e3a8a 0%, 
                #1d4ed8 25%, 
                #7c3aed 75%, 
                #581c87 100%
              )
            `,
            backgroundSize: `${containerRef.current?.offsetWidth || 100}px 100%`,
            backgroundPosition: `-${indicatorStyle.left}px 0`,
            boxShadow: `
              inset 0 1px 0 rgba(255, 255, 255, 0.3),
              inset 0 -1px 0 rgba(255, 255, 255, 0.1),
              0 0 20px rgba(255, 255, 255, 0.2),
              0 8px 32px rgba(0, 0, 0, 0.1)
            `,
            border: '1px solid rgba(255, 255, 255, 0.2)',
            transition: isInitialized ? `
              left 0.7s cubic-bezier(0.34, 1.56, 0.64, 1),
              width 0.7s cubic-bezier(0.34, 1.56, 0.64, 1),
              background-position 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)
            ` : 'none'
          }}
        >
          {/* Glass Overlay Effect */}
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: `
                linear-gradient(135deg, 
                  rgba(255, 255, 255, 0.25) 0%, 
                  rgba(255, 255, 255, 0.1) 50%, 
                  rgba(255, 255, 255, 0.05) 100%
                )
              `,
              backdropFilter: 'blur(2px)',
            }}
          />
          
          {/* Inner Shimmer Effect */}
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: `
                radial-gradient(ellipse at 30% 30%, rgba(255, 255, 255, 0.2), transparent 70%),
                radial-gradient(ellipse at 70% 70%, rgba(255, 255, 255, 0.1), transparent 70%)
              `,
              animation: 'glassShimmer 4s ease-in-out infinite'
            }}
          />
        </div>
        
        {/* Tab Buttons */}
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            ref={(el) => {
              tabRefs.current[index] = el;
              // Trigger recalculation when ref is set (Safari fix)
              if (el && !isInitialized) {
                setTimeout(updateIndicatorPosition, 0);
              }
            }}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "relative z-10 px-6 py-3 text-base font-medium rounded-full transition-all duration-300",
              "active:scale-95 select-none whitespace-nowrap",
              activeTab === tab.id 
                ? "text-white drop-shadow-sm font-semibold" 
                : "text-white/70 hover:text-white/90"
            )}
            style={{
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.1s ease'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Glass Effect Animation */}
      <style jsx global>{`
        @keyframes glassShimmer {
          0%, 100% { 
            opacity: 0.8;
            transform: translateX(0px);
          }
          50% { 
            opacity: 1;
            transform: translateX(2px);
          }
        }
      `}</style>
    </div>
  );
};