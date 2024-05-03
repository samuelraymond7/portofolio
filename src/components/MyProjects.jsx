import React from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/constants";
import { github } from "../../public";

const textColor = {
  "text-react": "text-react",
  "text-vite": "text-vite",
  "text-tailwind": "text-tailwind",
  "text-css": "text-css",
  "text-framer": "text-framer",
};

const ProjectCard = ({ input }) => (
  <div className="bg-[#151030] p-5 rounded-2xl sm:w-[360px] w-full wobble-hor-bottom">
    <Link
      className=" w-full"
      href={input.web_link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={input.image}
        alt={input.name}
        width={1920}
        height={1080}
        className="w-full object-contain rounded-2xl"
      />
    </Link>

    <div className="mt-5 ">
      <h3 className=" text-white font-bold text-[24px]">{input.name}</h3>
      <p className=" mt-2 text-[#aaa6c3] text-[14px]">{input.description}</p>
    </div>

    <div className=" flex flex-row justify-between items-center mt-3">
      <div className="flex gap-2">
        {input.tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${textColor[tag.color]}`}>
            #{tag.name}
          </p>
        ))}
      </div>

      <Link
        href={input.source_code_link}
        target="_blank"
        rel="noopener noreferrer"
        className="black-gradient w-10 h-10 rounded-full flex justify-center items-center"
      >
        <Image
          src={github}
          width={512}
          height={512}
          alt="github"
          className="w-3/4 object-contain"
        />
      </Link>
    </div>
  </div>
);

const MyProjects = () => (
  <section
    id="projects"
    className="mt-[100px] w-full max-w-7xl mx-auto sm:px-16 px-6 sm:py-16 py-10"
  >
    <div>
      <p className="sm:text-[18px] text-[14px] text-[#aaa6c3] uppercase tracking-wider">
        My work
      </p>
      <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
        Projects.
      </h2>
      <p className="mt-3 text-[#aaa6c3] text-[17px] max-w-3xl leading-[30px]">
        Following projects showcases my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories and live demos in it.
      </p>
    </div>

    <div className=" mt-20 flex flex-wrap items-start justify-evenly gap-7">
      {projects.map((project) => (
        <ProjectCard key={project.name} input={project} />
      ))}
    </div>
  </section>
);

export default MyProjects;
