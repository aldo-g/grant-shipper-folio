import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Github, Maximize2, X } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  size: string;
  category: string;
  githubUrl: string;
  websiteUrl?: string;
  type?: string;
  image?: string;
  video?: string;
  detailedDescription?: string;
  index: number;
  isExpanding: boolean;
  isSibling: boolean;
  targetPosition?: { row: number; col: number };
  onExpand: () => void;
  onClose: () => void;
}

export const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(({ 
  title, 
  description, 
  technologies, 
  size,
  category,
  githubUrl, 
  websiteUrl, 
  type, 
  image, 
  video,
  detailedDescription,
  index,
  isExpanding,
  isSibling,
  targetPosition,
  onExpand,
  onClose
}, ref) => {

  // Helper function to get badge colors for different tag types
  const getBadgeColor = (tagType: 'size' | 'category' | 'technology') => {
    switch (tagType) {
      case 'size':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40 hover:bg-yellow-500/30';
      case 'category':
        return 'bg-red-500/20 text-red-300 border-red-500/40 hover:bg-red-500/30';
      case 'technology':
        return 'bg-green-500/20 text-green-300 border-green-500/40 hover:bg-green-500/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/40 hover:bg-gray-500/30';
    }
  };

  // Prevent event bubbling when clicking on links
  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  // Get animation classes based on card state
  const getCardClasses = () => {
    if (isExpanding) {
      // Expanding to fill row without scaling up - reduced height with scrollable content
      return "md:col-span-2 transition-all duration-600 ease-out min-h-[600px]";
    } else if (targetPosition) {
      // Use calculated target position for sliding animation
      const rowClasses = {
        1: "md:row-start-1",
        2: "md:row-start-2",
        3: "md:row-start-3", 
        4: "md:row-start-4",
        5: "md:row-start-5",
        6: "md:row-start-6"
      };
      
      const colClasses = {
        1: "md:col-start-1",
        2: "md:col-start-2"
      };

      const rowClass = rowClasses[targetPosition.row as keyof typeof rowClasses] || "md:row-start-1";
      const colClass = colClasses[targetPosition.col as keyof typeof colClasses] || "md:col-start-1";
      
      // Check if this card has moved from its original position
      const originalRow = Math.floor(index / 2) + 1;
      const originalCol = (index % 2) + 1;
      const hasMoved = targetPosition.row !== originalRow || targetPosition.col !== originalCol;
      
      if (hasMoved) {
        return `transition-all duration-600 ease-out ${rowClass} ${colClass}`;
      }
    }
    
    return "transition-all duration-600 ease-out";
  };

  const cardHeight = isExpanding ? "min-h-[600px]" : "h-[400px]";

  return (
    <Card 
      ref={ref}
      className={`${!isExpanding ? 'card-hover' : ''} border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden relative group ${cardHeight} ${getCardClasses()}`}
      onClick={!isExpanding ? onExpand : undefined}
      style={{ cursor: isExpanding ? 'default' : 'pointer' }}
    >
      {/* Background Image covering entire card */}
      {image && (
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-transform duration-500 ${!isExpanding ? 'group-hover:scale-105' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      
      {/* Gradient overlay - more pronounced when expanded for readability */}
      <div className={`absolute inset-0 ${
        isExpanding 
          ? "bg-gradient-to-b from-transparent via-card/30 to-card/90" 
          : "bg-gradient-to-b from-transparent via-transparent to-card/40"
      }`} />
      
      {/* Content overlay */}
      <div className="relative z-10 h-full flex flex-col">
        <CardHeader className="flex-shrink-0">
          <div className="flex items-start justify-between">
            <div className="space-y-3">
              <CardTitle className={`font-semibold text-foreground drop-shadow-lg bg-background/60 backdrop-blur-sm rounded-lg px-3 py-2 inline-block transition-all duration-300 ${
                isExpanding ? "text-2xl" : "text-xl"
              }`}>
                {title}
              </CardTitle>
              {type && (
                <div>
                  <Badge variant="secondary" className={`bg-background/80 backdrop-blur-sm transition-all duration-300 ${
                    isExpanding ? "text-sm px-3 py-1" : "text-xs"
                  }`}>
                    {type}
                  </Badge>
                </div>
              )}
            </div>
            <div className="flex gap-2">
              {websiteUrl && (
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="text-muted-foreground hover:text-accent transition-colors bg-background/60 backdrop-blur-sm rounded-full p-2 hover:bg-background/80"
                  aria-label={`Visit ${title} website`}
                >
                  <Globe className="h-5 w-5" />
                </a>
              )}
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="text-muted-foreground hover:text-accent transition-colors bg-background/60 backdrop-blur-sm rounded-full p-2 hover:bg-background/80"
                aria-label={`View ${title} on GitHub`}
              >
                <Github className="h-5 w-5" />
              </a>
              {isExpanding ? (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                  }}
                  className="text-muted-foreground hover:text-accent transition-colors bg-background/60 backdrop-blur-sm rounded-full p-2 hover:bg-background/80"
                  aria-label="Close expanded view"
                >
                  <X className="h-5 w-5" />
                </button>
              ) : (
                description.length > 120 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onExpand();
                    }}
                    className="text-muted-foreground hover:text-accent transition-colors bg-background/60 backdrop-blur-sm rounded-full p-2 hover:bg-background/80"
                    aria-label={`Expand ${title} details`}
                  >
                    <Maximize2 className="h-5 w-5" />
                  </button>
                )
              )}
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4 flex-grow flex flex-col justify-end">
          {!isExpanding ? (
            // Compact view
            <>
              <div className="relative">
                <CardDescription className="text-white leading-relaxed drop-shadow-sm bg-background/70 backdrop-blur-md rounded-lg p-4 max-h-24 overflow-hidden whitespace-pre-line">
                  {description.length > 120 ? `${description.substring(0, 120)}...` : description}
                </CardDescription>
              </div>
              <div className="flex flex-wrap gap-2">
                {/* Size and Category tags */}
                <Badge
                  variant="outline"
                  className={`text-xs capitalize ${getBadgeColor('size')} backdrop-blur-sm transition-colors`}
                >
                  {size}
                </Badge>
                <Badge
                  variant="outline"
                  className={`text-xs ${getBadgeColor('category')} backdrop-blur-sm transition-colors`}
                >
                  {category}
                </Badge>
                
                {/* Technology tags - limited to 3 in compact view */}
                {technologies.slice(0, 3).map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className={`text-xs ${getBadgeColor('technology')} backdrop-blur-sm transition-colors`}
                  >
                    {tech}
                  </Badge>
                ))}
                
                {/* Show +X more if there are more than 3 technologies */}
                {technologies.length > 3 && (
                  <Badge
                    variant="outline"
                    className="text-xs bg-gray-500/20 text-gray-300 border-gray-500/40 backdrop-blur-sm"
                  >
                    +{technologies.length - 3} more
                  </Badge>
                )}
              </div>
            </>
          ) : (
            // Expanded view - takes up more space with consistent styling
            <div className="space-y-6">
              {/* Combined Content Section - Scrollable */}
              <div className="bg-background/40 backdrop-blur-md rounded-xl border border-border/20 max-h-96 overflow-y-auto">
                <div className="p-6 space-y-6">
                  {/* About This Project */}
                  <div className="animate-in fade-in duration-300">
                    <h3 className="text-xl font-semibold text-foreground drop-shadow-sm mb-4">About This Project</h3>
                    <p className="text-white leading-relaxed text-base drop-shadow-sm whitespace-pre-line">
                      {description}
                    </p>
                    
                    {/* Detailed Description if provided */}
                    {detailedDescription && (
                      <div className="pt-4 border-t border-border/30 mt-4">
                        <h4 className="text-lg font-semibold text-foreground mb-3 drop-shadow-sm">Technical Details</h4>
                        <p className="text-white leading-relaxed whitespace-pre-line drop-shadow-sm">
                          {detailedDescription}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Video Demo Section */}
                  {video && (
                    <div className="animate-in fade-in duration-300 delay-150 border-t border-border/30 pt-6">
                      <h3 className="text-xl font-semibold text-foreground drop-shadow-sm mb-4">Demo</h3>
                      <div className="relative rounded-lg overflow-hidden bg-black/20">
                        <video
                          src={video}
                          controls
                          className="w-full h-auto max-h-64 object-contain"
                          preload="metadata"
                          poster={image}
                        >
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Project Details Section */}
              <div className="flex flex-wrap gap-3">
                {/* Size tag */}
                <Badge
                  variant="outline"
                  className={`text-sm capitalize ${getBadgeColor('size')} backdrop-blur-sm px-4 py-2`}
                >
                  {size}
                </Badge>
                
                {/* Category tag */}
                <Badge
                  variant="outline"
                  className={`text-sm ${getBadgeColor('category')} backdrop-blur-sm px-4 py-2`}
                >
                  {category}
                </Badge>
                
                {/* All technology tags */}
                {technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className={`text-sm ${getBadgeColor('technology')} backdrop-blur-sm px-4 py-2`}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </div>
    </Card>
  );
});