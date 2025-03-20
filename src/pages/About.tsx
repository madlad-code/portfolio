
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
              <div className="relative z-10 h-full flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" 
                  alt="Militär elektronik" 
                  className="w-full h-auto max-h-72 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Current Work */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold mb-8">Vad jag studerar just nu</h2>
          
          <div className="border border-border rounded-lg p-6 bg-card/20 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-5"></div>
            
            <p className="relative z-10 text-muted-foreground mb-4">
              Jag studerar för närvarande civilingenjörsprogrammet inom AI och maskininlärning vid Blekinge Tekniska Högskola. Detta är starten på min resa inom avancerad teknik efter att ha slutfört min värnplikt som elektricitetsmekaniker hos Försvarsmakten.
            </p>
            
            <div className="relative z-10 mt-6 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Studier inom AI" 
                className="w-full object-cover rounded-lg"
              />
              <p className="mt-2 text-xs text-muted-foreground">
                Visualisering av neurala nätverk - en del av min utbildning inom AI (augusti 2024)
              </p>
            </div>
            
            <p className="relative z-10 mt-6 text-muted-foreground">
              Utbildningen kombinerar matematisk teori med praktisk programmering och jag har särskilt intresse för tillämpningar inom försvarsteknologi och cybersäkerhet. Mina tidigare erfarenheter från Försvarsmakten ger mig en unik förståelse för de tekniska behov som finns inom denna sektor.
            </p>
          </div>
        </section>
        
        {/* Soft Skills */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold mb-8">Kompetenser</h2>
          
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
        
        {/* Military experience */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold mb-8">Militär erfarenhet</h2>
          
          <div className="border border-border rounded-lg p-6 bg-card/20 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-5"></div>
            
            <p className="relative z-10 text-muted-foreground mb-6">
              Min värnplikt som elektricitetsmekaniker gav mig både teknisk kompetens och värdefulla ledarskapsförmågor. Jag arbetade med installation, underhåll och felsökning av elektriska system för militära enheter.
            </p>
            
            <div className="relative z-10 rounded-lg overflow-hidden mb-4">
              <img 
                src="https://images.unsplash.com/photo-1542876882-ebd8cc90d9f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Militär utrustning" 
                className="w-full object-cover rounded-lg"
              />
              <p className="mt-2 text-xs text-muted-foreground text-center">
                Bild som representerar den teknik jag arbetade med under militärtjänsten
              </p>
            </div>
            
            <p className="relative z-10 text-muted-foreground">
              Denna erfarenhet har gett mig en djup förståelse för hur avancerad teknik används i försvarssammanhang, vilket jag nu bygger vidare på genom mina studier inom AI och maskininlärning.
            </p>
          </div>
        </section>
        
        {/* Technologies & Tools */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold mb-8">Teknologier</h2>
          <p className="text-muted-foreground mb-6">
            Verktyg och teknologier jag använder regelbundet i mina studier och projekt.
          </p>
          
          <div className="mb-10">
            <h3 className="text-xl font-medium mb-6">Programmeringsspråk & verktyg</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: "Python", desc: "Maskininlärning & dataanalys", color: "blue" },
                { name: "TensorFlow", desc: "Djupinlärning", color: "yellow" },
                { name: "PyTorch", desc: "Neurala nätverk", color: "red" },
                { name: "MATLAB", desc: "Matematisk modellering", color: "blue" },
                { name: "C++", desc: "Systemutveckling", color: "purple" },
                { name: "Git", desc: "Versionskontroll", color: "orange" },
                { name: "Linux", desc: "Operativsystem", color: "green" },
                { name: "Arduino", desc: "Elektronikprojekt", color: "teal" },
                { name: "SQL", desc: "Databaser", color: "blue" }
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
            <h3 className="text-xl font-medium mb-6">Elektrisk utrustning</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: "Oscilloskop", desc: "Signalanalys", color: "green" },
                { name: "Multimeter", desc: "Elektriska mätningar", color: "yellow" },
                { name: "Lödstation", desc: "Elektronikreparationer", color: "red" }
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
              Jag är intresserad av möjligheter inom försvarsindustrin och teknologiföretag som arbetar med avancerade system. Tveka inte att kontakta mig för frågor eller samarbeten.
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
