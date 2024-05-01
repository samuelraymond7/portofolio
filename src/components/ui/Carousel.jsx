import React from "react";
import Image from "next/image";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const Carousel = () => (
  <div className="max-lg:w-full flex justify-center items-center lg:absolute lg:right-0 lg:top-[35%]">
    <div className="z-10 p-2 bg-slate-400 opacity-90 rounded-full mr-[-10px] md:mr-[-20px]">
      <RiArrowLeftSLine className=" text-[15px] sm:text-[25px] md:text-[35px]" />
    </div>

    <Image
      src="/nike.png"
      alt="Hero Logo"
      width={1920}
      height={1080}
      className=" object-contain rounded-xl z-0 max-w-[700px] border-slate-500 border-2 max-lg:w-4/5"
    />

    <div className="z-10 p-2 bg-slate-400 opacity-90 rounded-full ml-[-10px]  md:ml-[-20px]">
      <RiArrowRightSLine className=" text-[15px] sm:text-[25px] md:text-[35px]" />
    </div>
  </div>
);

export default Carousel;
