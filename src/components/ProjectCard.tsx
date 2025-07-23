import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  type?: string;
  image?: string;
}

export const ProjectCard = ({ title, description, technologies, githubUrl, type, image }: ProjectCardProps) => {
  return (
    <Card className="card-hover border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden relative min-h-[400px] group">
      {/* Background Image covering entire card */}
      {image && (
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      
      {/* Minimal gradient overlay - only at very bottom for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card/40" />
      
      {/* Content overlay */}
      <div className="relative z-10 h-full flex flex-col">
        <CardHeader className="flex-shrink-0">
          <div className="flex items-start justify-between">
            <div className="space-y-3">
              <CardTitle className="text-xl font-semibold text-foreground drop-shadow-lg bg-background/60 backdrop-blur-sm rounded-lg px-3 py-2 inline-block">
                {title}
              </CardTitle>
              {type && (
                <div>
                  <Badge variant="secondary" className="text-xs bg-background/80 backdrop-blur-sm">
                    {type}
                  </Badge>
                </div>
              )}
            </div>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors bg-background/60 backdrop-blur-sm rounded-full p-2 hover:bg-background/80"
              aria-label={`View ${title} on GitHub`}
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4 flex-grow flex flex-col justify-end">
          <CardDescription className="text-white leading-relaxed drop-shadow-sm bg-background/70 backdrop-blur-md rounded-lg p-4">
            {description}
          </CardDescription>
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
        </CardContent>
      </div>
    </Card>
  );
};