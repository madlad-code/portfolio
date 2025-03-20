
import { Experience as ExperienceType } from "@/lib/types";
import { cn } from "@/lib/utils";

interface WorkExperienceProps {
  experience: ExperienceType;
  isFirst?: boolean;
  isLast?: boolean;
}

export default function WorkExperience({ experience, isFirst, isLast }: WorkExperienceProps) {
  return (
    <div className="relative group">
      {/* Timeline connector */}
      {!isFirst && (
        <div className="absolute top-0 left-6 h-8 w-[2px] bg-secondary -translate-x-1/2 -translate-y-full"></div>
      )}
      {!isLast && (
        <div className="absolute bottom-0 left-6 top-8 w-[2px] bg-secondary -translate-x-1/2"></div>
      )}
      
      <div className="ml-12 md:ml-16 relative">
        {/* Experience Card */}
        <div className="relative p-5 border border-border rounded-lg bg-card/40 backdrop-blur-sm hover:bg-card/60 transition-colors group-hover:border-muted animate-fade-in">
          <div className="absolute -left-16 top-5 flex items-center justify-center">
            <div className="relative">
              <div className="z-10 w-12 h-12 rounded-md overflow-hidden border border-border p-2 bg-secondary/30 backdrop-blur-sm">
                <img 
                  src={experience.logo} 
                  alt={experience.company} 
                  className="w-full h-full object-contain rounded"
                />
              </div>
              <div className="absolute top-0 -left-1 w-full h-full rounded-md bg-secondary/40 blur-sm -z-10 animate-pulse-slow"></div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
            <div>
              <h3 className="font-medium text-lg">{experience.position}</h3>
              <a href={experience.companyUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
                {experience.company}
              </a>
            </div>
            <span className="mt-1 md:mt-0 text-xs text-muted-foreground tracking-wide bg-secondary/60 px-2 py-1 rounded">
              {experience.duration}
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground leading-relaxed">
            {experience.description}
          </p>
        </div>
      </div>
    </div>
  );
}
