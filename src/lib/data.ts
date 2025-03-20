
export const personalInfo = {
  name: "Victor Eke",
  title: "Software engineer, technical writer & open-source maintainer",
  bio: "I'm Victor Eke, an open-source frontend developer passionate about learning and building open-source software that is beneficial to developers and the world at large.",
  location: "Lagos",
  email: "evavic44@gmail.com",
};

export const socialLinks = [
  { name: "GitHub", url: "https://github.com", icon: "Github" },
  { name: "X", url: "https://x.com", icon: "Twitter" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
  { name: "Codepen", url: "https://codepen.io", icon: "Codepen" },
  { name: "Dribbble", url: "https://dribbble.com", icon: "Dribbble" },
  { name: "Instagram", url: "https://instagram.com", icon: "Instagram" },
  { name: "Steam", url: "https://store.steampowered.com", icon: "GameController" },
  { name: "Unsplash", url: "https://unsplash.com", icon: "Camera" },
  { name: "YouTube", url: "https://youtube.com", icon: "Youtube" },
  { name: "Daily.dev", url: "https://daily.dev", icon: "Newspaper" },
  { name: "ProductHunt", url: "https://producthunt.com", icon: "BarChart" },
  { name: "StackOverflow", url: "https://stackoverflow.com", icon: "LifeBuoy" },
  { name: "Codesandbox", url: "https://codesandbox.io", icon: "Box" },
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
    company: "Optimizely AI Lab",
    companyUrl: "#",
    logo: "/lovable-uploads/f5d66119-b91a-414f-8d67-b318c75682ba.png",
    position: "Mid-level Frontend Engineer",
    duration: "NOV 25, 2021 - JAN 5, 2023",
    description: "At Optimizely, my work involved developing and maintaining dynamic user-centric applications and interfaces for top organizations and government agencies.",
  },
  {
    company: "Pagespeed",
    companyUrl: "#",
    logo: "/lovable-uploads/e72e7394-85ef-46fd-9407-b969cca5ca0c.png",
    position: "Frontend Developer",
    duration: "SEP 11, 2021 - PRESENT",
    description: "At Pagespeed, my primary roles involve collaborating with a cross-functional team to develop new feature modules and interactive dashboards using React.js, integrating APIs to display business data and transaction analysis, as well as optimizing existing applications to improve user experience and reduce product complexity.",
  },
  {
    company: "Educative",
    companyUrl: "#",
    logo: "/lovable-uploads/aab37b0d-b667-40c0-88ec-aacd2f45c642.png",
    position: "Project Author",
    duration: "OCT 9, 2021 - JAN 19, 2024",
    description: "Technical content author tasked with creating interactive text-based tutorials, focused on topics like React.js, TypeScript, Redis.",
  },
  {
    company: "FreeCodeCamp",
    companyUrl: "#",
    logo: "/lovable-uploads/a1f18520-e859-431f-a33e-e8504a664ec8.png",
    position: "Technical Writer",
    duration: "AUG 29, 2021 - DEC 5, 2023",
    description: "Volunteer writer for freeCodeCamp, producing technical articles around topics like media, web, and JavaScript.",
  },
  {
    company: "Winsomely",
    companyUrl: "#",
    logo: "/lovable-uploads/1bf169cc-f1b7-4763-bd84-030e9339c197.png",
    position: "Frontend Developer",
    duration: "AUG 16, 2022 - JUL 28, 2023",
    description: "At Winsomely, I was tasked to manage and develop a responsive and performant frontend application that unlocks the key resident estate purchase property to Nigeria.",
  },
  {
    company: "Aigro Inc",
    companyUrl: "#",
    logo: "/lovable-uploads/211761a1-dc0c-4229-aa70-e613144f5958.png",
    position: "Frontend Developer (Contract)",
    duration: "OCT 16, 2022 - JAN 16, 2023",
    description: "At Aigro Inc, I worked closely with a team to rebuild and enhance the frontend infrastructure of Aigro's Angular-based farm produce app, increasing monthly active users and optimizing USA market their farm activity.",
  },
  {
    company: "Anfget",
    companyUrl: "#",
    logo: "/lovable-uploads/211761a1-dc0c-4229-aa70-e613144f5958.png",
    position: "Technical Writer and Contributor",
    duration: "SEP 22, 2021 - AUG 21, 2022",
    description: "My primary tasks at Anfget included crafting technical guides and hosting coding sessions to bridge the gap with open source content for some of the fastest-growing projects.",
  },
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
    title: "Currencee",
    description: "The world's most trusted, fast and secure currency converter",
    logo: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png",
    url: "#",
    github: "#",
  },
  {
    title: "Legendarysuni",
    description: "Singer/Songwriter Electronic Press Kit",
    logo: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png",
    url: "#",
    github: "#",
  },
  {
    title: "Winrealty",
    description: "Real-estate ecommerce site",
    logo: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png",
    url: "#",
    github: "#",
  },
  {
    title: "Quiznote",
    description: "AI-powered quiz generator",
    logo: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png",
    url: "#",
    github: "#",
  },
  {
    title: "John Eke",
    description: "Cinematographer portfolio site",
    logo: "https://raw.githubusercontent.com/github/explore/28b02bbc9ad9f7a503c43775aebeb515dc2da5fc/topics/nextjs/nextjs.png",
    url: "#",
    github: "#",
  },
  {
    title: "Adocs",
    description: "Static docs template built with VitePress",
    logo: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png",
    url: "#",
    github: "#",
  },
  {
    title: "Sanity Portfolio",
    description: "Portfolio template built with Sanity and Next.js",
    logo: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png",
    url: "#",
    github: "#",
  },
  {
    title: "Spekni",
    description: "Recognition platform built for developer endorsements",
    logo: "https://raw.githubusercontent.com/github/explore/fbceb94436312b6dacde68d122a5b9c7d11f9524/topics/aws/aws.png",
    url: "#",
    github: "#",
  },
  {
    title: "Rocketmeme",
    description: "Simple and intuitive meme generator",
    logo: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png",
    url: "#",
    github: "#",
  },
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
    title: "How to run Localhost on your Mobile Device using Ngrok",
    description: "Learn how to showcase your web projects to colleagues without hosting using Ngrok—a generally overlooked tool that helps create secure tunnels to your web app.",
    image: "https://images.unsplash.com/photo-1640552435388-a54879e72b88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    date: "Aug 8, 2023",
    readTime: "4 min",
    url: "#",
    platform: "FreeCodeCamp",
  },
  {
    title: "How to Create a GitHub Repository from your Terminal",
    description: "Learn how to create and manage GitHub repositories directly from your terminal using the GitHub CLI tool.",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
    date: "Jan 20, 2023",
    readTime: "5 min",
    url: "#",
    platform: "Hashnode",
  },
  {
    title: "Fetch YouTube Playlists in React.js",
    description: "A quick guide on how to fetch and display a YouTube playlist in React.js using the YouTube Data API v3.",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    date: "Jan 27, 2024",
    readTime: "6 min",
    url: "#",
    platform: "Sanity",
  },
  {
    title: "Sanity Webhooks and On-demand Revalidation in Next.js",
    description: "Learn how to set up and trigger content updates in your Sanity Headless CMS site with Webhooks, enabling on-demand invalidation and revalidation for delivering fast and fresh content updates.",
    image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    date: "Dec 14, 2023",
    readTime: "8 min",
    url: "#",
    platform: "Hashnode",
  },
  {
    title: "How to Create a Custom 404 Error Page in Next.js 13",
    description: "Learn how to create a custom 404 error page in Next.js 13 app directory that will automatically detect and handle URLs and for invalid routes using the not-found.js file.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    date: "Oct 23, 2023",
    readTime: "4 min",
    url: "#",
    platform: "FreeCodeCamp",
  },
];

export const softSkills = [
  {
    title: "Attention to detail",
    description: "I take pleasure in creating designs and UIs with careful precision, emphasizing quality over quantity.",
  },
  {
    title: "Open-source/Collaboration",
    description: "I founded a community on GitHub called CommunityPro that helps newbie developers learn how to contribute to open-source projects and collaborate in building together. Currently we are over 400 people strong with room for growth.",
  },
  {
    title: "Ability to work with little supervision",
    description: "I understand people are busy and would love to get things done timely, so I do my best in delivering assignments and projects with little supervision, sparing you the need to closely manage/oversee my work.",
  },
];

export const technologies = [
  { name: "React", description: "UI Library", icon: "react" },
  { name: "Next.js", description: "React Framework", icon: "nextjs" },
  { name: "Redux", description: "Production-grade State Management", icon: "redux" },
  { name: "Zustand", description: "State Management (personal projects)", icon: "zustand" },
  { name: "Sanity", description: "Headless CMS", icon: "sanity" },
  { name: "Tailwind CSS", description: "Styling Library", icon: "tailwind" },
  { name: "TypeScript", description: "Typed Superset of JavaScript Library", icon: "typescript" },
  { name: "Sass", description: "CSS Preprocessor", icon: "sass" },
  { name: "VitePress", description: "Static Site Generator", icon: "vitepress" },
  { name: "Python", description: "Programming Language", icon: "python" },
];

export const tools = [
  { name: "Visual Studio Code", description: "Text Editor", icon: "vscode" },
  { name: "PyCharm", description: "Python IDE", icon: "pycharm" },
  { name: "IntelliJ Idea", description: "Java IDE", icon: "intellij" },
];
