"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
import { experiences } from "@/constants";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    visible
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className=" flex justify-center items-center w-full h-full">
        <Image
          src={experience.icon}
          alt={experience.company_name}
          width={100}
          height={100}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className=" text-white text-[24px] font-bold">{experience.title}</h3>
      <p
        className=" text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>
    <ul className=" mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          // eslint-disable-next-line react/no-array-index-key
          key={`experience-point-${index}`}
          className=" text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => (
  <section
    id="work"
    className="mt-[100px] w-full max-w-7xl mx-auto sm:px-16 px-6 sm:py-16 py-10"
  >
    <div>
      <p className="sm:text-[18px] text-[14px] text-[#aaa6c3] uppercase tracking-wider">
        What I have done so far
      </p>
      <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
        Work Experience.
      </h2>
    </div>

    <div className=" mt-20 flex flex-col">
      <VerticalTimeline>
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.company_name}
            experience={experience}
          />
        ))}
      </VerticalTimeline>
    </div>
  </section>
);

export default Experience;
