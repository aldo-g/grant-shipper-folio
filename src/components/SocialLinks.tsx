// src/components/SocialLinks.tsx - Remove imports and use direct paths
import { Linkedin, BookOpen } from "lucide-react";
// Remove these imports:
// import githubLogo from "@/assets/github-logo.png";
// import linkedinLogo from "@/assets/linkedin-logo.png";
// import mediumLogo from "@/assets/medium-logo.png";

interface SocialLink {
  href: string;
  icon?: React.ElementType;
  customIcon?: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/aldo-g",
    customIcon: "/assets/github-logo.png", // Updated path
    label: "GitHub"
  },
  {
    href: "https://www.linkedin.com/in/alastair-grant-genai-dev/",
    customIcon: "/assets/linkedin-logo.png", // Updated path
    label: "LinkedIn"
  },
  {
    href: "https://medium.com/@mjkzrdmrk",
    customIcon: "/assets/medium-logo.png", // Updated path
    label: "Medium"
  }
];

export const SocialLinks = () => {
  return (
    <>
      {socialLinks.map((link) => {
        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-3 rounded-xl bg-card/60 border border-border/50 text-muted-foreground hover:text-accent hover:border-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm"
            aria-label={link.label}
          >
            {link.customIcon ? (
              <img 
                src={link.customIcon} 
                alt={link.label}
                className="h-12 w-12 object-contain opacity-100 group-hover:opacity-100 transition-opacity filter brightness-110 group-hover:brightness-125"
              />
            ) : (
              link.icon && <link.icon className="h-6 w-6" />
            )}
            
            {/* Tooltip - positioned to the left for vertical layout */}
            <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-2 px-2 py-1 bg-card border border-border/50 text-xs text-foreground rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none backdrop-blur-sm whitespace-nowrap">
              {link.label}
            </div>
          </a>
        );
      })}
    </>
  );
};