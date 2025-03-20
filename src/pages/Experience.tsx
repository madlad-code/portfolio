
import { experiences } from "@/lib/data";
import WorkExperience from "@/components/WorkExperience";

export default function Experience() {
  return (
    <div className="min-h-screen pt-24">
      <div className="wrapper">
        <h1 className="text-4xl sm:text-5xl font-bold mb-12 animate-fade-in">Erfarenhet</h1>
        
        <div className="mb-24">
          {experiences.map((experience, index) => (
            <div 
              key={`${experience.company}-${index}`} 
              className="py-6"
              style={{ 
                animationDelay: `${(index + 1) * 150}ms`,
                animationFillMode: 'both'
              }}
            >
              <WorkExperience 
                experience={experience} 
                isFirst={index === 0}
                isLast={index === experiences.length - 1}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
