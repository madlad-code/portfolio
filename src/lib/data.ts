
export const personalInfo = {
  name: "Oscar Enghag",
  title: "Civilingenjörsstudent inom AI och maskininlärning, tidigare elektricitetsmekaniker",
  bio: "Jag är en elektriskt intresserad ingenjörsstudent med bakgrund från försvarsmakten som elektricitetsmekaniker. Nu studerar jag AI och maskininlärning på Blekinge Tekniska Högskola med målet att arbeta inom försvarsindustrin med avancerad teknik och cybersäkerhet. Jag har även stor passion för algoritmisk trading och tidigare erfarenhet som VD för ett framgångsrikt UF-företag.",
  location: "Karlskrona",
  email: "oscar.enghag@example.com",
};

export const socialLinks = [
  { name: "GitHub", url: "https://https://github.com/madlad-code.com", icon: "Github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/oscar-enghag-2b4902238/", icon: "Linkedin" },
  { name: "X", url: "https://x.com", icon: "Twitter" },
  { name: "YouTube", url: "https://youtube.com", icon: "Youtube" },
  { name: "StackOverflow", url: "https://stackoverflow.com", icon: "LifeBuoy" },
  { name: "GitLab", url: "https://gitlab.com/madlad-code1/portfolio/-/learn_gitlab", icon: "GitBranch" },
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
    company: "UF-företag - RemoteLink",
    companyUrl: "#",
    logo: "/lovable-uploads/aab37b0d-b667-40c0-88ec-aacd2f45c642.png",
    position: "VD",
    duration: "AUG 2022 - JUN 2023",
    location: "Stockholm",
    description: "Drev ett UF-företag som utvecklade en universell fjärrkontroll som använde infraröda signaler för att koppla till olika TV-apparater. Under min ledning vann vårt team priset för Årets UF-företag 2023 i Stockholm och placerade sig bland de tio bästa i Sverige med vår innovativa produkt. Vi förändrade TV-upplevelsen för många pensionärer genom att erbjuda en nyckellösning där vi gjorde allt från att koda kontrollen efter kundens specifika behov till att personligen installera den hemma hos kunden.",
  },
  {
    company: "Försvarsmakten",
    companyUrl: "https://www.forsvarsmakten.se/",
    logo: "/lovable-uploads/f5d66119-b91a-414f-8d67-b318c75682ba.png",
    position: "Elektricitetsmekaniker (Värnplikt)",
    duration: "JUN 2023 - MAR 2024",
    location: "A8 - Boden",
    description: "Genomförde värnplikt som elektricitetsmekaniker i 10 månader varav 3 var på FMTS i Halmstad där jag utvecklade teknisk kompetens inom elektriska system 230/400V, felsökning och underhåll av elektriska system för militära ändamål. Arbetade i grupp under krävande förhållanden och lärde mig disciplin, strukturerat arbete och ledarskap. Då jag var ensam elmekaniker på hela bataljonen (200/300 soldater) fick jag också utveckla min förmåga att utbilda andra på elsäkerhet och handhavande av elektriska förläggningar i fält under svåra klimatförhållanden.",
  },
  {
    company: "Blekinge Tekniska Högskola",
    companyUrl: "https://www.bth.se/utbildning/program-och-kurser/dvaam/?gad_source=1&gclid=Cj0KCQjwhYS_BhD2ARIsAJTMMQYBeI6uxHs7UDCG2kkXKtTRPPpcPpXcYSMn3C9kwinoDOt1MOcAIyAaAivoEALw_wcB",
    logo: "/lovable-uploads/e72e7394-85ef-46fd-9407-b969cca5ca0c.png",
    position: "Civilingenjörsstudent, AI och maskininlärning",
    duration: "AUG 2024 - PÅGÅENDE",
    location: "Karlskrona",
    description: "Studerar på civilingenjörsprogrammet med inriktning mot AI och maskininlärning. Fokuserar på kurser inom programmering, matematik, maskininlärning och AI-system.",
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
    title: "AlgoTrader Pro",
    description: "Handelsalgoritm som använder statistiska modeller för att identifiera arbitragemöjligheter på kryptovalutamarknaden",
    logo: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png",
    url: "#",
    github: "#",
  },
  {
    title: "QuantBacktester",
    description: "Plattform för backtesting av tradingstrategier med historisk data från aktie- och valutamarknader",
    logo: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/tensorflow/tensorflow.png",
    url: "#",
    github: "#",
  },
  {
    title: "Full Koll UF",
    description: "Universell fjärrkontroll som med hjälp av infraröda signaler kan koppla till alla olika typer av TV-apparater. Vi designade och 3d-printade all hårdvara själva, designade och frästa alla kretskort själva med en CNC-maskin samt programmerade all mjukvara på egen hand. Detta gav oss otroligt bra marginaler samt en förmåga att göra förändringar på kontollen efter kundens behov",
    logo: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png",
    url: "https://fullkolluf.se",
    github: "#",
  },
  {
    title: "MarketML",
    description: "Primitiv maskininlärningsmodell för spårning av marknadsrörelser baserad på tekniska indikatorer och statistik.",
    logo: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png",
    url: "#",
    github: "https://github.com/madlad-code/marketML",
  },
  /*
  {
    title: "MilitärLogistik",
    description: "Optimeringsalgoritm för militära logistikkedjor",
    logo: "https://raw.githubusercontent.com/github/explore/28b02bbc9ad9f7a503c43775aebeb515dc2da5fc/topics/nextjs/nextjs.png",
    url: "#",
    github: "#",
  },
  {
    title: "CyberDefense",
    description: "Analys av nätverkstrafik med AI för att upptäcka säkerhetshot i realtid",
    logo: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png",
    url: "#",
    github: "#",
  }
  */
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
  /*
  {
    title: "Algoritmisk Trading: Att bygga framgångsrika strategier med Python",
    description: "En genomgång av hur man kan använda Python för att utveckla och backtesta algoritmiska tradingstrategier på finansmarknaden.",
    image: "https://images.unsplash.com/photo-1640552435388-a54879e72b88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    date: "8 sep, 2024",
    readTime: "5 min",
    url: "#",
    platform: "Medium",
  },
  
  {
    title: "Min resa som UF-entreprenör: Från idé till prisbelönt produkt",
    description: "Reflektioner och lärdomar från min tid som VD för RemoteLink UF och hur vi utvecklade vår prisbelönta universella fjärrkontroll.",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
    date: "20 aug, 2024",
    readTime: "7 min",
    url: "#",
    platform: "LinkedIn",
  },
  {
    title: "Mina erfarenheter från värnplikten som elektricitetsmekaniker",
    description: "Reflektioner kring min tid i försvarsmakten och hur den tekniska utbildningen har påverkat min akademiska inriktning.",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    date: "15 jul, 2024",
    readTime: "6 min",
    url: "#",
    platform: "BTH Studentblogg",
  },
  {
    title: "Kvantitativa analysmetoder för finansmarknaden",
    description: "En djupdykning i hur matematiska modeller och statistiska verktyg kan användas för att analysera och förutsäga marknadsrörelser.",
    image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    date: "3 jun, 2024",
    readTime: "8 min",
    url: "#",
    platform: "Techworld",
  }
    */
];

export const softSkills = [
  {
    title: "Problemlösning",
    description: "Genom min värnplikt som elektricitetsmekaniker i Försvarsmakten, min erfarenhet som VD för ett framgångsrikt UF-företag och mitt livslånga tekniska intresse har jag utvecklat förmågan att lösa avancerade problem inom både hårdvara och mjukvara, även under tidspress och i utmanande förhållanden. Jag har dessutom utvecklat flera mjuka färdigheter, såsom ledarskap, hög arbetsmoral, god samarbetsförmåga samt en tydlig förmåga att utbilda andra och förklara komplexa koncept inom mina kompetensområden.",
  },
  {
    title: "Ledarskap",
    description: "Som VD för ett framgångsrikt UF-företag ledde jag ett team från idéstadiet till färdig produkt och marknadsframgång, vilket gav mig värdefulla ledaregenskaper och erfarenhet av projektledning. En annan minst lika viktig förmåga som jag utvecklade under denna period, men som särskilt framträdde under min värnplikt, är konsten att förklara och dela med mig av min kompetens till andra.",
  },
  {
    title: "Analytiskt tänkande",
    description: "Mitt intresse för algoritmisk trading har utvecklat min förmåga att analysera data, identifiera mönster och förstå vikten av att fatta beslut baserade på kvantitativa modeller och statistik.",
  },
];

export const technologies = [
  { name: "Python", description: "Programmering och dataanalys", icon: "python" },
  { name: "TensorFlow", description: "Maskininlärningsbibliotek", icon: "tensorflow" },
  { name: "PyTorch", description: "Djupinlärning", icon: "pytorch" },
  { name: "Javascript/HTML/CSS", description: "Programmeringsspråk för webbutveckling", icon: "javascript" },
  { name: "C++", description: "Programmeringsspråk", icon: "cpp" },
  { name: "MATLAB", description: "Kvantitativ analys", icon: "matlab" },
  { name: "SQL", description: "Databaser", icon: "sql" },
  { name: "GitHub", description: "Versionskontroll", icon: "github" },
  { name: "Linux (Arch/Endevour)", description: "Operativsystem", icon: "linux" },
  { name: "Docker", description: "Containerisering", icon: "docker" },
  { name: "GitLab", description: "Versionskontroll", icon: "gitlab" }
];

export const tools = [
  { name: "Visual Studio Code", description: "Kodeditor", icon: "vscode" },
  { name: "PyCharm", description: "Python IDE", icon: "pycharm" },
  { name: "Jupyter Notebook", description: "Interaktiv analys", icon: "jupyter" }
];
