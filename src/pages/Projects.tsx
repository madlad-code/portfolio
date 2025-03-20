
import { projects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <div className="min-h-screen pt-24">
      <div className="wrapper">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-in">Projects</h1>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl animate-fade-in animate-delay-100">
          I've worked on tons of little projects over the years but these are the ones that I'm most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas on how it can be improved.
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
