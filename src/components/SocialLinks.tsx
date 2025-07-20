import { Github, Linkedin, BookOpen } from "lucide-react";

interface SocialLink {
  href: string;
  icon: React.ElementType;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/aldo-g",
    icon: Github,
    label: "GitHub"
  },
  {
    href: "https://www.linkedin.com/in/alastair-grant-genai-dev/",
    icon: Linkedin,
    label: "LinkedIn"
  },
  {
    href: "https://medium.com/@mjkzrdmrk",
    icon: BookOpen,
    label: "Medium"
  }
];

export const SocialLinks = () => {
  return (
    <div className="flex gap-4 justify-center">
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card/50 border border-border/50 text-muted-foreground hover:text-accent hover:border-accent/50 transition-all duration-300 hover:scale-110"
            aria-label={link.label}
          >
            <Icon className="h-5 w-5" />
          </a>
        );
      })}
    </div>
  );
};