import Image from "next/image";
import React from "react";
import { technologies } from "@/constants";

const Tech = () => (
  <section className="mt-[100px] flex flex-wrap justify-center items-center gap-10 max-w-7xl mx-auto sm:px-16 px-6 sm:py-16 py-10">
    {technologies.map((tech) => (
      <div
        key={tech.name}
        className="green-pink-gradient rounded-full p-[3px] flex justify-center items-center hover:translate-y-[-10px] hover:scale-110 transition-transform duration-200"
      >
        <div className=" w-24 h-24 rounded-full ball-gradient flex justify-center items-center">
          <Image
            src={tech.icon}
            alt={tech.name}
            width={100}
            height={100}
            className="object-contain w-[60px] h-[60px]"
          />
        </div>
      </div>
    ))}
  </section>
);

export default Tech;
