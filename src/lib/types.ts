
export type SocialLink = {
  name: string;
  url: string;
  icon: string;
};

export type Experience = {
  company: string;
  companyUrl?: string;
  logo: string;
  position: string;
  duration: string;
  location?: string;
  description: string;
};

export type Project = {
  title: string;
  description: string;
  logo: string;
  url?: string;
  github?: string;
};

export type BlogPost = {
  title: string;
  description: string;
  image: string;
  date: string;
  readTime: string;
  url: string;
  platform?: string;
};

export type Skill = {
  title: string;
  description: string;
};

export type Technology = {
  name: string;
  description: string;
  icon: string;
};

export type Tool = {
  name: string;
  description: string;
  icon: string;
};
