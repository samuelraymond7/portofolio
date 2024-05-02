import Image from "next/image";
import React from "react";
import { services } from "@/constants";

const ServiceCard = ({ title, icon }) => (
  <div className=" green-pink-gradient p-[1px] rounded-[20px]">
    <div className="bg-[#151030] rounded-[20px] py-5 px-12 h-[280px] w-[250px] flex justify-evenly items-center flex-col">
      <Image
        src={icon}
        alt={title}
        width={208}
        height={208}
        className="w-16 h-16 object-contain"
      />
      <h3 className=" text-white text-[20px] font-bold text-center">{title}</h3>
    </div>
  </div>
);

const About = () => (
  <section
    id="about"
    className=" mt-[100px] w-full max-w-7xl mx-auto sm:px-16 px-6 sm:py-16 py-10"
  >
    <div>
      <p className="sm:text-[18px] text-[14px] text-[#aaa6c3] uppercase tracking-wider">
        Introduction
      </p>
      <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
        Overview.
      </h2>
      <p className="mt-4 text-[#aaa6c3] text-[17px] max-w-3xl leading-[30px]">
        I&nbsp;m a front end web developer who is able to use HTML, CSS,
        Javascript and also TypeScript. Other than that, I can also use several
        frameworks such as React, Next.js and Node.js. I am a quick learner and
        have a high desire to learn more.
      </p>
    </div>

    <div className="mt-14 md:justify-around flex max-md:flex-col items-center gap-16">
      {services.map((service) => (
        <ServiceCard
          key={service.title}
          title={service.title}
          icon={service.icon}
        />
      ))}
    </div>
  </section>
);

export default About;
