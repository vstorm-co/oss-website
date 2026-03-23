export interface Author {
  name: string;
  slug: string;
  jobTitle: string;
  url?: string;
  linkedIn?: string;
  github?: string;
  twitter?: string;
}

export const AUTHORS: Record<string, Author> = {
  "Kacper Włodarczyk": {
    name: "Kacper Włodarczyk",
    slug: "kacper-wlodarczyk",
    jobTitle: "AI Engineer",
    url: "https://vstorm.co",
    linkedIn: "https://www.linkedin.com/in/kacper-wlodarczyk/",
    github: "https://github.com/kacperwlodarczyk",
  },
  "Wojciech Achtelik": {
    name: "Wojciech Achtelik",
    slug: "wojciech-achtelik",
    jobTitle: "AI Engineer",
    url: "https://vstorm.co",
    linkedIn: "https://www.linkedin.com/in/wojciech-achtelik/",
    github: "https://github.com/wojciech-achtelik",
  },
};

export function getAuthor(name: string): Author {
  return AUTHORS[name] ?? AUTHORS["Kacper Włodarczyk"];
}
