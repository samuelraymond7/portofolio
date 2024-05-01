import React from "react";
import Carousel from "./ui/Carousel";
import { projects } from "@/constants";

const Hero = () => (
  <section className=" bg-hero bg-cover bg-no-repeat bg-center w-full h-screen sm:px-16 px-6">
    <div className="pt-[160px] sm:pt-[120px] md:pt-[105px] lg:pt-[95px] max-w-7xl mx-auto h-full flex flex-col gap-16 relative">
      <div className="flex flex-row items-start gap-3">
        <div className=" flex flex-col justify-center items-center mt-3 ml-2">
          <div className=" w-5 h-5 rounded-full bg-[#915eff]" />
          <div className=" w-1 lg:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] max-sm:mt-2">
            Hi, I&apos;m <span className=" text-[#915eff]">Samuel</span>
          </h1>
          <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
            I develop user interfaces <br className=" sm:block hidden" />
            and web applications
          </p>
        </div>
      </div>

      <Carousel display={projects} />

      <div className=" absolute sm:bottom-10 bottom-16 lg:bottom-5 w-full flex justify-center items-center">
        <div className="w-[35px] h-[65px] rounded-3xl border-4 border-[#aaa6c3] flex justify-center items-start p-2">
          <div className="w-3 h-3 rounded-full bg-[#aaa6c3] mb-1 slide-top" />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
