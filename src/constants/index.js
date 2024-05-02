import { nike, gpt, metaverse, hoobank, web, mobile } from "../../public";

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
