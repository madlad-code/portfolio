
import { projects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <div className="min-h-screen pt-24">
      <div className="wrapper">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-in">Projekt</h1>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl animate-fade-in animate-delay-100">
          Jag har arbetat med många mindre projekt genom åren, men dessa är de jag är mest stolt över. Flera av dem kombinerar min kunskap inom teknik, programmering och finans - särskilt inom algoritmisk trading och kvantitativa analysmetoder. Många av projekten är öppen källkod, så om du ser något som väcker ditt intresse, kolla gärna koden och bidra om du har idéer för förbättringar.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              className="animate-fade-in"
              style={{ 
                animationDelay: `${(index % 3) * 150}ms`,
                animationFillMode: 'both'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
