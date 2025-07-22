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
    <Card className="card-hover border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={`${title} project preview`}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
        </div>
      )}
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-xl font-semibold text-foreground">
              {title}
            </CardTitle>
            {type && (
              <Badge variant="secondary" className="text-xs">
                {type}
              </Badge>
            )}
          </div>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label={`View ${title} on GitHub`}
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="text-xs border-accent/20 text-accent"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};