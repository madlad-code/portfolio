
import { Project } from "@/lib/types";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
  style?: React.CSSProperties;
}

export default function ProjectCard({ project, className, style }: ProjectCardProps) {
  return (
    <div 
      className={cn(
        "group relative flex flex-col justify-between border border-border overflow-hidden rounded-lg bg-card/20 backdrop-blur-sm hover:bg-card/40 transition-all duration-300 p-5",
        "hover:border-muted hover:shadow-lg hover:shadow-secondary/5",
        className
      )}
      style={style}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-md overflow-hidden bg-secondary/20 p-2 backdrop-blur-sm">
          <img 
            src={project.logo} 
            alt={project.title} 
            className="w-full h-full object-contain filter brightness-125 contrast-125"
          />
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-medium">{project.title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
        </div>
      </div>
      
      <div className="mt-4 flex items-center gap-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        {project.url && (
          <a 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-white transition-colors"
          >
            <ExternalLink size={14} />
            <span>Visit</span>
          </a>
        )}
        
        {project.github && (
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-white transition-colors"
          >
            <Github size={14} />
            <span>Source</span>
          </a>
        )}
      </div>
    </div>
  );
}
