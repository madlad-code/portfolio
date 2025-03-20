
export const personalInfo = {
  name: "Alexander Svensson",
  title: "Civilingenjörsstudent inom AI och maskininlärning, tidigare elektricitetsmekaniker",
  bio: "Jag är en elektriskt intresserad ingenjörsstudent med bakgrund från försvarsmakten som elektricitetsmekaniker. Nu studerar jag AI och maskininlärning på Blekinge Tekniska Högskola med målet att arbeta inom försvarsindustrin med avancerad teknik och cybersäkerhet.",
  location: "Karlskrona",
  email: "alex.svensson@example.com",
};

export const socialLinks = [
  { name: "GitHub", url: "https://github.com", icon: "Github" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
  { name: "X", url: "https://x.com", icon: "Twitter" },
  { name: "YouTube", url: "https://youtube.com", icon: "Youtube" },
  { name: "StackOverflow", url: "https://stackoverflow.com", icon: "LifeBuoy" },
  { name: "GitLab", url: "https://gitlab.com", icon: "GitBranch" },
];

export type Experience = {
  company: string;
  companyUrl?: string;
  logo: string;
  position: string;
  duration: string;
  location?: string;
  description: string;
};

export const experiences: Experience[] = [
  {
    company: "Försvarsmakten",
    companyUrl: "https://www.forsvarsmakten.se/",
    logo: "/lovable-uploads/f5d66119-b91a-414f-8d67-b318c75682ba.png",
    position: "Elektricitetsmekaniker (Värnplikt)",
    duration: "JUN 2023 - MAR 2024",
    location: "Karlskrona",
    description: "Genomförde värnplikt som elektricitetsmekaniker där jag utvecklade teknisk kompetens inom elnät, felsökning och underhåll av elektriska system för militära ändamål. Arbetade i team under krävande förhållanden och lärde mig disciplin, strukturerat arbete och ledarskap.",
  },
  {
    company: "Blekinge Tekniska Högskola",
    companyUrl: "https://www.bth.se/",
    logo: "/lovable-uploads/e72e7394-85ef-46fd-9407-b969cca5ca0c.png",
    position: "Civilingenjörsstudent, AI och maskininlärning",
    duration: "AUG 2024 - PÅGÅENDE",
    location: "Karlskrona",
    description: "Studerar på civilingenjörsprogrammet med inriktning mot AI och maskininlärning. Fokuserar på kurser inom programmering, matematik, maskininlärning och AI-system med särskilt intresse för tillämpningar inom försvarsindustrin och cybersäkerhet.",
  },
  {
    company: "Studentprojekt - AI för Cybersäkerhet",
    companyUrl: "#",
    logo: "/lovable-uploads/aab37b0d-b667-40c0-88ec-aacd2f45c642.png",
    position: "Projektledare",
    duration: "SEP 2024 - DEC 2024",
    description: "Ledde ett studentprojekt för utveckling av ett AI-system för identifiering av cyberhot i realtid. Arbetade med maskininlärningsalgoritmer för mönsterigenkänning i nätverkstrafik och implementerade ett varningssystem för potentiella säkerhetshot.",
  }
];

export type Project = {
  title: string;
  description: string;
  logo: string;
  url?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    title: "ElektroSim",
    description: "Simuleringsverktyg för elektriska kretsar med visualisering av strömflöden",
    logo: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png",
    url: "#",
    github: "#",
  },
  {
    title: "AI-Övervakningssystem",
    description: "Prototyp för AI-baserat övervakningssystem för perimeterskydd",
    logo: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/tensorflow/tensorflow.png",
    url: "#",
    github: "#",
  },
  {
    title: "CyberDetect",
    description: "Verktyg för automatisk detektering av cyberhot med maskininlärning",
    logo: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png",
    url: "#",
    github: "#",
  },
  {
    title: "DrönareAI",
    description: "Autonom styrning för drönare med bildbehandling",
    logo: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png",
    url: "#",
    github: "#",
  },
  {
    title: "MilitärLogistik",
    description: "Optimeringsalgoritm för militära logistikkedjor",
    logo: "https://raw.githubusercontent.com/github/explore/28b02bbc9ad9f7a503c43775aebeb515dc2da5fc/topics/nextjs/nextjs.png",
    url: "#",
    github: "#",
  },
  {
    title: "ElNätverksAnalys",
    description: "Analys av elnätverk med prediktiva modeller för underhåll",
    logo: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png",
    url: "#",
    github: "#",
  }
];

export type BlogPost = {
  title: string;
  description: string;
  image: string;
  date: string;
  readTime: string;
  url: string;
  platform?: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: "AI i Försvarets Tjänst: Framtidens Teknologier",
    description: "En genomgång av hur artificiell intelligens förändrar det moderna försvaret och vilka utmaningar som kommer med implementeringen.",
    image: "https://images.unsplash.com/photo-1640552435388-a54879e72b88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    date: "8 sep, 2024",
    readTime: "5 min",
    url: "#",
    platform: "Medium",
  },
  {
    title: "Elektricitetens Roll i Moderna Stridssystem",
    description: "En teknisk analys av hur elektriska system utgör ryggraden i modern försvarsteknologi och hur dessa system underhålls.",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
    date: "20 aug, 2024",
    readTime: "7 min",
    url: "#",
    platform: "LinkedIn",
  },
  {
    title: "Mina Erfarenheter från Värnplikten som Elektricitetsmekaniker",
    description: "Reflektioner kring min tid i försvarsmakten och hur den tekniska utbildningen har påverkat min akademiska inriktning.",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    date: "15 jul, 2024",
    readTime: "6 min",
    url: "#",
    platform: "BTH Studentblogg",
  },
  {
    title: "Maskininlärning för Anomalidetektion i Elnät",
    description: "Hur AI och maskininlärning kan användas för att upptäcka och förebygga avvikelser i elnätverk inom militära installationer.",
    image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    date: "3 jun, 2024",
    readTime: "8 min",
    url: "#",
    platform: "Techworld",
  }
];

export const softSkills = [
  {
    title: "Problemlösning",
    description: "Genom min utbildning som elektricitetsmekaniker i försvarsmakten har jag utvecklat förmågan att lösa komplexa tekniska problem under tidspress och ibland svåra förhållanden.",
  },
  {
    title: "Teamarbete",
    description: "Militärtjänsten lärde mig att samarbeta effektivt i team där tydlig kommunikation och ömsesidigt förtroende är avgörande för framgång.",
  },
  {
    title: "Disciplin och strukturerat arbete",
    description: "Min bakgrund från försvarsmakten har gett mig en stark arbetsdisciplin och förmåga att arbeta strukturerat med tekniska system och dokumentation, något som även kommer till nytta i mina studier.",
  },
];

export const technologies = [
  { name: "Python", description: "Programmeringsspråk", icon: "python" },
  { name: "TensorFlow", description: "Maskininlärningsbibliotek", icon: "tensorflow" },
  { name: "PyTorch", description: "Djupinlärning", icon: "pytorch" },
  { name: "Java", description: "Programmeringsspråk", icon: "java" },
  { name: "C++", description: "Programmeringsspråk", icon: "cpp" },
  { name: "MATLAB", description: "Beräkningsverktyg", icon: "matlab" },
  { name: "SQL", description: "Databaser", icon: "sql" },
  { name: "Git", description: "Versionskontroll", icon: "git" },
  { name: "Linux", description: "Operativsystem", icon: "linux" },
  { name: "Docker", description: "Containerisering", icon: "docker" },
];

export const tools = [
  { name: "Visual Studio Code", description: "Kodeditor", icon: "vscode" },
  { name: "PyCharm", description: "Python IDE", icon: "pycharm" },
  { name: "Jupyter Notebook", description: "Interaktiv programmering", icon: "jupyter" },
];
