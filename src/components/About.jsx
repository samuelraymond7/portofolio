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
        Having skills in HTML, CSS and JavaScript is a must for a web developer.
        I have worked with PHP and CodeIgniter 3 framework, and developed my
        skills by learning React and Next.js. Experienced in database design and
        development using MySQL and have also explored MongoDB. Capabilities in
        using UI design tools such as Figma and Lunacy combined with frontend
        frameworks such as Bootstrap and Tailwind CSS help me create web
        interfaces. Git and GitHub for version control are also included in my
        skillset. In addition, I am also familiar with OpenCV, Ladder Diagram,
        MQTT Protocol, and Microsoft Office tools. I want to keep exploring and
        expanding my skills in web and application development.
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
