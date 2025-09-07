import Image from "next/image";
import React from "react";
import { services } from "@/constants";

const ServiceCard = ({ title, icon }) => (
  <div className=" green-pink-gradient p-[1px] rounded-[20px] jello-horizontal">
    <div className="bg-[#151030] rounded-[20px] py-5 px-12 h-[280px] w-[250px] flex justify-evenly items-center flex-col">
      <Image
        src={icon}
        alt={title}
        width={208}
        height={208}
        className="object-contain w-16 h-16"
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
        I am a web developer with experience in building applications using PHP
        with CodeIgniter 3 (MVC), along with HTML, CSS, JavaScript, and MySQL.
        At work, I design interfaces with Lunacy and build responsive layouts
        using Bootstrap.
        <br />
        <br /> I use Git and GitHub for version control and collaboration, and I
        have worked with the MQTT protocol, Haiwell PLC (Ladder Diagram), HMI,
        and OpenCV for project needs.
        <br />
        <br /> Outside of work, I explore newer tools such as React, Next.js,
        Tailwind CSS, and MongoDB to expand my skills. I also have basic
        experience with CAD, graphic design, and video editing to support
        project tasks.
      </p>
    </div>

    <div className="flex flex-wrap items-start gap-16 mt-14 justify-evenly">
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
