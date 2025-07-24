import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Github, Maximize2, X } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  websiteUrl?: string;
  type?: string;
  image?: string;
  detailedDescription?: string;
  index: number;
  isExpanding: boolean;
  isSibling: boolean;
  expandStage: 'row' | 'fullscreen' | null;
  targetPosition?: { row: number; col: number };
  onExpand: () => void;
  onClose: () => void;
}

export const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  githubUrl, 
  websiteUrl, 
  type, 
  image, 
  detailedDescription,
  index,
  isExpanding,
  isSibling,
  expandStage,
  targetPosition,
  onExpand,
  onClose
}: ProjectCardProps) => {

  // Prevent event bubbling when clicking on links
  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  // Get animation classes based on card state
  const getCardClasses = () => {
    if (isExpanding) {
      // Expanding to fill row without scaling up
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
    
    return "transition-all duration-300";
  };

  const cardHeight = isExpanding ? "min-h-[600px]" : "h-[400px]";

  return (
    <Card 
      className={`${!isExpanding ? 'card-hover' : ''} border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden relative group ${cardHeight} ${getCardClasses()}`}
      onClick={!isExpanding ? onExpand : undefined}
      style={{ cursor: isExpanding ? 'default' : 'pointer' }}
    >
      {/* Background Image covering entire card */}
      {image && (
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      
      {/* Gradient overlay - more pronounced when expanded for readability */}
      <div className={`absolute inset-0 transition-all duration-600 ${
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
              {isExpanding && (
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
              )}
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
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4 flex-grow flex flex-col justify-end">
          {!isExpanding ? (
            // Compact view
            <>
              <div className="relative">
                <CardDescription className="text-white leading-relaxed drop-shadow-sm bg-background/70 backdrop-blur-md rounded-lg p-4 max-h-24 overflow-hidden">
                  {description.length > 120 ? `${description.substring(0, 120)}...` : description}
                </CardDescription>
                {description.length > 120 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onExpand();
                    }}
                    className="absolute bottom-3 right-3 text-accent hover:text-accent/80 transition-colors bg-background/80 backdrop-blur-sm rounded-full p-1 hover:bg-background/90 shadow-lg"
                    aria-label={`Expand ${title} details`}
                  >
                    <Maximize2 className="h-4 w-4" />
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="text-xs border-accent/40 text-accent bg-background/40 backdrop-blur-sm hover:bg-background/60 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </>
          ) : (
            // Expanded view - takes up more space with consistent styling
            <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-700 delay-300">
              {/* Full Description */}
              <div className="bg-background/40 backdrop-blur-md rounded-xl p-6 space-y-4 border border-border/20">
                <h3 className="text-xl font-semibold text-foreground drop-shadow-sm">About This Project</h3>
                <p className="text-white leading-relaxed text-base drop-shadow-sm">
                  {description}
                </p>
                
                {/* Detailed Description if provided */}
                {detailedDescription && (
                  <div className="pt-4 border-t border-border/30">
                    <h4 className="text-lg font-semibold text-foreground mb-3 drop-shadow-sm">Technical Details</h4>
                    <p className="text-white leading-relaxed whitespace-pre-line drop-shadow-sm">
                      {detailedDescription}
                    </p>
                  </div>
                )}
              </div>

              {/* Technologies Section */}
              <div className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4 drop-shadow-sm">Technologies Used</h4>
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-sm border-accent/40 text-accent bg-background/20 backdrop-blur-sm hover:bg-background/40 transition-colors px-4 py-2"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </div>
    </Card>
  );
};