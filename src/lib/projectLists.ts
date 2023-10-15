type ProjectListsType = {
  name: string;
  webURL: string;
  githubURL: string;
  languageUsage: Array<string>;
  description: string;
  img: string;
};

export const projectLists: ProjectListsType[] = [
  {
    name: "Movie-man",
    webURL: "https://movie-man-web-application.vercel.app/",
    githubURL: "https://github.com/Kei-K23/movie-man-web-application",
    languageUsage: ["react", "react-router", "tailwind"],
    description:
      "Movie-man is website to search trending, popular, top-rated movies and Tv shows by using moviedb.",
    img: "/project_1.png",
  },
  {
    name: "SaveUp",
    webURL: "https://save-up-expense-tracker.vercel.app/",
    githubURL: "https://github.com/Kei-K23/saveUp-expense-tracker",
    languageUsage: ["react", "react-router", "tailwind"],
    description:
      "SaveUp is small expense tracker web application that provide to tracker budget and expenses. Using React, tailwind and LocalStorage Web API.",
    img: "/project_2.png",
  },
  {
    name: "SummA",
    webURL: "https://summarizar-webapp-foe1.vercel.app/",
    githubURL: "https://github.com/Kei-K23/summarizar-webapp",
    languageUsage: ["react", "react-toolkit", "tailwind"],
    description:
      "This is web application for article summarization web application that power by Article Extractor and Summarizer from Rapid API",
    img: "/project_3.png",
  },
  {
    name: "Nike landing page",
    webURL: "https://nike-landing-website.vercel.app/",
    githubURL: "https://github.com/Kei-K23/nike-landing-website",
    languageUsage: ["react", "tailwind"],
    description:
      "This is practical simple React and Tailwind css by building nike landing web page.",
    img: "/project_4.png",
  },
  {
    name: "Pizza-time",
    webURL: "https://pizza-time-webapp.vercel.app/",
    githubURL: "https://github.com/Kei-K23/pizza-time-webapp",
    languageUsage: ["react", "typescript", "tailwind"],
    description:
      "This is simple and basic pizza ordering website that build with React + TypeScript + Tailwind CSS.",
    img: "/project_5.png",
  },
  {
    name: "Password generator",
    webURL: "https://password-generator-six-sigma.vercel.app/",
    githubURL: "https://github.com/Kei-K23/password-generator",
    languageUsage: ["HTML", "CSS", "javascript"],
    description:
      "This web application allows users to generate strong passwords with customizable options for length and character types.",
    img: "/project_6.png",
  },
];
