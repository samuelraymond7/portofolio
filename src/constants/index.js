import {
  nike,
  gpt,
  metaverse,
  hoobank,
  web,
  mobile,
  procode,
  html,
  css,
  javascript,
  typescript,
  reactjs,
  tailwind,
  nextjs,
  vite,
  figma,
  git,
  github,
  mongodb,
  nodejs,
  framermotion,
  rock,
  paper,
  scissor,
} from "../../public";

export const navLinks = [
  {
    id: "about",
    title: "About",
    link: "#about",
    content:
      "I'm a front end web developer who is able to use HTML, CSS, Javascript and also TypeScript. Other than that, I can also use several frameworks such as React, Next.js and Node.js. I am a quick learner and have a high desire to learn more.",
  },
  {
    id: "work",
    title: "Work",
    link: "#work",
    content: "What I have done so far.",
  },
  {
    id: "projects",
    title: "Projects",
    link: "#projects",
    content:
      "Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it.",
  },
];

export const projects = [
  {
    name: "Hoobank Website",
    description:
      "A modern banking website to learn about React framework, Tailwind and responsive website.",
    tags: [
      {
        name: "React",
        color: "text-react",
      },
      {
        name: "Vite",
        color: "text-vite",
      },
      {
        name: "Tailwind",
        color: "text-tailwind",
      },
    ],
    image: hoobank,
    source_code_link: "https://github.com/samuelraymond7/banking",
    web_link: "https://samuelraymond7.github.io/banking/",
  },
  {
    name: "Nike Clone",
    description:
      "A clone of Nike's website to learn about React framework, Tailwind and responsive website.",
    tags: [
      {
        name: "React",
        color: "text-react",
      },
      {
        name: "Vite",
        color: "text-vite",
      },
      {
        name: "Tailwind",
        color: "text-tailwind",
      },
    ],
    image: nike,
    source_code_link: "https://github.com/samuelraymond7/nike-clone",
    web_link: "https://samuelraymond7.github.io/nike-clone/",
  },
  {
    name: "GPT-3 Website",
    description:
      "A GPT-3 website to learn about React framework, basic CSS and responsive website.",
    tags: [
      {
        name: "React",
        color: "text-react",
      },
      {
        name: "CSS",
        color: "text-css",
      },
    ],
    image: gpt,
    source_code_link: "https://github.com/samuelraymond7/gpt",
    web_link: "https://samuelraymond7.github.io/gpt/",
  },
  {
    name: "Metaverse Website",
    description:
      "A Metaverse website to learn about Next.js framework, Tailwind, Framer Motion and responsive website.",
    tags: [
      {
        name: "Next.js",
        color: "text-white",
      },
      {
        name: "Tailwind",
        color: "text-tailwind",
      },
      {
        name: "Framer Motion",
        color: "text-framer",
      },
    ],
    image: metaverse,
    source_code_link: "https://github.com/samuelraymond7/metaverse",
    web_link: "https://samuelraymond7.github.io/metaverse/",
  },
];

export const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
];

export const experiences = [
  {
    title: "Research & Development Software Engineer Internship",
    company_name: "ProCodeCG",
    icon: procode,
    iconBg: "#E6DEDD",
    date: "July 2022 - Nov 2022",
    points: [
      "Create a program to detect facial expressions using Python.",
      "Create a face filter program using Python.",
      "Create a program to carry out attendance by voice using Python.",
      "Processed more than 400 stock data using Python.",
      "Conduct experiments and select Artificial Intelligence methods to make predictions on stock prices.",
      "Create a program to download and make predictions on stock data using Python.",
      "Testing the stock prediction program that has been created in real conditions.",
    ],
  },
];

export const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Vite",
    icon: vite,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "gitHub",
    icon: github,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Framer Motion",
    icon: framermotion,
  },
];

export const rockpaperscissor = [
  {
    name: "rock",
    icon: rock,
  },
  {
    name: "paper",
    icon: paper,
  },
  {
    name: "scissor",
    icon: scissor,
  },
];
