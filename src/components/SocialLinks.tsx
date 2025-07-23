import { Linkedin, BookOpen } from "lucide-react";
import githubLogo from "@/assets/github-logo.png";
import linkedinLogo from "@/assets/linkedin-logo.png";
import mediumLogo from "@/assets/medium-logo.png";

interface SocialLink {
  href: string;
  icon?: React.ElementType;
  customIcon?: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/aldo-g",
    customIcon: githubLogo,
    label: "GitHub"
  },
  {
    href: "https://www.linkedin.com/in/alastair-grant-genai-dev/",
    customIcon: linkedinLogo,
    label: "LinkedIn"
  },
  {
    href: "https://medium.com/@mjkzrdmrk",
    customIcon: mediumLogo,
    label: "Medium"
  }
];

export const SocialLinks = () => {
  return (
    <div className="flex gap-6 justify-center">
      {socialLinks.map((link) => {
        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 rounded-full bg-card/50 border border-border/50 text-muted-foreground hover:text-accent hover:border-accent/50 transition-all duration-300 hover:scale-110 hover:shadow-lg flex items-center justify-center"
            aria-label={link.label}
          >
            {link.customIcon ? (
              <img 
                src={link.customIcon} 
                alt={link.label}
                className="h-12 w-12 object-contain opacity-90 hover:opacity-100 transition-opacity filter brightness-110 hover:brightness-125"
              />
            ) : (
              link.icon && <link.icon className="h-12 w-12" />
            )}
          </a>
        );
      })}
    </div>
  );
};