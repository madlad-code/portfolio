
import { personalInfo, softSkills } from "@/lib/data";
import SocialLinks from "@/components/SocialLinks";
import ContributionGraph from "@/components/ContributionGraph";
import { ArrowDown, ArrowRight, Mail } from "lucide-react";
import { useState } from "react";

export default function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="min-h-screen pt-24">
      <div className="wrapper">
        {/* Hero Section */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 animate-fade-in">
                {personalInfo.title}
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 animate-fade-in animate-delay-100">
                {personalInfo.bio}
              </p>
              
              <SocialLinks className="mb-8 animate-fade-in animate-delay-200" />
              
              <div className="animate-fade-in animate-delay-300">
                <ContributionGraph />
              </div>
            </div>
            
            <div className="relative order-first lg:order-last">
              <div className="absolute inset-0 bg-grid opacity-5 animate-pulse-slow"></div>
              <div className="absolute top-20 -right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </section>
        
        {/* Current Work */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold mb-8">What I'm Currently Hacking On?</h2>
          
          <div className="border border-border rounded-lg p-6 bg-card/20 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-5"></div>
            
            <p className="relative z-10 text-muted-foreground mb-4">
              I'm still trying to wrap-up a few freelance projects but I took out time this week to work on the ggdagbo hackathon. It was a tireless 2-day marathon of coding and collaborating. In the end, we emerged the official winners.
            </p>
            
            <div className="relative z-10 mt-6 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1531498860502-7c67cf02f657?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Hackathon team" 
                className="w-full object-cover rounded-lg"
              />
              <p className="mt-2 text-xs text-muted-foreground">
                A shot of my teammate and I with host organizers (May 02 2024)
              </p>
            </div>
            
            <p className="relative z-10 mt-6 text-muted-foreground">
              We built a web-app powered by Google's Gemini AI that takes your notes as text input or PDF upload and converts it into interactive quizzes you can practice with. The app is called quiznote and it is currently open to contributions.
            </p>
          </div>
        </section>
        
        {/* Soft Skills */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold mb-8">Soft Skills</h2>
          
          <div className="space-y-8">
            {softSkills.map((skill, index) => (
              <div 
                key={skill.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-medium mb-2">
                  <span className="text-accent">•</span> {skill.title}
                </h3>
                <p className="text-muted-foreground pl-4 border-l border-secondary">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Setup */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold mb-8">Setup</h2>
          
          <div className="border border-border rounded-lg p-6 bg-card/20 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-5"></div>
            
            <p className="relative z-10 text-muted-foreground mb-6">
              I made a <a href="#" className="text-blue-400 hover:underline">notion list</a> of things I need to build the right setup for my productivity. Among this list, I've purchased a personal laptop. Hopefully before the end of 2023, I should buy everything else.
            </p>
            
            <div className="relative z-10 rounded-lg overflow-hidden mb-4">
              <img 
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Setup" 
                className="w-full object-cover rounded-lg"
              />
              <p className="mt-2 text-xs text-muted-foreground text-center">
                Setup I plan to build someday
              </p>
            </div>
            
            <p className="relative z-10 text-center">
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors"
              >
                <span>Feeling generous? You can</span>
                <span className="text-blue-400 hover:underline">buy me a coffee</span>
                <span>to support my work.</span>
              </a>
            </p>
          </div>
        </section>
        
        {/* Technologies & Tools */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold mb-8">Usage</h2>
          <p className="text-muted-foreground mb-6">
            Tools, technologies and gadgets I use on a daily basis but not limited to.
          </p>
          
          <div className="mb-10">
            <h3 className="text-xl font-medium mb-6">Technologies</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: "React", desc: "UI Library", color: "blue" },
                { name: "Next.js", desc: "React Framework", color: "gray" },
                { name: "Redux", desc: "Production-grade State Management", color: "purple" },
                { name: "Zustand", desc: "State Management (personal projects)", color: "yellow" },
                { name: "Sanity", desc: "Headless CMS", color: "red" },
                { name: "Tailwind CSS", desc: "Styling Library", color: "sky" },
                { name: "TypeScript", desc: "Typed Superset of JavaScript Library", color: "blue" },
                { name: "Sass", desc: "CSS Preprocessor", color: "pink" },
                { name: "VitePress", desc: "Static Site Generator", color: "green" }
              ].map((tech, index) => (
                <div 
                  key={tech.name}
                  className="border border-border rounded-md p-3 bg-secondary/20 backdrop-blur-sm hover:bg-secondary/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full bg-${tech.color}-500/40`}></div>
                    <div>
                      <h4 className="font-medium">{tech.name}</h4>
                      <p className="text-xs text-muted-foreground">{tech.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-6">Tools</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: "Visual Studio Code", desc: "Text Editor", color: "blue" },
                { name: "PyCharm", desc: "Python IDE", color: "yellow" },
                { name: "IntelliJ Idea", desc: "Java IDE", color: "pink" }
              ].map((tool, index) => (
                <div 
                  key={tool.name}
                  className="border border-border rounded-md p-3 bg-secondary/20 backdrop-blur-sm hover:bg-secondary/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full bg-${tool.color}-500/40`}></div>
                    <div>
                      <h4 className="font-medium">{tool.name}</h4>
                      <p className="text-xs text-muted-foreground">{tool.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact */}
        <section className="mb-24">
          <div className="border border-border rounded-lg p-6 bg-secondary/5 backdrop-blur-sm">
            <p className="mb-4 text-muted-foreground">
              If you ever spot me in the wild, don't hesitate to say hello! Let's grab a drink and geek out over the latest advancements in front-end development or discuss our favorite programming language.
            </p>
            
            <a 
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 text-accent hover:underline"
            >
              <Mail size={16} />
              <span>{personalInfo.email}</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
