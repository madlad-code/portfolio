
import { socialLinks } from "@/lib/data";
import { 
  Github, Twitter, Linkedin, Codepen, Dribbble, Instagram, 
  GameController, Camera, Youtube, Newspaper, BarChart, LifeBuoy, Box, GitBranch 
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  Github: <Github size={16} />,
  Twitter: <Twitter size={16} />,
  Linkedin: <Linkedin size={16} />,
  Codepen: <Codepen size={16} />,
  Dribbble: <Dribbble size={16} />,
  Instagram: <Instagram size={16} />,
  GameController: <GameController size={16} />,
  Camera: <Camera size={16} />,
  Youtube: <Youtube size={16} />,
  Newspaper: <Newspaper size={16} />,
  BarChart: <BarChart size={16} />,
  LifeBuoy: <LifeBuoy size={16} />,
  Box: <Box size={16} />,
  GitBranch: <GitBranch size={16} />,
};

export default function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {socialLinks.map((link) => (
        <a 
          key={link.name}
          href={link.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-2 py-1 text-xs rounded bg-secondary/80 text-muted-foreground hover:bg-secondary hover:text-white transition-colors"
          title={link.name}
        >
          {iconMap[link.icon]}
          <span>{link.name}</span>
        </a>
      ))}
    </div>
  );
}
